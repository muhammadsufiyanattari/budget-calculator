const bugetform = document.querySelector(".budget-form");
const expenseform = document.querySelector(".expense-form");
const expenseListMainDiv = document.querySelector(".expense-list");

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
bugetform.addEventListener("submit", function (e) {
  e.preventDefault();
  let bugetAmount = document.querySelector("#budget-amount");
  let getValue = e.target.children[1].children[0];
  if (getValue.value === "") {
    alert("Please enter a budget amount");
    return;
  }
  bugetAmount.textContent = getValue.value;
  getValue.value = "";
});
expenseform.addEventListener("submit", function (e) {
  e.preventDefault();
  let expenseName = e.target.children[1].children[0];
  let getExpanseAmount = e.target.children[3].children[0];
  console.log(expenseName.value);
  console.log( getExpanseAmount.value);
  if (expenseName.value === "" || getExpanseAmount.value === "") {
    alert("Please fill in both fields");
    return;
  }
expenseRowHTML(expenseName.value, getExpanseAmount.value);
  expenseName.value = "";
  getExpanseAmount.value = "";
});
