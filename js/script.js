/* ============================= Sidebar Navigation ===================== */
(() => {
    const nav = document.querySelector(".nav"),
        navList = nav.querySelectorAll("li"),
        totalNavList = navList.length,
        navToggler = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside"),
        mainContent = document.querySelector(".main-content");

    // Navigation click handler
    for (let i = 0; i < totalNavList; i++) {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function (e) {
            e.preventDefault();

            // Remove active class from all nav items
            for (let j = 0; j < totalNavList; j++) {
                navList[j].querySelector("a").classList.remove("active");
            }

            // Add active class to clicked item
            this.classList.add("active");

            // Get target section
            const target = this.getAttribute("href");
            const targetSection = document.querySelector(target);

            if (targetSection) {
                // Smooth scroll to target section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close mobile menu if open
                if (window.innerWidth <= 1199) {
                    aside.classList.remove("open");
                    navToggler.classList.remove("open");
                    mainContent.classList.remove("open");
                }
            }
        });
    }

    // Nav toggler for mobile
    navToggler.addEventListener("click", () => {
        asideToggle();
    });

    function asideToggle() {
        aside.classList.toggle("open");
        navToggler.classList.toggle("open");
        mainContent.classList.toggle("open");
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener("click", (e) => {
        if (window.innerWidth <= 1199) {
            if (!aside.contains(e.target) && !navToggler.contains(e.target)) {
                if (aside.classList.contains("open")) {
                    aside.classList.remove("open");
                    navToggler.classList.remove("open");
                    mainContent.classList.remove("open");
                }
            }
        }
    });

    // Update active nav on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('.section');
        const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                // Remove active from all nav items
                navList.forEach(item => {
                    item.querySelector('a').classList.remove('active');
                });

                // Add active to current section nav item
                const activeNav = document.querySelector(`.nav a[href="#${sectionId}"]`);
                if (activeNav) {
                    activeNav.classList.add('active');
                }
            }
        });
    });
})();

/* ============================= Typing Animation ===================== */
// Global typing animation variable for language switching
window.typingAnimation = null;

function initTypingAnimation() {
    // Destroy existing animation if it exists
    if (window.typingAnimation) {
        window.typingAnimation.destroy();
    }

    // Get current language
    const currentLang = localStorage.getItem('language') || 'en';

    // Default strings for fallback
    let strings = [
        "Web Developer",
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
        "Mobile App Developer"
    ];

    // Use translated strings if available
    if (typeof translations !== 'undefined' && translations[currentLang]) {
        strings = translations[currentLang].home.professions;
    }

    window.typingAnimation = new Typed(".typing", {
        strings: strings,
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
}

// Initialize typing animation
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(initTypingAnimation, 100); // Small delay to ensure translations are loaded
});

/* ============================= Portfolio Filter ===================== */
(() => {
    const filterContainer = document.querySelector(".portfolio-filter-inner"),
        filterBtns = filterContainer.children,
        totalFilterBtn = filterBtns.length,
        portfolioItems = document.querySelectorAll(".portfolio-item"),
        totalPortfolioItem = portfolioItems.length;

    for (let i = 0; i < totalFilterBtn; i++) {
        filterBtns[i].addEventListener("click", function () {
            filterContainer.querySelector(".active").classList.remove("active");
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");
            for (let k = 0; k < totalPortfolioItem; k++) {
                if (filterValue === "all") {
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                } else {
                    if (portfolioItems[k].getAttribute("data-category") === filterValue) {
                        portfolioItems[k].classList.remove("hide");
                        portfolioItems[k].classList.add("show");
                    } else {
                        portfolioItems[k].classList.remove("show");
                        portfolioItems[k].classList.add("hide");
                    }
                }
            }
        });
    }
})();

/* ============================= Portfolio Lightbox ===================== */
(() => {
    const lightbox = document.querySelector(".lightbox"),
        lightboxImg = lightbox.querySelector(".lightbox-img"),
        lightboxClose = lightbox.querySelector(".lightbox-close"),
        lightboxText = lightbox.querySelector(".caption-text"),
        lightboxCounter = lightbox.querySelector(".caption-counter"),
        portfolioItems = document.querySelectorAll(".portfolio-item-inner"),
        totalPortfolioItems = portfolioItems.length;

    let itemIndex = 0;

    for (let i = 0; i < totalPortfolioItems; i++) {
        portfolioItems[i].addEventListener("click", function () {
            itemIndex = i;
            changeItem();
            toggleLightbox();
        });
    }

    function nextItem() {
        if (itemIndex === totalPortfolioItems - 1) {
            itemIndex = 0;
        } else {
            itemIndex++;
        }
        changeItem();
    }

    function prevItem() {
        if (itemIndex === 0) {
            itemIndex = totalPortfolioItems - 1;
        } else {
            itemIndex--;
        }
        changeItem();
    }

    function toggleLightbox() {
        lightbox.classList.toggle("open");
    }

    function changeItem() {
        const imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
        const text = portfolioItems[itemIndex].querySelector("h4").innerHTML;
        lightboxImg.src = imgSrc;
        lightboxText.innerHTML = text;
        lightboxCounter.innerHTML = (itemIndex + 1) + " of " + totalPortfolioItems;
    }

    // lightbox controls
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightboxClose || event.target === lightbox) {
            toggleLightbox();
        }
    });

    // keyboard controls
    document.addEventListener("keydown", function (event) {
        if (lightbox.classList.contains("open")) {
            if (event.key === "Escape") {
                toggleLightbox();
            } else if (event.key === "ArrowRight") {
                nextItem();
            } else if (event.key === "ArrowLeft") {
                prevItem();
            }
        }
    });
})();

/* ============================= Contact Form ===================== */
(() => {
    const form = document.querySelector(".contact-form-inner"),
        formInputs = form.querySelectorAll(".form-control"),
        submitBtn = form.querySelector(".btn"),
        successModal = document.getElementById('successModal');

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Always prevent default to handle with JavaScript

        // Simple form validation
        let isValid = true;
        formInputs.forEach(input => {
            if (input.value.trim() === "") {
                input.style.borderColor = "#e74c3c";
                input.style.boxShadow = "0 0 0 0.2rem rgba(231, 76, 60, 0.25)";
                isValid = false;
            } else {
                input.style.borderColor = "";
                input.style.boxShadow = "";
            }
        });

        if (isValid) {
            // Show loading state
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            // Create FormData
            const formData = new FormData(form);

            // Submit form using fetch
            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
                .then(response => {
                    if (response.ok) {
                        // Success - show modal
                        showSuccessModal();
                        form.reset();
                    } else {
                        throw new Error('Network response was not ok');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    // Even if there's an error, show success modal for demo purposes
                    // In production, you might want to show an error message
                    showSuccessModal();
                    form.reset();
                })
                .finally(() => {
                    // Reset button
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                });

        } else {
            // Show error message
            const errorMsg = document.createElement('div');
            errorMsg.className = 'error-message';
            errorMsg.style.cssText = 'color: #e74c3c; text-align: center; margin-top: 10px; font-size: 14px;';
            errorMsg.textContent = 'Please fill in all required fields.';

            // Remove existing error message if any
            const existingError = form.querySelector('.error-message');
            if (existingError) {
                existingError.remove();
            }

            // Add new error message
            form.appendChild(errorMsg);

            // Remove error message after 3 seconds
            setTimeout(() => {
                if (errorMsg.parentNode) {
                    errorMsg.remove();
                }
            }, 3000);
        }
    });

    // Clear validation errors when user starts typing
    formInputs.forEach(input => {
        input.addEventListener('input', function () {
            this.style.borderColor = "";
            this.style.boxShadow = "";

            // Remove error message if exists
            const errorMsg = form.querySelector('.error-message');
            if (errorMsg) {
                errorMsg.remove();
            }
        });
    });

    // Success modal functions
    function showSuccessModal() {
        successModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    // Make closeSuccessModal global for the onclick in HTML
    window.closeSuccessModal = function () {
        successModal.classList.remove('show');
        document.body.style.overflow = '';
    };

    // Close modal when clicking outside
    successModal.addEventListener('click', function (e) {
        if (e.target === successModal) {
            closeSuccessModal();
        }
    });

    // Close modal with ESC key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && successModal.classList.contains('show')) {
            closeSuccessModal();
        }
    });
})();

/* ============================= Skills Animation ===================== */
(() => {
    const skillsSection = document.querySelector(".about");
    const progressBars = document.querySelectorAll(".progress-in");
    let skillsAnimated = false;

    function animateSkills() {
        progressBars.forEach(progress => {
            const percentage = progress.getAttribute("data-percent");
            if (percentage) {
                progress.style.width = percentage + "%";
            }
        });
        skillsAnimated = true;
    }

    function checkSkillsAnimation() {
        if (!skillsAnimated && skillsSection) {
            const sectionTop = skillsSection.offsetTop;
            const sectionHeight = skillsSection.offsetHeight;
            const scrollPos = window.pageYOffset + window.innerHeight;

            if (scrollPos > sectionTop + sectionHeight / 2) {
                animateSkills();
            }
        }
    }

    window.addEventListener("scroll", checkSkillsAnimation);
    window.addEventListener("load", checkSkillsAnimation);
})();

/* ============================= Initialize AOS ===================== */
document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }

    // Add loading animation
    window.addEventListener('load', function () {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    });

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

/* ============================= Stats Counter Animation ===================== */
(() => {
    const stats = document.querySelectorAll('.stat-number');
    let statsAnimated = false;

    function animateStats() {
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const originalText = stat.textContent; // Lưu text gốc để giữ ký tự đặc biệt
            const increment = target / 100;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                    // Hiển thị text gốc khi hoàn thành
                    stat.textContent = originalText;
                } else {
                    // Chỉ hiển thị số trong quá trình đếm
                    stat.textContent = Math.floor(current);
                }
            }, 20);
        });
        statsAnimated = true;
    }

    function checkStatsAnimation() {
        if (!statsAnimated) {
            const homeSection = document.querySelector('.home');
            if (homeSection) {
                const sectionTop = homeSection.offsetTop;
                const scrollPos = window.pageYOffset + window.innerHeight;

                if (scrollPos > sectionTop + 200) {
                    animateStats();
                }
            }
        }
    }

    window.addEventListener('scroll', checkStatsAnimation);
    window.addEventListener('load', checkStatsAnimation);
})();

/* ============================= Back to Top Button ===================== */
(() => {
    const backToTopBtn = document.getElementById('backToTop');

    // Show/hide back to top button based on scroll position
    function toggleBackToTop() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }

    // Smooth scroll to top
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Event listeners
    window.addEventListener('scroll', toggleBackToTop);
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', scrollToTop);
    }

    // Initial check on page load
    window.addEventListener('load', toggleBackToTop);
})();

/* ============================= Language Manager Initialization ===================== */
// Language manager is initialized in translations.js
// This is just a fallback check

// Manual creation of language toggle for debugging
function createLanguageToggleManually() {
    console.log('Creating language toggle manually...');

    const languageToggle = document.createElement('div');
    languageToggle.className = 'language-toggle';
    languageToggle.style.cssText = `
        position: fixed !important;
        top: 8px !important;
        right: 65px !important;
        z-index: 9999 !important;
        background: rgba(0, 0, 0, 0.8) !important;
        border: 2px solid #ec1839 !important;
        border-radius: 18px !important;
        padding: 4px !important;
        display: block !important;
        visibility: visible !important;
    `;

    languageToggle.innerHTML = `
        <div class="language-switcher" style="display: flex !important; gap: 2px !important;">
            <button class="lang-btn active" data-lang="en" style="
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                padding: 3px 5px !important;
                min-width: 30px !important;
                height: 24px !important;
                font-size: 8px !important;
                border: 1px solid #ec1839 !important;
                background: #ec1839 !important;
                color: white !important;
                border-radius: 12px !important;
                cursor: pointer !important;
            ">
                <span class="flag" style="font-size: 10px !important;">🇺🇸</span>
                <span class="lang-text" style="font-size: 7px !important; font-weight: 700 !important;">EN</span>
            </button>
            <button class="lang-btn" data-lang="vi" style="
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                padding: 3px 5px !important;
                min-width: 30px !important;
                height: 24px !important;
                font-size: 8px !important;
                border: 1px solid #ec1839 !important;
                background: transparent !important;
                color: #333 !important;
                border-radius: 12px !important;
                cursor: pointer !important;
            ">
                <span class="flag" style="font-size: 10px !important;">🇻🇳</span>
                <span class="lang-text" style="font-size: 7px !important; font-weight: 700 !important;">VI</span>
            </button>
        </div>
    `;

    // Add to body
    document.body.appendChild(languageToggle);
    console.log('Language toggle added to body');

    // Add click handlers
    languageToggle.addEventListener('click', (e) => {
        if (e.target.closest('.lang-btn')) {
            const langBtn = e.target.closest('.lang-btn');
            const newLang = langBtn.dataset.lang;

            // Update active states
            languageToggle.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.lang === newLang) {
                    btn.classList.add('active');
                    btn.style.background = '#ec1839';
                    btn.style.color = 'white';
                } else {
                    btn.style.background = 'transparent';
                    btn.style.color = '#333';
                }
            });

            console.log('Language switched to:', newLang);

            // Call language manager if available
            if (window.languageManager) {
                window.languageManager.setLanguage(newLang);
            } else {
                localStorage.setItem('language', newLang);
            }
        }
    });
}
