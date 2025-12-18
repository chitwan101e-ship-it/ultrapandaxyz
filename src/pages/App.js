import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import config from '../data/config.json';

export function App(currentPath = '/app') {
  return `
    ${Header(currentPath)}
    
    <section class="app-hero relative">
      <div class="app-hero-container relative">
        <img src="/media/games-hero.png" alt="Ultrapanda App Download" class="app-hero-banner">
        <div class="app-hero-overlay absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div class="app-hero-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-20 max-w-4xl px-4">
          <h1 class="text-3xl md:text-4xl font-bold mb-4">Ultrapanda App Download - Ultra Panda Mobi App</h1>
          <p class="text-lg">Download the <strong>Ultrapanda mobi</strong> app for iOS and Android. Get the <strong>Ultra Panda mobile app</strong> for instant access to games, exclusive bonuses, and mobile-optimized gameplay.</p>
        </div>
      </div>
    </section>
    
    <!-- App Intro Section -->
    <section class="app-intro py-12">
      <div class="g-container max-w-4xl mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">Download Ultrapanda App - Ultra Panda Mobi</h2>
        <div class="space-y-6 text-lg leading-relaxed">
          <p>
            The <strong>Ultrapanda mobi</strong> app provides the best mobile gaming experience for <strong>Ultrapanda</strong> players. Whether you're searching for "<strong>ultrapanda.mobi</strong>", "<strong>ultra panda mobi app</strong>", or "<strong>ultra panda mobile app</strong>", we've got you covered. The <strong>Ultrapanda download</strong> is available for both iOS and Android devices.
          </p>
          <p>
            Access <strong>www ultrapanda mobi</strong> through your mobile browser or download the <strong>Ultrapanda app</strong> for faster performance, exclusive mobile bonuses, and offline access to certain features. The <strong>Ultra Panda Mobi</strong> app ensures seamless gameplay whether you're on the go or at home.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Download Methods -->
    <section class="download-methods py-12 bg-gray-900">
      <div class="g-container">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">How to Download Ultrapanda App</h2>
        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div class="bg-gray-800 p-8 rounded-lg">
            <h3 class="text-2xl font-bold mb-4 text-orange flex items-center gap-2">
              <i class="bi bi-phone-fill"></i>
              Mobile Browser Access
            </h3>
            <p class="mb-4">You can access <strong>Ultrapanda</strong> instantly through your mobile browser:</p>
            <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Visit <strong>www.ultrapanda.mobi</strong> or <strong>ultrapanda.mobi</strong></li>
              <li>No download required</li>
              <li>Instant access to all games</li>
              <li>Optimized for mobile browsers</li>
            </ul>
          </div>
          <div class="bg-gray-800 p-8 rounded-lg">
            <h3 class="text-2xl font-bold mb-4 text-orange flex items-center gap-2">
              <i class="bi bi-download"></i>
              Download Ultrapanda App
            </h3>
            <p class="mb-4">For the best experience, download the <strong>Ultra Panda Mobi</strong> app:</p>
            <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Faster loading times</li>
              <li>Exclusive app bonuses</li>
              <li>Offline game modes</li>
              <li>Push notifications for bonuses</li>
              <li>Better performance and graphics</li>
            </ul>
            <a href="${config.links.facebook}" target="_blank" class="inline-block mt-4 px-6 py-3 bg-orange text-white rounded hover:bg-orange-light transition-colors">Get Download Link</a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- App Features -->
    <section class="app-features py-12">
      <div class="g-container max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">Ultrapanda App Features</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gray-800 p-6 rounded-lg">
            <div class="text-4xl mb-4 text-orange">
              <i class="bi bi-lightning-charge-fill"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">Fast Performance</h3>
            <p>The <strong>Ultrapanda mobi</strong> app is optimized for speed, providing instant game loading and smooth gameplay on all compatible devices.</p>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg">
            <div class="text-4xl mb-4 text-orange">
              <i class="bi bi-gift-fill"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">Exclusive Bonuses</h3>
            <p>App users receive exclusive <strong>Ultrapanda</strong> bonuses, daily rewards, and special promotions not available on the web version.</p>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg">
            <div class="text-4xl mb-4 text-orange">
              <i class="bi bi-bell-fill"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">Push Notifications</h3>
            <p>Stay updated with bonus alerts, daily login rewards, and special events through push notifications on the <strong>Ultra Panda mobile app</strong>.</p>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg">
            <div class="text-4xl mb-4 text-orange">
              <i class="bi bi-wifi-off"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">Offline Mode</h3>
            <p>Some <strong>Ultrapanda</strong> games can be played offline after initial download, perfect for when you're without internet connection.</p>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg">
            <div class="text-4xl mb-4 text-orange">
              <i class="bi bi-shield-check-fill"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">Secure Login</h3>
            <p>Use <strong>ultrapanda mobi login</strong> for secure, encrypted access to your account. Your credentials are always protected.</p>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg">
            <div class="text-4xl mb-4 text-orange">
              <i class="bi bi-phone"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">Mobile Optimized</h3>
            <p>The <strong>Ultra Panda Mobi</strong> app is designed specifically for mobile devices, with touch-optimized controls and responsive layouts.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- App FAQ -->
    <section class="app-faq py-12 bg-gray-900">
      <div class="g-container max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">Frequently Asked Questions About Ultrapanda App</h2>
        <div class="space-y-6">
          <div class="bg-gray-800 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-3 text-orange">Where can I download the Ultrapanda app?</h3>
            <p>To download the <strong>Ultrapanda app</strong> or <strong>Ultra Panda Mobi</strong>, visit our official <a href="${config.links.facebook}" target="_blank" class="text-orange hover:underline">Facebook page</a> for the download link. You can also access <strong>www.ultrapanda.mobi</strong> directly from your mobile browser.</p>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-3 text-orange">Is the Ultrapanda mobi app available for iOS and Android?</h3>
            <p>Yes! The <strong>Ultra Panda mobile app</strong> is available for both iOS and Android devices. The <strong>Ultrapanda download</strong> works on all modern smartphones and tablets.</p>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-3 text-orange">Do I need to download the app to play Ultrapanda?</h3>
            <p>No, you can play <strong>Ultrapanda</strong> instantly by visiting <strong>ultrapanda.mobi</strong> or <strong>www ultrapanda mobi</strong> in your mobile browser. However, downloading the <strong>Ultrapanda app</strong> provides better performance and exclusive bonuses.</p>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-3 text-orange">How do I login to Ultrapanda mobi?</h3>
            <p>Use your <strong>ultrapanda mobi login</strong> credentials to access your account on the app. If you need help with <strong>ultrapanda mobi login password</strong> recovery, contact our support team. For detailed login instructions, check our <a href="/ultrapandacompleteguide" class="text-orange hover:underline">Ultrapanda complete guide</a>.</p>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-3 text-orange">What's the difference between ultrapanda.mobi and the app?</h3>
            <p><strong>Ultrapanda.mobi</strong> is the mobile-optimized website accessible through any browser. The <strong>Ultra Panda Mobi</strong> app is a downloadable application that offers faster performance, exclusive bonuses, and additional features like offline play and push notifications.</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="app-cta py-12">
      <div class="g-container text-center">
        <h2 class="text-3xl font-bold mb-4">Ready to Download Ultrapanda App?</h2>
        <p class="mb-8 max-w-2xl mx-auto">Get the <strong>Ultra Panda Mobi</strong> app today and enjoy exclusive bonuses, faster gameplay, and the best mobile gaming experience!</p>
        <a href="${config.links.facebook}" target="_blank" class="inline-block px-8 py-3 bg-orange text-white rounded hover:bg-orange-light transition-colors">Download Now</a>
      </div>
    </section>
    
    ${Footer()}
  `;
}

export function initApp() {
  console.log('App page initialized');
}
