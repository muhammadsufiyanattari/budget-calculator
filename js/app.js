const bugetform = document.querySelector(".budget-form");
const expenseform = document.querySelector(".expense-form");
const expenseListMainDiv = document.querySelector(".expense-list");

// expense row function
const expenseRowHTML=(title, amount)=>{
    const expenseRow=document.createElement("div");
    expenseRow.classList.add("expense");
    expenseRow.innerHTML=`
    <div class="expense-item d-flex justify-content-between align-items-baseline">

         <h6 class="expense-title mb-0 text-uppercase list-item">- ${title}</h6>
         <h5 class="expense-amount mb-0 list-item">${amount}</h5>

         <div class="expense-icons list-item">

          
          <a href="#" class="delete-icon" data-id="${expense.id}">
           <i class="fas fa-trash"></i>
          </a>
         </div>
        </div>`
        expenseListMainDiv.appendChild(expenseRow);
}
//  calculate buget function
const bugetCalulate=()=>{
let bugetValue=document.querySelector("#budget-amount");
let expenseValue=document.querySelector("#expense-amount");
let balanceValue=document.querySelector("#balance-amount")
console.log(bugetValue.textContent);
console.log(expenseValue.textContent);
console.log(balanceValue.textContent);
balanceValue.textContent=parseInt(bugetValue.textContent)-parseInt(expenseValue.textContent)
// if (balanceValue.textContent<0) {
//   alert("Out of budget")
//   balanceValue.textContent=0
// }
if(expenseValue.textContent==0){
  balanceValue.textContent=0
  return
}


}

// buget form function
bugetform.addEventListener("submit", function (e) {
  e.preventDefault();
  let bugetAmount = document.querySelector("#budget-amount");
  let getValue = e.target.children[1].children[0];
  
  if (getValue.value === "") {
    alert("Please enter a budget amount");
    return;
  }
  bugetAmount.textContent= parseInt(bugetAmount.textContent)+parseInt( getValue.value);
  bugetCalulate()
if (bugetAmount.textContent == 0) {
  alert("Please Add Currect Amount")
}
  getValue.value = "";
});
// expense form function
expenseform.addEventListener("submit", function (e) {
  e.preventDefault();
  let expenseName = e.target.children[1].children[0];
  let getExpanseAmount = e.target.children[3].children[0];
  let expensesShow=document.querySelector("#expense-amount")
  let bugetValue=document.querySelector("#budget-amount");
  // console.log(expenseName.value);
  // console.log( getExpanseAmount.value);
    let bugetAmount = document.querySelector("#budget-amount");
    console.log(bugetAmount.textContent);
    
    if (bugetAmount.textContent == 0) {
      alert("Please enter a budget amount first");
       expenseName.value = "";
  getExpanseAmount.value = "";
      return;
    }
  if (expenseName.value === "" || getExpanseAmount.value === "") {
    alert("Please fill in both fields");
    return;
  }
  if (expensesShow.textContent==bugetAmount.textContent) {
     alert("Your Buget is Out Please enter a budget amount first");
      expensesShow.textContent=0
      bugetValue.textContent=0
        expenseName.value = "";
  getExpanseAmount.value = "";
  return
  }
  expensesShow.textContent=parseInt(expensesShow.textContent)+parseInt(getExpanseAmount.value)
expenseRowHTML(expenseName.value, getExpanseAmount.value);
  bugetCalulate()

  expenseName.value = "";
  getExpanseAmount.value = "";
});
