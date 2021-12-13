const filtersForm = document.querySelector('#filters-form')
filtersForm.addEventListener('submit', event => {
    event.preventDefault();

    console.log(filtersForm['userName'].value);
    let userName = filtersForm['userName'].value;

    if (userName && userName.length >= 3 && userName.length <= 100) {
        filtersForm.submit();
    }else{
        //TODO
        document.querySelector('#user-name-error').style.visibility = 'visible';
    }
});

