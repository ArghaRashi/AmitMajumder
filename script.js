// This function runs when the entire page is loaded
document.addEventListener('DOMContentLoaded', () => {

    // Initialize Lucide Icons
    lucide.createIcons();

    // --- Mobile Menu Logic ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOpenIcon = document.getElementById('menu-open-icon');
    const menuCloseIcon = document.getElementById('menu-close-icon');

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            menuOpenIcon.classList.toggle('hidden');
            menuCloseIcon.classList.toggle('hidden');
        });
    }
    
    // Close mobile menu when a link is clicked
    document.querySelectorAll('#mobile-menu a, .nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            if(link.getAttribute('href').startsWith('#')) {
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    menuOpenIcon.classList.remove('hidden');
                    menuCloseIcon.classList.add('hidden');
                }
            }
        });
    });

    // --- Sticky Navbar Logic ---
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // --- Scroll Animation Logic ---
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => observer.observe(el));

    // --- Background Slideshow Logic ---
    const slideshowImages = document.querySelectorAll("#slideshow-container .slideshow-image");
    let currentImageIndex = 0;

    if (slideshowImages.length > 0) {
        slideshowImages[currentImageIndex].classList.add("active"); // Make the first image active immediately

        setInterval(() => {
            // Remove active class from current image
            slideshowImages[currentImageIndex].classList.remove("active");

            // Update the index to the next image, looping back to 0 if at the end
            currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;

            // Add active class to the new current image
            slideshowImages[currentImageIndex].classList.add("active");
        }, 5000); // Change image every 5 seconds (5000 milliseconds)
    }

    // --- Dynamic Copyright Year ---
    const yearSpan = document.getElementById('year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
