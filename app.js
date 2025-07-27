// app.js
// Main entry point for the E-Catalogue application.

import { initThreeJS, animateThreeJS } from './threejs-background.js';
import { initUIHandlers, showSection, updateUIForLanguage } from './ui-handlers.js';
import { initRouter, navigateTo } from './router.js';
import { initSearch } from './search.js';
import { initLazyLoading } from './lazy-load.js';
import { initBackToTopButton } from './back-to-top.js'; // Import the back-to-top module

/**
 * Initializes the entire application when the DOM is fully loaded.
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Content Loaded. Initializing application..."); // Debugging log

    // Initialize Three.js background animation
    initThreeJS();
    animateThreeJS();

    // Initialize UI event handlers
    initUIHandlers();

    // Initialize search functionality
    initSearch();

    // Initialize lazy loading for images (will be called again by render functions)
    initLazyLoading();

    // Initialize the router to handle initial page load and navigation
    initRouter();

    // Set initial language and update UI
    updateUIForLanguage();

    // Initialize the back-to-top button
    initBackToTopButton();

    console.log("Application initialization complete."); // Debugging log
});
