import bg from '../img/download.svg';

const sectionMenu = document.createElement('section');
sectionMenu.className ='wrapper-menu min-mw-100  min-vh-100 p-5';
sectionMenu.setAttribute('id','section-menu');

const h1 = document.createElement('h1');
h1.appendChild(document.createTextNode('Services'));

const div1 = document.createElement('div');
div1.className = "container";

const div2 = document.createElement('div');
div2.className = "row";

function componentCard() {
  const cardMenu = document.createElement('div');
  cardMenu.className ='col card p-3 mx-3';

  const img = new Image();
  img.src = bg;
  img.className = 'card-img-top';

  const div3 = document.createElement('div');
  div3.className = "card-body";

  const h5 = document.createElement('h5');
  h5.className = "card-title";
  h5.appendChild(document.createTextNode('Card title'));

  const p = document.createElement('p');
  p.className = "card-text";
  p.appendChild(document.createTextNode('Some quick example text to build on the card title and make up the bulk of the cards content.'));

  const a = document.createElement('a');
  a.appendChild(document.createTextNode("Go somewhere"));
  a.className = 'btn btn-primary';
  a.setAttribute('href', '#');

  div3.appendChild(h5);
  div3.appendChild(p);
  div3.appendChild(a);

  cardMenu.appendChild(img);
  cardMenu.appendChild(div3);
  return cardMenu;

}


div2.appendChild(componentCard());
div2.appendChild(componentCard());
div2.appendChild(componentCard());
div2.appendChild(componentCard());

div1.appendChild(div2);

sectionMenu.appendChild(h1);
sectionMenu.appendChild(div1);

export default sectionMenu;