document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Menu Toggling
    const menuToggle = document.querySelector(".menu-toggle");
    const header = document.querySelector(".header");

    if (menuToggle && header) {
        menuToggle.addEventListener("click", () => {
            header.classList.toggle("menu-active");
            
            // Disable page scroll when navigation menu is full screen
            if (header.classList.contains("menu-active")) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
        });
    }

    // 2. Light/Dark Theme Switcher
    const themeBtn = document.querySelector(".theme-toggle-btn");
    
    // Check for saved theme preference in localStorage, default to Light mode
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }

    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark");
            
            // Persist the user preference in localStorage
            if (document.body.classList.contains("dark")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }
        });
    }

    // 3. Mobile Footer Accordion
    const footerHeadings = document.querySelectorAll(".footerheading");

    footerHeadings.forEach((heading) => {
        heading.addEventListener("click", () => {
            // Only toggle on mobile viewports
            if (window.innerWidth <= 768) {
                const section = heading.closest(".footer-section");
                if (section) {
                    section.classList.toggle("active");
                }
            }
        });
    });

    // Handle screen resize (reset body overflow and mobile accordion states if switching layout modes)
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            if (header && header.classList.contains("menu-active")) {
                header.classList.remove("menu-active");
                document.body.style.overflow = "";
            }
            
            // Clean up mobile active accordion sections
            document.querySelectorAll(".footer-section").forEach(sec => {
                sec.classList.remove("active");
            });
        }
    });
});