var bill = 0;
var tipPercentage = 10;
var peopleAmount = 1;
var tipPerPerson = 0;
var totalPerPerson = 0;





const calculateTip = () => {
    tip = bill * tipPercentage / 100;
    return tip;
}

const calculateTipPerPerson = () => {
    tipPerPerson = calculateTip() / peopleAmount;
    return tipPerPerson;
}

const setTipPerPerson = () => {
    tipPerPerson = calculateTipPerPerson();
    document.getElementById("tip-per-person").innerHTML = 
        tipPerPerson.toFixed(2);
}

const calculateTotal = () => {
    return bill + calculateTip();
}

const calculateTotalPerPerson = () => {
    return calculateTotal() / peopleAmount;
}

const setTotalPerPerson = () => {
    totalPerPerson = calculateTotalPerPerson();
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
    bill = parseInt(event.target.value);
    update();
}

const handlePeopleAmountChange = (event) => {
    peopleAmount = parseInt(event.target.value);
    update();
}

const handleReset = () => {
    bill = 0;
    peopleAmount = 1;
    update();
}

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        let billInput = document.getElementById("bill-amount");
        let peopleAmountInput = document.getElementById("people-amount");
        let resetButton = document.getElementById("reset-button");
        let tipButtons = document.getElementsByClassName("tip-button");

        billInput.addEventListener("input", handleBillChange);
        peopleAmountInput.addEventListener("input", handlePeopleAmountChange);
        resetButton.addEventListener("click", handleReset);


        Array.from(tipButtons).forEach(button => {
            button.addEventListener("click", (e) => {
                e.preventDefault();
                Array.from(tipButtons).forEach(button => {
                    button.classList.remove("active");
                });
                button.classList.add("active");
                tipPercentage = parseInt(e.target.value);
                update();
            });
        });
  }
}

