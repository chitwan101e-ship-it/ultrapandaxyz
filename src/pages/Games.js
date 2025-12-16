import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import gamesData from '../data/games.json';
import config from '../data/config.json';

export function Games(currentPath = '/games') {
  return `
    ${Header(currentPath)}
    
    <section class="games-hero relative">
      <div class="games-hero-container relative">
        <img src="/media/games-hero.png" alt="Ultrapanda Games Collection - Fish Arcade and Slot Games" class="games-hero-banner">
        <!-- Dark overlay for text prominence -->
        <div class="games-hero-overlay absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div class="games-hero-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-20 max-w-4xl px-4">
          <div>
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Ultrapanda Games - Play Online Fish Arcade & 777 Slots</h1>
            <p class="text-lg">Discover over 75 premium <strong>Ultrapanda games</strong> including <strong>fish shooting games</strong>, <strong>Ultrapanda 777 slots</strong>, and <strong>arcade casino titles</strong>. Play <strong>Ultrapanda online</strong> instantly or download <strong>Ultra Panda Mobi</strong> app. Play anytime, improve your skills, and win big with our diverse <strong>Ultrapanda</strong> gaming library.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Games Intro Section -->
    <section class="games-intro py-12">
      <div class="g-container max-w-4xl mx-auto text-center px-4">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Play Ultrapanda Games Online - Fish Arcade & 777 Slots</h2>
        <p class="text-lg leading-relaxed mb-4">
          At <strong>Ultrapanda</strong>, we curate the finest collection of <strong>online casino games</strong>, <strong>fish arcade shooters</strong>, and <strong>777 slot machines</strong> to deliver unmatched entertainment. Play <strong>Ultrapanda online</strong> instantly or download the <strong>Ultra Panda Mobi</strong> app. Whether you're a fan of action-packed <strong>Ocean King fish games</strong>, classic <strong>Ultrapanda 777 slots</strong>, or strategic <strong>arcade casino games</strong>, our <strong>Ultrapanda games</strong> library offers something for every player.
        </p>
        <p class="text-lg leading-relaxed">
          All <strong>Ultrapanda games</strong> are optimized for both desktop and mobile play. Access <strong>Ultrapanda</strong> through your <strong>Ultrapanda login</strong> to play <strong>Ultrapanda online</strong> or use the <strong>Ultrapanda mobi</strong> app. With instant access, secure transactions, and regular game updates, <strong>Ultrapanda</strong> remains the premier destination for online gaming. <a href="/" class="text-orange hover:underline font-semibold">Return to homepage</a> to learn more about <strong>Ultrapanda</strong> platform features. For gaming strategies and tips, check out our <a href="/blog" class="text-orange hover:underline font-semibold">Ultrapanda blog</a>.
        </p>
      </div>
    </section>
    
    <!-- Game Categories Section -->
    <section class="game-categories py-12 bg-gray-900">
      <div class="g-container">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">Ultrapanda Game Categories</h2>
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div class="bg-gray-800 p-6 rounded-lg">
            <h3 class="text-2xl font-bold mb-4 text-orange">Fish Arcade Games</h3>
            <p class="mb-4">Experience the thrill of <strong>fish shooting games</strong> like Ocean King, where precision and strategy lead to big wins. These action-packed <strong>arcade fish shooters</strong> feature stunning graphics, exciting gameplay, and lucrative bonus rounds.</p>
            <ul class="list-disc list-inside space-y-2 text-sm">
              <li>Ocean King - Deep sea adventure</li>
              <li>Hai Di Lao - Premium fish shooter</li>
              <li>Multiple themed variations</li>
            </ul>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg">
            <h3 class="text-2xl font-bold mb-4 text-orange">777 Slot Machines</h3>
            <p class="mb-4">Spin the reels on classic and modern <strong>Ultra Panda slots</strong> featuring various themes, bonus features, and progressive jackpots. Our <strong>777 casino games</strong> offer multiple paylines and exciting winning combinations.</p>
            <ul class="list-disc list-inside space-y-2 text-sm">
              <li>Golden Legend Plus</li>
              <li>Triple Supreme Xtreme</li>
              <li>Lucky Shamrock & more</li>
            </ul>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg">
            <h3 class="text-2xl font-bold mb-4 text-orange">Arcade Casino Games</h3>
            <p class="mb-4">Enjoy a diverse selection of <strong>arcade casino titles</strong> including adventure games, themed slots, and interactive experiences. These games combine entertainment with rewarding gameplay mechanics.</p>
            <ul class="list-disc list-inside space-y-2 text-sm">
              <li>Eyes of Fortune</li>
              <li>Iceland Adventure</li>
              <li>Easter & seasonal games</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <section class="games-screenshots py-12">
      <div class="games-screenshots-container g-container">
        <h2 class="text-3xl font-bold text-center mb-4">All Ultrapanda Games</h2>
        <p class="text-center mb-8 max-w-2xl mx-auto">Browse our complete collection of <strong>75+ Ultrapanda games</strong>. From popular favorites to new releases, discover your next gaming adventure. Each game is carefully selected to ensure quality, fairness, and maximum entertainment value.</p>
        <div class="games-screenshots-wrapper g-flex flex-wrap justify-center gap-4">
          ${Array.from({ length: gamesData.gameCounts.all }, (_, i) => `
            <div class="game-screenshot-box">
              <a href="${config.links.signUp}" target="_blank">
                <img src="/media/games/all/${i + 1}.jpg" alt="Game ${i + 1}">
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    
    <!-- Games FAQ Section -->
    <section class="games-faq py-12 bg-gray-900">
      <div class="g-container max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">Frequently Asked Questions About Ultrapanda Games</h2>
        
        <!-- FAQ - Clean List Format -->
        <div class="faq-list-wrapper max-w-4xl mx-auto">
          <ul class="faq-list">
            <li class="faq-list-item">
              <div class="faq-question-row cursor-pointer flex justify-between items-center py-4 border-b border-gray-700" data-index="0">
                <span class="faq-question-text text-white text-lg"><span class="faq-number mr-3 text-orange font-bold">1.</span>How many games does Ultrapanda offer?</span>
                <i class="bi bi-plus-lg text-white text-xl transition-transform duration-300"></i>
              </div>
              <div class="faq-answer-dropdown" data-index="0">
                <div class="faq-answer-content py-4 text-gray-300 leading-relaxed">
                  Ultrapanda features over 75 premium games including <strong>fish arcade games</strong>, <strong>777 slot machines</strong>, and <strong>arcade casino titles</strong>. Our library is regularly updated with new releases and popular favorites to keep your gaming experience fresh and exciting.
                </div>
              </div>
            </li>
            <li class="faq-list-item">
              <div class="faq-question-row cursor-pointer flex justify-between items-center py-4 border-b border-gray-700" data-index="1">
                <span class="faq-question-text text-white text-lg"><span class="faq-number mr-3 text-orange font-bold">2.</span>What are the most popular Ultrapanda games?</span>
                <i class="bi bi-plus-lg text-white text-xl transition-transform duration-300"></i>
              </div>
              <div class="faq-answer-dropdown" data-index="1">
                <div class="faq-answer-content py-4 text-gray-300 leading-relaxed">
                  Our most played games include <strong>Ocean King</strong> (fish shooting), <strong>Golden Legend Plus</strong> (slots), <strong>Hai Di Lao</strong> (arcade), and <strong>Triple Supreme Xtreme</strong> (777 slots). These titles consistently rank high in player engagement and satisfaction. Visit our <a href="/" class="text-orange hover:underline">homepage</a> to see featured games.
                </div>
              </div>
            </li>
            <li class="faq-list-item">
              <div class="faq-question-row cursor-pointer flex justify-between items-center py-4 border-b border-gray-700" data-index="2">
                <span class="faq-question-text text-white text-lg"><span class="faq-number mr-3 text-orange font-bold">3.</span>Can I play Ultrapanda games on mobile?</span>
                <i class="bi bi-plus-lg text-white text-xl transition-transform duration-300"></i>
              </div>
              <div class="faq-answer-dropdown" data-index="2">
                <div class="faq-answer-content py-4 text-gray-300 leading-relaxed">
                  Yes! All <strong>Ultrapanda games</strong> are fully optimized for mobile devices. You can play directly through your mobile browser or download the <strong>Ultra Panda Mobi</strong> app for an enhanced mobile gaming experience with faster loading times and smoother gameplay.
                </div>
              </div>
            </li>
            <li class="faq-list-item">
              <div class="faq-question-row cursor-pointer flex justify-between items-center py-4 border-b border-gray-700" data-index="3">
                <span class="faq-question-text text-white text-lg"><span class="faq-number mr-3 text-orange font-bold">4.</span>Do I need to download games to play?</span>
                <i class="bi bi-plus-lg text-white text-xl transition-transform duration-300"></i>
              </div>
              <div class="faq-answer-dropdown" data-index="3">
                <div class="faq-answer-content py-4 text-gray-300 leading-relaxed">
                  No downloads required for most games. You can play <strong>Ultrapanda games</strong> instantly through your web browser. However, downloading the <strong>Ultrapanda app</strong> provides additional features, faster performance, and offline access to certain game modes.
                </div>
              </div>
            </li>
            <li class="faq-list-item">
              <div class="faq-question-row cursor-pointer flex justify-between items-center py-4 border-b border-gray-700" data-index="4">
                <span class="faq-question-text text-white text-lg"><span class="faq-number mr-3 text-orange font-bold">5.</span>Are Ultrapanda games fair and secure?</span>
                <i class="bi bi-plus-lg text-white text-xl transition-transform duration-300"></i>
              </div>
              <div class="faq-answer-dropdown" data-index="4">
                <div class="faq-answer-content py-4 text-gray-300 leading-relaxed">
                  Absolutely. All <strong>Ultrapanda games</strong> use certified random number generators (RNG) to ensure fair play. Our platform employs advanced security measures to protect your account and transactions. We're committed to providing a safe, transparent gaming environment.
                </div>
              </div>
            </li>
            <li class="faq-list-item">
              <div class="faq-question-row cursor-pointer flex justify-between items-center py-4 border-b border-gray-700" data-index="5">
                <span class="faq-question-text text-white text-lg"><span class="faq-number mr-3 text-orange font-bold">6.</span>How do I find specific game types?</span>
                <i class="bi bi-plus-lg text-white text-xl transition-transform duration-300"></i>
              </div>
              <div class="faq-answer-dropdown" data-index="5">
                <div class="faq-answer-content py-4 text-gray-300 leading-relaxed">
                  Our games are organized by categories: <strong>fish arcade games</strong>, <strong>777 slots</strong>, and <strong>arcade casino titles</strong>. You can browse all games above or use our search feature to find specific titles. For gaming tips and strategies, check out our <a href="/blog" class="text-orange hover:underline">Ultrapanda blog</a>.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    
    <section class="exp-main py-12">
      <div class="exp-container g-container text-center">
        <h2 class="text-3xl font-bold mb-4">Have An Unforgettable <br>Gaming Experience</h2>
        <p class="mb-6 max-w-2xl mx-auto">Join thousands of players enjoying premium <strong>Ultrapanda games</strong> every day. Start playing now to unlock exclusive bonuses, promotions, and rewards. Experience the best in online gaming with Ultrapanda.</p>
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
}

export function initGames() {
  // Games FAQ Accordion - Scoped to games-faq section
  const gamesFaqQuestions = document.querySelectorAll('.games-faq .faq-question-row');
  const gamesFaqAnswers = document.querySelectorAll('.games-faq .faq-answer-dropdown');

  // Expand first FAQ by default
  if (gamesFaqQuestions.length > 0 && gamesFaqAnswers.length > 0) {
    gamesFaqQuestions[0].classList.add('active');
    gamesFaqAnswers[0].classList.add('active');
    const firstIcon = gamesFaqQuestions[0].querySelector('i');
    if (firstIcon) firstIcon.classList.add('rotate-45');
  }

  gamesFaqQuestions.forEach((question, index) => {
    const answer = gamesFaqAnswers[index];
    const icon = question.querySelector('i');

    question.addEventListener('click', () => {
      const isActive = question.classList.contains('active');

      // Close all FAQs
      gamesFaqQuestions.forEach((q, i) => {
        q.classList.remove('active');
        gamesFaqAnswers[i].classList.remove('active');
        const qIcon = q.querySelector('i');
        if (qIcon) qIcon.classList.remove('rotate-45');
      });

      // Toggle current FAQ
      if (!isActive) {
        question.classList.add('active');
        answer.classList.add('active');
        if (icon) icon.classList.add('rotate-45');
      }
    });
  });
}



