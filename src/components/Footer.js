import config from '../data/config.json';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return `
    <footer class="main-footer py-12 bg-gray-900 border-t border-gray-800">
      <div class="footer-container g-container">
        <!-- Logo Section -->
        <div class="footer-logo-section text-center mb-8">
          <div class="footer-logo-wrapper inline-block relative">
            <div class="footer-logo-badge bg-white border-4 border-yellow-400 px-8 py-4 rounded-lg shadow-lg">
              <div class="text-red-600 text-xs font-bold mb-1">WELCOME TO FABULOUS</div>
              <div class="text-red-600 text-3xl font-bold mb-1">ULTRAPANDA</div>
              <div class="text-red-600 text-sm font-bold">ONLINE</div>
            </div>
            <div class="footer-copyright-top absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full ml-4 whitespace-nowrap text-white text-sm">
              © ${currentYear} All rights reserved.
            </div>
          </div>
        </div>
        
        <!-- Disclaimer Section -->
        <div class="footer-disclaimer text-center text-white text-sm leading-relaxed max-w-4xl mx-auto px-4">
          <p>
            Copyright ${currentYear}, <strong>Ultrapanda</strong> (Ultrapanda.xyz, Ultrapanda Club 777, Ultra Panda Mobi). All rights reserved. 
            Play <strong>Ultrapanda games</strong> responsibly. Gambling should be entertaining. 
            Remember that you always risk losing the money you bet, so never spend more than you can afford to lose. 
            If you think you may have a problem, <a href="${config.links.facebook}" target="_blank" class="text-orange hover:underline">click here</a> for support.
          </p>
          <p class="mt-4 text-xs text-gray-400">
            <strong>Ultrapanda</strong> | <strong>Ultrapanda login</strong> | <strong>Ultrapanda download</strong> | 
            <strong>Ultra Panda Mobi</strong> | <strong>Ultrapanda mobi login</strong> | <strong>Ultrapanda 777</strong> | 
            <strong>Fish arcade games</strong> | <strong>777 slots</strong> | <strong>Ocean King</strong> | 
            <strong>Ultrapanda Club 777</strong> | <strong>Ultrapanda online</strong> | <strong>Ultrapanda games</strong>
          </p>
        </div>
      </div>
      
      <!-- Messenger Button -->
      <div class="messager">
        <a href="${config.links.facebook}" target="_blank">
          <img src="/media/messanger.svg" alt="Contact Ultrapanda">
        </a>
      </div>
    </footer>
  `;
}



