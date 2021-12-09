let list = ['Travel updates', 'Reviews', 'About', 'Contact'];
// let articles = [
//     {
//         id: 1,
//         title: 'The complete guide to explore Transilvania, with your bike',
//         subtitle: ['Destination Europe', '.', 'Added by', 'Johnnathan Mercadina', '.', 'July 01, 2018'],
//         image: ['img/bike.jpg', 'Bike']
//     },
//     {
//         id: 2,
//         title: 'Bucegi: Places you must visit before you die',
//         subtitle: ['Must Visit', '.', 'Added by', 'Johnnathan Mercadina', '.', 'June 30, 2018'],
//         image: ['img/bucegi.jpg', 'Bucegi']
//     },
//     {
//         id: 3,
//         title: 'Romania: The land of dreams',
//         subtitle: ['Village', '.', 'Added by', 'Johnnathan Mercadina', '.', 'June 17, 2018'],
//         image: ['img/village.jpg', 'Village']
//     },
//     {
//         id: 4,
//         title: 'Sarmale - stuffed cabbage rolls. Good or bad?',
//         subtitle: ['Food', '.', 'Added by', 'Johnnathan Mercadina', '.', 'December 29, 2017'],
//         image: ['img/sarmale.jpg', 'Sarmale']
//     }
// ];
let stArticleContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est totam laboriosam debitis magnam voluptatum, incidunt neque. Totam ullam non quis, repellendus molestiae in itaque natus labore quos ipsumalias, veritatis nihil! Quisquam labore, sequi minima expedita necessitatibus omnis error ametrecusandae atque commodi quia! Vel laborum recusandae voluptatum rerum id harum, fuga beatae ut, consequuntur repellendus ipsum temporibus libero itaque.'
let ndArticleContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quod tempore quaerat deserunt. Voluptatibus mollitia aut dolor ipsa delectus a autem ut quibusdam incidunt? Nisi facilis voluptatem omnis debitis laborum cupiditate pariatur inventore molestiae eveniet!';
let buttons = ['Edit', 'Delete'];

let mainContainer = document.getElementById('main__container');
let text = 'Lorem ipsum dolor amet consectetur adipisicing elit. Atibus obcaecati njx dolorem aut quisquam eveniet quibusdam soluta doloremque qui, nostrum laudantium, sapiente iusto odit. Placeat iusto eius asperiores iure atque sint ex! Impedit soluta tenetur alias id doloremque dolores incidunt earum? Animi, quas eligendi! Est voluptas dolor eos quae, harum amet cumque vitae nobis placeat inventore facilis soluta maiores magni dolores consequuntur iure accusamus laborum? Ipsum voluptatum culpa doloremque minima ratione veritatis nesciunt cum quae esse sint optio eos ipsam repellendus ipsa repellat qui, sed fugiat, quaerat adipisci quia temporibus totam iusto. Labore laudantium possimus nisi, doloremque suscipit eligendi dolorem exercitationem excepturi rem odio, a placeat aliquid voluptates amet officia sunt corrupti? Cum, enim illo. Possimus ipsa veritatis excepturi. Hic molestias perspiciatis laborum, saepe excepturi eaque suscipit illum voluptates ad recusandae nam distinctio nulla eos aperiam necessitatibus. Corrupti ipsam numquam, placeat deserunt iste quae dicta facilis natus laboriosam tempore minus modi corporis esse excepturi facere nam quam suscipit? Adipisci consequatur similique, voluptatum sed itaque velit iure optio! Laboriosam eligendi, perspiciatis veniam eum doloremque cum debitis natus eos? Amet culpa asperiores natus harum suscipit ducimus, iure recusandae quibusdam voluptate mollitia unde nulla nemo tempora corrupti facere. Dolore qui, illum vel nesciunt, corrupti necessitatibus, est tenetur repellat fuga officia eius maiores non libero. Voluptates illum ea quaerat, eaque quidem vitae dolorum debitis doloribus dolor accusamus ab similique doloremque, voluptas nemo. Natus dolor officiis illo hic, aliquid iusto eos? Magni quibusdam sunt vel? Neque, tempora temporibus exercitationem qui molestias corrupti, esse voluptatem possimus, ratione ex quod repellat iste nobis! Rerum beatae consectetur itaque pariatur quos omnis perspiciatis laboriosam quis quod, sed iusto. Consectetur qui dolores sequi sint, provident voluptatibus tempora illo repellendus vel suscipit voluptas magni quod quaerat corrupti eaque, optio vitae non recusandae sed atque similique ad in. Error maxime fugiat ut tenetur ipsam quibusdam ipsa recusandae alias blanditiis, deserunt, porro laudantium. Sit omnis cumque pariatur ipsum, fugiat, quae id quo autem sint nihil doloremque impedit magnam. Earum eveniet reprehenderit recusandae nam beatae sint provident?';
let saying = 'Life is like riding a bicycle, to keep your balance you must keep moving';

function createNavigation(list) {

    const navBar = document.createElement('nav');
    navBar.setAttribute('class', 'nav');
    navBar.setAttribute('id', 'nav__bar');
    const navCont = document.createElement('ul');
    for (let i = 0; i < list.length; i++) {
        const domName = document.createElement('li');
        domName.setAttribute('class', 'nav__item');

        const domLink = document.createElement('a');
        domLink.textContent = list[i];
        domLink.setAttribute('class', 'nav__link');

        domName.appendChild(domLink);
        navCont.appendChild(domName);
    }
    navBar.appendChild(navCont);
    mainContainer.append(navBar);
}

function renderHomePage(articles) {
    clearMain();
    const mainArticles = document.createElement('main');
    mainArticles.setAttribute('id', 'main__articles');

    function createArticle(article) {
        const container = document.createElement('article');
        container.setAttribute('id', article.id);

        const domTitle = document.createElement('h2');
        domTitle.setAttribute('class', 'title');
        domTitle.textContent = article.title;
        container.appendChild(domTitle);

        const domInfo = document.createElement('ul');
        domInfo.setAttribute('class', 'info__container');

        for (let i = 0; i < article.subtitle.length; i++) {
            if (i != 3) {
                if (article.subtitle[i] === '.') {
                    const subList = document.createElement('p');
                    subList.textContent = article.subtitle[i];
                    subList.setAttribute('class', 'dot');
                    domInfo.appendChild(subList);
                } else {
                    const subList = document.createElement('li');
                    subList.setAttribute('class', 'info__item');
                    subList.textContent = article.subtitle[i];
                    domInfo.appendChild(subList);
                }

            } else {
                const subList = document.createElement('li');
                subList.setAttribute('class', 'info__item');
                const author = document.createElement('span');
                author.setAttribute('class', 'info__mark');
                author.textContent = article.subtitle[i];
                subList.appendChild(author);
                domInfo.appendChild(subList);
            }

        }
        container.appendChild(domInfo);


        const domAction = document.createElement('div');
        domAction.setAttribute('class', 'actions__container');
        for (let i = 0; i < buttons.length; i++) {
            const actionButton = document.createElement('button');
            actionButton.setAttribute('class', 'actions__btn');
            actionButton.setAttribute('type', 'button');
            actionButton.textContent = buttons[i];
            domAction.appendChild(actionButton);

            if (i !== buttons.length - 1) {
                const pipeline = document.createElement('div');
                pipeline.textContent = '|';
                domAction.appendChild(pipeline);
            }
        }
        container.appendChild(domAction);

        const domImg = document.createElement('img');
        domImg.setAttribute('src', article.image[0]);
        domImg.setAttribute('alt', article.image[1]);
        container.appendChild(domImg);

        const domContent = document.createElement('div');
        domContent.setAttribute('class', 'content__container');
        const firstText = document.createElement('p');
        firstText.textContent = stArticleContent;
        const secondText = document.createElement('p');
        secondText.textContent = ndArticleContent;
        domContent.appendChild(firstText);
        domContent.appendChild(secondText);
        container.appendChild(domContent);

        const readMore = document.createElement('div');
        readMore.setAttribute('class', 'readmore__container');

        const linkArticle = document.createElement('a');
        linkArticle.setAttribute('href', '#/article?id=' + article.id);
        readMore.appendChild(linkArticle);

        const readMoreButton = document.createElement('button');
        readMoreButton.setAttribute('class', 'button');
        readMoreButton.setAttribute('type', 'button');
        readMoreButton.textContent = "Read More";
        linkArticle.appendChild(readMoreButton);
        container.appendChild(readMore);

        mainArticles.append(container);
        mainContainer.appendChild(mainArticles)
    };

    function addFooter() {
        const footer = document.createElement('footer');
        footer.setAttribute('class', 'footer');
        footer.setAttribute('id', 'footer');
        const prevBtn = document.createElement('button');
        prevBtn.setAttribute('class', 'footer__link');
        prevBtn.textContent = 'prev';

        const nextBtn = document.createElement('button');
        nextBtn.setAttribute('class', 'footer__link footer__link--next');
        nextBtn.textContent = 'next';

        footer.appendChild(prevBtn);
        footer.appendChild(nextBtn);
        mainContainer.appendChild(footer);
    }

    function createAddButton() {
        const buttonDiv = document.createElement('div');
        buttonDiv.setAttribute('class', 'add__container');
        const button = document.createElement('button');
        button.setAttribute('class', 'button icon-plus-1');
        button.setAttribute('id', 'add_btn');
        button.setAttribute('type', 'button');
        button.textContent = 'Add article';

        buttonDiv.append(button);
        mainContainer.appendChild(buttonDiv);

        button.addEventListener("click", function () {
            document.getElementById('modal_window').style.display = 'flex';
        })
    }

    //Modal

    function createModal() {

        const modalWindow = document.createElement('div');
        modalWindow.setAttribute('id', 'modal_window');
        modalWindow.setAttribute('class', 'modal__overlay');

        const placeholders = ['title', 'tag', 'author', 'date', 'image url', 'saying', 'content']

        const modal = document.createElement('div');
        modal.setAttribute('class', 'modal');
        const modalContent = document.createElement('div');
        modalContent.setAttribute('class', 'modal__content');

        modalWindow.appendChild(modal);
        modal.appendChild(modalContent);
        mainContainer.appendChild(modalWindow);

        const title = document.createElement('h2');
        title.setAttribute('class', 'title');
        title.textContent = 'Add/Edit article';
        modalContent.appendChild(title);

        const inputContainer = document.createElement('div');
        inputContainer.setAttribute('class', 'inputs__container');

        for (let i = 0; i < placeholders.length - 1; i++) {
            const input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.setAttribute('class', 'input');
            input.setAttribute('placeholder', "Please enter " + placeholders[i]);
            inputContainer.appendChild(input);
        }
        modalContent.appendChild(inputContainer);

        const textArea = document.createElement('textarea');
        textArea.setAttribute('class', 'textarea');
        textArea.setAttribute('name', 'content');
        textArea.setAttribute('rows', '7');
        textArea.setAttribute('cols', '28');
        textArea.setAttribute('placeholder', 'Please enter ' + placeholders[placeholders.length - 1]);
        modalContent.appendChild(textArea);

        const modalButtons = document.createElement('div');
        modalButtons.setAttribute('class', 'modal__buttons');
        modalContent.appendChild(modalButtons);

        const cancelBtn = document.createElement('button');
        cancelBtn.setAttribute('type', 'button');
        cancelBtn.setAttribute('class', 'button');
        cancelBtn.textContent = 'Cancel';
        modalButtons.appendChild(cancelBtn);

        cancelBtn.addEventListener("click", function () {
            document.getElementById('modal_window').style.display = 'none';
        })

        const saveBtn = document.createElement('button');
        saveBtn.setAttribute('type', 'button');
        saveBtn.setAttribute('class', 'button button--pink');
        saveBtn.textContent = 'Save';
        modalButtons.appendChild(saveBtn);
    }
    //Functions calls
    createNavigation(list);
    createAddButton();
    for (let i = 0; i < articles.length; i++) {
        createArticle(articles[i]);
    }
    addFooter();
    createModal();

    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }
    toggleSwitch.addEventListener('change', switchTheme, false);

}

function renderArticlePage(articles) {
    clearMain();
    function createArticle(article) {
        const container = document.createElement('div');
        container.setAttribute('id', 'article');

        const domTitle = document.createElement('h2');
        domTitle.setAttribute('class', 'title title--details');
        domTitle.textContent = article.title;
        container.appendChild(domTitle);

        const domInfo = document.createElement('ul');
        domInfo.setAttribute('class', 'info__container info__container--details');

        for (let i = 0; i < article.subtitle.length; i++) {
            if (i != 3) {
                if (article.subtitle[i] === '.') {
                    const subList = document.createElement('p');
                    subList.textContent = article.subtitle[i];
                    subList.setAttribute('class', 'dot');
                    domInfo.appendChild(subList);
                } else {
                    const subList = document.createElement('li');
                    subList.setAttribute('class', 'info__item');
                    subList.textContent = article.subtitle[i];
                    domInfo.appendChild(subList);
                }

            } else {
                const subList = document.createElement('li');
                subList.setAttribute('class', 'info__item');
                const author = document.createElement('span');
                author.setAttribute('class', 'info__mark');
                author.textContent = article.subtitle[i];
                subList.appendChild(author);
                domInfo.appendChild(subList);
            }

        }
        container.appendChild(domInfo);

        const domImg = document.createElement('img');
        domImg.setAttribute('src', article.image[0]);
        domImg.setAttribute('alt', article.image[1]);
        container.appendChild(domImg);

        const domContent = document.createElement('div');
        domContent.setAttribute('class', 'content__container');
        const firstText = document.createElement('p');
        firstText.textContent = text;

        const sayingText = document.createElement('p');
        sayingText.setAttribute('class', 'saying');
        sayingText.textContent = saying;

        const secondText = document.createElement('p');
        secondText.textContent = text;
        domContent.appendChild(firstText);
        domContent.appendChild(sayingText);
        domContent.appendChild(secondText);
        container.appendChild(domContent);

        mainContainer.append(container);
    }
    function addFooter(article) {
        const footer = document.createElement('footer');
        footer.setAttribute('class', 'footer');
        const prevBtn = document.createElement('button');
        prevBtn.setAttribute('class', 'footer__link footer__link--next');
        prevBtn.textContent = 'prev';

        const nextBtn = document.createElement('button');
        nextBtn.setAttribute('class', 'footer__link footer__link--next');
        nextBtn.textContent = 'next';
        const nullBtn = document.createElement('p');
        if (article.id === 1) {
            footer.appendChild(nullBtn);
            footer.appendChild(nextBtn);
            nextBtn.addEventListener('click', function () {
                mainContainer.innerHTML = "";
                location.hash = '/article?id=' + (article.id + 1);
                window.onhashchange = locationHashChange;
            })
            mainContainer.appendChild(footer);

        }
        else if (article.id === 4) {
            footer.appendChild(prevBtn);
            prevBtn.addEventListener('click', function () {
                mainContainer.innerHTML = "";
                location.hash = '/article?id=' + (article.id - 1);
                window.onhashchange = locationHashChange;
            })
            mainContainer.appendChild(footer);
        } else {
            footer.appendChild(prevBtn);
            footer.appendChild(nextBtn);
            prevBtn.addEventListener('click', function () {
                mainContainer.innerHTML = "";
                location.hash = '/article?id=' + (article.id - 1);
                window.onhashchange = locationHashChange;
            })
            nextBtn.addEventListener('click', function () {
                mainContainer.innerHTML = "";
                location.hash = '/article?id=' + (article.id + 1);
                window.onhashchange = locationHashChange;
            })
            mainContainer.appendChild(footer);
        }


    }
    function createBackButton() {
        let backCont = document.createElement('div');
        backCont.setAttribute('id', 'back_btn');
        let backButton = document.createElement('button');
        backButton.setAttribute('class', 'button');
        backButton.textContent = 'BACK';
        backCont.appendChild(backButton);
        mainContainer.appendChild(backCont);
        backButton.addEventListener('click', function () {
            mainContainer.innerHTML = "";
            location.hash = '#/'
            window.onhashchange = locationHashChange;
        })
    }
    for (let i = 0; i < articles.length; i++) {
        if (location.hash.includes(articles[i].id)) {
            console.log(articles[i].id);
            createNavigation(list);
            createBackButton();
            createArticle(articles[i]);
            addFooter(articles[i]);
        }
    }

}

function getArticles() {
    fetch('http://localhost:3001/articles')

        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }


                // Examine the text in the response
                response.json().then(function (data) {

                    window.onhashchange = locationHashChange(data);

                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });

}

// function renderArticles(data) {
//     console.log(data);
//     data.forEach(article => {
//         let domDogDiv = document.createElement('div');
//         domDogDiv.setAttribute('class', 'dog-box');
//         let domDogImg = document.createElement('img');
//         domDogImg.setAttribute('src', dog.img);
//         domDogImg.setAttribute('class', 'dog-img');
//         domDogImg.setAttribute('alt', dog.name);

//         let domDogName = document.createElement('p');
//         domDogName.setAttribute('class', 'dog-name');
//         domDogName.textContent = dog.name;

//         domDogDiv.appendChild(domDogImg);
//         domDogDiv.appendChild(domDogName);

//         dogsContainer.appendChild(domDogDiv);
//     });

//     loading.style.display = "none";
// }


getArticles();

function clearMain() {
    mainContainer.innerHTML = '';
}
function locationHashChange(data) {
    (location.hash === '#/') && renderHomePage(data);
    (location.hash.includes('#/article')) && renderArticlePage(data);
}

