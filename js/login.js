
// step 1: Add click event handler with the submit button

document.getElementById('btn-submit').addEventListener('click', function () {
    // ste[ 2: get the email address from inside the email input field]
    // Always remember to use value to get text from input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // Do not verify like this way
    // verify the password
    if(email === 'shontan@baap.com' && password === 'secret'){
        window.location.href= 'bank.html';
    }
    else{
        alert('Tui password vule gesos!! Toke ami teijjo ghosona korlam');
    }
})