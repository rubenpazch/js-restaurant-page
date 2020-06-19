import bg from '../img/download.svg';

const cardMenu = document.createElement('div');
sectionMenu.className ='col card p-3 mx-3';

const img = new Image();
img.src = bg;
img.className = 'card-img-top';

const div1 = document.createElement('div');
div1.className = "card-body";

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

div1.appendChild(h5);
div1.appendChild(p);
div1.appendChild(a);

cardMenu.appendChild(img);
cardMenu.appendChild(div1);

export default cardMenu;