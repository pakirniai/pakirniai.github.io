"use strict";

document.addEventListener("DOMContentLoaded", () => {
    console.log("🚀 Website Loaded Successfully");

    initializeGoogleTranslate();
    setupNavigationEffects();
    setupThemeSwitcher();
    setupBackToTopButton();
    handleUserSession();
});

/**
 * Initializes Google Translate API.
 */
function initializeGoogleTranslate() {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.head.appendChild(script);
}

/**
 * Callback function for Google Translate initialization.
 */
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
            pageLanguage: "lt",
            includedLanguages: "en,lt,fr,de,es",
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        "google_translate_element"
    );
}

/**
 * Adds smooth hover effects to navigation links.
 */
function setupNavigationEffects() {
    document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("mouseover", () => {
            link.style.transform = "scale(1.1)";
            link.style.transition = "0.3s ease";
        });

        link.addEventListener("mouseout", () => {
            link.style.transform = "scale(1)";
        });
    });
}

/**
 * Toggles between light and dark mode.
 */
function setupThemeSwitcher() {
    const themeButton = document.createElement("button");
    themeButton.textContent = "🌙 Dark Mode";
    themeButton.style.position = "fixed";
    themeButton.style.top = "10px";
    themeButton.style.right = "10px";
    themeButton.style.padding = "10px";
    themeButton.style.border = "none";
    themeButton.style.borderRadius = "5px";
    themeButton.style.backgroundColor = "#333";
    themeButton.style.color = "#fff";
    themeButton.style.cursor = "pointer";

    document.body.appendChild(themeButton);

    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeButton.textContent = "☀️ Light Mode";
            themeButton.style.backgroundColor = "#fff";
            themeButton.style.color = "#000";
        } else {
            themeButton.textContent = "🌙 Dark Mode";
            themeButton.style.backgroundColor = "#333";
            themeButton.style.color = "#fff";
        }
    });
}

/**
 * Creates a floating back-to-top button.
 */
function setupBackToTopButton() {
    const backToTop = document.createElement("button");
    backToTop.innerHTML = "⬆️";
    backToTop.style.position = "fixed";
    backToTop.style.bottom = "20px";
    backToTop.style.right = "20px";
    backToTop.style.padding = "10px";
    backToTop.style.border = "none";
    backToTop.style.borderRadius = "50%";
    backToTop.style.backgroundColor = "#ff9800";
    backToTop.style.color = "#fff";
    backToTop.style.fontSize = "20px";
    backToTop.style.cursor = "pointer";
    backToTop.style.display = "none";

    document.body.appendChild(backToTop);

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });
}

/**
 * Handles user session data.
 */
function handleUserSession() {
    const user = getUserSession();
    if (user) {
        console.log(`Welcome back, ${user.name}!`);
        document.querySelector(".header-container h1").textContent = `Sveiki, ${user.name}!`;
    } else {
        console.log("No active user session.");
    }
}

/**
 * Retrieves user session data.
 */
function getUserSession() {
    return localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
}

/**
 * Saves user session data.
 */
function saveUserSession(user) {
    if (user && user.name) {
        localStorage.setItem("user", JSON.stringify(user));
        console.log("User session saved.");
    }
}

/**
 * Logs out user.
 */
function logoutUser() {
    localStorage.removeItem("user");
    console.log("User logged out.");
    window.location.reload();
}
