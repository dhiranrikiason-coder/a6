/* ==========================================================================
   METALLICTOTE - CLIENT INTERACTIONS & ATELIER ENGINE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Drawer
  const toggleBtn = document.querySelector('.mobile-toggle-btn');
  const drawer = document.querySelector('.mobile-drawer');
  const closeBtn = document.querySelector('.drawer-close-btn');
  const overlay = document.querySelector('.drawer-overlay');

  function openDrawer() {
    if (drawer) drawer.classList.add('open');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (drawer) drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  // FAQ Accordions
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isOpen) {
          item.classList.add('active');
        }
      });
    }
  });

  // Client Concierge Inquiry Form
  const form = document.getElementById('concierge-form') || document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const feedback = document.getElementById('form-feedback');
      if (feedback) {
        feedback.className = 'form-alert form-alert-success';
        feedback.style.display = 'block';
        feedback.innerHTML = '<strong>Atelier Consultation Requested:</strong> Your bespoke leather inquiry has been transmitted to our Milanese client relations director. An artisan specialist will respond within 24 business hours.';
      }
      form.reset();
    });
  }
});
