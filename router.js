// router.js
// Handles client-side routing using hash-based navigation for static hosting.

import { showSection, renderCategories, renderProducts, showProductDetail, updateUIForLanguage } from './ui-handlers.js';
import { productsData } from './data.js'; // Import productsData for direct access in routing logic

/**
 * Defines the routing logic for different hash paths.
 * @param {string} hashPath - The current URL hash path (e.g., "#/categories/disinfectants").
 */
function handleRoute(hashPath) {
    console.log(`Handling hash route: ${hashPath}`); // Debugging log

    // Remove the leading '#' and split the path
    const path = hashPath.startsWith('#/') ? hashPath.substring(1) : hashPath;
    const pathSegments = path.split('/').filter(segment => segment); // Filter out empty strings

    const route = pathSegments[0] || ''; // 'categories', 'contact', 'products'
    const id = pathSegments[1] || ''; // categoryId or productId

    const urlParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
    const categoryIdFromUrlParam = urlParams.get('category');
    const productIdFromUrlParam = urlParams.get('product');

    // Clear any previous search input when navigating away from search results
    const searchInput = document.getElementById('search-input');
    if (searchInput && !path.includes('/products/') && !path.includes('?query=')) { // Don't clear if navigating to a product from search or a direct search URL
        searchInput.value = '';
    }

    switch (route) {
        case '': // Corresponds to #/ or just # (home)
            showSection('hero');
            break;
        case 'categories':
            if (id) { // e.g., #/categories/disinfectants
                showSection('product-list');
                renderProducts(id);
            } else { // e.g., #/categories
                showSection('categories');
                renderCategories();
            }
            break;
        case 'products': // e.g., #/products/dettol-disinfectant?category=disinfectants
            if (id && categoryIdFromUrlParam) {
                const category = Object.keys(productsData).find(catId => catId === categoryIdFromUrlParam);
                if (category) {
                    const product = productsData[category].find(p => p.id === id);
                    if (product) {
                        console.log(`Deep linking to product: ${id} in category: ${categoryIdFromUrlParam}`); // Debugging log
                        showSection('product-list'); // Show product list first
                        renderProducts(categoryIdFromUrlParam).then(() => { // Then render products in that category
                            showProductDetail(categoryIdFromUrlParam, id); // And finally open the modal
                        });
                    } else {
                        console.warn(`Product ${id} not found, redirecting to #/categories.`); // Debugging log
                        navigateTo('#/categories');
                    }
                } else {
                    console.warn(`Category ${categoryIdFromUrlParam} not found, redirecting to #/categories.`); // Debugging log
                    navigateTo('#/categories');
                }
            } else {
                console.warn(`Product ID or Category ID missing for /products route, redirecting to #/categories.`); // Debugging log
                navigateTo('#/categories');
            }
            break;
        case 'contact':
            showSection('contact');
            break;
        default:
            console.warn(`Unknown hash route: ${hashPath}, redirecting to #/.`); // Debugging log
            navigateTo('#/'); // Default to home
            break;
    }
    updateUIForLanguage(); // Ensure all UI elements are updated after route change
}

/**
 * Navigates to a new hash path.
 * @param {string} path - The path to navigate to (e.g., "#/categories").
 */
export function navigateTo(path) {
    console.log(`Navigating to hash: ${path}`); // Debugging log
    window.location.hash = path;
}

/**
 * Initializes the client-side router.
 */
export function initRouter() {
    console.log("Initializing router (hash-based)..."); // Debugging log
    // Listen for hash changes
    window.addEventListener('hashchange', () => {
        console.log(`Hashchange event detected. Handling route: ${window.location.hash}`); // Debugging log
        handleRoute(window.location.hash);
    });

    // Handle the initial route when the page loads
    if (window.location.hash === '') {
        window.location.hash = '#/'; // Set default hash if none exists
    }
    handleRoute(window.location.hash);
    console.log("Router initialized."); // Debugging log
}
