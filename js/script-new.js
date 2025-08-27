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
new Typed(".typing", {
    strings: [
        "Web Developer",
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
        "Mobile App Developer"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
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
    const form = document.querySelector(".contact-form"),
        formInputs = form.querySelectorAll(".form-control"),
        submitBtn = form.querySelector(".btn");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Simple form validation
        let isValid = true;
        formInputs.forEach(input => {
            if (input.value.trim() === "") {
                input.style.borderColor = "#e74c3c";
                isValid = false;
            } else {
                input.style.borderColor = "";
            }
        });

        if (isValid) {
            // Simulate form submission
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                submitBtn.style.background = "#27ae60";
                form.reset();

                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
                    submitBtn.style.background = "";
                    submitBtn.disabled = false;
                }, 2000);
            }, 1500);
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
            const increment = target / 100;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current);
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
