// Contact page interactions and animations
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const inputs = form ? form.querySelectorAll('input, textarea') : [];

  // Reveal on scroll using existing [data-animate]
  const reveal = () => {
    document.querySelectorAll('[data-animate]').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        el.classList.add('visible');
      }
    });
  };
  reveal();
  window.addEventListener('scroll', reveal, { passive: true });

  // Floating focus animation
  inputs.forEach(el => {
    el.addEventListener('focus', () => {
      el.style.transform = 'translateY(-2px)';
    });
    el.addEventListener('blur', () => {
      el.style.transform = 'translateY(0)';
    });
  });

  function setError(inputEl, hasError, message) {
    const errorMsg = inputEl.parentElement.querySelector('.error-msg');
    if (hasError) {
      inputEl.classList.add('error');
      if (errorMsg) errorMsg.textContent = message;
    } else {
      inputEl.classList.remove('error');
      if (errorMsg) errorMsg.textContent = '';
    }
  }

  function isValidPhone(value) {
    return /^(\+98|0)?9\d{9}$/.test(value.replace(/\s|-/g, ''));
  }

  function isValidEmail(value) {
    if (!value) return true; // optional
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameEl = form.querySelector('#name');
      const phoneEl = form.querySelector('#phone');
      const emailEl = form.querySelector('#email');
      const messageEl = form.querySelector('#message');

      let ok = true;

      setError(nameEl, !nameEl.value.trim(), 'لطفاً نام را وارد کنید');
      if (!nameEl.value.trim()) ok = false;

      setError(phoneEl, !isValidPhone(phoneEl.value), 'شماره معتبر وارد کنید');
      if (!isValidPhone(phoneEl.value)) ok = false;

      setError(emailEl, !isValidEmail(emailEl.value), 'ایمیل نامعتبر است');
      if (!isValidEmail(emailEl.value)) ok = false;

      setError(messageEl, !messageEl.value.trim(), 'پیام نمی‌تواند خالی باشد');
      if (!messageEl.value.trim()) ok = false;

      if (!ok) return;

      // Fake submit with animation
      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.textContent = 'پیام شما با موفقیت ارسال شد!';
      document.body.appendChild(toast);
      requestAnimationFrame(() => toast.classList.add('show'));
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
      }, 2500);

      form.reset();
    });
  }
});


