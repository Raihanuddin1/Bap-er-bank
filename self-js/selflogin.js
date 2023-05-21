// step 1 add event listner
document.getElementById('login-btn').addEventListener('click', function () {

    // step 2: get email element and input text by id
    const emailField = document.getElementById('login-email');
    const emailText = emailField.value;

    // step 3: get password element and input text or value by id
    const passwordField = document.getElementById('login-password');
    const passwordText = passwordField.value;
    if(emailText === 'raihan@gmail.com' && passwordText === 'alam'){
        window.location.href= 'selfbank.html';
    }
    else{
        alert('Your email or password is wrong');
    }

})