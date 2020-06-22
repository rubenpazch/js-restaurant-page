const sectionContact = document.createElement('section');
sectionContact.className ='wrapper-contact min-mw-100  min-vh-100 p-5';
sectionContact.setAttribute('id','section-contact');

const h1 = document.createElement('h1');
h1.className  = "py-5";
h1.appendChild(document.createTextNode('Contact us!'));

const divInfo = document.createElement('div');
divInfo.className = "img-info";

const p = document.createElement('p');
p.appendChild(document.createTextNode('In 1980-1990 it was the first tourist restaurant giving rise to the trajectory and aside to the Gastronomy and History of the Millennial Cusco " The Trick", now today Inka Wasi Machupicchu Restaurant.'));

const div = document.createElement('div');
div.className = "container w-25";

function componetForm(title, type, id, formType){
  const divFormGroup = document.createElement('div');
  divFormGroup.className = "form-group  text-left";
  
  const divFormGroup2 = document.createElement('div');
  divFormGroup2.className = "form-group  text-left";

  const labelform = document.createElement('label');

  let labelfor = `label${title}`;
  labelform.setAttribute("for",labelfor);
  labelform.appendChild(document.createTextNode(title));

  const inputform = document.createElement(formType);
  inputform.className = "form-control";
  inputform.setAttribute("type",type);  
  inputform.setAttribute("id",id);
  inputform.setAttribute("placeholder",title);

  divFormGroup.appendChild(labelform);
  divFormGroup.appendChild(inputform);
  return divFormGroup;
}

const buttonSubmit = document.createElement('button');
buttonSubmit.className = "btn btn-primary";
buttonSubmit.setAttribute("type","submit");
buttonSubmit.appendChild(document.createTextNode('Sign in'));

div.appendChild(componetForm("Email", "email", "inputEmail", "input"));
div.appendChild(componetForm("Address", "text", "inputAddress", "input"));
div.appendChild(componetForm("Message", "email", "inputMessage", "textarea"));
div.appendChild(buttonSubmit);

divInfo.appendChild(p);
divInfo.appendChild(div);

sectionContact.appendChild(h1);
sectionContact.appendChild(divInfo);

export default sectionContact;