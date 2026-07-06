const navbar   = document.getElementById('mainNavbar');
const navLinks = document.querySelectorAll('.nav-link');

function updateNavbar() {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

function updateActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop    = section.offsetTop - 100;
    const sectionBottom = sectionTop + section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', () => {
  updateNavbar();
  updateActiveLink();
  animateOnScroll();
}, { passive: true });

function animateOnScroll() {
  const animEls = document.querySelectorAll('[data-aos]:not(.aos-animate)');
  animEls.forEach(el => {
    const rect  = el.getBoundingClientRect();
    const delay = parseInt(el.getAttribute('data-aos-delay') || '0', 10);
    if (rect.top < window.innerHeight - 80) {
      setTimeout(() => el.classList.add('aos-animate'), delay);
    }
  });
}

function handleVizLoad(vizId) {
  const loader = document.getElementById(`${vizId}-loading`);
  if (loader) loader.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
  const allVizs = document.querySelectorAll('tableau-viz');
  allVizs.forEach(viz => {
    const id = viz.getAttribute('id');
    viz.addEventListener('firstinteractive', () => handleVizLoad(id));
    setTimeout(() => handleVizLoad(id), 8000);
  });
});

const TABLEAU_BASE   = 'https://public.tableau.com/views/HeartDiseaseWorkBook';
const TABLEAU_PARAMS = '?:language=en-US&:display_count=n&:origin=viz_share_link&:embed=y&:toolbar=bottom&:showVizHome=no';

function openDashboard(dbId, viewName, title) {
  const wrapper = document.getElementById('dashboard-viewer-wrapper');
  const iframe  = document.getElementById('dashboard-iframe');
  const loader  = document.getElementById('dashboard-loading');
  const titleEl = document.getElementById('viewer-title-text');

  const url = `${TABLEAU_BASE}/${viewName}${TABLEAU_PARAMS}`;

  loader.style.display = 'flex';
  loader.classList.remove('hidden');
  iframe.src = '';

  wrapper.style.display = 'block';

  if (titleEl) titleEl.textContent = title;

  document.querySelectorAll('.dashboard-card').forEach(c => c.classList.remove('selected'));
  const selectedCard = document.getElementById(`${dbId}-card`);
  if (selectedCard) selectedCard.classList.add('selected');

  setTimeout(() => {
    iframe.src = url;
    wrapper.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 150);
}

function hideDashboardLoader() {
  const loader = document.getElementById('dashboard-loading');
  if (loader) {
    loader.classList.add('hidden');
    setTimeout(() => { loader.style.display = 'none'; }, 400);
  }
}

function closeDashboard() {
  const wrapper = document.getElementById('dashboard-viewer-wrapper');
  const iframe  = document.getElementById('dashboard-iframe');
  wrapper.style.display = 'none';
  iframe.src = '';
  document.querySelectorAll('.dashboard-card').forEach(c => c.classList.remove('selected'));
}

function launchStory() {
  const preview = document.getElementById('story-preview-panel');
  const embed   = document.getElementById('story-embed-panel');
  const iframe  = document.getElementById('story-iframe');
  const loader  = document.getElementById('story-loading');

  const storyUrl = `${TABLEAU_BASE}/Story1${TABLEAU_PARAMS}`;

  loader.style.display = 'flex';
  loader.classList.remove('hidden');
  iframe.src = '';

  preview.style.display = 'none';
  embed.style.display   = 'block';

  setTimeout(() => {
    iframe.src = storyUrl;
  }, 150);
}

function hideStoryLoader() {
  const loader = document.getElementById('story-loading');
  if (loader) {
    loader.classList.add('hidden');
    setTimeout(() => { loader.style.display = 'none'; }, 400);
  }
}

function closeStory() {
  const preview = document.getElementById('story-preview-panel');
  const embed   = document.getElementById('story-embed-panel');
  const iframe  = document.getElementById('story-iframe');

  iframe.src = '';
  embed.style.display   = 'none';
  preview.style.display = 'block';
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navH = navbar ? navbar.offsetHeight : 72;
      const top  = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });

      const navCollapse = document.getElementById('navbarNav');
      if (navCollapse && navCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navCollapse);
        bsCollapse.hide();
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  updateNavbar();
  updateActiveLink();
  animateOnScroll();

  const style = document.createElement('style');
  style.textContent = `
    .dashboard-card.selected {
      border-color: var(--primary) !important;
      box-shadow: 0 0 0 3px rgba(21,101,192,.2) !important;
    }
  `;
  document.head.appendChild(style);
});
