let totalAmount = document.getElementById("total-amount") ;
let modalAmount = document.getElementById("modal-amount")
let myTime = new Date()
let time = new Intl.DateTimeFormat("en-us", {
    dateStyle: "full",
    timeStyle: "full",
});



function donateForFlood(donateInputId, addedMoneyId, donationCauseId) {
    
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

   
 
  
    const donateHistory = document.getElementById(donationCauseId).innerText;

    const historyList = document.createElement("div");
    historyList.className = "border border-[#1111111A] rounded-2xl p-8 mb-5";
    historyList.innerHTML = `
  <h4 class="font-bold text-xl pb-3">${donateMoneyValue} taka is donated for ${donateHistory}</h4>
    <p class="text-[#111111B3] ">Date: ${time.format(myTime)}</p>
 
 
    `;
    const historyContainer =document.getElementById("history-list"); 
    historyContainer.insertBefore(historyList,historyContainer.firstChild);
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

