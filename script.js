const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const year = document.getElementById('year');

year.textContent = new Date().getFullYear();

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('active');
  navToggle.classList.toggle('active', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.faq-question').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    item.classList.toggle('active');
  });
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get('name').trim();
  const email = formData.get('email').trim();
  const phone = formData.get('phone').trim();
  const message = formData.get('message').trim();

  if (!name || !email || !phone) {
    formStatus.textContent = 'Please fill name, email and phone number.';
    return;
  }

  const subject = encodeURIComponent(`Workspace enquiry from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message || 'I want to know more about RAW Coworking.'}`
  );

  formStatus.textContent = 'Opening your email app to send the enquiry...';
  window.location.href = `mailto:contact@redartworks.com?subject=${subject}&body=${body}`;
  contactForm.reset();
});
