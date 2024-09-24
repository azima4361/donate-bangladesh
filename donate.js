let totalAmount = document.getElementById("total-amount") ;
let modalAmount = document.getElementById("modal-amount")


function donateForFlood(donateInputId, addedMoneyId) {
    const donateMoney = document.getElementById(donateInputId); 
   
    const addedMoney = document.getElementById(addedMoneyId);
    let donateMoneyValue = parseFloat(donateMoney.value);
    let totalAmountValue = parseFloat(totalAmount.innerText);
    let addedMoneyValue = parseFloat(addedMoney.innerText);

    if (isNaN(donateMoneyValue) || donateMoneyValue <= 0) {
        alert("Please enter a valid donation amount.");
        donateMoney.value= "";
        return;
    }

   else if (donateMoneyValue > totalAmountValue) {
        alert("You do not have enough balance to make this donation.");
        donateMoney.value= "";
        return;
    }
 else{
    totalAmountValue -= donateMoneyValue;
    addedMoney.innerText= addedMoneyValue + donateMoneyValue;

    document.getElementById('total-amount').innerText = totalAmountValue;
document.getElementById("modal-amount").innerText = donateMoneyValue;
   
    document.getElementById("my_modal_5").showModal();
    donateMoney.value= "";
   

    
 }

}


