function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const casenumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(casenumberString);

    let newCaseNumber;

    if (isIncrease) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function updatecaseTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    updatecaseTotalPrice(newCaseNumber);

    calculateSubTotal();
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);
    updatecaseTotalPrice(newCaseNumber);

    calculateSubTotal();
})

