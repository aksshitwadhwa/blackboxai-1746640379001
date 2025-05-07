document.addEventListener('DOMContentLoaded', function() {
    // Menu Toggle
    const menuButton = document.querySelector('.fa-bars').parentElement;
    const nav = document.querySelector('nav');
    
    menuButton.addEventListener('click', function() {
        // Add mobile menu functionality here
        alert('Menu clicked - Mobile navigation would appear here');
    });

    // Form Validation
    const searchForm = document.querySelector('.search-form');
    const locationInput = document.querySelector('input[type="text"]');
    const dateInput = document.querySelector('input[type="date"]');

    // Filter Buttons
    const filterButtons = document.querySelectorAll('.grid-cols-4 button');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('bg-blue-50', 'text-blue-600');
            });
            // Add active class to clicked button
            this.classList.add('bg-blue-50', 'text-blue-600');
        });
    });

    // Search Button Click Handler
    const searchButton = document.querySelector('.bg-blue-600');
    searchButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Basic form validation
        if (!locationInput.value.trim()) {
            alert('Please enter a location');
            locationInput.focus();
            return;
        }

        if (!dateInput.value) {
            alert('Please select a date');
            dateInput.focus();
            return;
        }

        // If validation passes, you would typically submit the form or make an API call here
        alert('Search submitted with location: ' + locationInput.value + ' and date: ' + dateInput.value);
    });

    // Make the navigation background dynamic based on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.remove('bg-transparent');
            nav.classList.add('bg-white', 'shadow');
        } else {
            nav.classList.add('bg-transparent');
            nav.classList.remove('bg-white', 'shadow');
        }
    });
});
