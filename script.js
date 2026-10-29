// Mobile menu
const menu = document.querySelector('.menu');
const nav = document.querySelector('#navlinks');
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}));

// Footer year
document.querySelector('#year').textContent = new Date().getFullYear();

// Header shadow once the page scrolls
const header = document.querySelector('.header');
const setHeader = () => header.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', setHeader, { passive: true });
setHeader();

// Scroll reveal: each group's items fade up in sequence as they come into view
const groups = [
  '.hero-grid > div:first-child > *',
  '.hero-art',
  '.statement-inner > *',
  '.section-head > *',
  '.card',
  '.approach-grid > div:first-child > *',
  '.steps > div',
  '.about-photo',
  '.about-grid > div:last-child > *',
  '.contact-grid > div:first-child > *',
  '.contact-form'
];
const items = [];
groups.forEach(selector => {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.classList.add('reveal');
    el.style.setProperty('--d', Math.min(i, 6) * 90 + 'ms');
    items.push(el);
  });
});

const show = el => {
  el.classList.add('in');
  // Clear the stagger delay afterward so hover effects respond instantly
  setTimeout(() => el.style.setProperty('--d', '0ms'), 1400);
};

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        show(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  items.forEach(el => io.observe(el));
} else {
  items.forEach(show);
}

// Contact form (Web3Forms)
const form = document.querySelector('#contact-form');
if (form) {
  const status = form.querySelector('.form-status');
  const button = form.querySelector('button[type="submit"]');
  const say = (text, kind) => { status.textContent = text; status.className = 'form-status ' + (kind || ''); };

  form.addEventListener('submit', async e => {
    e.preventDefault();

    // Check required fields
    let firstBad = null;
    form.querySelectorAll('[required]').forEach(input => {
      const bad = !input.value.trim() || (input.type === 'email' && !input.checkValidity());
      input.closest('.field').classList.toggle('invalid', bad);
      if (bad && !firstBad) firstBad = input;
    });
    if (firstBad) {
      say('Please fill in your name, a valid email, and a message.', 'err');
      firstBad.focus();
      return;
    }

    if (form.access_key.value === 'YOUR_ACCESS_KEY') {
      say('The form isn\'t connected yet. Please email catrina.faust@fausthrsolutions.com.', 'err');
      return;
    }

    button.disabled = true;
    say('Sending…');
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form)))
      });
      const data = await res.json();
      if (res.ok && data.success) {
        form.reset();
        say('Thank you! Your message has been sent, and Catrina will be in touch soon.', 'ok');
      } else {
        throw new Error(data.message || 'Request failed');
      }
    } catch (err) {
      say('Something went wrong. Please try again or email catrina.faust@fausthrsolutions.com.', 'err');
    } finally {
      button.disabled = false;
    }
  });

  form.querySelectorAll('[required]').forEach(input =>
    input.addEventListener('input', () => input.closest('.field').classList.remove('invalid')));
}
