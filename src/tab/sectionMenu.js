import cardMenu from './tab/cardMenu';

const sectionMenu = document.createElement('section');
sectionMenu.className ='wrapper-menu min-mw-100  min-vh-100 p-5';
sectionInfo.id = 'section-menu';

const h1 = document.createElement('h1');
h1.appendChild(document.createTextNode('Services'));

const div1 = document.createElement('div');
div1.className = "container";

const div2 = document.createElement('div');
div2.className = "row";

div2.appendChild(cardMenu);

div1.appendChild(div2);

sectionMenu.appendChild(h1);
sectionMenu.appendChild(div1);

export default sectionMenu;