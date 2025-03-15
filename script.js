"use strict"; // Enforce strict mode for better security and debugging

document.addEventListener("DOMContentLoaded", () => {
    console.log("Website Loaded Successfully 🚀");

    initializeGoogleTranslate();
    setupNavigationButtons();
    handleUserSession();
});

/**
 * Initializes Google Translate API.

/**
 * Handles navigation button clicks securely.
 * @param {HTMLElement} button - The clicked button element.
 */
function navigateToPage(button) {
    try {
        const link = button.parentElement.getAttribute("href");
        if (link) {
            console.log(`Navigating to: ${link}`);
            window.location.href = link;
        } else {
            console.warn("Invalid navigation link.");
        }
    } catch (error) {
        console.error("Navigation error:", error);
    }
}

/**
 * Simulates user session handling.
 */
function handleUserSession() {
    try {
        const user = getUserSession();
        if (user) {
            console.log(`Welcome back, ${user.name}!`);
            document.querySelector(".header h1").textContent = `Sveiki, ${user.name}!`;
        } else {
            console.log("No active user session.");
        }
    } catch (error) {
        console.error("User session handling error:", error);
    }
}

/**
 * Retrieves a simulated user session.
 * @returns {Object|null} User data if logged in, otherwise null.
 */
function getUserSession() {
    // Simulate a user session (this should come from a backend in a real-world scenario)
    return localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
}

/**
 * Stores user session securely.
 * @param {Object} user - The user object.
 */
function saveUserSession(user) {
    if (user && user.name) {
        localStorage.setItem("user", JSON.stringify(user));
        console.log("User session saved.");
    }
}

/**
 * Logs out the user securely.
 */
function logoutUser() {
    localStorage.removeItem("user");
    console.log("User logged out.");
    window.location.reload();
}

// Example: Uncomment to test saving user session
// saveUserSession({ name: "Jurgis Rizgelis" });
