import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import config from '../data/config.json';

const faqs = [
  {
    question: "Is Ultrapanda.xyz the official Ultrapanda website?",
    answer: "Yes, Ultrapanda.xyz is the official and newest version of the Ultrapanda gaming platform. We provide secure, direct access to all <strong>Ultrapanda Club 777</strong> games, features, and services without requiring agents or third-party intermediaries. You can trust that you're on the legitimate platform when you visit Ultrapanda.xyz."
  },
  {
    question: "Do I need an agent to play on Ultrapanda?",
    answer: "No agents are required. Unlike traditional gaming platforms, Ultrapanda allows you to register directly and start playing immediately. Simply create your account through our secure platform, make a deposit, and begin enjoying our extensive library of <strong>fish arcade games</strong>, <strong>777 slots</strong>, and <strong>arcade casino titles</strong> without any intermediaries."
  },
  {
    question: "How do I create an Ultrapanda account and make a deposit?",
    answer: `To create an account and reload, reach out to us through our <a href="${config.links.facebook}" target="_blank" class="text-orange hover:underline">official Facebook page</a>. Our dedicated support team will guide you through the registration process and help you make your first deposit. The process is straightforward, secure, and typically completed within minutes.`
  },
  {
    question: "Where can I download the Ultrapanda app?",
    answer: `To download the <strong>Ultra Panda Mobi</strong> app, visit our <a href="${config.links.facebook}" target="_blank" class="text-orange hover:underline">official Facebook page</a>. The app provides optimized mobile gaming with full access to all Ultrapanda features and games. If you encounter any download issues, our support team is available to assist you.`
  },
  {
    question: "Can I play Ultrapanda games without downloading the app?",
    answer: "Currently, we primarily offer our gaming experience through our app for the best performance and security. However, we are actively working on expanding our accessibility options to provide web-based alternatives. For the most up-to-date information on platform access methods, please contact our support team or check our <a href=\"/blog\" class=\"text-orange hover:underline\">blog</a> for announcements."
  },
  {
    question: "I'm having trouble with my Ultrapanda login. What should I do?",
    answer: "If you're experiencing <strong>Ultrapanda login</strong> issues, first ensure you're using the correct credentials. If problems persist, contact our support team via email at support@ultrapanda.xyz or through our <a href=\"" + config.links.facebook + "\" target=\"_blank\" class=\"text-orange hover:underline\">Facebook page</a>. We'll help you regain access to your account quickly and securely."
  },
  {
    question: "I have concerns about my account or cashout. Can you help?",
    answer: "We can provide assistance for accounts created through our official Ultrapanda.xyz platform and verified through our official channels. For account-related concerns, cashout inquiries, or transaction issues, please contact our support team with your account details. We're committed to resolving legitimate concerns promptly and fairly."
  },
  {
    question: "What types of games are available on Ultrapanda?",
    answer: "Ultrapanda offers a diverse collection including <strong>fish shooting games</strong> like Ocean King, <strong>777 slot machines</strong> such as Golden Legend Plus, and various <strong>arcade casino games</strong>. We have over 75 premium titles in our library. Explore our complete <a href=\"/games\" class=\"text-orange hover:underline\">games collection</a> to see all available titles."
  },
  {
    question: "How do I become an Ultrapanda agent?",
    answer: `If you're interested in joining our team as an agent, please send a message to our <a href="${config.links.facebook}" target="_blank" class="text-orange hover:underline">official Facebook account</a>. We'll provide you with all the necessary information, requirements, and details to begin your journey as an Ultrapanda agent.`
  },
  {
    question: "What bonuses and promotions does Ultrapanda offer?",
    answer: "New players receive a <strong>100% sign-up bonus</strong> on their first deposit. We also offer weekly promotions, reload bonuses, and special event rewards. For the latest bonus announcements and promotional offers, check our <a href=\"/blog\" class=\"text-orange hover:underline\">blog</a> or contact our support team for current promotions."
  },
  {
    question: "Is Ultrapanda safe and secure?",
    answer: "Absolutely. Ultrapanda employs advanced encryption and security measures to protect your personal information and transactions. We use certified random number generators (RNG) for fair gameplay and maintain strict security protocols. Your safety and privacy are our top priorities."
  },
  {
    question: "How quickly does Ultrapanda support respond?",
    answer: "Our support team aims to respond to all inquiries within 24 hours, with most responses delivered much faster. For urgent matters, contacting us through our <a href=\"" + config.links.facebook + "\" target=\"_blank\" class=\"text-orange hover:underline\">Facebook page</a> typically receives the quickest response. We're committed to providing timely, helpful assistance."
  }
];

export function ContactUs() {
  return `
    ${Header()}
    
    <section class="contact-hero relative">
      <div class="contact-hero-container">
        <img src="/media/contact-hero.jpg" alt="Contact Ultrapanda Support Team" class="w-full">
        <div class="contact-hero-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 max-w-4xl px-4">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Contact Ultrapanda Support</h1>
          <p class="text-lg">Have a question about <strong>Ultrapanda login</strong>, need help with <strong>Ultra Panda games</strong>, or want to provide feedback? Our dedicated support team is available 24/7 to assist you. Whether you need help with account access, game strategies, technical issues, or general inquiries about <strong>Ultrapanda Club 777</strong>, we're here to help.</p>
        </div>
      </div>
    </section>
    
    <!-- Trust & Support Intro -->
    <section class="contact-intro py-12">
      <div class="g-container max-w-4xl mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">Your Trusted Ultrapanda Support Team</h2>
        <div class="space-y-6 text-lg leading-relaxed">
          <p>
            At <strong>Ultrapanda</strong>, customer satisfaction is our top priority. Our experienced support team understands the importance of quick, helpful responses and is committed to resolving your concerns efficiently. Whether you're experiencing issues with <strong>Ultrapanda login</strong>, need guidance on downloading the <strong>Ultra Panda Mobi</strong> app, or have questions about our <strong>fish arcade games</strong> and <strong>777 slots</strong>, we provide comprehensive assistance.
          </p>
          <p>
            We're proud to be the official <strong>Ultrapanda.xyz</strong> platform, offering transparent, secure, and reliable gaming services. Our support team can help with account management, bonus inquiries, game recommendations, technical troubleshooting, and more. For detailed guides and tips, visit our <a href="/blog" class="text-orange hover:underline font-semibold">Ultrapanda blog</a> or explore our <a href="/games" class="text-orange hover:underline font-semibold">games collection</a>.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Support Options -->
    <section class="support-options py-12 bg-gray-900">
      <div class="g-container">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">Multiple Ways to Reach Us</h2>
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div class="bg-gray-800 p-6 rounded-lg text-center">
            <div class="text-4xl mb-4">📧</div>
            <h3 class="text-xl font-bold mb-4 text-orange">Email Support</h3>
            <p class="mb-4">Send us a detailed message via email for comprehensive assistance with your inquiries.</p>
            <a href="mailto:support@ultrapanda.xyz" class="text-orange hover:underline font-semibold">support@ultrapanda.xyz</a>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg text-center">
            <div class="text-4xl mb-4">💬</div>
            <h3 class="text-xl font-bold mb-4 text-orange">Facebook Messenger</h3>
            <p class="mb-4">Connect with us on our official Facebook page for quick responses and account assistance.</p>
            <a href="${config.links.facebook}" target="_blank" class="text-orange hover:underline font-semibold">Visit Facebook Page</a>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg text-center">
            <div class="text-4xl mb-4">📝</div>
            <h3 class="text-xl font-bold mb-4 text-orange">Contact Form</h3>
            <p class="mb-4">Use our contact form below for structured inquiries. We'll respond within 24 hours.</p>
            <a href="#contact-form" class="text-orange hover:underline font-semibold">Fill Out Form</a>
          </div>
        </div>
      </div>
    </section>
    
    <section class="faq-main py-12 relative">
      <div class="faq-overlay absolute inset-0 bg-black bg-opacity-30"></div>
      <div class="faq-container g-container relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p class="text-center mb-8 max-w-2xl mx-auto">Find quick answers to common questions about <strong>Ultrapanda login</strong>, <strong>Ultra Panda games</strong>, account management, and platform features. If you don't find what you're looking for, don't hesitate to <a href="#contact-form" class="text-orange hover:underline">contact our support team</a>.</p>
        
        <!-- Desktop FAQ -->
        <div class="faq-wrapper desk-faq g-flex hidden md:flex gap-8">
          <div class="faq-que flex-1">
            <ul>
              ${faqs.map((faq, index) => `
                <li class="faq-question cursor-pointer p-4 mb-2 bg-gray-800 rounded ${index === 0 ? 'active' : ''}" data-index="${index}">
                  ${faq.question}
                </li>
              `).join('')}
            </ul>
          </div>
          <div class="faq-answers flex-1">
            ${faqs.map((faq, index) => `
              <div class="faq-ans p-4 bg-gray-800 rounded ${index === 0 ? 'active' : ''}" data-index="${index}">
                <p>${faq.answer}</p>
                <div class="faq-ans-design"></div>
              </div>
            `).join('')}
          </div>
        </div>
        
        <!-- Mobile FAQ -->
        <div class="mobile-faq md:hidden">
          <ul>
            ${faqs.map((faq, index) => `
              <li class="mobile-faq-item cursor-pointer p-4 mb-2 bg-gray-800 rounded ${index === 0 ? 'active' : ''}">
                <span>${faq.question}</span>
                <i class="bi bi-plus-lg float-right"></i>
              </li>
              <div class="mobile-faq-ans p-4 bg-gray-700 rounded mb-2 ${index === 0 ? 'active' : ''}">
                <p>${faq.answer}</p>
                <div class="faq-ans-design"></div>
              </div>
            `).join('')}
          </ul>
        </div>
      </div>
    </section>
    
    <section class="contact-mail py-8 text-center">
      <div class="contact-mail-container">
        <a href="mailto:support@ultrapanda.xyz" class="text-orange hover:underline text-lg">
          <i class="bi bi-envelope"></i> support@ultrapanda.xyz
        </a>
      </div>
    </section>
    
    <section class="contact-form-main py-12 relative" id="contact-form">
      <div class="contact-form-overlay absolute inset-0 bg-black bg-opacity-30"></div>
      <div class="contact-form-main-container g-container g-flex flex-wrap gap-8 relative z-10">
        <div class="contact-form-left flex-1 min-w-[300px] text-white">
          <h2 class="text-3xl font-bold mb-4">Let's Get In Touch</h2>
          <p class="mb-4">Have a question about <strong>Ultrapanda login</strong>, need help with <strong>Ultra Panda games</strong>, or want to provide feedback? We're here to help! Reach out to the Ultrapanda support team anytime and we'll get back to you as quickly as possible.</p>
          <p class="mb-4">Whether it's about:</p>
          <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>Account access and <strong>Ultrapanda login</strong> issues</li>
            <li>Game strategies and recommendations</li>
            <li>Technical support and troubleshooting</li>
            <li>Bonus inquiries and promotions</li>
            <li>General questions about <strong>Ultrapanda Club 777</strong></li>
          </ul>
          <p>We're just a message away. Fill out the form below or use one of our other contact methods for immediate assistance.</p>
        </div>
        <div class="contact-form-right flex-1 min-w-[300px]">
          <form id="contactForm" class="space-y-4">
            <input type="text" name="firstname" placeholder="FIRST NAME..." required class="w-full p-3 bg-gray-800 text-white rounded border border-gray-700 focus:border-orange focus:outline-none">
            <input type="text" name="lastname" placeholder="LAST NAME..." required class="w-full p-3 bg-gray-800 text-white rounded border border-gray-700 focus:border-orange focus:outline-none">
            <input type="email" name="email" placeholder="YOUR MAIL..." required class="w-full p-3 bg-gray-800 text-white rounded border border-gray-700 focus:border-orange focus:outline-none">
            <input type="text" name="mobile" placeholder="YOUR PHONE..." maxlength="10" minlength="10" required class="w-full p-3 bg-gray-800 text-white rounded border border-gray-700 focus:border-orange focus:outline-none">
            <textarea name="message" placeholder="YOUR MESSAGE" required class="w-full p-3 bg-gray-800 text-white rounded border border-gray-700 focus:border-orange focus:outline-none h-32"></textarea>
            <button type="submit" class="submit-btn w-full px-8 py-3 bg-orange text-white rounded hover:bg-orange-light transition-colors">SEND MESSAGE</button>
          </form>
          <div id="formMessage" class="hidden mt-4 p-4 rounded"></div>
        </div>
      </div>
    </section>
    
    <section class="exp-main py-12">
      <div class="exp-container g-container text-center">
        <div class="exp-services">
          <h4 class="text-2xl font-bold mb-8">Our Services</h4>
          <div class="services-wrapper g-flex flex-wrap justify-center gap-6">
            ${[1, 2, 3].map(i => `
              <div class="service-box">
                <img src="/media/sevices-${i}.png" alt="Service ${i}">
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
}

export function initContactUs() {
  // Desktop FAQ
  const faqQuestions = document.querySelectorAll('.faq-question');
  const faqAnswers = document.querySelectorAll('.faq-ans');

  faqQuestions.forEach((question, index) => {
    question.addEventListener('click', () => {
      faqQuestions.forEach(q => q.classList.remove('active'));
      faqAnswers.forEach(a => a.classList.remove('active'));

      question.classList.add('active');
      faqAnswers[index].classList.add('active');
    });
  });

  // Mobile FAQ
  const mobileFaqItems = document.querySelectorAll('.mobile-faq-item');

  mobileFaqItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      const answer = item.nextElementSibling;
      const isActive = item.classList.contains('active');

      document.querySelectorAll('.mobile-faq-item').forEach(i => i.classList.remove('active'));
      document.querySelectorAll('.mobile-faq-ans').forEach(a => a.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
        answer.classList.add('active');
      }
    });
  });

  // Contact Form
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('.submit-btn');
      const formData = new FormData(contactForm);

      submitBtn.disabled = true;
      submitBtn.textContent = 'SENDING...';
      formMessage.classList.add('hidden');

      // Since we don't have a backend, just show a success message
      setTimeout(() => {
        formMessage.classList.remove('hidden');
        formMessage.className = 'block mt-4 p-4 rounded bg-green-500 text-white';
        formMessage.textContent = 'Thank you for your message! We will get back to you soon.';

        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = 'SEND MESSAGE';
      }, 1000);
    });
  }
}



