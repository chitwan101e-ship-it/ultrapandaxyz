import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import gamesData from './data/games.json';
import config from './data/config.json';

export function initApp(currentPath = '/') {
  const app = document.getElementById('app');

  app.innerHTML = `
    ${Header(currentPath)}
    
    <!-- hero section -->
    <section class="home-hero relative">
      <div class="hero-banner-wrapper relative">
        <video autoplay muted loop playsinline class="hero-video w-full h-full object-cover" preload="auto" poster="${config.hero.desktopBanner}">
          <source src="/media/ULTRAPANDA%20CLUB%20BANNER%20VIDEO.mp4" type="video/mp4">
          <source src="/media/ULTRAPANDA CLUB BANNER VIDEO.mp4" type="video/mp4">
          <!-- Fallback image if video doesn't load -->
          <img src="${config.hero.desktopBanner}" alt="Hero Banner" class="w-full">
        </video>
        <!-- Gradient overlay for text prominence - darker on left (text side), lighter on right -->
        <div class="hero-dark-overlay absolute inset-0 z-10"></div>
      </div>
      
      <div class="casino-shimmer"></div>
      <div class="lava-overlay">
        <div class="lava-flow"></div>
        <div class="lava-flow"></div>
        <div class="lava-flow"></div>
        <div class="lava-flow"></div>
      </div>
      <div class="lava-overlay-top">
        <div class="lava-flow-top"></div>
        <div class="lava-flow-top"></div>
        <div class="lava-flow-top"></div>
        <div class="lava-flow-top"></div>
      </div>
      
      <!-- Hero Content -->
      <div class="hero-content-overlay absolute inset-0 flex items-center z-20 px-6 md:px-12 lg:px-16 xl:px-20 py-8 md:py-12">
        <div class="hero-text-content max-w-4xl text-white w-full">
          <h1 class="hero-main-heading text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 leading-tight uppercase">
            Discover Ultra Panda. the all in one gaming platform
          </h1>
          <h2 class="hero-sub-heading text-lg md:text-xl lg:text-2xl font-normal mb-6 md:mb-8 leading-relaxed opacity-90">
            <a href="/ultrapandacompleteguide" class="hover:text-orange transition-colors cursor-pointer underline">Ultra Panda Complete Guide- Game Bonuses & App(2025)</a>
          </h2>
          <div class="hero-buttons flex flex-wrap gap-4 mt-8">
            <a href="${config.links.signUp}" target="_blank" class="hero-play-now-btn inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 text-white font-bold rounded-lg text-base md:text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
              <i class="bi bi-star-fill text-xl"></i>
              <span>Play Now</span>
            </a>
            <a href="${config.links.signIn}" target="_blank" class="hero-sign-in-btn inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg text-base md:text-lg hover:bg-white hover:text-black transition-all duration-300">
              <span>Sign In</span>
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- most popular games -->
    <section class="most-popular py-12">
      <div class="most-popular-container g-container">
        <h2 class="text-3xl font-bold text-center mb-4">Top Ultrapanda <span class="text-orange">Arcade Games</span></h2>
        <p class="text-center mb-8 max-w-2xl mx-auto">Experience the most popular <strong>Ultrapanda games</strong> loved by players worldwide. From action-packed <strong>fish shooting games</strong> to thrilling <strong>slot machines</strong>, these titles deliver exceptional gameplay and winning opportunities.</p>
        <div class="most-popular-wrapper g-flex flex-wrap justify-center gap-4">
          ${gamesData.mostPopular.map(game => `
            <div class="most-popularbox relative">
              ${game.hasDesign ? `
                <div class="most-popular-design absolute ${game.designPosition === 'top' ? 'top-0' : 'bottom-0'}">
                  <img src="/media/cube-design.png" alt="Decorative cube design element" role="presentation">
                </div>
              ` : ''}
              <a href="${config.links.signUp}" target="_blank">
                <img src="${game.image}" alt="${game.alt}">
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    
    <!-- dive into -->
    <section class="dive-into-main py-12">
      <div class="dive-into-container g-container g-flex flex-wrap items-center gap-8">
        <div class="dive-into-img flex-1 min-w-[300px]">
          <img src="/media/home-dive.png" alt="Ocean King fish shooting game on Ultrapanda platform">
        </div>
        <div class="dive-into-content flex-1 min-w-[300px]">
          <h2 class="text-3xl font-bold mb-4">Dive into the Thrilling <span class="text-[#ff7f22]">Underwater Adventure!</span></h2>
          <p class="mb-4">
            Get ready to explore the deep sea with <strong>Ocean King</strong> – one of Ultrapanda's most popular <strong>online fish shooting games</strong>. Designed for players who crave action, strategy, and big wins, Ocean King delivers nonstop entertainment. Use your aim and firepower to catch exotic sea creatures, unlock hidden bonuses, and climb the leaderboards.
          </p>
          <p class="mb-4">
            Whether you're playing from desktop or mobile, Ultrapanda gives you instant access to this fast-paced <strong>arcade fish shooter</strong>. No downloads, no agents – just tap and play. Join thousands of gamers choosing Ultrapanda for their go-to <strong>fish game casino</strong>. Dive in today and start collecting <strong>real rewards, bonus coins, and exclusive offers</strong>.
          </p>
          <p>
            Looking for more gaming options? Explore our complete <a href="/games" class="text-orange hover:underline font-semibold">Ultrapanda games collection</a> featuring slots, arcade games, and more. For the latest tips and strategies, visit our <a href="/blog" class="text-orange hover:underline font-semibold">Ultrapanda blog</a>.
          </p>
        </div>
      </div>
    </section>
    
    <!-- game recommendation -->
    <section class="game-recomendation py-12">
      <div class="game-recomendation-container g-container">
        <h2 class="text-3xl font-bold text-center mb-4">Game Recommendations For <br>You This Week</h2>
        <p class="text-center mb-8 max-w-2xl mx-auto">Our team handpicks the best <strong>Ultrapanda games</strong> each week based on player feedback, payout rates, and entertainment value. These featured titles offer exceptional gameplay and winning potential.</p>
        <div class="game-recomendation-wrapper g-flex flex-wrap justify-center gap-6">
          ${gamesData.recommended.map(game => `
            <div class="game-recomendation-box bg-gray-800 rounded-lg overflow-hidden">
              <div class="game-recomendation-box-wrapper g-flex flex-col md:flex-row">
                <div class="game-recomendation-img">
                  <img src="${game.image}" alt="${game.title}">
                </div>
                <div class="game-recomendation-content p-4">
                  <div>
                    <h4 class="text-xl font-bold mb-2">${game.title}</h4>
                    <span class="text-orange text-sm mb-2 block">${game.tags}</span>
                    <p class="mb-4 text-sm">${game.description}</p>
                    <a href="${config.links.signUp}" target="_blank" class="inline-block px-4 py-2 bg-orange text-white rounded">Download</a>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    
    <!-- most played games -->
    <section class="most-played-games-main py-12 relative">
      <div class="most-played-games-container g-container">
        <div class="most-played-design1 absolute">
          <img src="/media/most-played-design1.svg" alt="Decorative design element" role="presentation">
        </div>
        <div class="most-played-design2 absolute">
          <img src="/media/most-played-design2.svg" alt="Decorative design element" role="presentation">
        </div>
        <h2 class="text-3xl font-bold text-center mb-4">Most Played Games <br>Of The Year</h2>
        <p class="text-center mb-8 max-w-2xl mx-auto">Based on player data and engagement metrics, these <strong>Ultrapanda games</strong> have dominated the leaderboards throughout the year. Action-packed battle and strategy games continue to be favorites among our community, offering both excitement and rewarding gameplay experiences.</p>
        <div class="most-played-games-wrapper g-flex flex-wrap justify-center gap-6">
          ${gamesData.mostPlayed.map(game => `
            <div class="most-played-games">
              <div class="most-played-games-img mb-4">
                <img src="${game.image}" alt="Most played game ${game.id}">
              </div>
              <a href="${config.links.playNow}" target="_blank" class="block text-center px-6 py-3 bg-orange text-white rounded">Play now</a>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    
    <section class="exp-main py-12">
      <div class="exp-container g-container text-center">
        <h2 class="text-3xl font-bold mb-4">Have An Unforgettable <br>Gaming Experience</h2>
        <p class="mb-6 max-w-2xl mx-auto">Join the Ultrapanda community today and experience premium online gaming with instant access, secure transactions, and exclusive bonuses. Start playing now to unlock attractive promotions and rewards.</p>
        <a href="${config.links.signUp}" target="_blank" class="inline-block px-8 py-3 bg-orange text-white rounded mb-12 hover:bg-orange-light transition-colors">Get Started</a>
        <div class="exp-services">
          <h4 class="text-2xl font-bold mb-8">Our Services</h4>
          <div class="services-wrapper g-flex flex-wrap justify-center gap-6">
            ${gamesData.services.map(service => `
              <div class="service-box">
                <img src="${service.image}" alt="Service ${service.id}">
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
    
    ${Footer()}
  `;

  // Initialize JavaScript functionality
  initMobileMenu();
  initGameLinks();
}

function initHomeFAQ() {
  // FAQ Accordion - Clean List Format
  const faqQuestionRows = document.querySelectorAll('.faq-question-row');
  const faqAnswers = document.querySelectorAll('.faq-answer-dropdown');

  faqQuestionRows.forEach((questionRow, index) => {
    const answer = faqAnswers[index];
    const icon = questionRow.querySelector('i');

    questionRow.addEventListener('click', () => {
      const isActive = questionRow.classList.contains('active');

      // Toggle current FAQ
      if (!isActive) {
        // Close all other FAQs
        faqQuestionRows.forEach((q, i) => {
          if (i !== index) {
            q.classList.remove('active');
            faqAnswers[i].classList.remove('active');
            const qIcon = q.querySelector('i');
            if (qIcon) {
              qIcon.classList.remove('rotate-45');
            }
          }
        });

        // Open current FAQ
        questionRow.classList.add('active');
        answer.classList.add('active');
        if (icon) {
          icon.classList.add('rotate-45');
        }
      } else {
        // Close current FAQ
        questionRow.classList.remove('active');
        answer.classList.remove('active');
        if (icon) {
          icon.classList.remove('rotate-45');
        }
      }
    });
  });
}

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

function initGameLinks() {
  const mostPopular = document.querySelectorAll('.most-popularbox a');
  mostPopular.forEach(link => {
    link.href = config.links.signUp;
    link.setAttribute('target', '_blank');
  });

  const recommendedLinks = document.querySelectorAll('.game-recomendation-box a');
  recommendedLinks.forEach(link => {
    if (link.textContent === 'Download') {
      link.href = config.links.signUp;
      link.setAttribute('target', '_blank');
    }
  });

  const mostPlayed = document.querySelectorAll('.most-played-games a');
  mostPlayed.forEach(link => {
    link.href = config.links.playNow;
    link.setAttribute('target', '_blank');
  });

  const getStarted = document.querySelectorAll('.exp-main a');
  getStarted.forEach(link => {
    if (link.textContent.includes('Get Started')) {
      link.href = config.links.signUp;
      link.setAttribute('target', '_blank');
    }
  });
}



