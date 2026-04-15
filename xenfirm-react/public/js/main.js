// ── XENFIRM TECHNOLOGIES — Global JS ──

// ── Reveal helper — exposed globally so inline scripts can call XF.observe()
// after injecting dynamic content (service cards, values grid, etc.)
window.XF = (function () {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });

  function observe(root) {
    const scope = root || document;
    scope.querySelectorAll('.anim-fade-up:not(.visible)').forEach(el => {
      revealObserver.observe(el);
    });
  }

  // Safety net: after 2.5 s, force-reveal anything still hidden
  setTimeout(() => {
    document.querySelectorAll('.anim-fade-up:not(.visible)').forEach(el => {
      el.classList.add('visible');
    });
  }, 2500);

  return { observe };
})();

document.addEventListener('DOMContentLoaded', () => {

  // Initial observation pass for elements already in the DOM
  XF.observe();

  // Active nav link
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a, .mobile-menu a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  // Navbar scroll shadow
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Hamburger toggle
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  hamburger?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    if (mobileMenu?.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  // Close mobile menu on link click
  document.querySelectorAll('.mobile-menu a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu?.classList.remove('open');
      document.querySelectorAll('.hamburger span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    });
  });

  // Counter animation (stat sections + hero mini cards)
  document.querySelectorAll('[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        const duration = 1200;
        const steps = 60;
        const step = Math.ceil(target / steps);
        let count = 0;
        const interval = setInterval(() => {
          count = Math.min(count + step, target);
          el.textContent = count + suffix;
          if (count >= target) clearInterval(interval);
        }, duration / steps);
        obs.unobserve(el);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
  });

  // Contact form handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const original = btn.innerHTML;
      btn.innerHTML = '✓ Message Sent!';
      btn.style.background = '#076638';
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = original;
        btn.style.background = '';
        btn.disabled = false;
        contactForm.reset();
      }, 3500);
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

});
