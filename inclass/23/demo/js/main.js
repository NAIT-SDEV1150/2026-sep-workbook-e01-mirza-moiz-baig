import './user-card.js';
import { users } from './users.js';

const userList = document.querySelector('#user-list');
const followCount = document.querySelector('#follow-count');

function updateFollowCount() {
  // TODO: Count followed cards and update followCount.
}

function renderUser(user) {
  // Create a <user-card>
  const card = document.createElement('user-card');// <user-card> </user-card>
  // Set the user property with the user object
  card.user = user // using a setter to set the value of usercard.
  // Append the card to userList.
  userList.append(card);
}

userList.addEventListener('follow-change', () => {
  // TODO: Update the follow count when a card dispatches follow-change.
});

users.forEach(renderUser);
