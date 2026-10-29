export function setupListDelegation() {
  // TODO: Select #list and #selection.
  const list = document.querySelector('#list');
  const selection = document.querySelector('#selection');
 
  if (!list || !selection) {
    return;
  }
  // TODO: Add one click listener to the list and use event.target.
  list.addEventListener('click', function(event) {
    const li = event.target.closest('li');
    // event.target refers to the actual element clicked.
    // .closest() that searches for the nearest li
    if(!li || !list.contains(li)) {
      return;
    }
    // !list.contains(li) checks for li tag in the targeted list
    const previousSelection = list.querySelector('li.active');
    if (previousSelection) {
      previousSelection.classList.remove('active');
    }
    li.classList.add('active');
    const id = li.getAttribute('data-id');
    selection.textContent = `Selected: item ${id}`;


  });
}
