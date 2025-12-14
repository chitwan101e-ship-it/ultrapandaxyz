import { initApp } from './app.js';
import { Games, initGames } from './pages/Games.js';
import { Blog, initBlog } from './pages/Blog.js';
import { ContactUs, initContactUs } from './pages/ContactUs.js';

const routes = {
  '/': () => {
    initApp();
  },
  '/games': () => {
    document.getElementById('app').innerHTML = Games();
    setTimeout(() => {
      initGames();
      initMobileMenu();
    }, 0);
  },
  '/blog': () => {
    document.getElementById('app').innerHTML = Blog();
    setTimeout(() => {
      initBlog();
      initMobileMenu();
    }, 0);
  },
  '/contact-us': () => {
    document.getElementById('app').innerHTML = ContactUs();
    setTimeout(() => {
      initContactUs();
      initMobileMenu();
    }, 0);
  }
};

function initMobileMenu() {
  const mobileNav = document.querySelector('.mobile-nav');
  const menu = document.querySelector('.menu');
  const closeMenu = document.querySelector('.close-menu');

  if (mobileNav && menu && closeMenu) {
    mobileNav.addEventListener('click', () => {
      menu.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    closeMenu.addEventListener('click', () => {
      menu.classList.remove('active');
      document.body.style.overflow = 'auto';
    });

    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !mobileNav.contains(e.target)) {
        menu.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }
}

function updateSEO(path) {
  const seoData = {
    '/': {
      title: 'Ultrapanda Club 777 - Official Login & Download | Ultra Panda Mobi',
      description: 'Official Ultrapanda Club 777 Login & Download. Play the best fish arcade games and slots online. Get your Ultra Panda login password and app today! No agent required.'
    },
    '/games': {
      title: 'Ultrapanda Games - Fish Arcade, Slots & 777 | Play Online',
      description: 'Explore the best Ultrapanda games including Ocean King, fish shooters, and 777 slots. Play online or download the Ultra Panda club app for big wins!'
    },
    '/blog': {
      title: 'Ultrapanda Blog - Tips, Tricks & Updates | Club 777 News',
      description: 'Stay updated with the latest Ultra Panda news, game tips, and winning strategies. Learn how to master UltraPanda club 777 games.'
    },
    '/contact-us': {
      title: 'Contact Ultrapanda - Support & Login Help | Official Site',
      description: 'Need help with your UltraPanda login or download? Contact our official support team. We are here to help you with Ultrapanda club 777 access.'
    }
  };

  const data = seoData[path] || seoData['/'];
  document.title = data.title;

  // Update or create meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', data.description);
  } else {
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = data.description;
    document.head.appendChild(meta);
  }

  // Update or create canonical URL (prevents redirect issues)
  const canonicalUrl = `https://ultrapanda.xyz${path === '/' ? '' : path}`;
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink) {
    canonicalLink.setAttribute('href', canonicalUrl);
  } else {
    canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = canonicalUrl;
    document.head.appendChild(canonicalLink);
  }
}

export function initRouter() {
  // Normalize path - remove trailing slashes except for root
  function normalizePath(path) {
    if (path === '/' || path === '') return '/';
    return path.replace(/\/+$/, '');
  }

  // Handle initial load
  const path = normalizePath(window.location.pathname);
  updateSEO(path);

  if (routes[path]) {
    routes[path]();
  } else {
    // Fallback to home page instead of non-existent route
    routes['/']();
  }

  // Handle navigation clicks
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="/"]');
    if (link) {
      e.preventDefault();
      const href = link.getAttribute('href');
      const path = normalizePath(href);
      
      // Update URL without trailing slash
      if (path !== href) {
        window.history.replaceState({}, '', path);
      } else {
        window.history.pushState({}, '', path);
      }
      
      updateSEO(path);

      if (routes[path]) {
        routes[path]();
      } else {
        routes['/']();
      }
    }
  });

  // Handle browser back/forward
  window.addEventListener('popstate', () => {
    const path = normalizePath(window.location.pathname);
    updateSEO(path);
    if (routes[path]) {
      routes[path]();
    } else {
      routes['/']();
    }
  });
}

