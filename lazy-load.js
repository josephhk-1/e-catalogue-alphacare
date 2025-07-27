// lazy-load.js
// Implements lazy loading for images using Intersection Observer.

/**
 * Callback function for the Intersection Observer.
 * Loads the image when it intersects with the viewport.
 * @param {IntersectionObserverEntry[]} entries - An array of IntersectionObserverEntry objects.
 * @param {IntersectionObserver} observer - The IntersectionObserver instance.
 */
function lazyLoadCallback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.dataset.src; // Get the actual image source from data-src
            if (src) {
                img.src = src; // Set the src to load the image
                img.onload = () => { // Optional: remove lazy-load-img class after image loads
                    img.classList.remove('lazy-load-img');
                    img.removeAttribute('data-src'); // Remove data-src to prevent re-loading
                };
                img.onerror = () => {
                    console.error(`Failed to load image: ${src}`);
                    // Optionally set a fallback image or remove the broken image
                    img.src = 'https://placehold.co/400x300/FF0000/FFFFFF?text=Error'; // Fallback placeholder
                    img.classList.remove('lazy-load-img');
                    img.removeAttribute('data-src');
                };
            }
            observer.unobserve(img); // Stop observing once loaded (or attempted to load)
        }
    });
}

/**
 * Initializes lazy loading for all images with the 'lazy-load-img' class.
 */
export function initLazyLoading() {
    console.log("Initializing lazy loading..."); // Debugging log
    // Check for Intersection Observer support
    if ('IntersectionObserver' in window) {
        const lazyLoadImages = document.querySelectorAll('.lazy-load-img');
        if (lazyLoadImages.length > 0) {
            const observer = new IntersectionObserver(lazyLoadCallback, {
                rootMargin: '0px 0px 100px 0px', // Load images when they are 100px from viewport
                threshold: 0.01 // Trigger when at least 1% of the image is visible
            });

            lazyLoadImages.forEach(img => {
                observer.observe(img);
            });
            console.log(`Observing ${lazyLoadImages.length} images for lazy loading.`); // Debugging log
        } else {
            console.log("No lazy load images found to observe."); // Debugging log
        }
    } else {
        // Fallback for browsers that don't support Intersection Observer
        console.warn("IntersectionObserver not supported. Images will load normally.");
        document.querySelectorAll('.lazy-load-img').forEach(img => {
            const src = img.dataset.src;
            if (src) {
                img.src = src;
                img.removeAttribute('data-src');
            }
        });
    }
}
