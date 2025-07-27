// back-to-top.js
// Handles the "Back to Top" button functionality.

/**
 * Initializes the "Back to Top" button.
 */
export function initBackToTopButton() {
    console.log("Initializing Back to Top button..."); // Debugging log
    const backToTopBtn = document.getElementById('back-to-top-btn');

    if (!backToTopBtn) {
        console.warn("Back to Top button not found.");
        return;
    }

    // Show/hide the button based on scroll position
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    // Scroll to the top when the button is clicked
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll
        });
    });
    console.log("Back to Top button initialized."); // Debugging log
}
