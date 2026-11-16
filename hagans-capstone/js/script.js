// The setOpen handles the mobile menu (WHAT IT IS).
// Toggles a class on the body and updates ARIA (WHAT IT DOES).
// This tells screen readers if the menu is open (WHAT IT MEANS).
(function() {
  const btn = document.getElementById('menu-btn');
  const nav = document.getElementById('primary-nav');
  const body = document.body;

  function toggleMenu() {
    const isOpen = body.classList.toggle('menu-open');
    btn.setAttribute('aria-expanded', isOpen);
  }

  if (btn) {
    btn.addEventListener('click', toggleMenu);
  }

  // Closes menu on link click (WHAT IT IS).
  // Hides the menu after a link is picked (WHAT IT DOES).
  // Improves the user experience on phones (WHAT IT MEANS).
  if (nav) {
    nav.addEventListener('click', () => {
      body.classList.remove('menu-open');
      btn.setAttribute('aria-expanded', 'false');
    });
  }

  // Closes menu on Escape (WHAT IT IS).
  // Listens for Escape key (WHAT IT DOES).
  // Accessibility rule (WHAT IT MEANS).
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && body.classList.contains('menu-open')) {
      toggleMenu();
    }
  });
})();