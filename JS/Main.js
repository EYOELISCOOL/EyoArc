// Main JavaScript for the site

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            const tabContainer = this.closest('.asset-tabs');
            
            // Remove active class from all buttons and content
            tabContainer.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            tabContainer.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Image gallery thumbnail click handler
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image img');
    
    if (thumbnails.length && mainImage) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                const imgSrc = this.querySelector('img').getAttribute('src');
                mainImage.setAttribute('src', imgSrc);
                
                // Update active thumbnail
                thumbnails.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
    
    // Search functionality
    const searchForm = document.querySelector('.search-form');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchInput = this.querySelector('input');
            const searchTerm = searchInput.value.trim();
            
            if (searchTerm) {
                // In a real implementation, this would redirect to search results
                window.location.href = `assets/browse.html?q=${encodeURIComponent(searchTerm)}`;
            }
        });
    }
});

// Community page specific JS
function initializeCommunity() {
    // Thread sorting/filtering
    const sortSelect = document.querySelector('.discussion-filters select:first-of-type');
    const filterSelect = document.querySelector('.discussion-filters select:last-of-type');
    
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            // In a real implementation, this would reload threads with new sorting
            console.log('Sorting by:', this.value);
        });
    }
    
    if (filterSelect) {
        filterSelect.addEventListener('change', function() {
            // In a real implementation, this would filter threads
            console.log('Filtering by:', this.value);
        });
    }
}

// Asset detail page specific JS
function initializeAssetDetail() {
    // License selection
    const licenseSelect = document.querySelector('.license-options select');
    
    if (licenseSelect) {
        licenseSelect.addEventListener('change', function() {
            // Update price based on license
            const priceElement = document.querySelector('.price');
            
            if (this.value === 'Extended License') {
                priceElement.textContent = '$149.99';
            } else {
                priceElement.textContent = '$49.99';
            }
        });
    }
    
    // Add to cart functionality
    const addToCartBtn = document.querySelector('.purchase-box .btn-primary');
    
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            // In a real implementation, this would add to cart
            alert('Added to cart!');
        });
    }
}

// Initialize specific page scripts based on current page
const bodyClass = document.body.className;

if (bodyClass.includes('community-page')) {
    initializeCommunity();
} else if (bodyClass.includes('asset-detail-page')) {
    initializeAssetDetail();
}