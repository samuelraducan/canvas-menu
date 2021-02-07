/** Global Variables */
const body = document.body;
const menu = document.querySelector('.nav');
const menuButton = document.querySelector('.menu-button');
const iconCloseMenu = document.querySelector('.close-button');

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
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.focus();
};

/**
 * Open sidebar
 */
const openOffCanvasMenu = _ => {
  body.classList.add('offsite-is-open');
  // menuButton();
  menu.focus();
};

/** Event Listeners */

// Opens or closes OffcanvasMenu when button is clicked
menuButton.addEventListener('click', event => {
  isOffCanvasMenuOpen() ? closeOffCanvasMenu() : openOffCanvasMenu();
});

iconCloseMenu.addEventListener('click', event => {
  isOffCanvasMenuOpen() ? closeOffCanvasMenu() : openOffCanvasMenu();
});

// Closes OffcanvasMenu when escape key pressed
document.addEventListener('keydown', event => {
  // Close the menu (Escape Key)
  if (isOffCanvasMenuOpen() && event.key === 'Escape') {
    closeOffCanvasMenu(menuButton);
  }
});
