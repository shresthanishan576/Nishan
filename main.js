/* ============================================================
   NISHAN PORTFOLIO — main.js  (Premium Edition)
   ============================================================ */

'use strict';

/* ══════════════ CANVAS PARTICLE BACKGROUND ══════════════ */
(function initCanvas() {
  const canvas = document.getElementById('bgCanvas');
  const ctx    = canvas.getContext('2d');
  let W, H, particles = [], animId;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function Particle() {
    this.reset();
  }
  Particle.prototype.reset = function() {
    this.x  = Math.random() * W;
    this.y  = Math.random() * H;
    this.r  = Math.random() * 1.2 + 0.3;
    this.vx = (Math.random() - 0.5) * 0.18;
    this.vy = (Math.random() - 0.5) * 0.18;
    this.a  = Math.random() * 0.35 + 0.05;
    this.life = Math.random() * 200 + 100;
    this.age  = 0;
  };
  Particle.prototype.update = function() {
    this.x  += this.vx;
    this.y  += this.vy;
    this.age += 1;
    if (this.age > this.life || this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
  };
  Particle.prototype.draw = function() {
    const fade = Math.sin((this.age / this.life) * Math.PI);
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(201,169,110,${this.a * fade})`;
    ctx.fill();
  };

  function init() {
    resize();
    particles = Array.from({ length: 90 }, () => new Particle());
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    // draw faint connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(201,169,110,${0.04 * (1 - d / 120)})`;
          ctx.lineWidth   = 0.4;
          ctx.stroke();
        }
      }
    }
    animId = requestAnimationFrame(loop);
  }

  window.addEventListener('resize', resize);
  init();
  loop();
})();


/* ══════════════ CUSTOM CURSOR ══════════════ */
(function initCursor() {
  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  let mx = -100, my = -100;
  let rx = -100, ry = -100;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  // smooth ring follow
  (function followRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(followRing);
  })();

  document.querySelectorAll('a, button, .pi:not(.no-link), .stat-box, .sk-card').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
  });

  document.addEventListener('mouseleave', () => {
    dot.style.opacity  = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity  = '1';
    ring.style.opacity = '1';
  });
})();


/* ══════════════ LOADER ══════════════ */
(function initLoader() {
  const loader = document.getElementById('loader');
  const bar    = document.getElementById('loaderBar');
  const count  = document.getElementById('loaderCount');
  let n = 0, done = false;

  function dismiss() {
    if (done) return; done = true;
    loader.style.transition = 'transform 1s cubic-bezier(0.76,0,0.24,1), opacity 0.6s ease';
    loader.style.transform  = 'translateY(-100%)';
    loader.style.opacity    = '0';
    setTimeout(() => {
      loader.style.display = 'none';
      startPage();
    }, 1050);
  }

  const iv = setInterval(() => {
    n = Math.min(n + Math.floor(Math.random() * 6) + 1, 100);
    bar.style.width       = n + '%';
    count.textContent     = String(n).padStart(3, '0');
    if (n >= 100) { clearInterval(iv); setTimeout(dismiss, 380); }
  }, 22);

  setTimeout(dismiss, 4200); // fallback
})();


/* ══════════════ PAGE ANIMATIONS ══════════════ */
function startPage() {

  /* nav scroll effect */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  /* hero entrance */
  const eyebrow = document.querySelector('.hero-eyebrow');
  const words   = document.querySelectorAll('.ht-word');
  const bottom  = document.querySelector('.hero-bottom');

  if (eyebrow) {
    eyebrow.style.cssText = 'opacity:1; transition:opacity 0.8s ease 0.1s;';
  }
  words.forEach((w, i) => {
    setTimeout(() => {
      w.style.cssText =
        'transform:translateY(0); opacity:1;' +
        'transition:transform 1.2s cubic-bezier(0.16,1,0.3,1), opacity 0.9s ease;';
    }, 100 + i * 130);
  });
  setTimeout(() => {
    if (bottom) bottom.style.cssText = 'opacity:1; transition:opacity 0.9s ease;';
  }, 500);

  /* hero bg word parallax */
  const bgWord = document.querySelector('.hero-bg-word');
  if (bgWord) {
    window.addEventListener('scroll', () => {
      bgWord.style.transform =
        `translate(-50%, calc(-50% + ${window.scrollY * 0.25}px))`;
    }, { passive: true });
  }

  /* scroll reveal */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      setTimeout(() => {
        el.style.opacity    = '1';
        el.style.transform  = 'translateY(0)';
        el.style.transition = 'opacity 0.85s ease, transform 0.85s cubic-bezier(0.16,1,0.3,1)';
      }, i * 55);
      io.unobserve(el);
    });
  }, { threshold: 0.07 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* skill bar animate on view */
  const skObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('animated');
        skObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.sk-card').forEach(c => skObs.observe(c));

  /* stat counter animation */
  const statObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const numEl = e.target.querySelector('.sb-num');
      if (!numEl || numEl.dataset.animated) return;
      numEl.dataset.animated = '1';
      const raw = numEl.textContent.replace(/[^0-9]/g, '');
      if (!raw) return;
      const target = parseInt(raw);
      let cur = 0;
      const step = Math.ceil(target / 30);
      const iv = setInterval(() => {
        cur = Math.min(cur + step, target);
        const suffix = numEl.querySelector('em') ? numEl.querySelector('em').outerHTML : '';
        numEl.innerHTML = cur + suffix;
        if (cur >= target) clearInterval(iv);
      }, 40);
      statObs.unobserve(e.target);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-box').forEach(s => statObs.observe(s));

  /* project item hover — magnetic arrow effect */
  document.querySelectorAll('.pi:not(.no-link)').forEach(item => {
    item.addEventListener('mousemove', e => {
      const rect = item.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 12;
      const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 8;
      item.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    item.addEventListener('mouseleave', () => {
      item.style.transform = '';
    });
  });
}


/* ══════════════ PASSWORD GATE ══════════════ */
const CV_PASSWORD = 'nishan2026'; // ← CHANGE THIS
let   pwUnlocked  = false;

const pwGate    = document.getElementById('pw-gate');
const pwInput   = document.getElementById('pw-input');
const pwSubmit  = document.getElementById('pw-submit');
const pwError   = document.getElementById('pw-error');
const pwClose   = document.getElementById('pw-gate-close');
const pwRow     = document.querySelector('.pw-input-row');

function openPwGate() {
  pwGate.classList.add('open');
  document.body.style.overflow = 'hidden';
  pwInput.value = '';
  pwError.classList.remove('show');
  setTimeout(() => pwInput.focus(), 350);
}
function closePwGate() {
  pwGate.classList.remove('open');
  document.body.style.overflow = '';
}
function checkPw() {
  if (pwInput.value === CV_PASSWORD) {
    pwUnlocked = true;
    closePwGate();
    openCv();
  } else {
    pwError.classList.add('show');
    pwInput.value = '';
    pwRow.classList.remove('shake');
    void pwRow.offsetWidth; // reflow
    pwRow.classList.add('shake');
    setTimeout(() => pwRow.classList.remove('shake'), 500);
    pwInput.focus();
  }
}

pwSubmit.addEventListener('click', checkPw);
pwInput.addEventListener('keydown', e => { if (e.key === 'Enter') checkPw(); });
pwClose.addEventListener('click', closePwGate);
pwGate.addEventListener('click', e => { if (e.target === pwGate) closePwGate(); });


/* ══════════════ CV MODAL ══════════════ */
const cvModal  = document.getElementById('cv-modal');
const cvClose  = document.getElementById('closeCvBtn');

function openCv() {
  cvModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCv() {
  cvModal.classList.remove('open');
  document.body.style.overflow = '';
}

// Collect all "Hire Me / View CV" triggers
const cvTriggers = [
  document.getElementById('openCvBtn'),
  document.getElementById('openCvBtn2'),
];
cvTriggers.forEach(btn => btn && btn.addEventListener('click', () => {
  pwUnlocked ? openCv() : openPwGate();
}));

cvClose.addEventListener('click', closeCv);
cvModal.addEventListener('click', e => { if (e.target === cvModal) closeCv(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeCv(); closePwGate(); }
});
