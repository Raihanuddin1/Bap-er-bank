// Add event handler to the withdraw button

// Step 1: Get the withdraw button element by using id

document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step 2: get the withdraw amount from the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;

    // Step 2.5: convert the input value string to number by using parseFload();
    const newWithdrawAmoun = parseFloat(newWithdrawAmountString);

    // Step 3: Get previous withdraw total amount
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalElement = withdrawTotalElement.innerText;
    // step 3.5: convert the input value string to number by using parseFload();
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalElement);

    // step 4: Calculate total with draw amount
    const currentWithDrawTotal = previousWithdrawTotal + newWithdrawAmoun;

    //step 4.5: set the total value in the withdaw field.
    withdrawTotalElement.innerText = currentWithDrawTotal;

    //  step 5: get the previous balance by using id

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 6: calculate new balance total
    const newBalanceAmount = previousBalanceTotal - newWithdrawAmoun;
    // step 6.5; set the new balance total

    balanceTotalElement.innerText= newBalanceAmount;



    // Step 7: clear the input field

    withdrawField.value = '';

})
