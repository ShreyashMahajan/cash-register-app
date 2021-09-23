var billAmount = document.querySelector("#bill-Amount");
var cashGiven = document.querySelector("#cash-Given");
var checkButton = document.querySelector("#check-button");
var message = document.querySelector("#error-message");
var noteNumber =document.querySelectorAll(".no-of-notes");

var notesData = [2000,500,100,20,10,5,1];

checkButton.addEventListener("click",function checkBillCashValidation(){
  
    hideMessage();
   
    if(billAmount.value >0){

       if(cashGiven.value >= billAmount.value ){
             var amountToBeReturned = cashGiven.value - billAmount.value;
             calculateChange(amountToBeReturned);

       }else {
           messageBox("You have to become plumber");
           
       }

    }else {
        messageBox("Enter Amount greater than zero");
    }

})

function hideMessage(){
    message.style.display= "none";

}

function messageBox (msg){
    message.style.display ="block";
    message.innerText = msg;
}

function calculateChange(amountValue){
    for(i=0;i<notesData.length;i++){
        var noOfNotes =Math.trunc(amountValue/notesData[i]);

        amountValue = amountValue%notesData[i];
        noteNumber[i].innerText = noOfNotes;
    }
}