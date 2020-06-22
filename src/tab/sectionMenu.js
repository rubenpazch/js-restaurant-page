import menu1 from '../img/pic5.jpg';
import menu2 from '../img/pic6.jpg';
import menu3 from '../img/pic7.jpg';
import menu4 from '../img/pic8.jpg';

const sectionMenu = document.createElement('section');
sectionMenu.className = 'wrapper-menu min-mw-100  min-vh-100 p-5';
sectionMenu.setAttribute('id', 'section-menu');

const h1 = document.createElement('h1');
h1.appendChild(document.createTextNode('Services'));

const div1 = document.createElement('div');
div1.className = 'container';

const div2 = document.createElement('div');
div2.className = 'row';

function componentCard(title, photo, content) {
  const cardMenu = document.createElement('div');
  cardMenu.className = 'col card p-3 mx-3 w-35';

  const img = new Image();
  img.src = photo;
  img.className = 'card-img-top';

  const div3 = document.createElement('div');
  div3.className = 'card-body';

  const h5 = document.createElement('h5');
  h5.className = 'card-title';
  h5.appendChild(document.createTextNode(title));

  const p = document.createElement('p');
  p.className = 'card-text';
  p.appendChild(document.createTextNode(content));

  const a = document.createElement('a');
  a.appendChild(document.createTextNode('Go menu'));
  a.className = 'btn btn-primary';
  a.setAttribute('href', '#');

  div3.appendChild(h5);
  div3.appendChild(p);
  div3.appendChild(a);

  cardMenu.appendChild(img);
  cardMenu.appendChild(div3);
  return cardMenu;
}


div2.appendChild(componentCard('El Truco by InkaWasi - Museo Colonial', menu1, 'The exquisiteness, the mixture of flavors and the atmosphere make the Inka Wasi Restaurant Cusco, a magical place full of experiences and flavors that are not only shown as a restaurant but also as a Colonial Museum.'));
div2.appendChild(componentCard('El Truco by InkaWasi - Plaza Regocijo', menu2, 'In the heart of ancient Cusco Machupicchu Inka Wasi was born, a chain of restaurants, delighting our dinner with a gastronomic variety and recognized worldwide.'));
div2.appendChild(componentCard('El Truco by InkaWasi - Peruvian Cuisine', menu3, 'Built in 1538 by Rodrigo de Orgoñez, where it shows the presence of the Spaniards in combination with an Inka House and the works of art of the Cuzco school that is shown inside them.'));
div2.appendChild(componentCard('El Truco by InkaWasi - Traditional Dancers', menu4, 'In 1650, after the earthquake that affected a large part of the houses of the city at that time.'));

div1.appendChild(div2);

sectionMenu.appendChild(h1);
sectionMenu.appendChild(div1);

export default sectionMenu;