/** Global Variables */
const button = document.querySelector('button');
const body = document.body;

/** Event Listeners */
button.addEventListener('click', event => {
  body.classList.toggle('offsite-is-open');
});
