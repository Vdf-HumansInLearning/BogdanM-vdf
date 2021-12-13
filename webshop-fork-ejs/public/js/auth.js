form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isValid = validateRegisterForm();

    const form = document.getElementById('form');
    const errorElement = document.getElementById('error');
    if (isValid) {
        // TODO: submit form
    }
});

function validateRegisterForm() {
    let isValid = true;

    const username = document.getElementById('username');
    removePreviousError(username.parentElement);
    if (!username.value) {
        isValid = false;
        username.parentElement.insertAdjacentHTML('beforeend', '<p class="error">Username is not valid</p>');
    } else if (username.value.length < 3 || username.value.length > 20) {
        isValid = false;
        username.parentElement.insertAdjacentHTML('beforeend', '<p class="error">Username must be between 3 and 20 characters</p>');
    }


    // TODO: do email validation 
    const email = document.getElementById('email');
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    // if (email.matches(pattern)) {
    //     form.classList.add("valid");
    //     form.classList.remove("invalid");
    // } else {
    //     form.classList.remove("valid");
    //     form.classList.add("invalid");
    // }


    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    if (password.value.length <= 6) {
        // messages.push('Password must be longer than 6 characters');
    }

    if (password.value.length >= 20) {
        //  messages.push('Password must be less than 20 characters');
    }

    if (confirmPassword.value !== password.value) {
        // messages.push('Passwords do not match');
    }

    return isValid;
}

function removePreviousError(parent) {
    const errors = parent.getElementsByClassName('error');

    if (errors.length > 0) {
        for (let errChild of errors) {
            parent.removeChild(errChild);
        }
    }

}