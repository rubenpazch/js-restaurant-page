const sectionContact = document.createElement('section');
sectionContact.className ='wrapper-contact min-mw-100  min-vh-100 p-5';
sectionContact.setAttribute('id','section-contact');

const h1 = document.createElement('h1');
h1.className  = "py-5";
h1.appendChild(document.createTextNode('Contact us!'));

const divInfo = document.createElement('div');
divInfo.className = "img-info";


const p = document.createElement('p');
p.appendChild(document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quasi debitis earum magni itaque velit autem iure, vitae harum assumenda at officia explicabo aliquid neque doloremque repellendus error alias laudantium.'));


const div = document.createElement('div');
div.className = "container w-25";

const div1 = document.createElement('div');
div1.className = "form-row";

const div11 = document.createElement('div');
div11.className = "form-group col";

const labelEmail = document.createElement('label');
labelEmail.setAttribute("for","inputEmail4");
labelEmail.appendChild(document.createTextNode('Email'));

const inputEmail = document.createElement('label');
inputEmail.className = "form-control";
inputEmail.setAttribute("type","email");
inputEmail.setAttribute("id","inputEmail4");
inputEmail.setAttribute("placeholder","Email");

div11.appendChild(labelEmail);
div11.appendChild(inputEmail);
div1.appendChild(div11);
div.appendChild(div1);

divInfo.appendChild(p);
divInfo.appendChild(div);

sectionContact.appendChild(h1);
sectionContact.appendChild(divInfo);



export default sectionContact;