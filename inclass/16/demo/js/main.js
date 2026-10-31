const form = document.querySelector('#contact-form');
const result = document.querySelector('#result');

function serializeForm(formEl) {
  // TODO: Access the form controls from formEl.elements.
  const fullName = formEl.elements.fullName.value;
  // formEl.elements returns HTMLFORMCONTROLCOLLECTION.
  const email = formEl.elements.email.value;
  const bio = formEl.elements.bio.value;
  const plan = formEl.elements.plan.value;
  // object destructuring :const { fullName, email, bio } = formEl.elements;
  // TODO: Collect the checked topic checkboxes into an array.
  const topics = formEl.querySelectorAll('input[name="topics"]:checked');// selecting values with attributes(returns a nodelist)
  const array = Array.from(topics);// [3 HTML tags]
  console.log(array);
  const topicsArray = array.map((checkbox) => checkbox.value);// ['javascript','HTML', 'CSS']
  // TODO: Return an object with the trimmed form values.
  return {
    fullName: fullName.trim(),
    email: email.trim(),
    plan: plan,
    topics: topicsArray,
    bio: bio.trim(),
    submittedAt: new Date().toLocaleString()// this holds date and time
  };
}
function formatSubmission(data) {
  return `Submission received:
    - Name: ${data.fullName || '(none)'}
    - Email: ${data.email || '(none)'}
    - Skill: ${data.plan || '(none)'}
    - Strengths: ${data.topics.length ? data.topics.join(', ') : '(none)'}
    - Bio: ${data.bio || '(none)'}
    - Time: ${data.submittedAt}`;
}
function validateFullName(input) { // <input ' Mirza moiz baig '> // ['Mirza','moiz', 'baig']
  const nameParts = input.value.trim().split(/\s+/).filter(Boolean);
  // /text inside is the start and the end of regex/
  // reg-ex : regular expression. \s refers to a whitespace. + sign refers to multiple occurences of something.
  // .filter(Boolean); gets rid of whitespace as  a string in the array.
  if (nameParts.length < 2) {
    input.setCustomValidity('Full name must contain atleast 2 words.');// we only set an error msg, we never display to the end user.
   // .setCustomValidity sets the error msg.
  } else {
    input.setCustomValidity('');// clears the error msg.
  }
}
function validateEmail(input) {
  if (!input.value.includes('@')){// .includes returns true or false
    input.setCustomValidity('Email must contain @ symbol.');
  } else {
    input.setCustomValidity('');// clears the error msg.
  }
}
function validateBio(textarea) {
  if (textarea.value.trim().length < 40) {
    textarea.setCustomValidity('Bio must be atleast 40 characters long');
  } else {
    textarea.setCustomValidity('');
  }
}


function validateField(field) {
  if (field.name === 'fullName') { // name = 'fullName'
    validateFullName(field);
  }
  if (field.name === 'email') {
    validateEmail(field);
  }
  if (field.name === 'bio') {
    validateBio(field);
  }
}

function validateForm() {
  validateField(form.elements.fullName);
  validateField(form.elements.email);
  validateField(form.elements.bio);
}

function clearCustomValidity() {
  form.elements.fullName.setCustomValidity('');
  form.elements.bio.setCustomValidity('');
  form.elements.email.setCustomValidity('');
}

form.addEventListener('input', (event) => {
  // input event runs when anything is typed into the input field
  validateField(event.target);
  event.target.reportValidity();

});

form.addEventListener('submit', (event) => {
  // Default behaviour of the webpage is to reload with the server response.
  event.preventDefault();// never reloads the webpage.
  validateForm();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  } // .checkValidity() returns boolean true or false
  const data = serializeForm(form);//holds javscript object
  result.textContent = formatSubmission(data);// improves the UX 
});

form.addEventListener('reset', () => {
  // TODO: Clear the output area and custom validation messages.
  result.textContent = 'Awaiting submission';
  clearCustomValidity();
});
