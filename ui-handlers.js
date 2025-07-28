// ui-handlers.js
// Handles DOM manipulation, rendering UI elements, and modal interactions.

import { fetchCategories, fetchProducts, fetchProductById, translations, currentLang, setCurrentLang } from './data.js';
import { navigateTo } from './router.js';
import { initLazyLoading } from './lazy-load.js';

let currentProductImages = [];
let currentImageIndex = 0;

/**
 * Shows a specific section and hides others.
 * @param {string} sectionId - The ID of the section to show.
 */
export function showSection(sectionId) {
    console.log(`Showing section: ${sectionId}`); // Debugging log
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden-section');
    });
    document.getElementById(sectionId).classList.remove('hidden-section');
    // Hide the modal if another section is displayed
    document.getElementById('product-detail-modal').classList.add('hidden');
    // Scroll to top of the new section
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Updates all UI elements with the current language translations.
 */
export function updateUIForLanguage() {
    console.log(`Updating UI for language: ${currentLang}`); // Debugging log
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.dataset.key;
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });

    // Update search input placeholder
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.placeholder = translations[currentLang].searchPlaceholder;
    }

    // Update language toggle active state
    document.getElementById('lang-en').classList.remove('active');
    document.getElementById('lang-ar').classList.remove('active');
    document.getElementById(`lang-${currentLang}`).classList.add('active');

    // Update text direction for the body
    document.body.classList.remove('ltr', 'rtl');
    document.body.classList.add(currentLang === 'ar' ? 'rtl' : 'ltr');

    // Re-render categories and products if visible to update names
    if (!document.getElementById('categories').classList.contains('hidden-section')) {
        console.log("Categories section is visible, re-rendering categories for language update."); // Debugging log
        renderCategories();
    }
    if (!document.getElementById('product-list').classList.contains('hidden-section')) {
        console.log("Product list section is visible, re-rendering products for language update."); // Debugging log
        const currentCategoryId = document.getElementById('product-list').dataset.categoryId;
        if (currentCategoryId) {
            renderProducts(currentCategoryId);
        }
    }
    // Re-render product detail modal if visible
    if (!document.getElementById('product-detail-modal').classList.contains('hidden')) {
        console.log("Product detail modal is visible, re-rendering for language update."); // Debugging log
        const modalProductName = document.getElementById('modal-product-name');
        const currentProductId = modalProductName.dataset.productId;
        const currentCategory = modalProductName.dataset.categoryId;
        if (currentProductId && currentCategory) {
            showProductDetail(currentCategory, currentProductId, true); // Pass true to keep modal open
        }
    }
}

/**
 * Renders category cards on the categories section.
 */
export async function renderCategories() {
    console.log("Rendering categories..."); // Debugging log
    const categoriesGrid = document.getElementById('categories-grid');
    const loadingSpinner = document.getElementById('categories-loading');

    categoriesGrid.innerHTML = ''; // Clear existing grid
    loadingSpinner.style.display = 'block'; // Show spinner

    try {
        const categories = await fetchCategories(); // Simulate API call

        loadingSpinner.style.display = 'none'; // Hide spinner
        console.log("Categories fetched:", categories); // Debugging log

        if (categories.length === 0) {
            categoriesGrid.innerHTML = `<p class="text-center text-white text-opacity-70 col-span-full">${translations[currentLang].noProducts}</p>`;
            return;
        }

        categories.forEach(category => {
            const categoryCard = `
                <div class="category-card bg-[--primary-bg] p-6 rounded-lg border border-[--accent-blue] transition-all duration-300 hover:scale-105 hover:neon-glow-blue cursor-pointer group" data-category-id="${category.id}">
                    <img data-src="${category.image}" alt="${category['name_' + currentLang]}" class="w-full h-48 object-cover rounded-md mb-4 border border-[--accent-blue] group-hover:neon-glow-blue lazy-load-img">
                    <h3 class="text-2xl font-bold text-white group-hover:text-[--accent-blue] transition-colors duration-300">
                        ${category['name_' + currentLang]}
                    </h3>
                    <p class="text-white text-opacity-70 mt-2">
                        ${category['description_' + currentLang]}
                    </p>
                </div>
            `;
            categoriesGrid.innerHTML += categoryCard;
        });

        // Add event listeners for category cards
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', () => {
                const categoryId = card.dataset.categoryId;
                navigateTo(`#/categories/${categoryId}`); // Use hash-based navigation
            });
        });

        initLazyLoading(); // Initialize lazy loading for new images
        console.log("Categories rendered successfully."); // Debugging log

    } catch (error) {
        console.error("Error fetching or rendering categories:", error); // More specific error log
        loadingSpinner.style.display = 'none';
        categoriesGrid.innerHTML = `<p class="text-center text-red-500 col-span-full">Error loading categories. Please try again later.</p>`;
    }
}

/**
 * Renders product cards for a given category.
 * @param {string} categoryId - The ID of the category.
 * @param {Array} [filteredProducts=null] - Optional: pre-filtered products for search results.
 */
export async function renderProducts(categoryId, filteredProducts = null) {
    console.log(`Rendering products for category: ${categoryId || 'search results'}`); // Debugging log
    const productListTitle = document.getElementById('product-list-title');
    const productsGrid = document.getElementById('products-grid');
    const loadingSpinner = document.getElementById('products-loading');
    const category = (await fetchCategories()).find(cat => cat.id === categoryId); // Get category name for title

    productListTitle.textContent = category ? category['name_' + currentLang] : translations[currentLang].categories;
    document.getElementById('product-list').dataset.categoryId = categoryId; // Store category ID

    productsGrid.innerHTML = ''; // Clear existing grid
    loadingSpinner.style.display = 'block'; // Show spinner

    let productsToRender = [];
    try {
        if (filteredProducts) {
            productsToRender = filteredProducts; // Use provided filtered products (from search)
            loadingSpinner.style.display = 'none'; // Hide spinner immediately if data is already provided
            console.log("Rendering filtered products:", productsToRender); // Debugging log
        } else {
            productsToRender = await fetchProducts(categoryId); // Simulate API call for products in category
            loadingSpinner.style.display = 'none'; // Hide spinner
            console.log(`Products fetched for category ${categoryId}:`, productsToRender); // Debugging log
        }

        if (productsToRender.length === 0) {
            productsGrid.innerHTML = `<p class="text-center text-white text-opacity-70 col-span-full">${filteredProducts ? translations[currentLang].noSearchResults : translations[currentLang].noProducts}</p>`;
            console.log("No products to render."); // Debugging log
            return;
        }

        productsToRender.forEach(product => {
            const displaySize = product.variants && product.variants.length > 1
                ? translations[currentLang].multipleSizes
                : (product.variants && product.variants.length > 0 ? product.variants[0][`size_${currentLang}`] : '');

            const productCard = `
                <div class="product-card bg-[--primary-bg] p-4 rounded-lg border border-[--accent-blue] transition-all duration-300 hover:scale-105 hover:neon-glow-blue cursor-pointer group relative overflow-hidden" data-product-id="${product.id}" data-category-id="${categoryId}">
                    <img data-src="${product.images[0]}" alt="${product['name_' + currentLang]}" class="w-full h-48 object-cover rounded-md mb-4 border border-[--accent-blue] group-hover:neon-glow-blue lazy-load-img">
                    <h3 class="text-xl font-bold text-white group-hover:text-[--accent-blue] transition-colors duration-300">
                        ${product['name_' + currentLang]}
                    </h3>
                    <p class="text-white text-opacity-70 mt-1">
                        ${translations[currentLang].productSize}: ${displaySize}
                    </p>
                    <!-- Overlay on hover -->
                    <div class="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-4">
                        <h4 class="text-2xl font-bold text-[--accent-green] mb-2">${product['name_' + currentLang]}</h4>
                        <button class="view-details-button px-4 py-2 bg-[--accent-blue] text-[--primary-bg] font-bold rounded-full neon-glow-blue transition-all duration-300 hover:scale-110">
                            <span data-key="viewDetails">${translations[currentLang].viewDetails}</span>
                        </button>
                    </div>
                </div>
            `;
            productsGrid.innerHTML += productCard;
        });

        // Add event listeners for "View Details" buttons
        document.querySelectorAll('.view-details-button').forEach(button => {
            button.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent click on parent card
                const card = event.target.closest('.product-card');
                const productId = card.dataset.productId;
                const categoryId = card.dataset.categoryId;
                navigateTo(`#/products/${productId}?category=${categoryId}`); // Use hash-based navigation for product detail
            });
        });

        initLazyLoading(); // Initialize lazy loading for new images
        console.log("Products rendered successfully."); // Debugging log

    } catch (error) {
        console.error("Error fetching or rendering products:", error); // More specific error log
        loadingSpinner.style.display = 'none';
        productsGrid.innerHTML = `<p class="text-center text-red-500 col-span-full">Error loading products. Please try again later.</p>`;
    }
}

/**
 * Displays product details in a modal.
 * @param {string} categoryId - The ID of the product's category.
 * @param {string} productId - The ID of the product.
 * @param {boolean} [keepOpen=false] - If true, the modal won't be explicitly shown (used for language switching).
 */
export async function showProductDetail(categoryId, productId, keepOpen = false) {
    console.log(`Showing product detail for product: ${productId} in category: ${categoryId}`); // Debugging log
    const product = await fetchProductById(categoryId, productId); // Simulate API call for single product
    if (!product) {
        console.error("Product not found:", productId);
        return;
    }

    const modal = document.getElementById('product-detail-modal');
    const modalProductName = document.getElementById('modal-product-name');
    const modalProductDescription = document.getElementById('modal-product-description');
    const sizesContainer = document.getElementById('modal-product-sizes');
    const sizeOptionsContainer = document.getElementById('size-options-container');
    const specsList = document.querySelector('#modal-product-specs ul');
    const mainImage = document.getElementById('modal-product-image');
    const thumbnailsContainer = document.getElementById('modal-image-thumbnails');
    const prevButton = document.getElementById('prev-image');
    const nextButton = document.getElementById('next-image');

    // Store product and category ID for language switching
    modalProductName.textContent = product['name_' + currentLang];
    modalProductName.dataset.productId = productId;
    modalProductName.dataset.categoryId = categoryId;

    modalProductDescription.textContent = product['description_' + currentLang];

    // Handle product variants (sizes)
    sizeOptionsContainer.innerHTML = ''; // Clear previous options
    if (product.variants && product.variants.length > 0) {
        sizesContainer.classList.remove('hidden');
        product.variants.forEach((variant, index) => {
            const radioId = `size-option-${product.id}-${index}`;
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'product-size';
            input.id = radioId;
            input.value = index;
            input.classList.add('hidden'); // Hide default radio button

            const label = document.createElement('label');
            label.htmlFor = radioId;
            label.textContent = variant[`size_${currentLang}`];
            label.classList.add('px-4', 'py-2', 'rounded-full', 'cursor-pointer', 'border', 'border-[--accent-blue]', 'text-white', 'hover:bg-[--accent-blue]', 'transition-colors', 'duration-200');

            // Add a checked state style
            input.addEventListener('change', () => {
                document.querySelectorAll(`#size-options-container label`).forEach(lbl => {
                    lbl.classList.remove('bg-[--accent-blue]', 'text-[--primary-bg]');
                    lbl.classList.add('text-white');
                });
                label.classList.add('bg-[--accent-blue]', 'text-[--primary-bg]');
                updateProductSpecs(product.variants[index][`specs_${currentLang}`]);
            });

            sizeOptionsContainer.appendChild(input);
            sizeOptionsContainer.appendChild(label);

            // Select the first variant by default
            if (index === 0) {
                input.checked = true;
                label.classList.add('bg-[--accent-blue]', 'text-[--primary-bg]');
                updateProductSpecs(product.variants[0][`specs_${currentLang}`]); // Update specs for default selected variant
            }
        });
    } else {
        sizesContainer.classList.add('hidden');
        updateProductSpecs(product[`specs_${currentLang}`] || []);
    }

    // Image Carousel Logic
    currentProductImages = product.images;
    currentImageIndex = 0; // Start with the first image

    function updateCarousel() {
        mainImage.src = currentProductImages[currentImageIndex];
        thumbnailsContainer.innerHTML = ''; // Clear existing thumbnails

        currentProductImages.forEach((imgSrc, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = imgSrc;
            thumbnail.alt = product['name_' + currentLang];
            thumbnail.classList.add('w-20', 'h-20', 'object-cover', 'rounded-md', 'cursor-pointer', 'border', 'transition-all', 'duration-200');
            if (index === currentImageIndex) {
                thumbnail.classList.add('border-[--accent-green]', 'neon-glow-blue'); // Highlight active thumbnail
            } else {
                thumbnail.classList.add('border-transparent', 'hover:border-[--accent-blue]');
            }
            thumbnail.addEventListener('click', () => {
                currentImageIndex = index;
                updateCarousel();
            });
            thumbnailsContainer.appendChild(thumbnail);
        });
    }

    // Ensure buttons exist before assigning onclick
    if (prevButton) {
        prevButton.onclick = () => {
            currentImageIndex = (currentImageIndex - 1 + currentProductImages.length) % currentProductImages.length;
            updateCarousel();
        };
    } else {
        console.error("Previous image button not found!");
    }

    if (nextButton) {
        nextButton.onclick = () => {
            currentImageIndex = (currentImageIndex + 1) % currentProductImages.length;
            updateCarousel();
        };
    } else {
        console.error("Next image button not found!");
    }


    updateCarousel(); // Initial render of carousel

    if (!keepOpen) {
        modal.classList.remove('hidden');
        setupModalAccessibility(modal);
    }
    console.log("Product detail modal displayed."); // Debugging log
}

/**
 * Helper function to update product specifications list.
 * @param {string[]} specs - An array of specification strings.
 */
function updateProductSpecs(specs) {
    const specsList = document.querySelector('#modal-product-specs ul');
    if (!specsList) {
        console.error("Product specs list (ul) not found in modal!");
        return;
    }
    specsList.innerHTML = '';
    if (specs && specs.length > 0) {
        specs.forEach(spec => {
            const li = document.createElement('li');
            li.textContent = spec;
            specsList.appendChild(li);
        });
    } else {
        specsList.innerHTML = `<li class="text-white text-opacity-70">${translations[currentLang].noSpecifications || 'No specifications available.'}</li>`;
    }
}

/**
 * Sets up accessibility features for the modal, including focus trapping and Esc key closing.
 * @param {HTMLElement} modalElement - The modal DOM element.
 */
function setupModalAccessibility(modalElement) {
    const focusableElements = modalElement.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    // Focus first element in modal
    setTimeout(() => { // Timeout to ensure modal is fully visible and focusable
        if (firstFocusableElement) {
            firstFocusableElement.focus();
        }
    }, 100);

    // Trap focus within modal
    modalElement.addEventListener('keydown', function(e) {
        const isTabPressed = (e.key === 'Tab');

        if (!isTabPressed) {
            return;
        }

        if (e.shiftKey) { // if shift key pressed for shift + tab
            if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus(); // add focus to the last focusable element
                e.preventDefault();
            }
        } else { // if tab key is pressed
            if (document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus(); // add focus to the first focusable element
                e.preventDefault();
            }
        }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modalElement.classList.contains('hidden')) {
            toggleModal(false);
        }
    });
}

/**
 * Toggles the visibility of the product detail modal.
 * @param {boolean} show - True to show, false to hide.
 */
export function toggleModal(show) {
    const modal = document.getElementById('product-detail-modal');
    if (show) {
        modal.classList.remove('hidden');
        setupModalAccessibility(modal);
    } else {
        modal.classList.add('hidden');
    }
}

/**
 * Initializes event listeners for the main UI elements.
 */
export function initUIHandlers() {
    console.log("Initializing UI Handlers..."); // Debugging log
    // Event listeners for header navigation links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const path = e.target.getAttribute('href');
            navigateTo(path);
        });
    });

    // Event listener for "Explore Catalogue" button
    document.getElementById('explore-catalogue').addEventListener('click', () => {
        navigateTo('#/categories'); // Use hash-based navigation
    });

    // Event listener for "Back to Categories" button
    document.getElementById('back-to-categories').addEventListener('click', () => {
        navigateTo('#/categories'); // Use hash-based navigation
    });

    // Event listener for closing the modal
    document.getElementById('close-modal').addEventListener('click', () => {
        toggleModal(false);
        // When closing modal, navigate back to the product list URL
        const currentHash = window.location.hash;
        if (currentHash.includes('#/products/')) {
            const parts = currentHash.split('?category=');
            if (parts.length > 1) {
                const categoryId = parts[1];
                navigateTo(`#/categories/${categoryId}`);
            } else {
                navigateTo('#/categories');
            }
        }
    });

    // Close modal when clicking outside the content
    document.getElementById('product-detail-modal').addEventListener('click', (event) => {
        if (event.target.id === 'product-detail-modal') {
            toggleModal(false);
            // When closing modal by clicking overlay, navigate back to the product list URL
            const currentHash = window.location.hash;
            if (currentHash.includes('#/products/')) {
                const parts = currentHash.split('?category=');
                if (parts.length > 1) {
                    const categoryId = parts[1];
                    navigateTo(`#/categories/${categoryId}`);
                } else {
                    navigateTo('#/categories');
                }
            }
        }
    });

    // Language toggle
    document.getElementById('lang-toggle').addEventListener('click', (event) => {
        if (event.target.dataset.lang) {
            setCurrentLang(event.target.dataset.lang);
            updateUIForLanguage();
        }
    });
    console.log("UI Handlers initialized."); // Debugging log
}
