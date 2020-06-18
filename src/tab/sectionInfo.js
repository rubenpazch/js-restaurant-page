import bg from '../img/bgTop.jpg';

const sectionInfo = document.createElement('section');
sectionInfo.className ='wrapper-info min-mw-100  min-vh-100 p-5';
sectionInfo.id = 'section-info';

const h1 = document.createElement('h1');
h1.appendChild(document.createTextNode('El Truco Restaurant'));

const div = document.createElement('div');
div.className = "img-info";


const img = new Image();
img.src = bg;

const p = document.createElement('p');
p.appendChild(document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quasi debitis earum magni itaque velit autem iure, vitae harum assumenda at officia explicabo aliquid neque doloremque repellendus error alias laudantium.'));


div.appendChild(img);
div.appendChild(p);

sectionInfo.appendChild(h1);
sectionInfo.appendChild(div);

export default sectionInfo;