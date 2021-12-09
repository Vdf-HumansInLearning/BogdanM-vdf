function createNavigation(list) {

  const navBar = document.getElementById('nav__container');
  const navUL = document.createElement('ul');
  navUL.setAttribute('class', 'nav__container');
  navBar.appendChild(navUL);

  for (let i = 0; i < list.length; i++) {
      const domLI = document.createElement('li');
      domLI.setAttribute('class', 'nav__item');

      const domLink = document.createElement('a');
      domLink.textContent = list[i];
      domLink.setAttribute('class', 'nav__link');
      domLink.setAttribute('href', '/');

      domLI.appendChild(domLink);
      navUL.appendChild(domLI);


  }
}

const domContainer = document.getElementById('container');
const domMain = document.createElement('main');
domContainer.appendChild(domMain);
const domArticle1 = document.createElement('article');
domMain.appendChild(domArticle1);

function createArticle(article) {
  const domTitle = document.createElement('h2');
  domTitle.textContent = article.title;
  domTitle.setAttribute('class', 'title');
  domArticle1.appendChild(domTitle);

  const domUL = document.createElement('ul');
  domUL.setAttribute('class', 'info__container');
  domArticle1.appendChild(domUL);

  const domLI1 = document.createElement('li');
  domLI1.textContent = article.description;
  domLI1.setAttribute('class', 'info__item');
  domUL.appendChild(domLI1);

  const domLI2 = document.createElement('li');
  domLI2.textContent = article.addedBy;
  domLI2.setAttribute('class', 'info__item');
  domUL.appendChild(domLI2);

  const domSpan = document.createElement('span');
  domSpan.textContent = article.writer;
  domSpan.setAttribute('class', 'info__mark');
  domLI2.appendChild(domSpan);

  const domLI3 = document.createElement('li');
  domLI3.textContent = article.date;
  domLI3.setAttribute('class', 'info__item');
  domUL.appendChild(domLI3);



  const domImg = document.createElement('img');
  domImg.setAttribute('src', article.imgUrl);
  domArticle1.appendChild(domImg);

  const domDiv2 = document.createElement('div');
  domDiv2.setAttribute('class', 'content__container');
  domArticle1.appendChild(domDiv2);

  const domP1 = document.createElement('p');
  domP1.textContent = article.firstParagraph;
  domDiv2.appendChild(domP1);

  const domP2 = document.createElement('p');
  domP2.textContent = article.secondParagraph;
  domDiv2.appendChild(domP2);

  const domP3 = document.createElement('p');
  domP3.textContent = article.thirdParagraph;
  domP3.setAttribute('class', 'saying');
  domDiv2.appendChild(domP3);

  const domP4 = document.createElement('p');
  domP4.textContent = article.fourthParagraph;
  domDiv2.appendChild(domP4);

  const domP5 = document.createElement('p');
  domP5.textContent = article.fifthParagraph;
  domDiv2.appendChild(domP5);

  

}

const domBody = document.getElementById('root');
const domFooter = document.createElement('footer');
domFooter.setAttribute('class', 'footer');
domBody.appendChild(domFooter);
const domButton4 = document.createElement('button')
domButton4.textContent = 'previous';
domButton4.setAttribute('class', 'footer__link');
domFooter.appendChild(domButton4);
const domButton5 = document.createElement('button')
domButton5.textContent = 'next';
domButton5.setAttribute('class', 'footer__link footer__link--next');
domFooter.appendChild(domButton5);


const list = ['Travel Updates', 'Reviews', 'About', 'Contact'];

const firstArticle = {
  title: 'The complete guide to explore Trasilvania, with your bike',
  description: 'Destination Europe',
  addedBy: 'Added by ',
  writer: 'Jonnathan Mercadina',
  date: 'July 01, 2018',
  editButton: 'Edit',
  deleteButton: '| Delete',
  imgUrl: '/public/img/bike.jpg',
  firstParagraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dignissimos et, animi repudiandae libero culpa excepturi obcaecati, voluptate assumenda quos quas, rerum quisquam ex consequuntur ullam sit sint autem eaque magnam maiores! Repudiandae dolore accusantium cumque, facere incidunt, dignissimos numquam dolorum ad, ducimus non nulla veniam tempora fuga libero qui expedita. Voluptate modi sapiente delectus reprehenderit ratione. Tempora ut, iste dolorum delectus eveniet eligendi quibusdam soluta ratione omnis at harum et. Molestiae rerum culpa, necessitatibus obcaecati nesciunt ex dolorem aut quisquam eveniet quibusdam soluta doloremque qui, nostrum laudantium, sapiente iusto odit. Placeat iusto eius asperiores iure atque sint ex! Impedit soluta tenetur alias id doloremque dolores incidunt earum? Animi, quas eligendi! Est voluptas dolor eos quae, harum amet cumque vitae nobis placeat inventore facilis soluta maiores magni dolores consequuntur iure accusamus laborum? Ipsum voluptatum culpa doloremque minima ratione veritatis nesciunt cum quae esse sint optio eos ipsam repellendus ipsa repellat qui, sed fugiat, quaerat adipisci quia temporibus totam iusto. Labore laudantium possimus nisi, doloremque suscipit eligendi dolorem exercitationem excepturi rem odio, a placeat aliquid voluptates amet officia sunt corrupti? Cum, enim illo. Possimus ipsa veritatis excepturi. ',
  secondParagraph: 'Hic molestias perspiciatis laborum, saepe excepturi eaque suscipit illum voluptates ad recusandae nam distinctio nulla eos aperiam necessitatibus. Corrupti ipsam numquam, placeat deserunt iste quae dicta facilis natus laboriosam tempore minus modi corporis esse excepturi facere nam quam suscipit? Adipisci consequatur similique, voluptatum sed itaque velit iure optio! Laboriosam eligendi, perspiciatis veniam eum doloremque cum debitis natus eos? Amet culpa asperiores natus harum suscipit ducimus, iure recusandae quibusdam voluptate mollitia unde nulla nemo tempora corrupti facere. Dolore qui, illum vel nesciunt, corrupti necessitatibus, est tenetur repellat fuga officia eius maiores non libero. Voluptates illum ea quaerat, eaque quidem vitae dolorum debitis doloribus dolor accusamus ab similique doloremque, voluptas nemo. Natus dolor officiis illo hic, aliquid iusto eos? Magni quibusdam sunt vel? Neque, tempora temporibus exercitationem qui molestias corrupti, esse voluptatem possimus, ratione ex quod repellat iste nobis! Rerum beatae consectetur itaque pariatur quos omnis perspiciatis laboriosam quis quod, sed iusto. Consectetur qui dolores sequi sint, provident voluptatibus tempora illo repellendus vel suscipit voluptas magni quod quaerat corrupti eaque, optio vitae non recusandae sed atque similique ad in. Error maxime fugiat ut tenetur ipsam quibusdam ipsa recusandae alias blanditiis, deserunt, porro laudantium. Sit omnis cumque pariatur ipsum, fugiat, quae id quo autem sint nihil doloremque impedit magnam. Earum eveniet reprehenderit recusandae nam beatae sint provident?',
  thirdParagraph: 'Life is like riding a bicycle, to keep your balance you must keep moving',
  fourthParagraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, labore quidem? Reprehenderit alias ullam similique libero dignissimos laboriosam maxime illo. Molestias labore veritatis suscipit ut exercitationem, consectetur repudiandae fuga quasi quos velit! Dolor, iusto iure laborum, velit recusandae delectus rem et aut fuga cumque ducimus hic cupiditate vitae itaque doloribus repellat voluptate odio culpa. Cupiditate dolor praesentium quod dignissimos est quos odit voluptate consectetur, modi illum quam minima magnam recusandae. Laudantium pariatur perferendis reiciendis eum at ratione incidunt quo! Dolore, eligendi. Itaque libero eaque enim dignissimos inventore ab exercitationem doloribus debitis perferendis corrupti quisquam ullam repellendus atque totam, necessitatibus cupiditate nobis eos sint earum nihil officiis. Beatae accusamus quam repellat similique at cumque molestiae hic natus cum, vero eaque vel facere quod necessitatibus maiores minima architecto voluptas aut vitae maxime reprehenderit quisquam? Enim animi doloremque, officia repellendus minus corporis deserunt incidunt aperiam voluptatum, nostrum voluptate consectetur officiis sequi aliquid dolores facere ratione, tempora corrupti accusamus sint? Tenetur non illo consequuntur qui at quidem itaque, veniam hic exercitationem omnis atque debitis eligendi voluptatem ab officia accusantium ratione quis dignissimos nisi voluptas neque perferendis! Minus repudiandae rerum illum accusamus, nobis amet, ullam ipsum mollitia explicabo repellat expedita voluptatum ad libero inventore porro voluptates reprehenderit debitis sapiente quis accusantium unde adipisci vitae ab qui? ',
  fifthParagraph: 'Et modi dolores error blanditiis iusto, pariatur quas ex unde voluptates at inventore, vero temporibus totam nesciunt animi eveniet culpa molestiae officiis repellendus ea! Expedita rerum non obcaecati accusantium, quasi blanditiis officiis pariatur dicta magni quidem error quisquam doloribus numquam voluptate aliquam amet vitae provident mollitia. Corporis deleniti nemo quibusdam fugiat aut voluptate fuga! Velit vitae aliquid obcaecati neque sunt debitis voluptatibus odio esse distinctio dolores sequi nulla, at alias nesciunt dolor nobis. Voluptatum eum enim optio dignissimos, non labore dolor ullam debitis aut, voluptate maxime id natus. Repellendus repudiandae, a libero ab labore quisquam excepturi rem, iste quidem maxime reiciendis amet velit nostrum alias exercitationem! Incidunt commodi unde repellendus magni, totam amet corporis sed maiores doloremque veritatis architecto illum ex recusandae tenetur similique laboriosam velit molestias, in expedita quidem ducimus. Aperiam, officia! Tempora, velit atque necessitatibus corporis omnis officiis, perferendis, sunt molestiae aliquid quis reiciendis deleniti est. Et nemo amet illum, deleniti aperiam ratione, eos consequuntur eum impedit cumque assumenda possimus! Molestiae amet illum fuga facilis. A, aut error. Velit quo, eaque facilis aliquid accusantium tempora culpa porro voluptas neque quaerat, dolores explicabo maiores officia nam provident voluptates.',
  
}

createNavigation(list);
createArticle(firstArticle);
