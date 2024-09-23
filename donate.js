const totalAmount = document.getElementById("total-amount");
const addedMoney = document.getElementById("added-money");
const donateMoney= document.getElementById("donate-money");
const donationButton = document.getElementById("donation");
const historyButton = document.getElementById("history");


const totalAmountNumber = parseFloat(totalAmount);
const addedMoneyNumber = parseFloat(addedMoney);
const donateMoneyNumber = parseFloat(donateMoney);


function donateForFlood(event){
    if(typeof donateMoney ==="number"){
        addedMoneyNumber+=donateMoneyNumber;
        totalAmountNumber-=donateMoneyNumber;
        console.log(addedMoneyNumber);
    }
    return addedMoneyNumber , totalAmountNumber;
}