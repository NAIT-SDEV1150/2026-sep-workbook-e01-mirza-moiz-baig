import './user-card.js';
import { users } from './users.js';

const themeToggle = document.querySelector('#theme-toggle');
const avatarDemo = document.querySelector('#avatar-demo');
let darkMode = false;
let avatarIndex = 2;

themeToggle.addEventListener('click', () => {
  darkMode = !darkMode;
  document.documentElement.dataset.theme = darkMode ? 'dark':'light';
  themeToggle.textContent = darkMode ? 'use light theme':
  'use dark theme';
  // .dataset refers to all data properties data-theme
});

avatarDemo.addEventListener('click', () => {
  avatarIndex = (avatarIndex + 1) % users.length;
  avatarDemo.setAttribute('avatar', users[avatarIndex].avatar);
});
