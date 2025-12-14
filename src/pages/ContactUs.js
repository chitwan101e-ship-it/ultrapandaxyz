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
    question: "Where can I download Ultrapanda or get Ultrapanda mobi?",
    answer: `To download <strong>Ultrapanda</strong> or get the <strong>Ultra Panda Mobi</strong> app, visit our <a href="${config.links.facebook}" target="_blank" class="text-orange hover:underline">official Facebook page</a> for the <strong>Ultrapanda download</strong> link. The <strong>Ultrapanda mobi</strong> app provides optimized mobile gaming with full access to all <strong>Ultrapanda</strong> features and games. You can also play <strong>Ultrapanda online</strong> without downloading. If you encounter any <strong>Ultrapanda download</strong> issues, our support team is available to assist you.`
  },
  {
    question: "Can I play Ultrapanda games without downloading the app?",
    answer: "Currently, we primarily offer our gaming experience through our app for the best performance and security. However, we are actively working on expanding our accessibility options to provide web-based alternatives. For the most up-to-date information on platform access methods, please contact our support team or check our <a href=\"/blog\" class=\"text-orange hover:underline\">blog</a> for announcements."
  },
  {
    question: "I'm having trouble with my Ultrapanda login or Ultrapanda mobi login. What should I do?",
    answer: "If you're experiencing <strong>Ultrapanda login</strong> or <strong>Ultrapanda mobi login</strong> issues, first ensure you're using the correct <strong>Ultrapanda login password</strong>. If you've forgotten your <strong>Ultrapanda login</strong> credentials, contact our support team via email at support@ultrapanda.xyz or through our <a href=\"" + config.links.facebook + "\" target=\"_blank\" class=\"text-orange hover:underline\">Facebook page</a>. We'll help you regain access to your <strong>Ultrapanda</strong> account quickly and securely."
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

export function ContactUs(currentPath = '/contact-us') {
  return `
    ${Header(currentPath)}
    
    <section class="contact-hero relative">
      <div class="contact-hero-container">
        <img src="/media/contact-hero.jpg" alt="Contact Ultrapanda Support Team" class="w-full">
        <div class="contact-hero-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 max-w-4xl px-4">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Ultrapanda Login Help & Support - Contact Us</h1>
          <p class="text-lg">Need help with <strong>Ultrapanda login</strong>, <strong>Ultrapanda mobi login</strong>, or <strong>Ultrapanda download</strong>? Our dedicated support team is available 24/7 to assist you. Whether you need help with <strong>Ultrapanda login password</strong>, account access, <strong>Ultra Panda Mobi</strong> app download, game strategies, or technical issues, we're here to help with all your <strong>Ultrapanda</strong> needs.</p>
        </div>
      </div>
    </section>
    
    <!-- Trust & Support Intro -->
    <section class="contact-intro py-12">
      <div class="g-container max-w-4xl mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">Ultrapanda Support - Login, Download & Account Help</h2>
        <div class="space-y-6 text-lg leading-relaxed">
          <p>
            At <strong>Ultrapanda</strong>, customer satisfaction is our top priority. Our experienced support team understands the importance of quick, helpful responses and is committed to resolving your concerns efficiently. Whether you're experiencing issues with <strong>Ultrapanda login</strong>, <strong>Ultrapanda mobi login</strong>, need guidance on <strong>Ultrapanda download</strong> or the <strong>Ultra Panda Mobi</strong> app, or have questions about playing <strong>Ultrapanda online</strong>, we provide comprehensive assistance.
          </p>
          <p>
            We're proud to be the official <strong>Ultrapanda.xyz</strong> platform, offering transparent, secure, and reliable gaming services. Our support team can help with <strong>Ultrapanda login password</strong> recovery, account management, <strong>Ultrapanda download</strong> instructions, bonus inquiries, game recommendations, and technical troubleshooting. For detailed guides on <strong>Ultrapanda login</strong> and <strong>Ultrapanda mobi</strong>, visit our <a href="/blog" class="text-orange hover:underline font-semibold">Ultrapanda blog</a> or explore our <a href="/games" class="text-orange hover:underline font-semibold">games collection</a>.
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
            <div class="support-icon-wrapper mb-4">
              <i class="bi bi-envelope-fill text-white text-5xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-4 text-orange">Email Support</h3>
            <p class="mb-4">Send us a detailed message via email for comprehensive assistance with your inquiries.</p>
            <a href="mailto:support@ultrapanda.xyz" class="text-orange hover:underline font-semibold">support@ultrapanda.xyz</a>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg text-center">
            <div class="support-icon-wrapper mb-4">
              <i class="bi bi-chat-dots-fill text-white text-5xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-4 text-orange">Facebook Messenger</h3>
            <p class="mb-4">Connect with us on our official Facebook page for quick responses and account assistance.</p>
            <a href="${config.links.facebook}" target="_blank" class="text-orange hover:underline font-semibold">Visit Facebook Page</a>
          </div>
          <div class="bg-gray-800 p-6 rounded-lg text-center">
            <div class="support-icon-wrapper mb-4">
              <i class="bi bi-file-earmark-text-fill text-white text-5xl"></i>
            </div>
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
        
        <!-- FAQ - Clean List Format -->
        <div class="faq-list-wrapper max-w-4xl mx-auto">
          <ul class="faq-list">
            ${faqs.map((faq, index) => `
              <li class="faq-list-item">
                <div class="faq-question-row cursor-pointer flex justify-between items-center py-4 border-b border-gray-700 ${index === 0 ? 'active' : ''}" data-index="${index}">
                  <span class="faq-question-text text-white text-lg"><span class="faq-number mr-3 text-orange font-bold">${index + 1}.</span>${faq.question}</span>
                  <i class="bi bi-plus-lg text-white text-xl transition-transform duration-300 ${index === 0 ? 'rotate-45' : ''}"></i>
                </div>
                <div class="faq-answer-dropdown ${index === 0 ? 'active' : ''}" data-index="${index}">
                  <div class="faq-answer-content py-4 text-gray-300 leading-relaxed">
                    ${faq.answer}
                  </div>
                </div>
              </li>
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
    
    ${Footer()}
  `;
}

export function initContactUs() {
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



