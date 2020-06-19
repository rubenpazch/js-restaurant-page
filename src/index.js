import 'bootstrap';
import navbar from './tab/navbar';
import sectionInfo from './tab/sectionInfo';
import sectionMenu from './tab/sectionMenu';
import './scss/app.scss';

function componentHeader() {
  var element = document.createElement('header');
  element.insertAdjacentHTML('beforeEnd', navbar.outerHTML);
  return element;
}

document.body.appendChild(componentHeader());
document.body.appendChild(sectionInfo);
document.body.appendChild(sectionMenu);