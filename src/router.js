import { initApp } from './app.js';
import { Games, initGames } from './pages/Games.js';
import { Blog, initBlog } from './pages/Blog.js';
import { ContactUs, initContactUs } from './pages/ContactUs.js';

const routes = {
  '/': (path) => {
    initApp(path);
  },
  '/games': (path) => {
    document.getElementById('app').innerHTML = Games(path);
    setTimeout(() => {
      initGames();
      initMobileMenu();
    }, 0);
  },
  '/blog': (path) => {
    document.getElementById('app').innerHTML = Blog(path);
    setTimeout(() => {
      initBlog();
      initMobileMenu();
    }, 0);
  },
  '/contact-us': (path) => {
    document.getElementById('app').innerHTML = ContactUs(path);
    setTimeout(() => {
      initContactUs();
      initMobileMenu();
    }, 0);
  }
};

function initMobileMenu() {
  const mobileNavBtn = document.getElementById('mobile-nav-toggle');
  const menu = document.getElementById('mobile-menu');
  const closeMenu = document.querySelector('.close-menu');

  if (mobileNavBtn && menu && closeMenu) {
    mobileNavBtn.addEventListener('click', () => {
      menu.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    closeMenu.addEventListener('click', () => {
      menu.classList.remove('active');
      document.body.style.overflow = 'auto';
    });

    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !mobileNavBtn.contains(e.target)) {
        menu.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }
}

function updateSEO(path) {
  const seoData = {
    '/': {
      title: 'Ultrapanda - Official Login & Download | Ultra Panda Mobi | 777 Games Online',
      description: 'Ultrapanda - Play premium fish arcade games and 777 slots online. Download Ultra Panda Mobi app or play instantly. Ultrapanda login, 100% bonus, no agent required. Official Ultrapanda.xyz platform.',
      keywords: 'ultrapanda, ultrapanda mobi, ultrapanda login, ultrapanda download, ultrapanda.mobi, ultrapanda online, ultrapanda 777, Ultra Panda Mobi, Ultrapanda Club 777, fish arcade games, 777 slots'
    },
    '/games': {
      title: 'Ultrapanda Games - Play Fish Arcade, 777 Slots & Casino Games Online',
      description: 'Play Ultrapanda games online - 75+ fish arcade games, 777 slots, and arcade casino titles. Ocean King, Golden Legend Plus, and more. Play instantly on Ultrapanda mobi or desktop. No download required.',
      keywords: 'ultrapanda games, ultrapanda game, ultrapanda casino, ultrapanda slots, fish arcade games, 777 slots, Ocean King, Ultrapanda online games, play ultrapanda'
    },
    '/blog': {
      title: 'Ultrapanda Blog - Login Guide, Download Tips & Gaming Strategies',
      description: 'Ultrapanda blog with login guides, download instructions for Ultra Panda Mobi app, gaming strategies, and platform updates. Learn Ultrapanda login, download tips, and winning strategies.',
      keywords: 'ultrapanda blog, ultrapanda login guide, ultrapanda download, ultrapanda mobi login, ultrapanda tips, Ultrapanda strategies, Ultra Panda Mobi guide'
    },
    '/contact-us': {
      title: 'Ultrapanda Login Help & Support - Contact Us for Account & Download Issues',
      description: 'Need Ultrapanda login help or download support? Contact Ultrapanda support team 24/7. Get help with Ultrapanda mobi login, account access, app download, and technical issues. Official support.',
      keywords: 'ultrapanda login, ultrapanda support, ultrapanda mobi login, ultrapanda contact, ultrapanda help, ultrapanda login password, ultrapanda customer service'
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

  // Add Open Graph and Twitter Card meta tags
  updateSocialMetaTags(path, data);
}

function updateSocialMetaTags(path, data) {
  const baseUrl = 'https://ultrapanda.xyz';
  const url = `${baseUrl}${path === '/' ? '' : path}`;
  const imageUrl = `${baseUrl}/media/logo.png`;

  // Open Graph tags
  const ogTags = {
    'og:title': data.title,
    'og:description': data.description,
    'og:url': url,
    'og:type': 'website',
    'og:image': imageUrl,
    'og:site_name': 'Ultrapanda'
  };

  // Twitter Card tags
  const twitterTags = {
    'twitter:card': 'summary_large_image',
    'twitter:title': data.title,
    'twitter:description': data.description,
    'twitter:image': imageUrl
  };

  // Update or create Open Graph tags
  Object.entries(ogTags).forEach(([property, content]) => {
    let tag = document.querySelector(`meta[property="${property}"]`);
    if (tag) {
      tag.setAttribute('content', content);
    } else {
      tag = document.createElement('meta');
      tag.setAttribute('property', property);
      tag.setAttribute('content', content);
      document.head.appendChild(tag);
    }
  });

  // Update or create Twitter Card tags
  Object.entries(twitterTags).forEach(([name, content]) => {
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (tag) {
      tag.setAttribute('content', content);
    } else {
      tag = document.createElement('meta');
      tag.setAttribute('name', name);
      tag.setAttribute('content', content);
      document.head.appendChild(tag);
    }
  });
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
    routes[path](path);
  } else {
    // Fallback to home page instead of non-existent route
    routes['/']('/');
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
        routes[path](path);
      } else {
        routes['/']('/');
      }
    }
  });

  // Handle browser back/forward
  window.addEventListener('popstate', () => {
    const path = normalizePath(window.location.pathname);
    updateSEO(path);
    if (routes[path]) {
      routes[path](path);
    } else {
      routes['/']('/');
    }
  });
}

