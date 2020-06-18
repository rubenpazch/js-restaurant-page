import 'bootstrap';
import navbar from './tab/navbar';


function component() {
  var element = document.createElement('header');

  // use your function!
  
  element.insertAdjacentHTML('beforeEnd', navbar.outerHTML);
  return element;
}

document.body.appendChild(component());