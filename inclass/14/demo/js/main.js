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







