/* ================================================
   components.js — Shared UI for MyDesiFlix
   ================================================ */

const CATS = [
  // ── Popular / Trending ──
  { key: 'new',             label: '🆕 New' },
  { key: 'trending',        label: '🔥 Trending' },
  { key: 'hd',              label: '🎬 HD' },
  { key: 'amateur',         label: 'Amateur' },
  { key: 'homemade',        label: 'Homemade' },
  { key: 'xxx',             label: 'XXX' },
  { key: 'hardcore',        label: 'Hardcore' },
  { key: 'pov',             label: 'POV' },

  // ── Desi / South Asian ──
  { key: 'indian',          label: '🇮🇳 Indian' },
  { key: 'desi',            label: 'Desi' },
  { key: 'bangladeshi',     label: '🇧🇩 Bangladeshi' },
  { key: 'pakistani',       label: '🇵🇰 Pakistani' },
  { key: 'nepali',          label: '🇳🇵 Nepali' },
  { key: 'srilankan',       label: '🇱🇰 Sri Lankan' },
  { key: 'desi-bhabhi',     label: 'Desi Bhabhi' },
  { key: 'desi-college',    label: 'Desi College' },
  { key: 'desi-village',    label: 'Desi Village' },
  { key: 'desi-couple',     label: 'Desi Couple' },
  { key: 'desi-wife',       label: 'Desi Wife' },
  { key: 'desi-aunty',      label: 'Desi Aunty' },
  { key: 'hindustani',      label: 'Hindustani' },
  { key: 'bollywood',       label: 'Bollywood' },

  // ── Asian ──
  { key: 'asian',           label: 'Asian' },
  { key: 'japanese',        label: 'Japanese' },
  { key: 'chinese',         label: 'Chinese' },
  { key: 'korean',          label: 'Korean' },
  { key: 'thai',            label: 'Thai' },
  { key: 'filipina',        label: 'Filipina' },
  { key: 'vietnamese',      label: 'Vietnamese' },
  { key: 'indonesian',      label: 'Indonesian' },
  { key: 'malaysian',       label: 'Malaysian' },
  { key: 'javanese',        label: 'Javanese' },

  // ── Western / Ethnicity ──
  { key: 'american',        label: 'American' },
  { key: 'european',        label: 'European' },
  { key: 'russian',         label: 'Russian' },
  { key: 'british',         label: 'British' },
  { key: 'french',          label: 'French' },
  { key: 'german',          label: 'German' },
  { key: 'italian',         label: 'Italian' },
  { key: 'czech',           label: 'Czech' },
  { key: 'ukrainian',       label: 'Ukrainian' },
  { key: 'hungarian',       label: 'Hungarian' },
  { key: 'latina',          label: 'Latina' },
  { key: 'mexican',         label: 'Mexican' },
  { key: 'brazilian',       label: 'Brazilian' },
  { key: 'colombian',       label: 'Colombian' },
  { key: 'spanish',         label: 'Spanish' },
  { key: 'puerto-rican',    label: 'Puerto Rican' },
  { key: 'ebony',           label: 'Ebony' },
  { key: 'black',           label: 'Black' },
  { key: 'african',         label: 'African' },
  { key: 'arab',            label: 'Arab' },
  { key: 'middle-eastern',  label: 'Middle Eastern' },
  { key: 'turkish',         label: 'Turkish' },
  { key: 'iranian',         label: 'Iranian' },
  { key: 'interracial',     label: 'Interracial' },

  // ── Age / Type ──
  { key: 'teen',            label: '18+ Teen' },
  { key: 'college',         label: 'College' },
  { key: 'milf',            label: 'MILF' },
  { key: 'mature',          label: 'Mature' },
  { key: 'granny',          label: 'Granny' },
  { key: 'cougar',          label: 'Cougar' },
  { key: 'mom',             label: 'Mom' },
  { key: 'older-younger',   label: 'Older + Younger' },

  // ── Body Type ──
  { key: 'petite',          label: 'Petite' },
  { key: 'big-ass',         label: 'Big Ass' },
  { key: 'big-tits',        label: 'Big Tits' },
  { key: 'natural-tits',    label: 'Natural Tits' },
  { key: 'small-tits',      label: 'Small Tits' },
  { key: 'busty',           label: 'Busty' },
  { key: 'curvy',           label: 'Curvy' },
  { key: 'bbw',             label: 'BBW' },
  { key: 'skinny',          label: 'Skinny' },
  { key: 'fit',             label: 'Fit / Athletic' },
  { key: 'tall',            label: 'Tall' },
  { key: 'blonde',          label: 'Blonde' },
  { key: 'brunette',        label: 'Brunette' },
  { key: 'redhead',         label: 'Redhead' },

  // ── Acts ──
  { key: 'blowjob',         label: 'Blowjob' },
  { key: 'deepthroat',      label: 'Deep Throat' },
  { key: 'cumshot',         label: 'Cumshot' },
  { key: 'creampie',        label: 'Creampie' },
  { key: 'facial',          label: 'Facial' },
  { key: 'anal',            label: 'Anal' },
  { key: 'dp',              label: 'Double Penetration' },
  { key: 'squirting',       label: 'Squirting' },
  { key: 'orgasm',          label: 'Orgasm' },
  { key: 'fingering',       label: 'Fingering' },
  { key: 'fisting',         label: 'Fisting' },
  { key: 'rimjob',          label: 'Rimjob' },
  { key: 'titjob',          label: 'Titjob' },
  { key: 'handjob',         label: 'Handjob' },
  { key: 'footjob',         label: 'Footjob' },
  { key: 'threesome',       label: 'Threesome' },
  { key: 'foursome',        label: 'Foursome' },
  { key: 'orgy',            label: 'Orgy' },
  { key: 'gangbang',        label: 'Gangbang' },
  { key: 'bbc',             label: 'BBC' },
  { key: 'big-cock',        label: 'Big Cock' },
  { key: 'small-cock',      label: 'Small Cock' },
  { key: 'dildo',           label: 'Dildo' },
  { key: 'toys',            label: 'Sex Toys' },
  { key: 'vibrator',        label: 'Vibrator' },
  { key: 'strap-on',        label: 'Strap On' },
  { key: 'massage',         label: 'Massage' },
  { key: 'oiled',           label: 'Oiled' },
  { key: 'wet',             label: 'Wet' },
  { key: 'shower',          label: 'Shower' },
  { key: 'bath',            label: 'Bath' },
  { key: 'outdoor',         label: 'Outdoor' },
  { key: 'public',          label: 'Public' },
  { key: 'car',             label: 'Car Sex' },
  { key: 'pool',            label: 'Pool' },
  { key: 'beach',           label: 'Beach' },

  // ── Genres / Scenes ──
  { key: 'lesbian',         label: 'Lesbian' },
  { key: 'gay',             label: 'Gay' },
  { key: 'bisexual',        label: 'Bisexual' },
  { key: 'shemale',         label: 'Shemale / Trans' },
  { key: 'solo',            label: 'Solo' },
  { key: 'masturbation',    label: 'Masturbation' },
  { key: 'couple',          label: 'Couple' },
  { key: 'swinger',         label: 'Swinger' },
  { key: 'cuckold',         label: 'Cuckold' },
  { key: 'cheating',        label: 'Cheating' },
  { key: 'wife',            label: 'Wife' },
  { key: 'girlfriend',      label: 'Girlfriend' },
  { key: 'casting',         label: 'Casting' },
  { key: 'audition',        label: 'Audition' },
  { key: 'interview',       label: 'Interview' },
  { key: 'reality',         label: 'Reality' },

  // ── Step/Family Fantasy ──
  { key: 'stepmom',         label: 'Step Mom' },
  { key: 'stepdad',         label: 'Step Dad' },
  { key: 'stepsis',         label: 'Step Sister' },
  { key: 'stepbrother',     label: 'Step Brother' },
  { key: 'family',          label: 'Family Roleplay' },
  { key: 'taboo',           label: 'Taboo' },

  // ── Location / Setting ──
  { key: 'office',          label: 'Office' },
  { key: 'kitchen',         label: 'Kitchen' },
  { key: 'bedroom',         label: 'Bedroom' },
  { key: 'classroom',       label: 'Classroom' },
  { key: 'hospital',        label: 'Hospital' },
  { key: 'hotel',           label: 'Hotel' },
  { key: 'gym',             label: 'Gym' },
  { key: 'workout',         label: 'Workout' },
  { key: 'sports',          label: 'Sports' },

  // ── Roleplay ──
  { key: 'nurse',           label: 'Nurse' },
  { key: 'teacher',         label: 'Teacher' },
  { key: 'doctor',          label: 'Doctor' },
  { key: 'maid',            label: 'Maid' },
  { key: 'boss',            label: 'Boss' },
  { key: 'secretary',       label: 'Secretary' },
  { key: 'cheerleader',     label: 'Cheerleader' },
  { key: 'model',           label: 'Model' },
  { key: 'stripper',        label: 'Stripper' },
  { key: 'pornstar',        label: 'Pornstar' },

  // ── Fetish / Kink ──
  { key: 'bdsm',            label: 'BDSM' },
  { key: 'bondage',         label: 'Bondage' },
  { key: 'domination',      label: 'Domination' },
  { key: 'submission',      label: 'Submission' },
  { key: 'femdom',          label: 'Femdom' },
  { key: 'spanking',        label: 'Spanking' },
  { key: 'feet',            label: 'Feet / Foot Fetish' },
  { key: 'pantyhose',       label: 'Pantyhose' },
  { key: 'stockings',       label: 'Stockings' },
  { key: 'lingerie',        label: 'Lingerie' },
  { key: 'latex',           label: 'Latex' },
  { key: 'leather',         label: 'Leather' },
  { key: 'uniform',         label: 'Uniform' },
  { key: 'cosplay',         label: 'Cosplay' },
  { key: 'tattoo',          label: 'Tattoo' },
  { key: 'piercing',        label: 'Piercing' },
  { key: 'glasses',         label: 'Glasses' },

  // ── Special ──
  { key: 'compilation',     label: 'Compilation' },
  { key: 'uncensored',      label: 'Uncensored' },
  { key: 'exclusive',       label: 'Exclusive' },
  { key: 'verified',        label: '✅ Verified' },
];

/* ── Age Gate ── */
function mountAgeGate() {
  if (localStorage.getItem('mdf_age_ok') === '1') return;
  const el = document.getElementById('age-gate');
  if (!el) return;
  el.style.display = 'flex';
  document.getElementById('btn-enter').addEventListener('click', () => {
    localStorage.setItem('mdf_age_ok', '1');
    el.style.opacity = '0';
    el.style.transition = 'opacity .3s';
    setTimeout(() => el.remove(), 300);
  });
  document.getElementById('btn-leave').addEventListener('click', () => {
    window.location.href = 'https://www.google.com';
  });
}

/* ── Navbar HTML ── */
function renderNavbar(activeCat) {
  const catLinks = CATS.map(c =>
    `<a href="category.html?cat=${c.key}" ${activeCat === c.key ? 'class="active"' : ''}>${c.label}</a>`
  ).join('');

  const drawerLinks = CATS.map(c =>
    `<a href="category.html?cat=${c.key}">${c.label}</a>`
  ).join('');

  const q = new URLSearchParams(window.location.search).get('q') || '';

  document.getElementById('navbar').innerHTML = `
    <a href="index.html" class="nav-logo">
      <img src="logo.png" alt="MyDesiFlix" />
      MyDesiFlix
    </a>
    <nav class="nav-cats">
      <a href="categories.html" style="color:var(--red);font-weight:700;border-color:var(--red)!important">📂 All Categories</a>
      ${catLinks}
    </nav>
    <div class="nav-burger" id="burger" onclick="toggleDrawer()">
      <span></span><span></span><span></span>
    </div>
  `;

  // Sticky search bar
  const sb = document.getElementById('search-bar');
  if (sb) {
    sb.innerHTML = `
      <form action="search.html" method="get">
        <input name="q" type="text" placeholder="🔍  Search videos…" value="${escHtml(q)}" autocomplete="off" />
        <button type="submit">
          <svg viewBox="0 0 24 24"><path d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" stroke="#fff" stroke-width="2" stroke-linecap="round" fill="none"/></svg>
          Search
        </button>
      </form>`;
  }

  document.getElementById('mob-drawer').innerHTML = `
    <div class="drawer-search">
      <form action="search.html" method="get">
        <input name="q" type="text" placeholder="Search…" value="${escHtml(q)}" />
        <button type="submit">Go</button>
      </form>
    </div>
    <a href="index.html" class="home">🏠 Home</a>
    <a href="categories.html" style="color:var(--red);font-weight:700">📂 All Categories</a>
    ${drawerLinks}
  `;
}

function toggleDrawer() {
  const burger  = document.getElementById('burger');
  const drawer  = document.getElementById('mob-drawer');
  const overlay = document.getElementById('mob-overlay');
  const open = drawer.classList.toggle('open');
  burger.classList.toggle('open', open);
  overlay.classList.toggle('open', open);
}

/* ── Footer ── */
function renderFooter() {
  const catLinks = CATS.map(c =>
    `<a href="category.html?cat=${c.key}">${c.label}</a>`
  ).join('');

  document.getElementById('site-footer').innerHTML = `
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="logo-txt">MyDesiFlix</div>
        <p>Free HD desi &amp; adult videos.<br>No ads. No redirects.</p>
        <a href="categories.html" style="display:inline-block;margin-top:12px;padding:8px 16px;background:var(--red);color:#fff;border-radius:6px;font-size:.85rem;font-weight:600">📂 Browse All Categories</a>
      </div>
      <div class="footer-cats">${catLinks}</div>
    </div>
    <div class="footer-bottom">
      <p>© ${new Date().getFullYear()} MyDesiFlix. All rights reserved.</p>
      <p class="disclaimer">This website contains adult content intended for viewers aged 18+.
        All persons depicted are 18 years of age or older. All content is provided by
        third-party services and is embedded for streaming purposes only.</p>
    </div>
  `;
}

/* ── Video Card ── */
function videoCard(v, badge) {
  const cats = (v.category || []).slice(0, 3).map(c =>
    `<span class="card-cat">${c}</span>`
  ).join('');
  return `
    <div class="video-card" onclick="location.href='video.html?id=${v.id}'">
      <div class="card-thumb">
        <img src="${v.thumbnail}" alt="${escHtml(v.title)}" loading="lazy" />
        <div class="card-play">
          <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </div>
        ${badge ? `<div class="card-badge">${badge}</div>` : ''}
      </div>
      <div class="card-info">
        <div class="card-title">${escHtml(v.title)}</div>
        <div class="card-cats">${cats}</div>
      </div>
    </div>`;
}

/* ── Skeletons ── */
function skeletons(n) {
  return Array.from({ length: n }, () => `
    <div class="skel-card">
      <div class="skeleton skel-thumb"></div>
      <div class="skeleton skel-line"></div>
      <div class="skeleton skel-line short"></div>
    </div>`).join('');
}

/* ── Numbered Pagination ── */
function buildPagination(container, current, total, urlFn) {
  if (total <= 1) { container.innerHTML = ''; return; }
  let html = '';
  const add = (page, label, cls = '') =>
    html += `<a href="${urlFn(page)}" class="pag-btn ${cls}">${label}</a>`;

  // Prev
  if (current > 1) add(current - 1, '‹ Prev');
  else html += `<span class="pag-btn disabled">‹ Prev</span>`;

  // Pages
  const range = new Set([1, total, current]);
  if (current > 2) range.add(current - 1);
  if (current < total - 1) range.add(current + 1);
  const pages = [...range].sort((a,b) => a-b);

  let prev = 0;
  for (const p of pages) {
    if (prev && p - prev > 1) html += `<span class="pag-dots">…</span>`;
    add(p, p, p === current ? 'active' : '');
    prev = p;
  }

  // Next
  if (current < total) add(current + 1, 'Next ›');
  else html += `<span class="pag-btn disabled">Next ›</span>`;

  container.innerHTML = html;
}

/* ── Ad Slot Helper ── */
// Replace the inner content with your real AdSense / ad network code.
// Example AdSense: adSlot('ca-pub-XXXXXXXX', 'auto', 'leaderboard')
function adSlot(type = 'leaderboard') {
  const cls = {
    leaderboard: 'ad-leaderboard',
    banner:      'ad-banner',
    footer:      'ad-footer-strip',
    rect:        'ad-rect',
  }[type] || 'ad-banner';

  return `
  <div class="ad-slot ${cls}">
    <!-- ═══════════════════════════════════════════════
         REPLACE THIS COMMENT WITH YOUR AD CODE
         e.g. Google AdSense <ins class="adsbygoogle"> tag
         ═══════════════════════════════════════════════ -->
    <span class="ad-placeholder">[Ad — ${type}]</span>
  </div>`;
}

/* ── Utils ── */
function escHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function catLabel(key) {
  return (CATS.find(c => c.key === key) || { label: key }).label;
}
