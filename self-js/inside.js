
// ------------------- depsit section ---------------------

document.getElementById('btn-deposit').addEventListener('click', function () {

    // get depsit input field

    const depositField = document.getElementById('deposit-field');
    const depositFieldTextString = depositField.value;
    const newdepositFieldText = parseFloat(depositFieldTextString);

    //get Deposit element and its value and convert into intiger by parseFloat:

    const depositAmount = document.getElementById('deposit-amount');
    const previousDepositAmountString = depositAmount.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString);


    // Add the deposit input field and deposit balance field

    const newDepositTotalAmount = previousDepositAmount + newdepositFieldText;
    depositAmount.innerText = newDepositTotalAmount;


    // get the balance element and value and convert into intiger by parseFloat.

    const balanceAmount = document.getElementById('balance-amount');
    const previousBalanceAmountString = balanceAmount.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountString);

    // Add deposit amount to the balance section and set the value to the balance field
    const newTotalBalanceAmount = previousBalanceAmount + newdepositFieldText;
    balanceAmount.innerText = newTotalBalanceAmount;

    // clear the input field after each input
    depositField.value = '';

})

// --------------------- Withdraw section -----------------------

document.getElementById('btn-withdraw').addEventListener('click', function () {

    // get Input withdra field element and value and convert it convert into intiger by parseFloat:
    const withdrawField = document.getElementById('withdraw-field');
    const withdraFieldAmountString = withdrawField.value;
    const newWithdrawFieldAmount = parseFloat(withdraFieldAmountString);

    // Get the withdraw element
    const WithdrawAmount = document.getElementById('withdraw-amount');
    const previousWithdrawAmountString = WithdrawAmount.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

    // Add the previous withdraw amount and new withdraw amount and set the value to the depost amount field.

    const totalCurrentWithdrawAmount = previousWithdrawAmount + newWithdrawFieldAmount;
    WithdrawAmount.innerText = totalCurrentWithdrawAmount;

    // get the balance element to substraction the iput withdraw amount.
    const balanceAmount = document.getElementById('balance-amount');
    const previousBalanceAmountString = balanceAmount.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountString);


    // substraction the withdraw amount from the existence balance
    const newTotalBalance = previousBalanceAmount - newWithdrawFieldAmount;
    balanceAmount.innerText = newTotalBalance;



    withdrawField.value = '';
})