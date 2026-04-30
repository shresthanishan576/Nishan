/* ============================================================
   NISHAN PORTFOLIO — style.css (Premium Animated)
   ============================================================ */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --black: #080808;
  --surface: #111111;
  --surface2: #181818;
  --white: #fdfcf9;
  --gold: #d4af37;
  --gold-light: #f1e5ac;
  --gold-dim: rgba(212,175,55,0.12);
  --muted: #88837d;
  --border: rgba(212,175,55,0.15);
  --ease: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
}

html { scroll-behavior: smooth; background: var(--black); }
body {
  background: var(--black);
  color: var(--white);
  font-family: 'DM Sans', sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
  cursor: none;
}

.container { max-width: 1200px; margin: 0 auto; padding: 0 40px; }
a { color: inherit; text-decoration: none; }
em { font-style: normal; color: var(--gold); }
strong { color: var(--gold-light); font-weight: 600; }
.gold-dot { color: var(--gold); }
.gold-text { color: var(--gold); }

/* ── PRELOADER ── */
#preloader {
  position: fixed; inset: 0; z-index: 10000;
  background: var(--black);
  display: flex; align-items: center; justify-content: center;
  transition: opacity 0.6s ease, visibility 0.6s ease;
}
#preloader.done { opacity: 0; visibility: hidden; pointer-events: none; }
.loader-inner { text-align: center; }
.loader-line {
  width: 120px; height: 1px; background: rgba(255,255,255,0.1);
  margin: 0 auto 20px; position: relative; overflow: hidden;
}
.loader-line::after {
  content: ''; position: absolute; left: -100%; top: 0;
  width: 100%; height: 100%; background: var(--gold);
  animation: loaderSlide 1.5s ease-in-out infinite;
}
@keyframes loaderSlide { 0%{left:-100%} 50%{left:0} 100%{left:100%} }
.loader-text {
  font-family: 'Cormorant Garamond', serif;
  font-size: 28px; font-weight: 600; letter-spacing: 0.05em;
}
.loader-counter { font-size: 14px; color: var(--muted); margin-top: 10px; font-variant-numeric: tabular-nums; }

/* ── CUSTOM CURSOR ── */
.cursor-dot, .cursor-ring {
  position: fixed; top: 0; left: 0; pointer-events: none; z-index: 9999;
  border-radius: 50%; will-change: transform;
}
.cursor-dot { width: 6px; height: 6px; background: var(--gold); margin: -3px 0 0 -3px; transition: width .3s, height .3s, margin .3s, opacity .3s; }
.cursor-ring {
  width: 36px; height: 36px; margin: -18px 0 0 -18px;
  border: 1.5px solid rgba(212,175,55,0.4);
  transition: width .4s var(--ease), height .4s var(--ease), margin .4s var(--ease), border-color .3s;
}
body.hovering .cursor-dot { width: 0; height: 0; opacity: 0; }
body.hovering .cursor-ring { width: 60px; height: 60px; margin: -30px 0 0 -30px; border-color: var(--gold); }

/* ── AMBIENT CANVAS ── */
#ambientCanvas { position: fixed; inset: 0; z-index: 0; pointer-events: none; opacity: 0.4; }

/* ── NAVBAR ── */
#navbar {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  display: flex; align-items: center; justify-content: space-between;
  padding: 20px 40px;
  background: rgba(8,8,8,0.6); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid transparent;
  transition: padding .4s ease, background .4s ease, border-color .4s ease;
}
#navbar.scrolled {
  padding: 14px 40px;
  background: rgba(8,8,8,0.9);
  border-bottom-color: var(--border);
}
.nav-logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 24px; font-weight: 700; letter-spacing: 0.02em;
}
.nav-links { display: flex; gap: 32px; list-style: none; }
.nav-links a {
  font-size: 14px; font-weight: 500; letter-spacing: 0.04em; text-transform: uppercase;
  color: var(--muted); position: relative; transition: color .3s;
}
.nav-links a::after {
  content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 1px;
  background: var(--gold); transition: width .4s var(--ease);
}
.nav-links a:hover { color: var(--white); }
.nav-links a:hover::after { width: 100%; }
.nav-cta {
  display: flex; align-items: center; gap: 8px;
  padding: 10px 24px; border: 1px solid var(--gold); background: transparent;
  color: var(--gold); font-size: 13px; font-weight: 600; letter-spacing: 0.05em;
  text-transform: uppercase; cursor: none; transition: all .3s ease;
}
.nav-cta:hover { background: var(--gold); color: var(--black); }

/* Hamburger */
.hamburger {
  display: none; flex-direction: column; gap: 5px;
  background: none; border: none; cursor: none; padding: 8px; z-index: 1100;
}
.hamburger span {
  display: block; width: 24px; height: 1.5px; background: var(--white);
  transition: all .3s ease; transform-origin: center;
}
.hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(4px, 5px); }
.hamburger.active span:nth-child(2) { opacity: 0; }
.hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(4px, -5px); }

.mobile-menu {
  position: fixed; inset: 0; z-index: 1050;
  background: rgba(8,8,8,0.97); backdrop-filter: blur(30px);
  display: flex; align-items: center; justify-content: center;
  opacity: 0; visibility: hidden; transition: all .5s var(--ease);
}
.mobile-menu.open { opacity: 1; visibility: visible; }
.mobile-menu ul { list-style: none; text-align: center; }
.mobile-menu li { margin: 20px 0; }
.mobile-menu a {
  font-family: 'Cormorant Garamond', serif;
  font-size: 40px; font-weight: 500; color: var(--muted);
  transition: color .3s; display: inline-block;
}
.mobile-menu a:hover { color: var(--gold); }

/* ── HERO ── */
#hero {
  position: relative; z-index: 1;
  min-height: 100vh; display: flex; align-items: center; justify-content: center;
  padding: 120px 40px 80px; text-align: center;
}
.hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 8px 18px; border: 1px solid var(--border); border-radius: 100px;
  font-size: 13px; color: var(--muted); letter-spacing: 0.06em; text-transform: uppercase;
  margin-bottom: 40px;
}
.badge-dot {
  width: 7px; height: 7px; border-radius: 50%; background: #4ade80;
  animation: pulse-dot 2s ease-in-out infinite;
}
@keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.4)} }

.hero-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(56px, 11vw, 150px);
  font-weight: 600; letter-spacing: -0.04em; line-height: 0.9;
  margin-bottom: 30px;
}
.hero-title .line { display: block; overflow: hidden; }
.hero-title .word {
  display: inline-block;
  transform: translateY(110%); opacity: 0;
  animation: wordReveal 1s var(--ease-out) forwards;
}
.hero-title .line:nth-child(2) .word { animation-delay: 0.15s; }
@keyframes wordReveal { to { transform: translateY(0); opacity: 1; } }

.hero-subtitle {
  max-width: 580px; margin: 0 auto 40px;
  font-size: 17px; color: var(--muted); line-height: 1.7;
}
.hero-ctas { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

.btn-primary {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 14px 32px; background: var(--gold); color: var(--black);
  font-size: 14px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase;
  position: relative; overflow: hidden; transition: transform .3s;
}
.btn-primary::before {
  content: ''; position: absolute; inset: 0;
  background: var(--gold-light); transform: translateX(-101%);
  transition: transform .5s var(--ease);
}
.btn-primary:hover::before { transform: translateX(0); }
.btn-primary span, .btn-primary svg { position: relative; z-index: 1; }

.btn-ghost {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 14px 32px; border: 1px solid var(--border); color: var(--white);
  font-size: 14px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase;
  transition: border-color .3s, color .3s;
}
.btn-ghost:hover { border-color: var(--gold); color: var(--gold); }

/* Scroll Indicator */
.scroll-indicator {
  position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 10px;
}
.scroll-indicator span { font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); }
.scroll-line { width: 1px; height: 50px; background: rgba(255,255,255,0.1); position: relative; overflow: hidden; }
.scroll-line::after {
  content: ''; position: absolute; top: -100%; left: 0; width: 100%; height: 100%;
  background: var(--gold); animation: scrollLine 2s ease-in-out infinite;
}
@keyframes scrollLine { 0%{top:-100%} 50%{top:0} 100%{top:100%} }

/* ── MARQUEE ── */
.marquee-strip {
  position: relative; z-index: 1;
  padding: 20px 0; border-top: 1px solid rgba(255,255,255,0.05);
  border-bottom: 1px solid rgba(255,255,255,0.05);
  overflow: hidden;
}
.marquee-track {
  display: flex; gap: 40px; white-space: nowrap;
  animation: marquee 25s linear infinite;
  font-family: 'Cormorant Garamond', serif;
  font-size: 20px; color: var(--muted); font-weight: 400;
}
.marquee-track .sep { color: var(--gold); font-size: 12px; }
@keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

/* ── SECTIONS ── */
section { position: relative; z-index: 1; padding: 120px 0; }
.section-label {
  display: block; font-size: 13px; font-weight: 600; color: var(--gold);
  letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 16px;
}
.section-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(38px, 7vw, 80px);
  font-weight: 500; letter-spacing: -0.02em; line-height: 1;
}

/* ── ABOUT ── */
.about-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 80px; margin-top: 60px; align-items: start; }
.about-text p { font-size: 16px; color: var(--muted); line-height: 1.8; margin-bottom: 20px; }
.about-stats { display: grid; grid-template-columns: 1fr; gap: 20px; }
.stat-box {
  padding: 28px 30px; border: 1px solid var(--border); background: var(--surface);
  position: relative; overflow: hidden; transition: border-color .4s, transform .3s;
}
.stat-box::before {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(135deg, var(--gold-dim), transparent);
  opacity: 0; transition: opacity .4s;
}
.stat-box:hover { border-color: var(--gold); transform: translateY(-2px); }
.stat-box:hover::before { opacity: 1; }
.stat-number {
  font-family: 'Cormorant Garamond', serif;
  font-size: 48px; font-weight: 600; color: var(--gold); line-height: 1;
}
.stat-suffix { font-family: 'Cormorant Garamond', serif; font-size: 36px; color: var(--gold); }
.stat-label { display: block; font-size: 13px; color: var(--muted); margin-top: 6px; letter-spacing: 0.04em; text-transform: uppercase; }

/* ── PROJECTS ── */
.projects-list { margin-top: 60px; }
.project-item {
  display: grid; grid-template-columns: 60px 1fr auto 50px; align-items: center; gap: 30px;
  padding: 32px 0; border-bottom: 1px solid rgba(255,255,255,0.06);
  transition: all .5s var(--ease); position: relative;
}
.project-item::before {
  content: ''; position: absolute; left: -40px; right: -40px; top: 0; bottom: 0;
  background: rgba(212,175,55,0.03); opacity: 0; transition: opacity .4s;
}
.project-item:hover::before { opacity: 1; }
.project-item:hover { padding-left: 20px; }
.pi-index {
  font-family: 'Cormorant Garamond', serif;
  font-size: 20px; color: var(--gold); font-weight: 500;
}
.pi-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 28px; font-weight: 500; margin-bottom: 6px;
  transition: color .3s;
}
.project-item:hover .pi-title { color: var(--gold); }
.pi-desc { font-size: 14px; color: var(--muted); }
.pi-tags { display: flex; gap: 8px; flex-wrap: wrap; }
.tag {
  padding: 4px 12px; border: 1px solid rgba(255,255,255,0.1);
  font-size: 11px; letter-spacing: 0.05em; text-transform: uppercase; color: var(--muted);
  transition: border-color .3s, color .3s;
}
.project-item:hover .tag { border-color: var(--gold); color: var(--gold-light); }
.pi-arrow { transition: transform .4s var(--ease); color: var(--muted); }
.project-item:hover .pi-arrow { transform: translate(4px, -4px); color: var(--gold); }

/* ── SKILLS ── */
.skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 60px; }
.sk-card {
  padding: 30px; border: 1px solid rgba(255,255,255,0.06);
  background: var(--surface); position: relative; overflow: hidden;
  transition: border-color .4s, transform .3s;
}
.sk-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
  transform: scaleX(0); transition: transform .5s var(--ease);
}
.sk-card:hover { border-color: var(--border); transform: translateY(-3px); }
.sk-card:hover::before { transform: scaleX(1); }
.sk-icon { margin-bottom: 16px; }
.sk-card h4 { font-size: 15px; font-weight: 600; margin-bottom: 14px; }
.sk-bar { height: 3px; background: rgba(255,255,255,0.06); border-radius: 2px; overflow: hidden; }
.sk-fill { height: 100%; background: var(--gold); width: 0; border-radius: 2px; transition: width 1.2s var(--ease); }

/* ── CONTACT ── */
.contact-subtitle { font-size: 18px; color: var(--muted); margin-top: 20px; }
.contact-links { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 50px; }
.contact-card {
  display: flex; align-items: center; gap: 20px;
  padding: 28px 30px; border: 1px solid rgba(255,255,255,0.06);
  background: var(--surface); transition: all .4s var(--ease); position: relative; overflow: hidden;
}
.contact-card::before {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(135deg, var(--gold-dim), transparent);
  opacity: 0; transition: opacity .4s;
}
.contact-card:hover { border-color: var(--gold); transform: translateY(-3px); }
.contact-card:hover::before { opacity: 1; }
.contact-card > * { position: relative; z-index: 1; }
.cc-label { font-size: 12px; color: var(--gold); text-transform: uppercase; letter-spacing: 0.1em; }
.cc-value { font-size: 15px; flex: 1; }
.cc-arrow { color: var(--muted); transition: all .3s; }
.contact-card:hover .cc-arrow { color: var(--gold); transform: translate(3px, -3px); }

/* ── FOOTER ── */
#footer { position: relative; z-index: 1; padding: 30px 0; border-top: 1px solid rgba(255,255,255,0.05); }
.footer-inner { display: flex; justify-content: space-between; align-items: center; }
.footer-copy, .footer-tag { font-size: 13px; color: var(--muted); }

/* ── MODALS ── */
.modal-overlay {
  position: fixed; inset: 0; z-index: 5000;
  background: rgba(8,8,8,0.85); backdrop-filter: blur(15px);
  display: flex; align-items: center; justify-content: center;
  opacity: 0; visibility: hidden; transition: all .4s ease;
}
.modal-overlay.open { opacity: 1; visibility: visible; }
.modal-panel {
  background: var(--surface2); border: 1px solid var(--border);
  padding: 50px; max-width: 480px; width: 90%; position: relative;
  transform: translateY(20px) scale(0.97);
  transition: transform .5s var(--ease);
  box-shadow: 0 30px 60px -20px rgba(0,0,0,0.6);
}
.modal-overlay.open .modal-panel { transform: translateY(0) scale(1); }
.modal-close {
  position: absolute; top: 16px; right: 20px;
  background: none; border: none; color: var(--muted); font-size: 28px;
  cursor: none; transition: color .3s;
}
.modal-close:hover { color: var(--white); }
.modal-icon { margin-bottom: 20px; }
.modal-panel h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 28px; font-weight: 600; margin-bottom: 8px;
}
.modal-panel p { font-size: 14px; color: var(--muted); margin-bottom: 24px; }
.pw-field { display: flex; gap: 0; }
.pw-field input {
  flex: 1; padding: 14px 18px; background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1); border-right: none;
  color: var(--white); font-size: 14px; outline: none;
  transition: border-color .3s;
}
.pw-field input:focus { border-color: var(--gold); }
.pw-field button {
  padding: 14px 20px; background: var(--gold); border: 1px solid var(--gold);
  color: var(--black); cursor: none; transition: background .3s;
}
.pw-field button:hover { background: var(--gold-light); }
.pw-field input.shake { animation: shake .4s ease; }
@keyframes shake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-8px)} 50%{transform:translateX(8px)} 75%{transform:translateX(-4px)} }
.pw-error { display: block; font-size: 12px; color: #e74c3c; margin-top: 12px; opacity: 0; transition: opacity .3s; }
.pw-error.show { opacity: 1; }

/* CV Panel */
.cv-panel { max-width: 600px; }
.cv-content h3 { font-size: 32px; margin-bottom: 12px; }
.cv-summary { line-height: 1.7; }
.cv-sections { margin-top: 30px; }
.cv-section { margin-bottom: 24px; }
.cv-section h4 { font-size: 13px; color: var(--gold); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid var(--border); }
.cv-item strong { display: block; margin-bottom: 6px; }
.cv-item p { font-size: 14px; color: var(--muted); line-height: 1.7; }
.cv-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.cv-tags span { padding: 5px 14px; border: 1px solid var(--border); font-size: 12px; color: var(--muted); }

/* ── REVEAL ANIMATION ── */
.reveal { opacity: 0; transform: translateY(40px); transition: opacity .8s var(--ease-out), transform .8s var(--ease-out); }
.reveal.active { opacity: 1; transform: translateY(0); }

/* ── RESPONSIVE ── */
@media (max-width: 900px) {
  .skills-grid { grid-template-columns: repeat(2, 1fr); }
  .project-item { grid-template-columns: 40px 1fr 40px; }
  .pi-tags { display: none; }
}
@media (max-width: 768px) {
  body { cursor: auto; }
  .cursor-dot, .cursor-ring { display: none !important; }
  .container { padding: 0 24px; }
  #navbar { padding: 16px 24px; }
  .nav-links, .nav-cta { display: none; }
  .hamburger { display: flex; }
  #hero { padding: 100px 24px 60px; }
  section { padding: 80px 0; }
  .about-grid { grid-template-columns: 1fr; gap: 40px; }
  .skills-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
  .contact-links { grid-template-columns: 1fr; }
  .footer-inner { flex-direction: column; gap: 8px; text-align: center; }
  .project-item { grid-template-columns: 1fr; gap: 10px; padding: 24px 0; }
  .pi-index { display: none; }
  .mobile-menu a { font-size: 30px; }
}
@media (max-width: 480px) {
  .hero-title { font-size: clamp(42px, 14vw, 80px); }
  .skills-grid { grid-template-columns: 1fr; }
  .sk-card { padding: 20px; }
  .stat-number { font-size: 36px; }
}
