var bill = 0;
var tipPercentage = 0;
var peopleAmount = 1;
var tipPerPerson = 0;
var totalPerPerson = 0;





const calculateTip = (bill, tipPercentage) => {
    return bill * tipPercentage / 100;
}

const calculateTipPerPerson = (bill, tipPercentage, peopleAmount) => {
    tipPerPerson = calculateTip(bill, tipPercentage) / peopleAmount;
    return tipPerPerson;
}

const setTipPerPerson = () => {
    tipPerPerson = calculateTipPerPerson(bill, tipPercentage, peopleAmount);
    document.getElementById("tip-per-person").innerHTML = 
        tipPerPerson.toFixed(2);
}

const calculateTotal = (bill, tipPercentage) => {
    return bill + calculateTip(bill, tipPercentage);
}

const calculateTotalPerPerson = (bill, tipPercentage, peopleAmount) => {
    return calculateTotal(bill, tipPercentage) / peopleAmount;
}

const setTotalPerPerson = () => {
    totalPerPerson = calculateTotalPerPerson(bill, tipPercentage, peopleAmount);
    document.getElementById("total-per-person").innerHTML = 
        totalPerPerson.toFixed(2);
}

const update = () => {
    setTotalPerPerson();
    setTipPerPerson();
}

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        update();
  }
}

const handleBillChange = (event) => {
    let value = event.target.value;
    bill = value === "" ? 0 : parseFloat(value);
    update();
}

const handlePeopleAmountChange = (event) => {
    let value = event.target.value;
    peopleAmount = value === "" ? 1 : parseInt(value);
    update();
}

const handleReset = () => {
    bill = 0;
    peopleAmount = 1;
    update();
}

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        const billInput = document.getElementById("bill-amount");
        const peopleAmountInput = document.getElementById("people-amount");
        const resetButton = document.getElementById("reset-button");
        const tipButtons = document.getElementsByClassName("tip-button");
        const customTipButton = document.getElementById("custom-tip-button");
        const customTipInput = document.getElementById("custom-tip-input");

        billInput.addEventListener("input", handleBillChange);
        peopleAmountInput.addEventListener("input", handlePeopleAmountChange);
        resetButton.addEventListener("click", handleReset);
        customTipButton.addEventListener("click", (e) => e.preventDefault())
        customTipInput.addEventListener("input", (e) => {
            tipPercentage = e.target.value === "" ? 0 : parseFloat(e.target.value);
            Array.from(tipButtons).forEach(button => {
                button.classList.remove("active");
            });
            update();
        });

        Array.from(tipButtons).forEach(button => {
            button.addEventListener("click", (e) => {
                e.preventDefault();
                Array.from(tipButtons).forEach(button => {
                    button.classList.remove("active");
                });
                customTipInput.value = "";
                button.classList.add("active");
                tipPercentage = parseInt(e.target.value);
                update();
            });
        });
  }
}

