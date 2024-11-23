// You can add any custom JavaScript here if needed
// For example, if you want to add an interactive feature to the page:

document.addEventListener('DOMContentLoaded', function () {
    console.log('Page Loaded!');  // Basic console log to check if JS is working

    // Example: Smooth scroll when clicking on anchor links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});

    // Function to detect elements in the viewport
    function checkVisibility() {
        const elements = document.querySelectorAll('.fade-in'); // Get all elements with 'fade-in' class
        const windowHeight = window.innerHeight;

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top; // Get position of element
            if (elementTop < windowHeight - 100) { // Check if element is within the viewport
                element.classList.add('visible'); // Add 'visible' class to trigger animation
            }
        });
    }

    // Event listener for scroll events
    window.addEventListener('scroll', checkVisibility);

    // Call checkVisibility on page load to ensure the elements are visible on load
    window.addEventListener('load', checkVisibility);
    function checkFooterVisibility() {
        const footer = document.querySelector('footer');
        const footerPosition = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // If the footer is within the viewport, make it visible
        if (footerPosition < windowHeight - 100) {
            footer.classList.add('visible');
        }
    }

    // Call the function on page load and scroll
    window.addEventListener('scroll', checkFooterVisibility);
    window.addEventListener('load', checkFooterVisibility);
    window.onscroll = function() {
        var navbar = document.querySelector('nav');
        if (window.pageYOffset > 50) { // If scrolled down by more than 50px
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
// JavaScript for interactive features

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in animations on scroll
const fadeIns = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    { threshold: 0.2 }
);

fadeIns.forEach(fadeIn => observer.observe(fadeIn));

// Show footer when in view
const footer = document.querySelector('footer');

const footerObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                footer.classList.add('visible');
            }
        });
    },
    { threshold: 0.2 }
);

footerObserver.observe(footer);

// Highlight navbar links on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.parentElement.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.parentElement.classList.add('active');
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".scroll-container");
    const scrollContent = document.querySelector(".scroll-content");

    // Optional: Toggle scrolling on and off using a button (if needed)
    document.querySelector("#toggleScroll").addEventListener("click", function () {
        if (scrollContent.style.animationPlayState === "paused") {
            scrollContent.style.animationPlayState = "running";
        } else {
            scrollContent.style.animationPlayState = "paused";
        }
    });
});
// Select the toggler button and the navbar menu
const toggler = document.querySelector('.navbar-toggler');
const navMenu = document.querySelector('.navbar-nav');

// Add click event to the toggler button
toggler.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
});
