// router.js
// Handles client-side routing using the History API.

import { showSection, renderCategories, renderProducts, showProductDetail, updateUIForLanguage } from './ui-handlers.js';
import { productsData } from './data.js'; // Import productsData for direct access in routing logic

// --- ADD THIS LINE ---
const BASE_PATH = '/e-catalogue-alphacare'; // Replace 'e-catalogue-alphacare' with your actual repository name
// ---------------------

/**
 * Defines the routing logic for different paths.
 * @param {string} path - The current URL path.
 */
function handleRoute(path) {
    console.log(`Handling route: ${path}`); // Debugging log
    // --- MODIFY THIS LINE TO REMOVE THE BASE_PATH FOR INTERNAL LOGIC ---
    const cleanPath = path.replace(BASE_PATH, ''); // Remove the base path for internal routing logic
    // -------------------------------------------------------------------

    const searchParams = new URLSearchParams(window.location.search);
    const categoryIdFromUrl = searchParams.get('category');
    const productIdFromUrl = searchParams.get('product');

    // Clear any previous search input when navigating away from search results
    const searchInput = document.getElementById('search-input');
    if (searchInput && !cleanPath.includes('/products/') && !cleanPath.includes('?query=')) {
        searchInput.value = '';
    }

    if (cleanPath === '/') {
        showSection('hero');
    } else if (cleanPath === '/categories') {
        showSection('categories');
        renderCategories();
    } else if (cleanPath.startsWith('/categories/')) {
        const categoryId = cleanPath.split('/')[2];
        if (categoryId) {
            showSection('product-list');
            renderProducts(categoryId);
        } else {
            console.warn("Category ID missing in URL, redirecting to /categories."); // Debugging log
            navigateTo('/categories'); // Redirect to all categories if ID is missing
        }
    } else if (cleanPath === '/contact') {
        showSection('contact');
    } else if (cleanPath.startsWith('/products/') && categoryIdFromUrl && productIdFromUrl) {
        // Handle deep linking to a product modal
        const category = Object.keys(productsData).find(catId => catId === categoryIdFromUrl);
        if (category) {
            const product = productsData[category].find(p => p.id === productIdFromUrl);
            if (product) {
                console.log(`Deep linking to product: ${productIdFromUrl} in category: ${categoryIdFromUrl}`); // Debugging log
                // Show the relevant category/product list first, then open the modal
                showSection('product-list');
                renderProducts(categoryIdFromUrl).then(() => {
                    showProductDetail(categoryIdFromUrl, productIdFromUrl);
                });
            } else {
                console.warn(`Product ${productIdFromUrl} not found, redirecting to /categories.`); // Debugging log
                navigateTo('/categories'); // Product not found, go to categories
            }
        } else {
            console.warn(`Category ${categoryIdFromUrl} not found, redirecting to /categories.`); // Debugging log
            navigateTo('/categories'); // Category not found, go to categories
        }
    }
    else {
        console.warn(`Unknown route: ${cleanPath}, redirecting to /.`); // Debugging log
        // Default to home or a 404 page
        navigateTo('/');
    }
    updateUIForLanguage(); // Ensure all UI elements are updated after route change
}

/**
 * Navigates to a new path using History API.
 * @param {string} path - The path to navigate to.
 */
export function navigateTo(path) {
    console.log(`Navigating to: ${path}`); // Debugging log
    // --- MODIFY THIS LINE TO INCLUDE THE BASE_PATH ---
    history.pushState(null, '', BASE_PATH + path);
    // -------------------------------------------------
    handleRoute(BASE_PATH + path); // Pass the full path to handleRoute
}

/**
 * Initializes the client-side router.
 */
export function initRouter() {
    console.log("Initializing router..."); // Debugging log
    // Listen for browser back/forward button events
    window.addEventListener('popstate', () => {
        console.log(`Popstate event detected. Handling route: ${window.location.pathname}`); // Debugging log
        handleRoute(window.location.pathname);
    });

    // Handle the initial route when the page loads
    handleRoute(window.location.pathname);
    console.log("Router initialized."); // Debugging log
}
