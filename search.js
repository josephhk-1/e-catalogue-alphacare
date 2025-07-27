// search.js
// Handles search functionality across all products.

import { productsData, translations, currentLang } from './data.js';
import { renderProducts, showSection } from './ui-handlers.js';
import { navigateTo } from './router.js';

let allProductsFlat = []; // Flattened list of all products for easier searching

/**
 * Flattens the productsData object into a single array of products.
 */
function flattenProducts() {
    console.log("Flattening products for search..."); // Debugging log
    allProductsFlat = [];
    for (const categoryId in productsData) {
        if (productsData.hasOwnProperty(categoryId)) {
            productsData[categoryId].forEach(product => {
                allProductsFlat.push({ ...product, categoryId: categoryId }); // Add categoryId for context
            });
        }
    }
    console.log(`Flattened ${allProductsFlat.length} products.`); // Debugging log
}

/**
 * Filters products based on a search query.
 * @param {string} query - The search string.
 * @returns {Array} - An array of filtered products.
 */
function filterProducts(query) {
    const lowerCaseQuery = query.toLowerCase().trim();
    if (!lowerCaseQuery) {
        console.log("Empty search query."); // Debugging log
        return []; // Return empty if query is empty
    }

    console.log(`Filtering products for query: "${query}"`); // Debugging log
    const results = allProductsFlat.filter(product => {
        const name = product[`name_${currentLang}`] ? product[`name_${currentLang}`].toLowerCase() : '';
        const description = product[`description_${currentLang}`] ? product[`description_${currentLang}`].toLowerCase() : '';
        const hasMatchingVariant = product.variants.some(variant =>
            (variant[`size_${currentLang}`] && variant[`size_${currentLang}`].toLowerCase().includes(lowerCaseQuery)) ||
            (variant[`specs_${currentLang}`] && variant[`specs_${currentLang}`].some(spec => spec.toLowerCase().includes(lowerCaseQuery)))
        );

        return name.includes(lowerCaseQuery) || description.includes(lowerCaseQuery) || hasMatchingVariant;
    });
    console.log(`Found ${results.length} search results.`); // Debugging log
    return results;
}

/**
 * Initializes the search bar functionality.
 */
export function initSearch() {
    console.log("Initializing search functionality..."); // Debugging log
    flattenProducts(); // Prepare flattened product list on initialization

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (event) => {
            const query = event.target.value;
            if (query.length > 1) { // Only search if query is at least 2 characters
                const results = filterProducts(query);
                // Navigate to product list and display filtered results
                showSection('product-list');
                document.getElementById('product-list-title').textContent = `${translations[currentLang].searchResultsFor || 'Search Results for'} "${query}"`;
                renderProducts(null, results); // Pass null for categoryId, and the filtered results
            } else if (query.length === 0) {
                // If search is cleared, determine appropriate navigation
                const currentPath = window.location.pathname;
                if (currentPath.startsWith('/categories/')) {
                    const categoryId = currentPath.split('/')[2];
                    if (categoryId) {
                        renderProducts(categoryId); // Re-render current category
                    } else {
                        navigateTo('/categories'); // Go back to all categories
                    }
                } else if (currentPath === '/categories') {
                    renderCategories(); // Re-render all categories
                } else {
                    // If on home or contact, do nothing or navigate to home
                    navigateTo('/');
                }
            }
        });
    }
    console.log("Search functionality initialized."); // Debugging log
}
