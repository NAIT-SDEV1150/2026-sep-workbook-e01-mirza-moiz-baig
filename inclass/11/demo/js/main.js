import '@picocss/pico/css/pico.green.min.css';
import { fillCredits } from './credits';

console.log('Lesson 12 main.js loaded');
const lessonNumber = 12;
console.log(lessonNumber);
const pageHeading = document.querySelector('h1'); // this only selects the first occurence of h1
console.log(pageHeading);
console.log(typeof pageHeading);
console.log(pageHeading.__proto__.constructor.name);
/*
You can select tags in HTML in the following ways;
1) tagname 'h1'
2) id '#brand-name'
3)classname '.container'
*/
const brandName = document.querySelector('#brand-name');
console.log(brandName);
const firstContainer = document.querySelector('.container');
console.log(firstContainer);

const missingElement = document.querySelector('.missing-card');
console.log(missingElement);

const mainContent = document.querySelector('main');
console.log(mainContent);

const languageList = mainContent.querySelector('ul');
console.log(languageList);

const firstUnorderedList = document.querySelector('ul');
console.log(firstUnorderedList);
// TEXTCONTENT changes just the text
pageHeading.textContent = 'Javascript can update the DOM';

const brandLabel = mainContent.querySelector('strong');
brandLabel.textContent = 'Dynamic DOM';

// INNERHTML changes the entire HTML code(markup)
const threeTrustedLanguages =
 `
  <li><strong>HTML</strong> gives the page <u>structure</u>.</li>
  <li><strong>CSS</strong> controls how the page <u>looks</u>.</li>
  <li><strong>JavaScript</strong> can <u>update</u> the live DOM.</li>
`;
languageList.innerHTML = threeTrustedLanguages;
// prefer textcontent over Innerhtml
// only use innerhtml when you MUST change the html.

const asideImage = document.querySelector('aside img'); // selecting a child
asideImage.setAttribute('width','180'); // width = 180 inside the image tag
asideImage.setAttribute('alt','A person building a website');
asideImage.setAttribute('src','./img/undraw_code-review_jdgp.svg');
// .setAttribute(name of attribute, value of attribute)

languageList.style.borderLeft = '0.4rem solid var(--pico-primary)';
languageList.style.paddingLeft = '1rem';
fillCredits(2026, 'Moiz'); // Use YOUR name