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

    // donationHistory(donateInputId, donationCauseId);
    
 }

}

const historyBtn = document.getElementById("history-btn");
const donationBtn = document.getElementById("donation-btn");

historyBtn.addEventListener("click", function () {

    historyBtn.classList.add("bg-[#B4F461]");
    historyBtn.classList.remove("bg-white");
    donationBtn.classList.add("bg-white");
    donationBtn.classList.remove("bg-[#B4F461]");

  
    document.getElementById("donation-section").classList.add("hidden");
    document.getElementById("history-section").classList.remove("hidden");
})

donationBtn.addEventListener("click", function () {
    donationBtn.classList.add("bg-[#B4F461]");
    donationBtn.classList.remove("bg-white");
    historyBtn.classList.add("bg-white");
    historyBtn.classList.remove("bg-[#B4F461]");

   
    document.getElementById("history-section").classList.add("hidden");
    document.getElementById("donation-section").classList.remove("hidden");
})

function donationHistory(donateInputId, donationCauseId){
    const donateMoney = document.getElementById(donateInputId); 
    const donateHistory = document.getElementById(donationCauseId).innerText;
console.log(donateHistory)
    let donateMoneyValue = parseFloat(donateMoney.value);
    console.log(typeof donateMoneyValue)
    const historyList = document.createElement("div");
    historyList.className = "border border-[#1111111A] rounded-2xl p-8 ";
    historyList.innerHTML = `
  <h4>${donateMoneyValue} taka is donated for ${donateHistory}</h4>
    <p>Date: ${new Date().toLocaleDateString()}</p>
 
 
    `;
    const historyContainer =document.getElementById("history-list"); 
    historyContainer.insertBefore(historyList,historyContainer.firstChild);
}