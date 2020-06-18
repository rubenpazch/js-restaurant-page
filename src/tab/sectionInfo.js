const sectionInfo = document.createElement('section');
sectionInfo.className ='wrapper-info min-mw-100  min-vh-100 p-5';
sectionInfo.id = 'section-info';

const h1 = document.createElement('h1');
h1.appendChild(document.createTextNode('El Truco Restaurant'));

const div = document.createElement('div');
div.className = "img-info";

sectionInfo.appendChild(h1);
sectionInfo.appendChild(div);

export default sectionInfo;