/** Global Variables */
const button = document.querySelector('button');
const body = document.body;
const menu = document.querySelector('.nav');

// =====================
/** Functions */
// =====================

/**
 * Checks whether the sidebar is open
 * @param {*}
 */
const isOffCanvasMenuOpen = _ => {
  return body.classList.contains('offsite-is-open');
};

/**
 * Close sidebar
 */
const closeOffCanvasMenu = _ => {
  body.classList.remove('offsite-is-open');
  button.focus();
};

/**
 * Open sidebar
 */
const openOffCanvasMenu = _ => {
  body.classList.add('offsite-is-open');
  menu.focus();
};

/** Event Listeners */
button.addEventListener('click', event => {
  isOffCanvasMenuOpen() ? closeOffCanvasMenu() : openOffCanvasMenu();
});

document.addEventListener('keydown', event => {
  // Close the menu (Escape Key)
  if (isOffCanvasMenuOpen() && event.key === 'Escape') {
    closeOffCanvasMenu();
  }
});
