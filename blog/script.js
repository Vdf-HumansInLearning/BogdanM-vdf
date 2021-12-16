const domContainer = document.getElementById('main__container');

// create nav bar
const nav = ['Travel updates', 'Reviews', 'About', 'Contact'];

function createNav(nav) {
    
    const navBar = document.createElement('nav');
    navBar.setAttribute('class', 'nav');

    const ul = document.createElement('ul');
    navBar.appendChild(ul);

    nav.forEach(element => {
        const li = document.createElement('li');
        li.setAttribute('class', 'nav__item');
        const anchor = document.createElement('a');
        anchor.setAttribute('href', '#/');
        anchor.setAttribute('class', 'nav__link');
        anchor.textContent = element;

        ul.appendChild(li);
        li.appendChild(anchor);
    })

    return navBar;
}

function renderNavBar(nav) {
    const domNavBar = createNav(nav);
    domContainer.appendChild(domNavBar);
    createNav(nav);
}


// create + add article button

function createAddButton() {
    const div = document.createElement('div');
    div.setAttribute('class', 'add__container');
    const button = document.createElement('button');
    button.setAttribute('type', 'button ');
    button.setAttribute('class', 'button icon-plus-1 open-modal');
    button.textContent = 'Add Article';
    button.addEventListener('click', function() {
        openModal();
    })
    div.appendChild(button);
    return div;
}

function renderAddButton() {
    const domButton = createAddButton();
    domContainer.appendChild(domButton);
    createAddButton();
}

// fetch/get data from server
fetch('http://localhost:3000/articles')
    .then(
        function(response) {
            if (response.status !== 200) {

                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }

            // Examine the text in the response
            response.json()
                .then(data => {
                    console.log(data)
                    window.onhashchange = locationHashChange(data);
                });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });

// create index articles function
function createArticle(articles) {
    const domArticle = document.createElement('article');
    console.log(articles)

    articles.forEach(element => {
        const articleDiv = document.createElement('div');
        articleDiv.setAttribute('id', 'article' + element.id);
        const domTitle = document.createElement('h2');
        domTitle.textContent = element.title;
        domTitle.setAttribute('class', 'title');

        const domUl = document.createElement('ul');
        domUl.setAttribute('class', 'info__container');

        const domLi1 = document.createElement('li');
        domLi1.setAttribute('class', element.classLi);
        domLi1.textContent = element.tag;

        const domLi2 = document.createElement('li');
        domLi2.setAttribute('class', element.classLi);
        domLi2.textContent = element.author;

        const domSpan = document.createElement('span');
        domSpan.setAttribute('class', 'info__mark point');
        domSpan.textContent = 'Jonnathan Mercadina';

        const domLi3 = document.createElement('li');
        domLi3.setAttribute('class', element.classLi);
        domLi3.textContent = element.date;

        domUl.appendChild(domLi1);
        domUl.appendChild(domLi2);
        domLi2.appendChild(domSpan);
        domUl.appendChild(domLi3);

        const domImg = document.createElement('img');
        domImg.setAttribute('src', element.imgUrl);
        domImg.setAttribute('alt', element.imgAlt);

        const domActionDiv = document.createElement('div');
        domActionDiv.setAttribute('class', 'actions__container');

        const editButton = document.createElement('button');
        editButton.setAttribute('type', 'button');
        editButton.setAttribute('class', 'actions__btn border');
        editButton.setAttribute('id', element.id);
        editButton.textContent = 'Edit'
        editButton.addEventListener('click', function() {
            openModal()
            editArticle(element);
            document.querySelector('.button-edit-modal').style.display = 'block';
            document.querySelector('.button--pink').style.display = 'none';
        })

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('type', 'button');
        deleteButton.setAttribute('class', 'actions__btn');
        deleteButton.textContent = '| Delete';
        deleteButton.addEventListener('click', function() {
            deleteArticle(element.id);
        })

        domActionDiv.appendChild(editButton);
        domActionDiv.appendChild(deleteButton);

        const domP = document.createElement('p');
        domP.setAttribute('class', 'line-height ');
        domP.textContent = element.content1;

        const domP2 = document.createElement('p');
        domP2.textContent = element.content2;

        const domContainer = document.createElement('div');
        domContainer.setAttribute('class', 'content__container');
        domContainer.appendChild(domP);
        domContainer.appendChild(domP2);

        const readMoreDiv = document.createElement('div');
        readMoreDiv.setAttribute('class', 'readmore__container');


        const readMoreAnchor = document.createElement('a');
        readMoreAnchor.setAttribute('class', 'btn-details');
        readMoreAnchor.setAttribute('href', '#/article' + element.id);

        const readMoreButton = document.createElement('button');
        readMoreButton.setAttribute('type', 'button');
        readMoreButton.setAttribute('class', 'button button-details');
        readMoreAnchor.setAttribute('href', '#/article' + element.id);
        readMoreButton.textContent = 'Read More';
        readMoreButton.addEventListener('click', function() {
            location.hash = '#/article' + element.id;
            location.reload();
        })

        readMoreDiv.appendChild(readMoreAnchor);
        readMoreAnchor.appendChild(readMoreButton);

        domArticle.appendChild(articleDiv);
        articleDiv.appendChild(domTitle);
        articleDiv.appendChild(domUl);
        articleDiv.appendChild(domActionDiv);
        articleDiv.appendChild(domImg);
        articleDiv.appendChild(domContainer);
        articleDiv.appendChild(readMoreDiv);

    });
    return domArticle;

}

// rendering index articles
function renderArticle(articles) {
    clearRoot();
    renderNavBar(nav);
    renderAddButton();
    const domArticle = createArticle(articles);
    domContainer.appendChild(domArticle);
    createArticle(articles);
    renderFooter();
}

// create index footer
function createFooter() {
    const footer = document.createElement('footer');
    footer.setAttribute('class', 'footer');
    const previousButton = document.createElement('button');

    previousButton.setAttribute('class', 'footer__link footer__link--previous');
    previousButton.textContent = 'previous';

    const nextButton = document.createElement('button');
    nextButton.setAttribute('id', 'button-next');
    nextButton.setAttribute('class', 'footer__link footer__link--next');
    nextButton.textContent = 'next';

    footer.appendChild(previousButton);
    footer.appendChild(nextButton);

    return footer;
}

// render index footer
function renderFooter() {
    const domFooter = createFooter();
    domContainer.appendChild(domFooter);
    createFooter();
}

// create details page footer
function detailsFooter(article, artLength) {
    console.log(article)
    const footer = document.createElement('footer');
    footer.setAttribute('class', 'footer');
    const previousButton = document.createElement('button');

    previousButton.setAttribute('class', 'footer__link footer__link--previous');
    previousButton.textContent = 'previous';

    const nextButton = document.createElement('button');
    nextButton.setAttribute('id', 'button-next');
    nextButton.setAttribute('class', 'footer__link footer__link--next');
    nextButton.textContent = 'next';

    if (location.hash.includes('#/article1')) {
        previousButton.style.visibility = 'hidden';
    } else if (location.hash.includes(`#/article` + artLength)) {
        nextButton.style.visibility = 'hidden';
    }

    nextButton.addEventListener('click', function() {
        if (article.id >= 1 && article.id < artLength) {
            // changing the route to the next article
            location.hash = '#/article' + (article.id + 1);
            // reloading page
            location.reload();
        }
    })

    previousButton.addEventListener("click", function() {
        if (article.id <= artLength) {
            // changing the route to the previous article
            location.hash = '#/article' + (article.id - 1);
            // reload the page
            location.reload();
        }
    })

    footer.appendChild(previousButton);
    footer.appendChild(nextButton);

    return footer;
}

// render details page footer
function renderDetailsFooter(article, artLength) {
    const domFooter = detailsFooter(article, artLength);
    domContainer.appendChild(domFooter);
    detailsFooter(article, artLength);
}

// create details page article
function createArticleDetails(article) {
    const domArticle = document.createElement('article');

    const divArticle = document.createElement('div');
    divArticle.setAttribute('id', 'article' + article.id);
    domArticle.appendChild(divArticle);
    const domTitle = document.createElement('h2');
    domTitle.textContent = article.title;
    domTitle.setAttribute('class', 'title');

    const domUl = document.createElement('ul');
    domUl.setAttribute('class', 'info__container');

    const domLi1 = document.createElement('li');
    domLi1.setAttribute('class', article.classLi);
    domLi1.textContent = article.tag;

    const domLi2 = document.createElement('li');
    domLi2.setAttribute('class', article.classLi);
    domLi2.textContent = article.author;

    const domSpan = document.createElement('span');
    domSpan.setAttribute('class', 'info__mark point');
    domSpan.textContent = 'Jonnathan Mercadina';

    const domLi3 = document.createElement('li');
    domLi3.setAttribute('class', article.classLi);
    domLi3.textContent = article.date;

    domUl.appendChild(domLi1);
    domUl.appendChild(domLi2);
    domLi2.appendChild(domSpan);
    domUl.appendChild(domLi3);

    const domImg = document.createElement('img');
    domImg.setAttribute('src', article.imgUrl);
    domImg.setAttribute('alt', article.imgAlt);

    divArticle.appendChild(domTitle);
    divArticle.appendChild(domUl);
    divArticle.appendChild(domImg);

    const domDivContentContainer = document.createElement('div');
    domDivContentContainer.setAttribute('class', 'content__container');
    divArticle.appendChild(domDivContentContainer);


    const p1 = document.createElement('p');
    p1.textContent = article.content1;

    const p2 = document.createElement('p');
    p2.textContent = article.content2;
    
    const saying = document.createElement('p');
    saying.setAttribute('class', 'saying');
    saying.textContent = article.saying;
    
    const p3 = document.createElement('p');
    p3.textContent = article.content2;
    
    const p4 = document.createElement('p');
    p4.textContent = article.content4;

    domDivContentContainer.appendChild(p1);
    domDivContentContainer.appendChild(p2);
    domDivContentContainer.appendChild(saying);
    domDivContentContainer.appendChild(p3);
    domDivContentContainer.appendChild(p4);

    return domArticle;
}


// render details page article
function renderSingleArticleDetails(article) {
    const domArticle = createArticleDetails(article);
    domContainer.appendChild(domArticle);
    createArticleDetails(article);
}


// iterating articles and rendering based on hash
function renderAllArticlesDetails(articles) {
    console.log(articles)
    Array.from(articles).forEach(item => {
        if (location.hash.includes(item.id)) {
            renderNavBar(nav);
            renderSingleArticleDetails(item);
            renderDetailsFooter(item, articles.length);
        }
    });
}

// create modal
let modal = document.getElementById("modal_window");

function createModal() {
    const modalDiv = document.createElement('div');
    modalDiv.setAttribute('class', 'modal');

    const modalContent = document.createElement('div');
    modalContent.setAttribute('class', 'modal__content');

    const modalTitle = document.createElement('h2');
    modalTitle.setAttribute('class', 'title modal-title');
    modalTitle.textContent = "Add/Edit article";

    const inputsContainer = document.createElement('div');
    inputsContainer.setAttribute('class', 'inputs__container');

    const input1 = document.createElement('input');
    input1.setAttribute('type', 'text');
    input1.setAttribute('class', 'input margin');
    input1.setAttribute('id', 'title')
    input1.setAttribute('placeholder', 'Please enter title');

    const input2 = document.createElement('input');
    input2.setAttribute('type', 'text');
    input2.setAttribute('class', 'input');
    input2.setAttribute('id', 'tag')
    input2.setAttribute('placeholder', 'Please enter tag');

    const input3 = document.createElement('input');
    input3.setAttribute('type', 'text');
    input3.setAttribute('class', 'input margin');
    input3.setAttribute('id', 'author')
    input3.setAttribute('placeholder', 'Please enter author');

    const input4 = document.createElement('input');
    input4.setAttribute('type', 'text');
    input4.setAttribute('class', 'input');
    input4.setAttribute('id', 'date')
    input4.setAttribute('placeholder', 'Please enter date');

    const input5 = document.createElement('input');
    input5.setAttribute('type', 'text');
    input5.setAttribute('class', 'input margin');
    input5.setAttribute('id', 'url')
    input5.setAttribute('placeholder', 'Please enter image url');

    const input6 = document.createElement('input');
    input6.setAttribute('type', 'text');
    input6.setAttribute('class', 'input');
    input6.setAttribute('id', 'saying')
    input6.setAttribute('placeholder', 'Please enter saying');

    const textarea = document.createElement('textarea');
    textarea.setAttribute('class', 'textarea');
    textarea.setAttribute('id', 'textarea')
    textarea.setAttribute('name', 'content');
    textarea.setAttribute('cols', '28');
    textarea.setAttribute('rows', '7');
    textarea.setAttribute('placeholder', 'Please enter content');

    const modalButtonsDiv = document.createElement('div');
    modalButtonsDiv.setAttribute('class', 'modal__buttons');

    const closeModalButton = document.createElement('button');
    closeModalButton.setAttribute('type', 'button');
    closeModalButton.setAttribute('class', 'button close-modal');
    closeModalButton.textContent = 'Cancel';

    const saveModalButton = document.createElement('button');
    saveModalButton.setAttribute('type', 'button');
    saveModalButton.setAttribute('class', 'button button--pink');
    saveModalButton.textContent = 'Save';
    saveModalButton.addEventListener('click', function() {
        createNewArticle();

    })

    const editModalButton = document.createElement('button');
    editModalButton.setAttribute('type', 'button');
    editModalButton.setAttribute('class', 'button button-edit-modal');
    editModalButton.textContent = 'Save';

    modalDiv.appendChild(modalContent);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(inputsContainer);
    inputsContainer.appendChild(input1);
    inputsContainer.appendChild(input2);
    inputsContainer.appendChild(input3);
    inputsContainer.appendChild(input4);
    inputsContainer.appendChild(input5);
    inputsContainer.appendChild(input6);
    modalContent.appendChild(textarea);
    modalContent.appendChild(modalButtonsDiv);
    modalButtonsDiv.appendChild(closeModalButton);
    modalButtonsDiv.appendChild(saveModalButton);
    modalButtonsDiv.appendChild(editModalButton);

    return modalDiv;
}

// rendering modal
function renderModal() {
    const domModal = createModal();
    modal.appendChild(domModal);
    createModal();
}

renderModal();

// clear container
function clearRoot() {
    domContainer.innerHTML = '';
}

// edit article function
function editArticle(article) {
    let title = document.getElementById('title');
    let tag = document.getElementById('tag');
    let author = document.getElementById('author');
    let date = document.getElementById('date');
    let url = document.getElementById('url');
    let saying = document.getElementById('saying');
    let textarea = document.getElementById('textarea');

    title.value = article.title;
    tag.value = article.tag;
    author.value = article.author;
    date.value = article.date;
    url.value = article.imgUrl;
    saying.value = article.saying;
    textarea.value = article.content1;

    let saveModalButton = document.querySelector('.button-edit-modal');
    saveModalButton.addEventListener('click', function() {
        updateArticle(article.id)
    })
}

// hash router
function locationHashChange(articles) {
    (location.hash === '#/') && renderArticle(articles);
    (location.hash.includes('#/article')) && renderAllArticlesDetails(articles);
}


// close modal
let modalOverlay = document.querySelector(".modal__overlay");
let closeModal = document.querySelector(".close-modal")

// open edit modal
function openModal() {
    modalOverlay.style.visibility = "visible";
    modalOverlay.style.opacity = 1;
}

// close modal
closeModal.addEventListener("click", function() {
    modalOverlay.style.visibility = "hidden";
    modalOverlay.style.opacity = 0;

})


// dark mode 
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
let body = document.querySelector('body');

function switchTheme(e) {
    if (e.target.checked) {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}


toggleSwitch.addEventListener('change', switchTheme, false);

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

// delete article
function deleteArticle(id) {
    fetch('http://localhost:3000/articles/' + id, {
            method: "DELETE",
        })
        .then(response => response.json())
        .then(data => {
            console.log(data, id)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}


// create new articles & update article list
function createNewArticle() {
    let title = document.getElementById('title').value;
    let tag = document.getElementById('tag').value;
    let author = document.getElementById('author').value;
    let date = document.getElementById('date').value;
    let imgUrl = document.getElementById('url').value;
    let saying = document.getElementById('saying').value;
    let textarea = document.getElementById('textarea').value;

    fetch('http://localhost:3000/articles', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            "title": title,
            "imgUrl": imgUrl,
            "imgAlt": 'photo',
            "content1": textarea,
            "content2": textarea,
            "content3": textarea,
            "content4": textarea,
            "classLi": "info__item",
            "tag": tag,
            "author": author,
            "date": date,
            "saying": saying,
        })

    }).then(res => res.json())

    .then(data =>

        console.log(data))

    .catch((err) => console.log(err));
}



// edit article
function updateArticle(id) {
    let title = document.getElementById('title').value;
    let tag = document.getElementById('tag').value;
    let author = document.getElementById('author').value;
    let date = document.getElementById('date').value;
    let imgUrl = document.getElementById('url').value;
    let saying = document.getElementById('saying').value;
    let textarea = document.getElementById('textarea').value;

    const putObject = {
        title: title,
        tag: tag,
        author: author,
        date: date,
        imgUrl: imgUrl,
        saying: saying,
        content1: textarea,
        content2: textarea,
        content3: textarea,
        content4: textarea,
        "classLi": "info__item"
    }
    fetch('http://localhost:3000/articles/' + id, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(putObject),
        })
        .then(response => response.json())
        .then((data) => {

            window.onhashchange = locationHashChange(data);

        })
        .catch(error => {
            console.error('Error:', error);
        });
}

