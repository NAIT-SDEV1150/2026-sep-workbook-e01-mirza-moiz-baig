import '@picocss/pico/css/pico.green.min.css';

console.log('Lesson 15 main.js loaded');
const pageHeading = document.querySelector('h1');//  h1 selector string
// selecting with id
// selecting with classsnames
// selecting with tagnames
const mainContent = document.querySelector('main');
const navLinks = document.querySelectorAll('nav a');
// document.querySelector only selects first occurence
// document.querySelectorALL will select all the occurneces.
console.log(pageHeading);
console.log(mainContent);
console.log(navLinks);
// .forEach() works on both nodelist and arrays
// .map() does not work on nodelists
// nodelists are similar to arrays but not the same.
const navLinkLabels = [...navLinks].map((link) => {
    return link.textContent;
});
console.log(navLinkLabels);

const missingPanel = document.querySelector('.announcement-panel');// announcement_panel is selector string
console.log(missingPanel);
// # is for ids
// . is for classnames
// tagnames  have no symbol

const languageList = mainContent.querySelector('ul');
const languageItems = languageList.querySelectorAll('li');

// Navigating the DOM tree.
const listParent = languageList.parentElement;
console.log(listParent);
const firstlanguage = languageList.firstElementChild;
// .firstchild() can contains text nodes as well as element nodes
// .firstElementChild() only contains element nodes.
console.log(firstlanguage);
const lastLanguage = languageList.lastElementChild;
console.log(lastLanguage);
// firstlanguage.nextElementSibling;
// lastLanguage.previousElementSibling;
const paragraphBeforeList = languageList.previousElementSibling;
const ruleAfterList = languageList.nextElementSibling;
console.log(paragraphBeforeList);
console.log(ruleAfterList);
// whenever a property has 'child', it gets text nodes too including whitespaces
pageHeading.textContent = 'DOM API Practice';
languageList.style.paddingLeft = '1rem';// inline css

// create text nodes and elements
const statusMessage = document.createElement('p'); // <p></p>
// .createElement creates an element.
// this element at this point is not the part of document
statusMessage.textContent = 'Create with document.createElement() and textcontent'; // <p>Create with document.createElement() and textcontent </p>
mainContent.append(statusMessage);
// it is at this point that the tag will display in the browser.

const reminder = document.createElement('p');// <p></p>
const reminderLabel = document.createElement('strong'); // <strong></strong>
reminderLabel.textContent = 'created text nodes besides element nodes'; // <strong>created text nodes besides element nodes</strong>
const reminderText = document.createTextNode('This text is created with document.createTextNode');
console.log(reminder, reminderLabel, reminderText);
// <p></p>
reminder.append(reminderLabel);// <p><strong>created text nodes besides element nodes</strong></p>
reminder.appendChild(reminderText);// <p><strong>created text nodes besides element nodes</strong>This text is created with document.createTextNode</p>
console.log(reminder);

mainContent.append(reminder);
// It is only at this point that html code is the part of the document.

// appendchild vs append
// appendChild can add only 1 element at once
// list.appendChild(item1, item2, item3); would throw an error
// list.append(item1, item2, item3); would work.
// .append can add text nodes as well.
// .appendchild returns the appended node
// .append returns nothing

// create and insert an image
const completionFigure = document.createElement('figure');// <figure></figure>
const completionImage = document.createElement('img');// <img> </img>
const completionCaption = document.createElement('figcaption');// <figcaption></figcaption>

completionImage.src = './img/undraw_completed_vjc6.svg';// <img src = .img/undraw_completed_vjc6.svg> </img>

completionImage.alt = 'A completed task checklist';// <img src = .img/undraw_completed_vjc6.svg  alt = 'A completed task checklist'> </img>
completionImage.width = '220'; // <img src = .img/undraw_completed_vjc6.svg  alt = 'A completed task checklist' width = 220> </img>
completionCaption.textContent = 'Image created and configured with javascript';// <figcaption>Image created and configured with javascript</figcaption>
completionFigure.append(completionImage, completionCaption);
mainContent.append(completionFigure);











