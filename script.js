document.addEventListener("DOMContentLoaded", () => {
    
    // =============================================
    //   1. Active Navigation Link Highlighting on Scroll
    // =============================================
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav ul li a");

    /**
     * Updates the active class on navigation links based on scroll position.
     * @param {IntersectionObserverEntry[]} entries - The observed entries.
     */
    const updateActiveLink = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                
                // Remove 'active' from all links
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    // Ensure the underline style is removed
                    link.style.setProperty('--after-width', '0%');
                });

                // Add 'active' to the matching link
                const activeLink = document.querySelector(`nav ul li a[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add("active");
                    // Ensure the underline style is applied
                    activeLink.style.setProperty('--after-width', '100%');
                }
            }
        });
    };

    // Set up the Intersection Observer
    // The rootMargin offsets the "intersection" point.
    // "-20% 0px -80% 0px" means it triggers when the section is 
    // in the top 20% of the viewport.
    const observerOptions = {
        root: null,
        rootMargin: "-40% 0px -60% 0px",
        threshold: 0
    };

    const observer = new IntersectionObserver(updateActiveLink, observerOptions);

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });

    // =============================================
    //   2. Form Submission Simulation
    // =============================================

    // Contact Form
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent actual form submission
            alert("Thank you for your message! We'll get back to you soon.");
            contactForm.reset(); // Clear the form
        });
    }

    // Newsletter Form
    const newsletterForm = document.getElementById("newsletter-form");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent actual form submission
            alert("Thank you for subscribing to our newsletter!");
            newsletterForm.reset(); // Clear the form
        });
    }
});
