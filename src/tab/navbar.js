const navbar = document.createElement('ul');
navbar.className = 'nav nav-tabs px-5 pt-4';
navbar.setAttribute('id', 'topnavbar');

function createMenu(array) {
  array.forEach(element => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.className = 'nav-link';
    a.setAttribute('href', '#');
    a.appendChild(document.createTextNode(element));
    a.setAttribute('id', `${element}`);

    li.className = 'nav-item';
    li.appendChild(a);
    navbar.appendChild(li);
  });
}


createMenu(['Home', 'Menu', 'Contacts']);

export default navbar;