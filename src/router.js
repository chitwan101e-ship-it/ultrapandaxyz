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
      title: 'Ultrapanda Club 777 - Official Login & Download | Premium Fish Arcade Games & Slots',
      description: 'Official Ultrapanda Club 777 platform - Play premium fish arcade games, 777 slots, and arcade casino titles. Instant access, 100% sign-up bonus, no agent required. Download Ultra Panda Mobi app or play online today!',
      keywords: 'Ultrapanda, Ultrapanda Club 777, Ultra Panda login, Ultra Panda Mobi, fish arcade games, 777 slots, Ocean King, Ultrapanda.xyz, online casino games'
    },
    '/games': {
      title: 'Ultrapanda Games - 75+ Fish Arcade Games, 777 Slots & Arcade Casino Titles',
      description: 'Explore 75+ premium Ultrapanda games including Ocean King fish shooting, Golden Legend Plus slots, and arcade casino classics. Play instantly on desktop or mobile. No downloads required. Start winning today!',
      keywords: 'Ultrapanda games, fish shooting games, Ocean King, 777 slots, Ultra Panda slots, arcade casino games, Ultrapanda game collection, online fish games'
    },
    '/blog': {
      title: 'Ultrapanda Blog - Gaming Tips, Strategies & Platform Updates | Expert Guides',
      description: 'Ultrapanda blog featuring expert gaming tips, winning strategies for fish arcade games and 777 slots, platform updates, and comprehensive guides. Learn how to master Ultrapanda Club 777 games and maximize your wins.',
      keywords: 'Ultrapanda blog, Ultra Panda tips, fish game strategies, 777 slot guides, Ultrapanda login guide, gaming tips, Ultrapanda news, game strategies'
    },
    '/contact-us': {
      title: 'Contact Ultrapanda Support - 24/7 Help for Login, Games & Account Issues',
      description: 'Get help with Ultrapanda login, account issues, game questions, and technical support. Contact our 24/7 support team via email, Facebook, or contact form. Official Ultrapanda.xyz customer service.',
      keywords: 'Contact Ultrapanda, Ultrapanda support, Ultra Panda help, Ultrapanda login help, customer service, Ultrapanda contact, technical support'
    }
  };

  const data = seoData[path] || seoData['/'];
  document.title = data.title;

  // Update or create meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', data.description);
  } else {
    metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = data.description;
    document.head.appendChild(metaDescription);
  }

  // Update or create meta keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords && data.keywords) {
    metaKeywords.setAttribute('content', data.keywords);
  } else if (data.keywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = data.keywords;
    document.head.appendChild(metaKeywords);
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

  // Inject FAQ schema for pages that need it
  injectFAQSchema(path);
}

function injectFAQSchema(path) {
  // Remove existing FAQ schema if any
  const existingSchema = document.querySelector('script[type="application/ld+json"][data-faq-schema]');
  if (existingSchema) {
    existingSchema.remove();
  }

  const faqSchemas = {
    '/games': {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How many games does Ultrapanda offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ultrapanda features over 75 premium games including fish arcade games, 777 slot machines, and arcade casino titles. Our library is regularly updated with new releases and popular favorites."
          }
        },
        {
          "@type": "Question",
          "name": "What are the most popular Ultrapanda games?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our most played games include Ocean King (fish shooting), Golden Legend Plus (slots), Hai Di Lao (arcade), and Triple Supreme Xtreme (777 slots). These titles consistently rank high in player engagement."
          }
        },
        {
          "@type": "Question",
          "name": "Can I play Ultrapanda games on mobile?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! All Ultrapanda games are fully optimized for mobile devices. You can play directly through your mobile browser or download the Ultra Panda Mobi app for enhanced mobile gaming."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to download games to play?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No downloads required for most games. You can play Ultrapanda games instantly through your web browser. However, downloading the Ultrapanda app provides additional features and faster performance."
          }
        },
        {
          "@type": "Question",
          "name": "Are Ultrapanda games fair and secure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. All Ultrapanda games use certified random number generators (RNG) to ensure fair play. Our platform employs advanced security measures to protect your account and transactions."
          }
        }
      ]
    },
    '/blog': {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How often is the Ultrapanda blog updated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We regularly publish new content covering game strategies, platform updates, and gaming tips. Check back frequently or follow our official channels to stay informed about new blog posts and Ultrapanda news."
          }
        },
        {
          "@type": "Question",
          "name": "Can I request specific blog topics?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We value our community's input. If you have questions about Ultrapanda games, strategies, or platform features, contact our support team with your topic suggestions."
          }
        },
        {
          "@type": "Question",
          "name": "Are the blog strategies applicable to all Ultrapanda games?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While some strategies apply broadly, many tips are game-specific. Our blog clearly labels which strategies work for fish arcade games, 777 slots, or arcade casino titles."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I find information about new Ultrapanda games?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "New game announcements are featured in our blog's Platform Updates & News section. You can also browse our complete games library to discover the latest additions."
          }
        }
      ]
    },
    '/contact-us': {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Ultrapanda.xyz the official Ultrapanda website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Ultrapanda.xyz is the official and newest version of the Ultrapanda gaming platform. We provide secure, direct access to all Ultrapanda Club 777 games without requiring agents."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need an agent to play on Ultrapanda?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No agents are required. Unlike traditional gaming platforms, Ultrapanda allows you to register directly and start playing immediately through our secure platform."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I download the Ultrapanda app?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To download the Ultra Panda Mobi app, visit our official Facebook page. The app provides optimized mobile gaming with full access to all Ultrapanda features and games."
          }
        },
        {
          "@type": "Question",
          "name": "I'm having trouble with my Ultrapanda login. What should I do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you're experiencing Ultrapanda login issues, first ensure you're using the correct credentials. If problems persist, contact our support team via email at support@ultrapanda.xyz or through our Facebook page."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly does Ultrapanda support respond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our support team aims to respond to all inquiries within 24 hours, with most responses delivered much faster. For urgent matters, contacting us through our Facebook page typically receives the quickest response."
          }
        },
        {
          "@type": "Question",
          "name": "What bonuses and promotions does Ultrapanda offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "New players receive a 100% sign-up bonus on their first deposit. We also offer weekly promotions, reload bonuses, and special event rewards."
          }
        }
      ]
    }
  };

  if (faqSchemas[path]) {
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.setAttribute('data-faq-schema', 'true');
    schemaScript.textContent = JSON.stringify(faqSchemas[path]);
    document.head.appendChild(schemaScript);
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

