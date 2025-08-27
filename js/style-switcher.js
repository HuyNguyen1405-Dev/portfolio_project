/* ============================= Style Switcher ===================== */

// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    console.log("Style switcher loading...");

    // Create alternate style elements first
    const colors = ["color-1", "color-2", "color-3", "color-4", "color-5"];

    colors.forEach(color => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = `css/${color}.css`;
        link.title = color;
        link.className = "alternate-style";

        if (color !== "color-1") {
            link.disabled = true;
        }

        document.head.appendChild(link);
        console.log(`Added ${color}.css`);
    });

    // Toggle style switcher
    const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
    const styleSwitcher = document.querySelector(".style-switcher");

    if (styleSwitcherToggle && styleSwitcher) {
        styleSwitcherToggle.addEventListener("click", function () {
            styleSwitcher.classList.toggle("open");
            console.log("Style switcher toggled");
        });

        // Hide style switcher on scroll
        window.addEventListener("scroll", function () {
            if (styleSwitcher.classList.contains("open")) {
                styleSwitcher.classList.remove("open");
            }
        });

        console.log("Style switcher toggle events added");
    } else {
        console.error("Style switcher elements not found");
    }

    // Day/Night mode
    const dayNight = document.querySelector(".day-night");

    if (dayNight) {
        dayNight.addEventListener("click", function () {
            const icon = dayNight.querySelector("i");
            icon.classList.toggle("fa-sun");
            icon.classList.toggle("fa-moon");
            document.body.classList.toggle("dark");

            const isDark = document.body.classList.contains("dark");
            localStorage.setItem("theme", isDark ? "dark" : "light");

            console.log(`Theme mode: ${isDark ? 'dark' : 'light'}`);
        });

        // Load saved theme
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.body.classList.add("dark");
            const icon = dayNight.querySelector("i");
            icon.classList.add("fa-sun");
            icon.classList.remove("fa-moon");
        }

        console.log("Day/Night mode initialized");
    } else {
        console.error("Day/Night button not found");
    }

    // Load saved style
    const savedStyle = localStorage.getItem("selectedStyle");
    if (savedStyle) {
        setActiveStyle(savedStyle);
    } else {
        setActiveStyle("color-1");
    }
});

/* ============================= Theme Colors ===================== */
function setActiveStyle(color) {
    console.log(`Setting active style: ${color}`);

    const alternateStyles = document.querySelectorAll(".alternate-style");
    console.log(`Found ${alternateStyles.length} alternate styles`);

    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
            console.log(`Enabled ${color}`);
        } else {
            style.setAttribute("disabled", "true");
            console.log(`Disabled ${style.getAttribute("title")}`);
        }
    });

    localStorage.setItem("selectedStyle", color);
}

// Make function available globally for onclick handlers
window.setActiveStyle = setActiveStyle;

/* ============================= Dark Mode Styles ===================== */
// Add dark mode CSS dynamically
const darkModeStyles = `
  body.dark {
    --bg-black-900: #151515;
    --bg-black-100: #222222;
    --bg-black-50: #393939;
    --text-black-900: #ffffff;
    --text-black-700: #e9e9e9;
  }
  
  body.dark .aside {
    background: var(--bg-black-100);
  }
  
  body.dark .portfolio-filter-btn {
    background: var(--bg-black-100);
    color: var(--text-black-900);
  }
  
  body.dark .service-item-inner,
  body.dark .portfolio-item-inner,
  body.dark .timeline,
  body.dark .contact-form .form-control {
    background: var(--bg-black-100);
    border-color: var(--bg-black-50);
  }
  
  body.dark .lightbox-content {
    background: var(--bg-black-100);
  }
  
  body.dark .style-switcher {
    background: var(--bg-black-100);
    border-color: var(--bg-black-50);
  }
  
  body.dark .style-switcher .style-switcher-toggler,
  body.dark .style-switcher .day-night {
    background: var(--bg-black-100);
    border-color: var(--bg-black-50);
    color: var(--skin-color);
  }
  
  body.dark .portfolio-info .portfolio-tags span {
    background: var(--bg-black-50);
    color: var(--text-black-700);
  }
`;

// Inject dark mode styles
const darkStyleSheet = document.createElement("style");
darkStyleSheet.textContent = darkModeStyles;
document.head.appendChild(darkStyleSheet);
