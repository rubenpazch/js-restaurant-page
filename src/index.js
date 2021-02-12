import 'bootstrap';
import navbar from './tab/navbar';
import sectionInfo from './tab/sectionInfo';
import sectionMenu from './tab/sectionMenu';
import sectionContact from './tab/sectionContact';
import './scss/app.scss';

const main = document.querySelector('#content');

main.insertAdjacentHTML('beforeEnd', navbar.outerHTML);
main.insertAdjacentHTML('beforeEnd', '<div class="activeInfo"></div>');

const nav = document.querySelector('#topnavbar');

const activeInfo = document.querySelector('.activeInfo');
activeInfo.innerHTML = sectionInfo.outerHTML;

nav.addEventListener('click', e => {
  if (e.target) {
    const selectedMenu = e.target.id;

    switch (selectedMenu) {
      case 'Menu':
        activeInfo.innerHTML = sectionMenu.outerHTML;
        break;
      case 'Home':
        activeInfo.innerHTML = sectionInfo.outerHTML;
        break;
      case 'Contacts':
        activeInfo.innerHTML = sectionContact.outerHTML;
        break;
      default:
        activeInfo.innerHTML = sectionInfo.outerHTML;
    }
  }
});
