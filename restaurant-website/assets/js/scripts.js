/* BiteBurst - basic interactivity */
(function () {
  var doc = document;

  // Mobile nav toggle
  var navToggleButton = doc.querySelector('.nav-toggle');
  var nav = doc.getElementById('primary-navigation');
  if (navToggleButton && nav) {
    navToggleButton.addEventListener('click', function () {
      var isCollapsed = nav.getAttribute('data-collapsed') === 'true';
      nav.setAttribute('data-collapsed', String(!isCollapsed));
      navToggleButton.setAttribute('aria-expanded', String(isCollapsed));
    });
  }

  // Dropdown for Menu
  var dropdownToggle = doc.querySelector('.dropdown-toggle');
  var dropdown = doc.getElementById('menu-submenu');
  if (dropdownToggle && dropdown) {
    function closeDropdown() {
      dropdown.hidden = true;
      dropdownToggle.setAttribute('aria-expanded', 'false');
    }
    function openDropdown() {
      dropdown.hidden = false;
      dropdownToggle.setAttribute('aria-expanded', 'true');
    }
    dropdownToggle.addEventListener('click', function () {
      var expanded = dropdownToggle.getAttribute('aria-expanded') === 'true';
      if (expanded) closeDropdown(); else openDropdown();
    });
    doc.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target) && !dropdownToggle.contains(e.target)) {
        closeDropdown();
      }
    });
    doc.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeDropdown();
    });
  }

  // Tabs filter for menu
  var tabButtons = Array.prototype.slice.call(doc.querySelectorAll('.tabs .tab'));
  var menuItems = Array.prototype.slice.call(doc.querySelectorAll('.menu-item'));
  if (tabButtons.length > 0 && menuItems.length > 0) {
    tabButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        tabButtons.forEach(function (b) { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        var filter = btn.getAttribute('data-filter');
        menuItems.forEach(function (item) {
          var category = item.getAttribute('data-category');
          var show = filter === 'all' || filter === category;
          item.style.display = show ? '' : 'none';
        });
      });
    });
  }

  // Forms - fake submit handlers for demo
  function wireForm(formId) {
    var form = doc.getElementById(formId);
    if (!form) return;
    var status = form.querySelector('.form-status');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (status) {
        status.textContent = 'Thanks! We\'ll be in touch soon.';
        setTimeout(function () { status.textContent = ''; }, 5000);
      }
      try { form.reset(); } catch (_) {}
    });
  }
  wireForm('newsletter-form');
  wireForm('contact-form');
  wireForm('catering-form');

  // Header shadow on scroll
  var header = doc.getElementById('site-header');
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 10) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

