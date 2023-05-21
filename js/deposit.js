// Add click event listner to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    //    get the tnput element usin id
    const depositField = document.getElementById('deposit-field');
    // get the text from the input field by using value
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // get the total deposit amount
    const depositTotalElement = document.getElementById('deposit-total');
    const previousdepositTotalString = depositTotalElement.innerText;
    const previousdepositTotal = parseFloat(previousdepositTotalString);

    depositTotalElement.innerText = newDepositAmount;
    const currentDepositTotal = previousdepositTotal + newDepositAmount;
    // set the total deposit amount
    depositTotalElement.innerText = currentDepositTotal;

    // Step 5: Get current total Balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    console.log(typeof previousBalanceTotal);

    // Step 06: Calculate current total balance
    const currentBalance = previousBalanceTotal + newDepositAmount;
    // set the new balance
    balanceTotalElement.innerText= currentBalance;


    depositField.value = '';


})