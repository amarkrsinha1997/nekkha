// ===========================
// Starfield Animation
// ===========================

class Starfield {
  constructor() {
    this.canvas = document.getElementById("starfield");
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext("2d");
    this.stars = [];
    this.numStars = 200;
    this.speed = 0.2;

    this.resize();
    this.init();
    this.animate();

    window.addEventListener("resize", () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  init() {
    this.stars = [];
    for (let i = 0; i < this.numStars; i++) {
      this.stars.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * this.speed,
        vy: (Math.random() - 0.5) * this.speed,
        opacity: Math.random() * 0.5 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.stars.forEach((star) => {
      // Update position
      star.x += star.vx;
      star.y += star.vy;

      // Wrap around screen
      if (star.x < 0) star.x = this.canvas.width;
      if (star.x > this.canvas.width) star.x = 0;
      if (star.y < 0) star.y = this.canvas.height;
      if (star.y > this.canvas.height) star.y = 0;

      // Twinkle effect
      star.twinklePhase += star.twinkleSpeed;
      const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7;

      // Draw star
      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`;
      this.ctx.fill();

      // Add glow for larger stars
      if (star.radius > 1) {
        this.ctx.beginPath();
        this.ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(51, 116, 203, ${
          star.opacity * twinkle * 0.2
        })`;
        this.ctx.fill();
      }
    });

    requestAnimationFrame(() => this.animate());
  }
}

// ===========================
// Navigation
// ===========================

class Navigation {
  constructor() {
    this.navbar = document.querySelector(".navbar");
    this.navToggle = document.querySelector(".nav-toggle");
    this.navMenu = document.querySelector(".nav-menu");
    this.navLinks = document.querySelectorAll(".nav-menu a");

    this.init();
  }

  init() {
    // Scroll effect
    window.addEventListener("scroll", () => this.handleScroll());

    // Mobile menu toggle
    if (this.navToggle) {
      this.navToggle.addEventListener("click", () => this.toggleMenu());
    }

    // Close menu on link click (mobile)
    this.navLinks.forEach((link) => {
      link.addEventListener("click", () => this.closeMenu());
    });

    // Smooth scroll for anchor links
    this.navLinks.forEach((link) => {
      if (link.getAttribute("href").startsWith("#")) {
        link.addEventListener("click", (e) => this.smoothScroll(e));
      }
    });
  }

  handleScroll() {
    if (window.scrollY > 50) {
      this.navbar.classList.add("scrolled");
    } else {
      this.navbar.classList.remove("scrolled");
    }
  }

  toggleMenu() {
    const isExpanded = this.navToggle.getAttribute("aria-expanded") === "true";
    this.navToggle.setAttribute("aria-expanded", !isExpanded);
    this.navMenu.classList.toggle("active");
  }

  closeMenu() {
    if (window.innerWidth < 1024) {
      this.navToggle.setAttribute("aria-expanded", "false");
      this.navMenu.classList.remove("active");
    }
  }

  smoothScroll(e) {
    const targetId = e.currentTarget.getAttribute("href");
    if (!targetId.startsWith("#")) return;

    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    e.preventDefault();

    const navHeight = this.navbar.offsetHeight;
    const targetPosition = targetElement.offsetTop - navHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
}

// ===========================
// FAQ Accordion
// ===========================

class FAQ {
  constructor() {
    this.faqItems = document.querySelectorAll(".faq-item");
    this.init();
  }

  init() {
    this.faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");

      question.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        // Close all items
        this.faqItems.forEach((faq) => {
          faq.classList.remove("active");
          faq
            .querySelector(".faq-question")
            .setAttribute("aria-expanded", "false");
        });

        // Open clicked item if it wasn't active
        if (!isActive) {
          item.classList.add("active");
          question.setAttribute("aria-expanded", "true");
        }
      });
    });
  }
}

// ===========================
// Contact Buttons
// ===========================
// Contact form removed - using direct action buttons (WhatsApp, Phone, Email)

// ===========================
// Newsletter Form
// ===========================

class NewsletterForm {
  constructor() {
    this.form = document.querySelector(".newsletter-form");
    if (!this.form) return;

    this.init();
  }

  init() {
    this.form.addEventListener("submit", (e) => this.handleSubmit(e));
  }

  async handleSubmit(e) {
    e.preventDefault();

    const input = this.form.querySelector('input[type="email"]');
    const email = input.value.trim();

    // Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.showMessage("Please enter a valid email address.");
      return;
    }

    // Show loading state
    const submitBtn = this.form.querySelector("button");
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Subscribing...";
    submitBtn.disabled = true;

    // Simulate subscription (replace with actual API call)
    try {
      await this.simulateSubscription(email);

      // Success
      this.showMessage("Thank you for subscribing!");
      input.value = "";
    } catch (error) {
      this.showMessage("Subscription failed. Please try again.");
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  }

  simulateSubscription(email) {
    return new Promise((resolve) => {
      console.log("Newsletter subscription:", email);
      setTimeout(resolve, 1000);
    });
  }

  showMessage(message) {
    alert(message); // Replace with better UI notification
  }
}

// ===========================
// Back to Top Button
// ===========================

class BackToTop {
  constructor() {
    this.button = document.getElementById("backToTop");
    if (!this.button) return;

    this.init();
  }

  init() {
    window.addEventListener("scroll", () => this.handleScroll());
    this.button.addEventListener("click", () => this.scrollToTop());
  }

  handleScroll() {
    if (window.scrollY > 500) {
      this.button.classList.add("visible");
    } else {
      this.button.classList.remove("visible");
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}

// ===========================
// Intersection Observer for Animations
// ===========================

class AnimationObserver {
  constructor() {
    this.animationStyleAdded = false;
    this.init();
  }

  init() {
    const options = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    // Observe elements with proper grouping
    const animatedElements = document.querySelectorAll(`
      .section-header,
      .feature-card,
      .timeline-item,
      .step,
      .step-content,
      .stat-card,
      .faq-item,
      .requirement-item,
      .requirements,
      .contact-button,
      .contact-info,
      .social-links,
      .about-text,
      .about-stats,
      .hero-stats,
      .hero-cta,
      .hero-content,
      .hero-visual
    `);

    animatedElements.forEach((el, index) => {
      // Don't re-apply if already animated
      if (el.classList.contains("animate-in")) return;

      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 0.2s ease-out, transform 0.3s ease-out";

      // Stagger animation within same section (faster)
      const delay = (index % 10) * 0.04;
      el.style.transitionDelay = `${delay}s`;
      observer.observe(el);
    });

    // Add animation class styles only once
    if (
      !this.animationStyleAdded &&
      !document.getElementById("animation-styles")
    ) {
      const style = document.createElement("style");
      style.id = "animation-styles";
      style.textContent = `
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `;
      document.head.appendChild(style);
      this.animationStyleAdded = true;
    }
  }
}

// Helper function to initialize timeline animations
function initTimelineAnimations() {
  const options = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  const timelineItems = document.querySelectorAll(".timeline-item");

  timelineItems.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.3s ease-out, transform 0.3s ease-out";
    observer.observe(el);
  });
}

// ===========================
// Parallax Effect
// ===========================

class Parallax {
  constructor() {
    this.init();
  }

  init() {
    window.addEventListener("scroll", () => {
      const scrolled = window.scrollY;

      // Parallax for hero section
      const hero = document.querySelector(".hero");
      if (hero) {
        const heroContent = hero.querySelector(".hero-content");
        if (heroContent) {
          heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
          heroContent.style.opacity = 1 - scrolled / 800;
        }
      }
    });
  }
}

// ===========================
// Performance Optimization
// ===========================

// Debounce function for scroll events
function debounce(func, wait = 10) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Lazy loading images
function lazyLoadImages() {
  const images = document.querySelectorAll('img[loading="lazy"]');

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute("data-src");
          }
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  } else {
    // Fallback for browsers without IntersectionObserver
    images.forEach((img) => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
      }
    });
  }
}

// ===========================
// I18N SYSTEM
// ===========================

class I18n {
  constructor() {
    this.currentLang = "en";
    this.content = {
      en: window.content_en || {},
      hi: window.content_hi || {},
    };
    this.loadCallbacks = [];
  }

  init() {
    // Detect language from localStorage, URL param, or browser
    const savedLang = localStorage.getItem("nekkhaSiteLang");
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get("lang");
    const browserLang = navigator.language.split("-")[0];

    // Priority: URL param > localStorage > browser > default
    if (urlLang && this.content[urlLang]) {
      this.currentLang = urlLang;
    } else if (savedLang && this.content[savedLang]) {
      this.currentLang = savedLang;
    } else if (this.content[browserLang]) {
      this.currentLang = browserLang;
    }

    // Load language file if not English
    if (this.currentLang !== "en" && !window[`content_${this.currentLang}`]) {
      this.loadLanguageFile(this.currentLang, () => {
        this.content[this.currentLang] =
          window[`content_${this.currentLang}`] || {};
        this.updateAllContent();
      });
    } else {
      this.updateAllContent();
    }
  }

  loadLanguageFile(lang, callback) {
    const script = document.createElement("script");
    script.src = `js/content.${lang}.js`;
    script.onload = () => {
      console.log(`✅ Loaded language: ${lang}`);
      callback();
    };
    script.onerror = () => {
      console.error(`❌ Failed to load language: ${lang}`);
      // Fallback to English
      this.currentLang = "en";
      this.updateAllContent();
    };
    document.head.appendChild(script);
  }

  setLanguage(lang) {
    if (!this.content[lang] && !window[`content_${lang}`]) {
      console.error(`Language ${lang} not available`);
      return;
    }

    this.currentLang = lang;
    localStorage.setItem("nekkhaSiteLang", lang);

    // If language content not loaded yet, load it
    if (!this.content[lang] && !window[`content_${lang}`]) {
      this.loadLanguageFile(lang, () => {
        this.content[lang] = window[`content_${lang}`] || {};
        this.updateAllContent();
      });
    } else {
      if (window[`content_${lang}`]) {
        this.content[lang] = window[`content_${lang}`];
      }
      this.updateAllContent();
    }
  }

  getNestedValue(obj, path) {
    return path.split(".").reduce((current, key) => current?.[key], obj);
  }

  updateAllContent() {
    // Update data-i18n elements
    const elements = document.querySelectorAll("[data-i18n]");
    const currentContent = this.content[this.currentLang];

    elements.forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const value = this.getNestedValue(currentContent, key);

      if (value) {
        // Update content based on element type
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
          element.placeholder = value;
        } else if (element.hasAttribute("aria-label")) {
          element.setAttribute("aria-label", value);
        } else if (element.hasAttribute("content")) {
          element.setAttribute("content", value);
        } else {
          element.textContent = value;
        }
      }
    });

    // Update document title and meta
    const titleValue = this.getNestedValue(currentContent, "meta.title");
    const descValue = this.getNestedValue(currentContent, "meta.description");

    if (titleValue) {
      document.title = titleValue;
    }

    if (descValue) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", descValue);
    }

    // Update HTML lang attribute
    document.documentElement.lang = this.currentLang;

    // Update language switcher UI
    this.updateLangSwitcher();

    // Load dynamic content for complex sections
    this.loadDynamicContent();

    // Execute any registered callbacks
    this.loadCallbacks.forEach((cb) => cb());
  }

  updateLangSwitcher() {
    const options = document.querySelectorAll(".lang-option");
    options.forEach((option) => {
      const lang = option.getAttribute("data-lang");
      if (lang === this.currentLang) {
        option.classList.add("active");
      } else {
        option.classList.remove("active");
      }
    });
  }

  loadDynamicContent() {
    const currentContent = this.content[this.currentLang];

    // Load features section
    this.loadFeaturesSection(currentContent);

    // Load evolution timeline
    this.loadEvolutionSection(currentContent);

    // Load Why Nekkha slider
    this.loadWhyNekkhaSection(currentContent);

    // Load How It Works
    this.loadHowItWorksSection(currentContent);

    // Load FAQ
    this.loadFAQSection(currentContent);

    // Load About section values list
    this.loadAboutSection(currentContent);

    // Reinitialize slider
    if (typeof WhySlider !== "undefined") {
      new WhySlider();
    }
  }

  loadFeaturesSection(content) {
    const { features } = content;
    if (features) {
      const featureCards = document.querySelectorAll(
        ".features-grid .feature-card"
      );
      features.forEach((feature, index) => {
        if (featureCards[index]) {
          const title = featureCards[index].querySelector(".feature-title");
          const description = featureCards[index].querySelector(
            ".feature-description"
          );
          if (title) title.textContent = feature.title;
          if (description) description.textContent = feature.description;
        }
      });
    }
  }

  loadEvolutionSection(content) {
    const { evolution } = content;
    if (!evolution || !evolution.timeline) return;

    const timelineContainer = document.querySelector(".timeline");
    if (!timelineContainer) return;

    timelineContainer.innerHTML = evolution.timeline
      .map((item, index) => {
        const isReverse = index % 2 === 1 ? "reverse" : "";
        return `
        <div class="timeline-item">
          <div class="timeline-content ${isReverse}">
            <div class="timeline-image">
              <img src="${item.image}" alt="${item.imageAlt}" loading="lazy">
              <div class="image-placeholder">${item.title}</div>
            </div>
            <div class="timeline-text">
              <span class="timeline-year">${item.era}</span>
              <h3>${item.title}</h3>
              <p>${item.description}</p>
            </div>
          </div>
        </div>
      `;
      })
      .join("");
  }

  loadWhyNekkhaSection(content) {
    const { whyNekkha } = content;
    if (!whyNekkha || !whyNekkha.benefits) return;

    const whyTrack = document.getElementById("whyTrack");
    if (whyTrack) {
      whyTrack.innerHTML = whyNekkha.benefits
        .map(
          (benefit) => `
        <div class="why-card">
          <div class="why-number">${benefit.number}</div>
          <h3>${benefit.title}</h3>
          <p>${benefit.description}</p>
        </div>
      `
        )
        .join("");
    }
  }

  loadHowItWorksSection(content) {
    const { howItWorksSection } = content;
    if (!howItWorksSection || !howItWorksSection.requirements) return;

    const requirementItems = document.querySelectorAll(
      ".requirement-item span"
    );
    howItWorksSection.requirements.forEach((req, index) => {
      if (requirementItems[index]) {
        requirementItems[index].textContent = req;
      }
    });
  }

  loadFAQSection(content) {
    const { faq } = content;
    if (!faq) return;

    const faqItems = document.querySelectorAll(".faq-item");
    faq.forEach((item, index) => {
      if (faqItems[index]) {
        const question = faqItems[index].querySelector(".faq-question span");
        const answer = faqItems[index].querySelector(".faq-answer p");
        if (question) question.textContent = item.question;
        if (answer) answer.textContent = item.answer;
      }
    });
  }

  loadAboutSection(content) {
    const { about } = content;
    if (!about || !about.values || !about.values.list) return;

    const valuesList = document.querySelector(".values-list");
    if (valuesList) {
      valuesList.innerHTML = about.values.list
        .map(
          (value) => `
        <li><strong>${value.key}:</strong> ${value.description}</li>
      `
        )
        .join("");
    }
  }

  t(key) {
    return this.getNestedValue(this.content[this.currentLang], key) || key;
  }

  onLoad(callback) {
    this.loadCallbacks.push(callback);
  }
}

// Create global i18n instance
const i18n = new I18n();

// ===========================
// Initialize Everything
// ===========================

document.addEventListener("DOMContentLoaded", () => {
  // Initialize i18n system
  i18n.init();

  // Initialize components
  new Starfield();
  new Navigation();
  new FAQ();
  new NewsletterForm();
  new BackToTop();
  new AnimationObserver();
  new Parallax();

  // Setup language switcher
  setupLanguageSwitcher();

  // Lazy load images
  lazyLoadImages();

  // Log ready state
  console.log(
    "%c🚀 Nekkha.com loaded successfully!",
    "color: #3374cb; font-size: 16px; font-weight: bold;"
  );
});

// ===========================
// Service Worker Registration (for PWA)
// ===========================

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    // Uncomment when service worker is ready
    // navigator.serviceWorker.register('/sw.js')
    //   .then(reg => console.log('Service Worker registered'))
    //   .catch(err => console.log('Service Worker registration failed'));
  });
}

// ===========================
// Dynamic Content Loading
// ===========================

function loadDynamicContent() {
  if (typeof CONTENT_CONFIG === "undefined") {
    console.warn("CONTENT_CONFIG not loaded");
    return;
  }

  // Load all sections
  loadNavigation();
  loadHero();
  loadFeaturesSection();
  loadEvolutionSection();
  loadWhyNekkhaSection();
  loadHowItWorksSection();
  loadFAQSection();
  loadContactSection();
  loadAboutSection();
  loadFooter();
}

function loadNavigation() {
  const { navigation } = CONTENT_CONFIG;
  if (!navigation) return;

  // Update logo
  const logoText = document.querySelector(".logo-text");
  if (logoText) logoText.textContent = navigation.logo;

  // Update nav links
  const navMenu = document.querySelector(".nav-menu");
  if (navMenu) {
    const navItems = navMenu.querySelectorAll("li:not(.nav-button)");
    navigation.links.forEach((link, index) => {
      if (navItems[index]) {
        const anchor = navItems[index].querySelector("a");
        if (anchor) {
          anchor.textContent = link.text;
          anchor.href = link.href;
        }
      }
    });

    // Update CTA buttons
    const loginBtn = navMenu.querySelector('.nav-button a[href*="login"]');
    const signupBtn = navMenu.querySelector('.nav-button a[href*="signup"]');
    if (loginBtn) loginBtn.textContent = navigation.cta.login.text;
    if (signupBtn) signupBtn.textContent = navigation.cta.signup.text;
  }
}

function loadHero() {
  const { hero } = CONTENT_CONFIG;
  if (!hero) return;

  // Etymology
  const etymologyLabel = document.querySelector(".etymology-label");
  const etymologyText = document.querySelector(".etymology-text");
  if (etymologyLabel && hero.etymologyLabel) {
    etymologyLabel.textContent = hero.etymologyLabel;
  }
  if (etymologyText && hero.etymologyText) {
    // Replace just the text part after the label
    const labelSpan = etymologyText.querySelector(".etymology-label");
    if (labelSpan) {
      etymologyText.innerHTML = `<span class="etymology-label">${hero.etymologyLabel}</span> — ${hero.etymologyText}`;
    }
  }

  // Title
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    heroTitle.innerHTML = `
      <span class="gradient-text">${hero.title.highlight}</span>
      ${hero.title.main ? "<br>" + hero.title.main : ""}
    `;
  }

  // Subtitle
  const heroSubtitle = document.querySelector(".hero-subtitle");
  if (heroSubtitle) heroSubtitle.textContent = hero.subtitle;

  // Stats
  const statItems = document.querySelectorAll(".hero-stats .stat-item");
  hero.stats.forEach((stat, index) => {
    if (statItems[index]) {
      const number = statItems[index].querySelector(".stat-number");
      const label = statItems[index].querySelector(".stat-label");
      if (number) number.textContent = stat.number;
      if (label) label.textContent = stat.label;
    }
  });

  // CTA
  const primaryCTA = document.querySelector('.hero-cta a[href*="signup"]');
  const secondaryCTA = document.querySelector(
    '.hero-cta a[href*="how-it-works"]'
  );
  if (primaryCTA) {
    const textNode = Array.from(primaryCTA.childNodes).find(
      (node) => node.nodeType === Node.TEXT_NODE
    );
    if (textNode) {
      textNode.textContent = hero.cta.primary;
    } else {
      primaryCTA.childNodes[0].textContent = hero.cta.primary;
    }
  }
  if (secondaryCTA) secondaryCTA.textContent = hero.cta.secondary;
}

function loadFeaturesSection() {
  const { featuresSection, features } = CONTENT_CONFIG;
  if (!featuresSection) return;

  // Section headers
  const sectionTitle = document.querySelector("#features .section-title");
  const sectionSubtitle = document.querySelector("#features .section-subtitle");
  if (sectionTitle) sectionTitle.textContent = featuresSection.sectionTitle;
  if (sectionSubtitle)
    sectionSubtitle.textContent = featuresSection.sectionSubtitle;

  // Rate clarity box
  const rateClarityBox = document.querySelector(".rate-clarity-box");
  if (rateClarityBox && featuresSection.rateClarityTitle) {
    rateClarityBox.innerHTML = `
      <h3 style="color: #efc426; margin-bottom: 1.5rem; font-size: 1.5rem;">${
        featuresSection.rateClarityTitle
      }</h3>
      <div style="display: grid; grid-template-columns: 1fr; gap: 2rem; max-width: 400px; margin: 0 auto;">
        <div style="background: rgba(255,255,255,0.05); padding: 2rem; border-radius: 8px;">
          <div style="font-size: 3rem; font-weight: bold; color: #efc426; margin-bottom: 0.5rem;">${
            featuresSection.rateClarityRate
          }</div>
          <div style="color: #ffffff; font-weight: 600; margin-bottom: 0.5rem; font-size: 1.2rem;">${
            featuresSection.rateClarityLabel
          }</div>
          <div style="color: rgba(255,255,255,0.7); font-size: 0.9rem;">${
            featuresSection.rateClarityDescription
          }</div>
        </div>
      </div>
      <p style="color: rgba(255,255,255,0.8); margin-top: 1.5rem; font-size: 0.95rem;"><strong>${
        CONTENT_CONFIG.site.language === "hi" ? "उदाहरण:" : "Example:"
      }</strong> ${featuresSection.rateClarityExample}</p>
    `;
  }

  // Feature cards
  if (features) {
    const featureCards = document.querySelectorAll(
      ".features-grid .feature-card"
    );
    features.forEach((feature, index) => {
      if (featureCards[index]) {
        const title = featureCards[index].querySelector(".feature-title");
        const description = featureCards[index].querySelector(
          ".feature-description"
        );
        if (title) title.textContent = feature.title;
        if (description) description.textContent = feature.description;
      }
    });
  }
}

function loadEvolutionSection() {
  const { evolution } = CONTENT_CONFIG;
  if (!evolution) return;

  // Update section title and subtitle
  const sectionTitle = document.querySelector("#evolution .section-title");
  const sectionSubtitle = document.querySelector(
    "#evolution .section-subtitle"
  );

  if (sectionTitle) sectionTitle.textContent = evolution.sectionTitle;
  if (sectionSubtitle) sectionSubtitle.textContent = evolution.sectionSubtitle;

  // Load timeline items
  const timelineContainer = document.querySelector(".timeline");
  if (!timelineContainer) return;

  timelineContainer.innerHTML = evolution.timeline
    .map((item, index) => {
      const isReverse = index % 2 === 1 ? "reverse" : "";
      return `
      <div class="timeline-item">
        <div class="timeline-content ${isReverse}">
          <div class="timeline-image">
            <img src="${item.image}" alt="${item.imageAlt}" loading="lazy">
            <div class="image-placeholder">${item.title}</div>
          </div>
          <div class="timeline-text">
            <span class="timeline-year">${item.era}</span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        </div>
      </div>
    `;
    })
    .join("");

  // Re-initialize animation observer for timeline items
  initTimelineAnimations();
}

function loadWhyNekkhaSection() {
  const { whyNekkha } = CONTENT_CONFIG;
  if (!whyNekkha) return;

  const sectionTitle = document.querySelector("#why-Nekkha .section-title");
  const sectionSubtitle = document.querySelector(
    "#why-Nekkha .section-subtitle"
  );
  if (sectionTitle) sectionTitle.textContent = whyNekkha.sectionTitle;
  if (sectionSubtitle) sectionSubtitle.textContent = whyNekkha.sectionSubtitle;

  // Update slider cards
  const whyTrack = document.getElementById("whyTrack");
  if (whyTrack && whyNekkha.benefits) {
    whyTrack.innerHTML = whyNekkha.benefits
      .map(
        (benefit) => `
      <div class="why-card">
        <div class="why-number">${benefit.number}</div>
        <h3>${benefit.title}</h3>
        <p>${benefit.description}</p>
      </div>
    `
      )
      .join("");
  }
}

function loadHowItWorksSection() {
  const { howItWorksSection, howItWorks } = CONTENT_CONFIG;
  if (!howItWorksSection) return;

  const sectionTitle = document.querySelector("#how-it-works .section-title");
  const sectionSubtitle = document.querySelector(
    "#how-it-works .section-subtitle"
  );
  if (sectionTitle) sectionTitle.textContent = howItWorksSection.sectionTitle;
  if (sectionSubtitle)
    sectionSubtitle.textContent = howItWorksSection.sectionSubtitle;

  // Update steps
  if (howItWorks) {
    const steps = document.querySelectorAll(".steps .step");
    howItWorks.forEach((step, index) => {
      if (steps[index]) {
        const title = steps[index].querySelector("h3");
        const description = steps[index].querySelector("p");
        if (title) title.textContent = step.title;
        if (description) description.textContent = step.description;
      }
    });
  }

  // Update requirements
  if (howItWorksSection.requirements) {
    const requirementsTitle = document.querySelector(".requirements h3");
    if (requirementsTitle)
      requirementsTitle.textContent = howItWorksSection.requirementsTitle;

    const requirementItems = document.querySelectorAll(
      ".requirement-item span"
    );
    howItWorksSection.requirements.forEach((req, index) => {
      if (requirementItems[index]) requirementItems[index].textContent = req;
    });
  }
}

function loadFAQSection() {
  const { faqSection, faq } = CONTENT_CONFIG;
  if (!faqSection) return;

  const sectionTitle = document.querySelector("#faq .section-title");
  const sectionSubtitle = document.querySelector("#faq .section-subtitle");
  if (sectionTitle) sectionTitle.textContent = faqSection.sectionTitle;
  if (sectionSubtitle) sectionSubtitle.textContent = faqSection.sectionSubtitle;

  // Update FAQ items
  if (faq) {
    const faqItems = document.querySelectorAll(".faq-item");
    faq.forEach((item, index) => {
      if (faqItems[index]) {
        const question = faqItems[index].querySelector(".faq-question span");
        const answer = faqItems[index].querySelector(".faq-answer p");
        if (question) question.textContent = item.question;
        if (answer) answer.textContent = item.answer;
      }
    });
  }
}

function loadContactSection() {
  const { contactSection, contact } = CONTENT_CONFIG;
  if (!contactSection) return;

  const sectionTitle = document.querySelector("#contact .section-title");
  const sectionSubtitle = document.querySelector("#contact .section-subtitle");
  if (sectionTitle) sectionTitle.textContent = contactSection.title;
  if (sectionSubtitle) sectionSubtitle.textContent = contactSection.subtitle;

  const contactTitle = document.querySelector(".contact-info h3");
  const contactDescription = document.querySelector(".contact-description");
  if (contactTitle) contactTitle.textContent = contactSection.title;
  if (contactDescription)
    contactDescription.textContent = contactSection.description;

  // Update contact buttons
  if (contact) {
    const whatsappBtn = document.querySelector(
      ".contact-button.whatsapp .contact-button-label"
    );
    const whatsappText = document.querySelector(
      ".contact-button.whatsapp .contact-button-text"
    );
    if (whatsappBtn) whatsappBtn.textContent = contactSection.whatsappLabel;
    if (whatsappText) whatsappText.textContent = contactSection.whatsappText;

    const phoneBtn = document.querySelector(
      ".contact-button.phone .contact-button-label"
    );
    const phoneText = document.querySelector(
      ".contact-button.phone .contact-button-text"
    );
    if (phoneBtn) phoneBtn.textContent = contactSection.phoneLabel;
    if (phoneText) phoneText.textContent = contact.phone.displayNumber;

    const emailBtn = document.querySelector(
      ".contact-button.email .contact-button-label"
    );
    const emailText = document.querySelector(
      ".contact-button.email .contact-button-text"
    );
    if (emailBtn) emailBtn.textContent = contactSection.emailLabel;
    if (emailText) emailText.textContent = contact.email.support;
  }

  // Social title
  const socialTitle = document.querySelector(".social-links h4");
  if (socialTitle) socialTitle.textContent = contactSection.socialTitle;
}

function loadAboutSection() {
  const { about } = CONTENT_CONFIG;
  if (!about) return;

  const sectionTitle = document.querySelector("#about .section-title");
  const sectionSubtitle = document.querySelector("#about .section-subtitle");
  if (sectionTitle) sectionTitle.textContent = about.sectionTitle;
  if (sectionSubtitle) sectionSubtitle.textContent = about.sectionSubtitle;

  // Mission
  const missionTitle = document.querySelector(".about-text h3:first-of-type");
  const missionParagraphs = document.querySelectorAll(".about-text p");
  if (missionTitle) missionTitle.textContent = about.mission.title;
  about.mission.paragraphs.forEach((para, index) => {
    if (missionParagraphs[index]) missionParagraphs[index].textContent = para;
  });

  // Values
  const valuesTitle = document.querySelector(".about-text h3:last-of-type");
  if (valuesTitle) valuesTitle.textContent = about.values.title;

  const valuesList = document.querySelector(".values-list");
  if (valuesList && about.values.list) {
    valuesList.innerHTML = about.values.list
      .map(
        (value) => `
      <li><strong>${value.key}:</strong> ${value.description}</li>
    `
      )
      .join("");
  }

  // Stats
  const statCards = document.querySelectorAll(".about-stats .stat-card");
  about.stats.forEach((stat, index) => {
    if (statCards[index]) {
      const number = statCards[index].querySelector("h4");
      const label = statCards[index].querySelector("p");
      if (number) number.textContent = stat.number;
      if (label) label.textContent = stat.label;
    }
  });
}

function loadFooter() {
  const { footer } = CONTENT_CONFIG;
  if (!footer) return;

  // Footer description
  const footerDescription = document.querySelector(".footer-description");
  if (footerDescription) footerDescription.textContent = footer.description;

  // Quick Links
  const quickLinksTitle = document.querySelector(
    ".footer-column:nth-child(2) h4"
  );
  if (quickLinksTitle && footer.quickLinksTitle) {
    quickLinksTitle.textContent = footer.quickLinksTitle;
  }
  if (footer.quickLinks) {
    const quickLinksContainer = document.querySelector(
      ".footer-column:nth-child(2) ul"
    );
    if (quickLinksContainer) {
      quickLinksContainer.innerHTML = footer.quickLinks
        .map((link) => `<li><a href="${link.url}">${link.name}</a></li>`)
        .join("");
    }
  }

  // Ecosystem
  const ecosystemTitle = document.querySelector(
    ".footer-column:nth-child(3) h4"
  );
  if (ecosystemTitle) ecosystemTitle.textContent = footer.ecosystemTitle;
  const ecosystemLinks = document.querySelector(
    ".footer-column:nth-child(3) ul"
  );
  if (ecosystemLinks && footer.ecosystemLinks) {
    ecosystemLinks.innerHTML = footer.ecosystemLinks
      .map(
        (link) =>
          `<li><a href="${link.url}" target="_blank" rel="noopener">${link.name}</a></li>`
      )
      .join("");
  }

  // Legal
  const legalTitle = document.querySelector(".footer-column:nth-child(4) h4");
  if (legalTitle) legalTitle.textContent = footer.legalTitle;
  const legalLinks = document.querySelector(".footer-column:nth-child(4) ul");
  if (legalLinks && footer.legalLinks) {
    legalLinks.innerHTML = footer.legalLinks
      .map((link) => `<li><a href="${link.url}">${link.name}</a></li>`)
      .join("");
  }

  // Newsletter
  const newsletterTitle = document.querySelector(
    ".footer-column:nth-child(5) h4"
  );
  const newsletterDesc = document.querySelector(
    ".footer-column:nth-child(5) > p"
  );
  const newsletterInput = document.querySelector(
    '.newsletter-form input[type="email"]'
  );
  const newsletterBtn = document.querySelector(".newsletter-form button");

  if (newsletterTitle && footer.newsletterTitle)
    newsletterTitle.textContent = footer.newsletterTitle;
  if (newsletterDesc && footer.newsletterDescription)
    newsletterDesc.textContent = footer.newsletterDescription;
  if (newsletterInput && footer.newsletterPlaceholder)
    newsletterInput.placeholder = footer.newsletterPlaceholder;
  if (newsletterBtn && footer.newsletterButton)
    newsletterBtn.textContent = footer.newsletterButton;

  // Copyright
  const copyright = document.querySelector(".footer-bottom p");
  if (copyright) copyright.textContent = footer.copyright;
}

// ===========================
// Language Switcher Setup
// ===========================

function setupLanguageSwitcher() {
  const langToggle = document.getElementById("langToggle");
  if (!langToggle) return;

  const toggleBtn = langToggle.querySelector(".lang-toggle-btn");
  const dropdown = langToggle.querySelector(".lang-dropdown");

  // Toggle dropdown on button click (for mobile and additional desktop UX)
  if (toggleBtn && dropdown) {
    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("show");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!langToggle.contains(e.target)) {
        dropdown.classList.remove("show");
      }
    });
  }

  // Set language click handlers
  const options = langToggle.querySelectorAll(".lang-option");
  options.forEach((option) => {
    option.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const selectedLang = option.dataset.lang;
      console.log(`🌐 Language switched to: ${selectedLang}`);

      // Close dropdown
      if (dropdown) {
        dropdown.classList.remove("show");
      }

      // Use i18n system to switch language
      i18n.setLanguage(selectedLang);
    });
  });
}

// ===========================
// Why Nekkha Slider
// ===========================

class WhySlider {
  constructor() {
    this.track = document.getElementById("whyTrack");
    this.dotsContainer = document.getElementById("whyDots");
    this.prevBtn = document.querySelector(".why-Nekkha .slider-btn.prev");
    this.nextBtn = document.querySelector(".why-Nekkha .slider-btn.next");
    this.sliderWrapper = document.querySelector(".why-slider-wrapper");

    if (!this.track) return;

    this.cards = Array.from(this.track.children);
    this.currentIndex = 0;
    this.cardsPerView = window.innerWidth >= 1024 ? 2 : 1;
    this.totalSlides = Math.ceil(this.cards.length / this.cardsPerView);
    this.autoplayInterval = null;
    this.autoplayDelay = 4000; // 4 seconds
    this.isHovered = false;

    this.init();
    this.setupEventListeners();
    this.startAutoplay();
  }

  init() {
    this.createDots();
    this.updateSlider();

    window.addEventListener("resize", () => {
      const newCardsPerView = window.innerWidth >= 1024 ? 2 : 1;
      if (newCardsPerView !== this.cardsPerView) {
        this.cardsPerView = newCardsPerView;
        this.totalSlides = Math.ceil(this.cards.length / this.cardsPerView);
        this.currentIndex = Math.min(this.currentIndex, this.totalSlides - 1);
        this.createDots();
        this.updateSlider();
      }
    });
  }

  createDots() {
    this.dotsContainer.innerHTML = "";
    for (let i = 0; i < this.totalSlides; i++) {
      const dot = document.createElement("div");
      dot.className = `dot ${i === this.currentIndex ? "active" : ""}`;
      dot.addEventListener("click", () => {
        this.goToSlide(i);
        this.resetAutoplay();
      });
      this.dotsContainer.appendChild(dot);
    }
  }

  setupEventListeners() {
    this.prevBtn?.addEventListener("click", () => {
      this.prev();
      this.resetAutoplay();
    });

    this.nextBtn?.addEventListener("click", () => {
      this.next();
      this.resetAutoplay();
    });

    // Pause autoplay on hover
    if (this.sliderWrapper) {
      this.sliderWrapper.addEventListener("mouseenter", () => {
        this.isHovered = true;
        this.stopAutoplay();
      });

      this.sliderWrapper.addEventListener("mouseleave", () => {
        this.isHovered = false;
        this.startAutoplay();
      });
    }

    // Touch/swipe support
    let startX = 0;
    let isDragging = false;

    this.track.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
      this.stopAutoplay();
    });

    this.track.addEventListener("touchmove", (e) => {
      if (!isDragging) return;
      e.preventDefault();
    });

    this.track.addEventListener("touchend", (e) => {
      if (!isDragging) return;
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          this.next();
        } else {
          this.prev();
        }
      }
      isDragging = false;
      this.resetAutoplay();
    });
  }

  updateSlider() {
    const cardWidth = this.cards[0].offsetWidth;
    const gap = 24; // $spacing-lg
    const offset = -(this.currentIndex * (cardWidth + gap) * this.cardsPerView);

    this.track.style.transform = `translateX(${offset}px)`;

    // Update dots
    const dots = this.dotsContainer.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === this.currentIndex);
    });

    // Update button states (always enabled for infinite loop)
    if (this.prevBtn) {
      this.prevBtn.disabled = false;
    }
    if (this.nextBtn) {
      this.nextBtn.disabled = false;
    }
  }

  goToSlide(index) {
    this.currentIndex = index;
    this.updateSlider();
  }

  next() {
    // Infinite loop: go back to start if at end
    this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
    this.updateSlider();
  }

  prev() {
    // Infinite loop: go to end if at start
    this.currentIndex =
      this.currentIndex === 0 ? this.totalSlides - 1 : this.currentIndex - 1;
    this.updateSlider();
  }

  startAutoplay() {
    if (this.autoplayInterval) return;

    this.autoplayInterval = setInterval(() => {
      if (!this.isHovered) {
        this.next();
      }
    }, this.autoplayDelay);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }

  resetAutoplay() {
    this.stopAutoplay();
    if (!this.isHovered) {
      this.startAutoplay();
    }
  }
}

// ===========================
// Analytics (placeholder)
// ===========================

// Google Analytics or other analytics code goes here
// Example:
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', 'GA_MEASUREMENT_ID');
