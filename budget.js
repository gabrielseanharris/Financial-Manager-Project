function additional(incomes) {
    let income = document.getElementById("incomeAmount").value;
    let incomeNumber = 0;

function additional(incomeAmount) {
  const fields = document.getElementById("additionalIncomeFields");

  // Remove the extra fields if income is zero or blank
  if (incomeAmount <= 0) {
    fields.innerHTML = "";
    return;
  }

  // Prevent creating duplicates while the user types
  if (fields.children.length > 0) {
    return;
  }

  incomeNumber++;

  const amountId = `incomeAmount${incomeNumber}`;
  const typeId = `incomeType${incomeNumber}`;

  fields.innerHTML = `
    <label for="${amountId}">Additional income amount:</label>
    <input type="number" id="${amountId}" name="${amountId}" min="0">

    <label for="${typeId}">Income type:</label>
    <input type="text" id="${typeId}" name="${typeId}" placeholder="Example: Freelance">
  `;
}
const incomeInput = document.getElementById("income");

incomeInput.addEventListener("input", () => {
  additional(Number(incomeInput.value));
});}
