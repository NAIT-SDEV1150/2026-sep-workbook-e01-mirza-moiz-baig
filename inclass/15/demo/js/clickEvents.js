export function setupClickEvents() {
  // TODO: Select #btn-toggle, #btn-message, and #message.
  const btnToggle = document.querySelector('#btn-toggle');
  const btnMessage = document.querySelector('#btn-message');
  const message = document.querySelector('#message');
  // TODO: Add click listeners that update the page.
  if (!btnToggle || !btnMessage || !message) {
    return;
  };
  btnToggle.addEventListener('click', function () {
    document.body.classList.toggle('highlight');
    // document.body selects the body element
    // provides access to the CSS classes applied to this element
    // .toggle('highlight'); checks whether the highlight class exists or not.
    // If the class doesnt exist, .toggle adds it
    // If the class does exist, it removes it.
    const isHighlighted = document.body.classList.contains('highlight');// .contains return true or false based on highlight class's presence is the classlist
    btnToggle.textContent = isHighlighted ? 'Highlight is On' : 'Highlight is off'; // ? is called ternary operator.
    // single line if statement
  });
  btnMessage.addEventListener('click', function () {
    const timeString = new Date().toLocaleTimeString();
    message.textContent = `Message updated at ${timeString}`;
  });
}
