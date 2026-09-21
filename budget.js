const addIncomeButton = document.getElementById("addIncomeButton");
const additionalIncomeFields = document.getElementById("additionalIncomeFields");

let incomeNumber = 0;

function addIncomeFields() {
  incomeNumber += 1;

  const fieldGroup = document.createElement("p");
  fieldGroup.innerHTML = `
    <label for="incomeType${incomeNumber}">Income name:</label>
    <input type="text" id="incomeType${incomeNumber}" name="incomeType${incomeNumber}">

    <label for="incomeAmount${incomeNumber}">Amount:</label>
    <input type="number" id="incomeAmount${incomeNumber}" name="incomeAmount${incomeNumber}" min="0">
  `;

  additionalIncomeFields.appendChild(fieldGroup);
}

addIncomeButton.addEventListener("click", addIncomeFields);

const addExpenseButton = document.getElementById("addExpenseButton");
const additionalExpenseFields = document.getElementById("additionalExpenseFields");

let expenseNumber = 0;

function addExpenseFields() {
  expenseNumber += 1;

  const fieldGroup = document.createElement("p");
  fieldGroup.innerHTML = `
    <label for="expenseType${expenseNumber}">Expense name:</label>
    <input type="text" id="expenseType${expenseNumber}" name="expenseType${expenseNumber}">

    <label for="expenseAmount${expenseNumber}">Amount:</label>
    <input type="number" id="expenseAmount${expenseNumber}" name="expenseAmount${expenseNumber}" min="0">
  `;

  additionalExpenseFields.appendChild(fieldGroup);
}

addExpenseButton.addEventListener("click", addExpenseFields);

const addSavingsButton = document.getElementById("addSavingsButton");
const additionalSavingsFields = document.getElementById("additionalSavingsFields");

let savingsNumber = 0;

function addSavingsFields() {
  savingsNumber += 1;

  const fieldGroup = document.createElement("p");
  fieldGroup.innerHTML = `
    <label for="savingsType${savingsNumber}">Savings name:</label>
    <input type="text" id="savingsType${savingsNumber}" name="savingsType${savingsNumber}">

    <label for="savingsAmount${savingsNumber}">Amount:</label>
    <input type="number" id="savingsAmount${savingsNumber}" name="savingsAmount${savingsNumber}" min="0">
  `;

  additionalSavingsFields.appendChild(fieldGroup);
}


addSavingsButton.addEventListener("click", addSavingsFields);
