/* ============================================================
   NISHAN PORTFOLIO — style.css  (Revised Premium)
   ============================================================ */

*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --black:      #080808;
  --surface:    #111111;
  --white:      #fdfcf9;
  --gold:       #d4af37; /* More metallic gold */
  --gold-light: #f1e5ac;
  --gold-dim:   rgba(212,175,55,0.12);
  --muted:      #88837d;
  --border:     rgba(212,175,55,0.15);
  --ease:       cubic-bezier(0.23, 1, 0.32, 1);
}

html { scroll-behavior: smooth; background: var(--black); }

body {
  background: var(--black);
  color: var(--white);
  font-family: 'DM Sans', sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
  cursor: none; /* Custom cursor */
}

/* ── REFINED GLASS MODAL ── */
#cv-modal, #pw-gate {
  backdrop-filter: blur(15px) saturate(180%);
  -webkit-backdrop-filter: blur(15px);
  background: rgba(8, 8, 8, 0.85);
}

.cv-panel, .pw-panel {
  background: rgba(20, 20, 20, 0.95);
  border: 1px solid var(--border);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

/* ── BETTER TYPOGRAPHY ── */
.hero-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(60px, 12vw, 160px);
  font-weight: 600;
  letter-spacing: -0.04em;
  line-height: 0.85;
}

.section-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(40px, 8vw, 85px);
  font-weight: 500;
  letter-spacing: -0.02em;
}

/* ── IMPROVED BUTTONS ── */
.nav-cta {
  padding: 12px 28px;
  border-radius: 0; /* Sharp for professional look */
  font-weight: 600;
  background: var(--gold);
  color: var(--black);
}

/* ── PROJECT LIST REFINEMENT ── */
.pi {
  border-bottom: 1px solid rgba(255,255,255,0.05);
  transition: all 0.5s var(--ease);
}

.pi:hover {
  background: rgba(212,175,55,0.03);
  padding-left: 20px;
}

.tag-cta {
  font-weight: 700;
  border-color: var(--gold) !important;
}

/* ── RESPONSIVE FIXES ── */
@media (max-width: 768px) {
  body { cursor: auto; } /* Disable custom cursor on mobile for UX */
  .cursor-dot, .cursor-ring { display: none; }
  .hero-content { padding-bottom: 40px; }
  .about-grid { grid-template-columns: 1fr; gap: 40px; }
  .nav-links { display: none; } /* Use a hamburger menu if needed, or keep hidden */
}

/* ... keep your original animation keyframes ... */
