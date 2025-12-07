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

    // Observe elements
    const animatedElements = document.querySelectorAll(`
      .feature-card,
      .timeline-item,
      .why-card,
      .step,
      .stat-card
    `);

    animatedElements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
      observer.observe(el);
    });

    // Add animation class styles
    const style = document.createElement("style");
    style.textContent = `
      .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
    `;
    document.head.appendChild(style);
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
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
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
// Initialize Everything
// ===========================

document.addEventListener("DOMContentLoaded", () => {
  // Initialize components
  new Starfield();
  new Navigation();
  new FAQ();
  new NewsletterForm();
  new BackToTop();
  new AnimationObserver();
  new Parallax();
  new WhySlider();

  // Lazy load images
  lazyLoadImages();

  // Load dynamic content from config
  loadDynamicContent();

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

  // Load Evolution Section
  loadEvolutionSection();
}

function loadEvolutionSection() {
  const { evolution } = CONTENT_CONFIG;

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
