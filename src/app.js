import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import gamesData from './data/games.json';
import config from './data/config.json';

export function initApp() {
  const app = document.getElementById('app');

  app.innerHTML = `
    ${Header()}
    
    <!-- hero section -->
    <section class="home-hero relative">
      <img src="${config.hero.desktopBanner}" alt="Hero Banner" class="desktop-banner w-full">
      <img src="${config.hero.mobileBanner}" alt="Mobile Hero Banner" class="mobile-banner w-full hidden">
      <img src="${config.hero.pandaOverlay}" alt="Panda Overlay" class="panda-overlay absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[100px] h-auto z-[1000] hidden">
      
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
      <div class="promo-banner absolute top-1/2 left-[8%] transform -translate-y-1/2 z-[999]">
        <h2 class="offer-text text-2xl font-bold mb-2">${config.hero.offerText}</h2>
        <h1 class="bonus-text text-4xl font-bold mb-4">${config.hero.bonusText}</h1>
        <div class="promo-buttons flex gap-6 mt-8">
          <a href="${config.links.playNow}" target="_blank" class="modern-btn btn-play">Play Now</a>
          <a href="${config.links.signUp}" target="_blank" class="modern-btn btn-join">Join Now</a>
        </div>
      </div>
    </section>
    
    <!-- SEO Intro Section -->
    <section class="seo-intro py-12 px-4">
      <div class="g-container">
        <h1 class="text-4xl md:text-5xl font-bold text-center mb-6">Welcome to Ultrapanda: Your Premier Online Gaming & Entertainment Platform</h1>
        <div class="max-w-4xl mx-auto text-center space-y-4">
          <p class="text-lg leading-relaxed">
            <strong>Ultrapanda</strong> is the trusted destination for premium <strong>online fish arcade games</strong>, exciting <strong>slot machines</strong>, and immersive <strong>777 casino experiences</strong>. As the official <strong>Ultrapanda Club 777</strong> platform, we deliver instant access to hundreds of games, secure transactions, and exclusive bonuses—all without requiring agents or complicated registration processes.
          </p>
          <p class="text-lg leading-relaxed">
            Whether you're seeking the thrill of <strong>Ocean King fish shooting games</strong>, classic <strong>Ultra Panda slots</strong>, or the latest <strong>arcade casino titles</strong>, Ultrapanda provides a seamless gaming experience optimized for both desktop and mobile devices. Join thousands of satisfied players who choose Ultrapanda for reliable gameplay, fast payouts, and 24/7 customer support.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Why Choose Ultrapanda Section -->
    <section class="why-choose py-12 bg-gray-900">
      <div class="g-container">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">Why Choose Ultrapanda for Your Gaming Experience?</h2>
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div class="bg-gray-800 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-4 text-orange">Instant Access, No Agents Required</h3>
            <p>Unlike traditional gaming platforms, Ultrapanda eliminates the need for agents. Register directly through our secure platform and start playing immediately. Our streamlined <strong>Ultrapanda login</strong> process gets you into the action in seconds.</p>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-4 text-orange">Massive Game Library</h3>
            <p>With over 75 premium games including <strong>fish arcade shooters</strong>, <strong>777 slot machines</strong>, and <strong>arcade casino classics</strong>, Ultrapanda offers unmatched variety. Discover new favorites weekly with our regularly updated game catalog.</p>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-4 text-orange">Secure & Trusted Platform</h3>
            <p>Your security is our priority. Ultrapanda employs advanced encryption and secure payment processing to protect your data and transactions. Play with confidence knowing you're on the official <strong>Ultrapanda.xyz</strong> platform.</p>
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
                  <img src="/media/cube-design.png" alt="">
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
          <img src="/media/most-played-design1.svg" alt="">
        </div>
        <div class="most-played-design2 absolute">
          <img src="/media/most-played-design2.svg" alt="">
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
    
    <!-- Home FAQ Section -->
    <section class="home-faq py-12 bg-gray-900">
      <div class="g-container max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">Frequently Asked Questions About Ultrapanda</h2>
        <div class="space-y-6">
          <div class="bg-gray-800 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-3 text-orange">Is Ultrapanda.xyz the official site?</h3>
            <p>Yes – Ultrapanda.xyz is the newest, official version of the Ultrapanda gaming platform. We provide secure access to all <strong>Ultrapanda Club 777</strong> games, features, and services without requiring agents or third-party intermediaries.</p>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-3 text-orange">Do I need an agent to play on Ultrapanda?</h3>
            <p>No agents are required. You can register and play instantly through our secure platform. Simply create your account, make a deposit, and start enjoying our extensive library of <strong>fish arcade games</strong> and <strong>slot machines</strong> immediately.</p>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-3 text-orange">What types of games does Ultrapanda offer?</h3>
            <p>Ultrapanda features a diverse collection including <strong>fish shooting games</strong> like Ocean King, classic and modern <strong>777 slot machines</strong>, <strong>arcade casino games</strong>, and themed adventure titles. Browse our complete <a href="/games" class="text-orange hover:underline">games library</a> to discover all available titles.</p>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-3 text-orange">How do I download the Ultrapanda app?</h3>
            <p>Visit our official <a href="${config.links.facebook}" target="_blank" class="text-orange hover:underline">Facebook page</a> to download the <strong>Ultra Panda Mobi</strong> app. The app provides optimized mobile gaming with full access to all Ultrapanda features and games.</p>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-3 text-orange">What bonuses does Ultrapanda offer?</h3>
            <p>New players receive a <strong>100% sign-up bonus</strong> on their first deposit. We also offer weekly promotions, reload bonuses, and special event rewards. Check our <a href="/blog" class="text-orange hover:underline">blog</a> for the latest bonus announcements and promotional offers.</p>
          </div>
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
    
    <section class="copyright py-6 border-t border-gray-700">
      <div class="copyright-container g-flex g-container justify-between flex-wrap gap-4">
        <div class="copy1 copy">
          <p>${config.site.copyright}</p>
        </div>
        <div class="copy2 copy">
          <p>Privacy policy | Terms & Conditions</p>
        </div>
      </div>
    </section>
    
    ${Footer()}
  `;

  // Initialize JavaScript functionality
  initMobileMenu();
  initGameLinks();
}

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



