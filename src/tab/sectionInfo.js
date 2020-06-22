import bg from '../img/bgTop.jpg';

const sectionInfo = document.createElement('section');
sectionInfo.className ='wrapper-info min-mw-100  min-vh-100 p-5';
sectionInfo.setAttribute('id','section-info');

const h1 = document.createElement('h1');
h1.appendChild(document.createTextNode('El Truco Restaurant'));

const div = document.createElement('div');
div.className = "img-info";


const img = new Image();
img.src = bg;

const p = document.createElement('p');
p.appendChild(document.createTextNode('In 1980-1990 it was the first tourist restaurant giving rise to the trajectory and aside to the Gastronomy and History of the Millennial Cusco " The Trick", now today Inka Wasi Machupicchu Restaurant.'));


div.appendChild(img);
div.appendChild(p);

sectionInfo.appendChild(h1);
sectionInfo.appendChild(div);

export default sectionInfo;