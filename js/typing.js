/**
 * Typing animation for hero positioning statement
 */
(function () {
  const el = document.getElementById('hero-typing');
  if (!el) return;

  const text = el.getAttribute('data-text') || '';
  const speed = 35;
  let i = 0;
  el.textContent = '';

  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  // Start after a brief delay so the page settles
  setTimeout(type, 600);
})();
