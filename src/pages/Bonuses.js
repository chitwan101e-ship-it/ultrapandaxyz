import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import config from '../data/config.json';

export function Bonuses(currentPath = '/bonuses') {
  return `
    ${Header(currentPath)}
    
    <section class="bonuses-hero relative">
      <div class="bonuses-hero-container relative">
        <img src="/media/games-hero.png" alt="Ultrapanda Bonuses & Promotions" class="bonuses-hero-banner">
        <div class="bonuses-hero-overlay absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div class="bonuses-hero-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-20 max-w-4xl px-4">
          <h1 class="text-3xl md:text-4xl font-bold mb-4">Ultrapanda Bonuses - Real Money Games & Sign Up Offers</h1>
          <p class="text-lg">Discover <strong>Ultra Panda casino real money</strong> bonuses, <strong>Ultra Panda 777 online real money</strong> promotions, and exclusive sign-up offers. Claim your <strong>Ultra Panda sign up</strong> bonus and start winning today!</p>
        </div>
      </div>
    </section>
    
    <!-- Bonuses Intro -->
    <section class="bonuses-intro py-12">
      <div class="g-container max-w-4xl mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">Ultrapanda Bonuses & Real Money Gaming</h2>
        <div class="space-y-6 text-lg leading-relaxed">
          <p>
            <strong>Ultrapanda</strong> offers generous bonuses and real money gaming opportunities for players seeking <strong>Ultra Panda casino real money</strong> experiences. Whether you're interested in <strong>Ultra Panda 777 online real money</strong> games, <strong>Ultra Panda online casino</strong> bonuses, or <strong>Ultra Panda free play</strong> options, we have something for every player.
          </p>
          <p>
            New players can take advantage of our <strong>Ultra Panda sign up</strong> bonus, while existing players enjoy weekly promotions, reload bonuses, and special event rewards. <strong>Play Ultra Panda online</strong> to access all bonus offers and start winning real money prizes.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Bonus Types -->
    <section class="bonus-types py-12 bg-gray-900">
      <div class="g-container">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">Available Ultrapanda Bonuses</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div class="bg-gray-800 p-6 rounded-lg">
            <div class="text-4xl mb-4 text-orange">
              <i class="bi bi-gift-fill"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">Sign Up Bonus</h3>
            <p class="mb-4">New players receive a <strong>100% sign-up bonus</strong> on their first deposit. Complete your <strong>Ultra Panda sign up</strong> to claim this generous welcome offer.</p>
            <ul class="list-disc list-inside space-y-2 text-sm ml-4">
              <li>100% match on first deposit</li>
              <li>Instant credit to account</li>
              <li>Playable on all games</li>
            </ul>
          </div>
          
          <div class="bg-gray-800 p-6 rounded-lg">
            <div class="text-4xl mb-4 text-orange">
              <i class="bi bi-cash-stack"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">Real Money Bonuses</h3>
            <p class="mb-4">Experience <strong>Ultra Panda casino real money</strong> gaming with our real money bonus offers. Play <strong>Ultra Panda 777 online real money</strong> games and win cash prizes.</p>
            <ul class="list-disc list-inside space-y-2 text-sm ml-4">
              <li>Real money casino games</li>
              <li>777 slots with real prizes</li>
              <li>Secure cashout options</li>
            </ul>
          </div>
          
          <div class="bg-gray-800 p-6 rounded-lg">
            <div class="text-4xl mb-4 text-orange">
              <i class="bi bi-arrow-repeat"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">Reload Bonuses</h3>
            <p class="mb-4">Existing players enjoy weekly reload bonuses and special promotions. Check back regularly for new <strong>Ultrapanda</strong> bonus offers.</p>
            <ul class="list-disc list-inside space-y-2 text-sm ml-4">
              <li>Weekly reload bonuses</li>
              <li>Special event promotions</li>
              <li>VIP member bonuses</li>
            </ul>
          </div>
          
          <div class="bg-gray-800 p-6 rounded-lg">
            <div class="text-4xl mb-4 text-orange">
              <i class="bi bi-calendar-check"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">Daily Bonuses</h3>
            <p class="mb-4">Log in daily to claim your <strong>Ultrapanda</strong> daily bonus. Consecutive daily logins unlock even better rewards.</p>
            <ul class="list-disc list-inside space-y-2 text-sm ml-4">
              <li>Daily login rewards</li>
              <li>Streak bonuses</li>
              <li>Monthly calendar bonuses</li>
            </ul>
          </div>
          
          <div class="bg-gray-800 p-6 rounded-lg">
            <div class="text-4xl mb-4 text-orange">
              <i class="bi bi-phone"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">App Exclusive Bonuses</h3>
            <p class="mb-4">Download the <strong>Ultrapanda</strong> app to access exclusive mobile bonuses not available on the web version.</p>
            <ul class="list-disc list-inside space-y-2 text-sm ml-4">
              <li>App-only promotions</li>
              <li>Mobile user rewards</li>
              <li>Download bonuses</li>
            </ul>
          </div>
          
          <div class="bg-gray-800 p-6 rounded-lg">
            <div class="text-4xl mb-4 text-orange">
              <i class="bi bi-trophy"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">Free Play Options</h3>
            <p class="mb-4">Try <strong>Ultra Panda free play</strong> mode to practice games before playing with real money. Perfect for new players!</p>
            <ul class="list-disc list-inside space-y-2 text-sm ml-4">
              <li>Practice mode available</li>
              <li>No deposit required</li>
              <li>All games accessible</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Real Money Gaming -->
    <section class="real-money py-12">
      <div class="g-container max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">Ultra Panda Real Money Gaming</h2>
        <div class="bg-gray-800 p-8 rounded-lg space-y-6">
          <div>
            <h3 class="text-2xl font-bold mb-4 text-orange">Ultra Panda Casino Real Money</h3>
            <p class="mb-4">
              Experience authentic casino gaming with <strong>Ultra Panda casino real money</strong> options. Play your favorite games and win real cash prizes. Our platform offers secure transactions and fast payouts for all <strong>Ultra Panda online casino</strong> players.
            </p>
          </div>
          
          <div>
            <h3 class="text-2xl font-bold mb-4 text-orange">Ultra Panda 777 Online Real Money</h3>
            <p class="mb-4">
              Spin the reels on <strong>Ultra Panda 777 online real money</strong> slots for a chance to win big. Our 777 slot machines feature progressive jackpots, bonus rounds, and real money payouts. Whether you're playing <strong>Ultra Panda 777 online real money login USA</strong> or from anywhere else, you can enjoy these exciting games.
            </p>
          </div>
          
          <div>
            <h3 class="text-2xl font-bold mb-4 text-orange">Play Ultra Panda Online</h3>
            <p class="mb-4">
              <strong>Play Ultra Panda online</strong> to access all real money games and bonuses. Our platform supports secure deposits and withdrawals, ensuring a safe and reliable gaming experience for all players.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- How to Claim -->
    <section class="how-to-claim py-12 bg-gray-900">
      <div class="g-container max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">How to Claim Your Ultrapanda Bonuses</h2>
        <div class="space-y-6">
          <div class="bg-gray-800 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-3 text-orange">Step 1: Sign Up</h3>
            <p>Complete your <strong>Ultra Panda sign up</strong> to create your account. The sign-up process is quick and secure.</p>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-3 text-orange">Step 2: Make Your First Deposit</h3>
            <p>Deposit funds to activate your welcome bonus. Your <strong>Ultrapanda</strong> sign-up bonus will be credited automatically.</p>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-3 text-orange">Step 3: Start Playing</h3>
            <p>Begin playing your favorite games and watch your bonus balance grow. <strong>Play Ultra Panda online</strong> to access all bonus features.</p>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-3 text-orange">Step 4: Claim Daily Rewards</h3>
            <p>Log in daily to claim your <strong>Ultrapanda</strong> daily bonus. The more consecutive days you play, the better your rewards become.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Bonuses FAQ -->
    <section class="bonuses-faq py-12">
      <div class="g-container max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">Frequently Asked Questions About Ultrapanda Bonuses</h2>
        <div class="space-y-6">
          <div class="bg-gray-800 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-3 text-orange">What bonuses does Ultrapanda offer?</h3>
            <p><strong>Ultrapanda</strong> offers sign-up bonuses, reload bonuses, daily login rewards, app-exclusive bonuses, and special event promotions. New players receive a 100% sign-up bonus on their first deposit.</p>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-3 text-orange">Can I play Ultra Panda casino real money games?</h3>
            <p>Yes! <strong>Ultrapanda</strong> offers <strong>Ultra Panda casino real money</strong> gaming options. You can play casino games, slots, and other titles for real money prizes. For more information, check our <a href="/ultrapandacompleteguide" class="text-orange hover:underline">complete guide</a>.</p>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-3 text-orange">How do I claim my Ultra Panda sign up bonus?</h3>
            <p>Complete your <strong>Ultra Panda sign up</strong> and make your first deposit. Your sign-up bonus will be automatically credited to your account. Check our <a href="/contact-us" class="text-orange hover:underline">support page</a> if you need assistance.</p>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-3 text-orange">Are there free play options?</h3>
            <p>Yes, <strong>Ultrapanda</strong> offers <strong>Ultra Panda free play</strong> modes where you can practice games without risking real money. This is perfect for new players who want to learn the games before playing with real money.</p>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-3 text-orange">What is Ultra Panda 777 online real money?</h3>
            <p><strong>Ultra Panda 777 online real money</strong> refers to our 777 slot machines that allow you to play and win real cash prizes. These games feature progressive jackpots and exciting bonus features. Players from the USA can access <strong>Ultra Panda 777 online real money login USA</strong> options.</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="bonuses-cta py-12 bg-gray-900">
      <div class="g-container text-center">
        <h2 class="text-3xl font-bold mb-4">Claim Your Ultrapanda Bonus Today!</h2>
        <p class="mb-8 max-w-2xl mx-auto">Sign up now and claim your <strong>Ultra Panda sign up</strong> bonus. Start playing <strong>Ultra Panda casino real money</strong> games and win big!</p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="${config.links.signUp}" target="_blank" class="inline-block px-8 py-3 bg-orange text-white rounded hover:bg-orange-light transition-colors">Sign Up Now</a>
          <a href="/games" class="inline-block px-8 py-3 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors">Browse Games</a>
        </div>
      </div>
    </section>
    
    ${Footer()}
  `;
}

export function initBonuses() {
  console.log('Bonuses page initialized');
}
