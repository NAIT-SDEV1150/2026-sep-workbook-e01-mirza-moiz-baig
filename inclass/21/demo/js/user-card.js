const template = document.createElement('template');

template.innerHTML = `
  <style>
    .card {
      display: grid;
      grid-template-columns: 72px 1fr;
      gap: 0.85rem;
      align-items: center;
      padding: 1rem;
      border: 1px solid #9aa8ba;
      border-radius: 8px;
      background: #ffffff;
      color: #172033;
    }

    img {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      object-fit: cover;
    }

    .name {
      display: block;
      font-weight: 700;
    }

    .description {
      display: block;
      margin-top: 0.25rem;
      color: #5f6f84;
      line-height: 1.4;
    }
  </style>

  <article class="card">
    <img src="" alt="">
    <div>
      <slot name="name" class="name">Unknown user</slot>
      <slot name="description" class="description">No description provided.</slot>
    </div>
  </article>
`;
// custom element names must have hyphen - such as user-card.
// This prevents collisions with built-in HTML elements.
/**
 * two broad categories of web components;
 * 1) Autonomous custom elements: extend HTML ELEMENT and use their own tag name.
 * 2) Customized built-in elements: extend an existing element, such as custom button.
 
 */
/**
 * TEMPLATE AND SHADOW DOM:
 *  A <template> stores markup (the browser does not render it immediately).
 * Javascript clones and stores a copy of this template inside the component.
 * 
 * Shadow Dom gives the component an internal DOM tree.
 * this.attachShadow({mode:'open'})
 */
/**
 * The constructor focuses on creating the components internal intial structure.
 */
/**
 * ATTRIBUTES AND SLOTS:
 * Attributes are useful for simple string configuration, like image path.
 * Slots let the page provide light-DOM content for the component to display.
 */


// Define a custom HTML element called UserCard that inherits built-in HTML element functionality.
class UserCard extends HTMLElement {
  constructor() { // runs automatically when a new user-card is created.
    super();// calls the parent HTMLElement constrcutor to initialize the element.
    const shadow = this.attachShadow({mode: 'open'});//create a shadow dom for our component
    const content = template.content.cloneNode(true);// clone the template content so it can be reused
    // .cloneNode(true) does deep cloning(clone all the children) 
    this.image = content.querySelector('img');
    this.image.src = 'assets/avatars/avatar.png';
    this.image.alt = 'Profile photo for user';
    shadow.append(content);
  }// ?. optional chaining checks if (this.querySelector('[slot="name"]')) exists before running the code after it
  // ?? nullish colescing operator
  // if this part (this.querySelector('[slot="name"]')?.textContent) is undefined use the value on the right 'user'
  static get observedAttributes() { // it keeps observing the attribute avatar for changes.
    return ['avatar'];
  }
  attributeChangedCallback(name, oldValue, newValue) { // reacts to the changes.
    if(name === 'avatar' && oldValue != newValue) {
      this.image.src = newValue || 'assets/avatars/avatar.png';
      let name = this.querySelector('[slot="name"]')?.textContent ?? 'user';
      this.image.alt = `Profile photo for ${name}`;
    }
  }
}
// register the custom element with the webpage
customElements.define('user-card', UserCard); // check your webpage
// 'user-card' is tagname
// UserCard