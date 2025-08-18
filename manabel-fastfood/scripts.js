(function () {
  'use strict';

  function setupMobileNav() {
    const toggleButton = document.querySelector('.nav-toggle');
    const nav = document.getElementById('primary-navigation');
    if (!toggleButton || !nav) return;
    toggleButton.addEventListener('click', () => {
      const expanded = toggleButton.getAttribute('aria-expanded') === 'true';
      toggleButton.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });
  }

  function setCurrentYear() {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  }

  // Order Form Logic
  function setupOrderForm() {
    const form = document.getElementById('order-form');
    if (!form) return;

    const selects = form.querySelectorAll('select[data-price]');
    const totalEl = document.getElementById('order-total');
    const deliveryEl = form.querySelector('#delivery');
    const addressEl = form.querySelector('#address');

    const updateTotal = () => {
      let total = 0;
      selects.forEach((sel) => {
        const price = parseFloat(sel.selectedOptions[0]?.dataset.price || '0');
        total += price;
      });
      if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
    };

    selects.forEach((sel) => sel.addEventListener('change', updateTotal));
    updateTotal();

    // Require address only if delivery is selected
    if (deliveryEl && addressEl) {
      const handleDeliveryChange = () => {
        const isDelivery = deliveryEl.value === 'delivery';
        if (isDelivery) {
          addressEl.setAttribute('required', 'true');
        } else {
          addressEl.removeAttribute('required');
          addressEl.classList.remove('field-error');
        }
      };
      deliveryEl.addEventListener('change', handleDeliveryChange);
      handleDeliveryChange();
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const requiredFields = form.querySelectorAll('[required]');
      let valid = true;
      requiredFields.forEach((field) => {
        const input = field;
        if (!input.value || (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value))) {
          valid = false;
          input.classList.add('field-error');
        } else {
          input.classList.remove('field-error');
        }
      });

      const notice = document.getElementById('order-notice');
      if (!valid) {
        if (notice) {
          notice.className = 'notice error';
          notice.textContent = 'Please fill in all required fields correctly.';
        }
        return;
      }

      // Simulate successful submission
      if (notice) {
        notice.className = 'notice success';
        notice.textContent = 'Thank you! Your order has been received. We\'ll start preparing it right away!';
      }
      form.reset();
      updateTotal();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Contact Form Logic
  function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    const notice = document.getElementById('contact-notice');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('input[name="name"]');
      const email = form.querySelector('input[name="email"]');
      const message = form.querySelector('textarea[name="message"]');
      const emailOk = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
      if (!name?.value || !emailOk || !message?.value) {
        if (notice) {
          notice.className = 'notice error';
          notice.textContent = 'Please complete all fields with a valid email.';
        }
        return;
      }
      if (notice) {
        notice.className = 'notice success';
        notice.textContent = 'Thanks for reaching out! We\'ll get back to you shortly.';
      }
      form.reset();
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    setupMobileNav();
    setupOrderForm();
    setupContactForm();
    setCurrentYear();
  });
})();

