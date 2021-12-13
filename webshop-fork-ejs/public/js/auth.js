const name = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;



form.addEventListener('submit', (e) => {
    let messages = [];
    if (username.value === '' || username.value == null) {
        messages.push('Username is required');
    }

    // if (email.matches(pattern)) {
    //     form.classList.add("valid");
    //     form.classList.remove("invalid");
    // } else {
    //     form.classList.remove("valid");
    //     form.classList.add("invalid");
    // }

    //how to do email validation ? 


    if (password.value.length <= 6) {
        messages.push('Password must be longer than 6 characters');
    }

    if (password.value.length >= 20) {
        messages.push('Password must be less than 20 characters');
    }

    if (confirmPassword.value != password.value) {
        messages.push('Passwords do not match');
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }
});

function validation() {


}

// de ce dispare formularul la afisarea erorilor ? 
