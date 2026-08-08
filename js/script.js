/*=========================================================
  jPar Roofing
  script.js
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================================
      ELEMENTS
    =====================================================*/

    const header = document.getElementById("header");
    const menuToggle = document.querySelector("#menu-button"); // ← Check this!
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll("nav a"); // ← Changed from .nav-links a
    const sections = document.querySelectorAll("section");

    /*=====================================================
      MOBILE MENU
    =====================================================*/

    // Only run if menuToggle exists
    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            nav.classList.toggle("active");
            menuToggle.textContent = nav.classList.contains("active") ? "✕" : "☰";
        });
    }

    // Only run if navLinks exist
    if (navLinks) {
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                if (nav) {
                    nav.classList.remove("active");
                }
                if (menuToggle) {
                    menuToggle.textContent = "☰";
                }
            });
        });
    }

    /*=====================================================
      STICKY HEADER
    =====================================================*/

    function updateHeader() {
        if (window.scrollY > 80) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    if (header) {
        updateHeader();
        window.addEventListener("scroll", updateHeader, { passive: true });
    }

    /*=====================================================
      ACTIVE NAVIGATION
    =====================================================*/

    function updateActiveNav() {
        let current = "";
        sections.forEach(section => {
            const top = section.offsetTop - 120;
            const height = section.offsetHeight;
            if (window.scrollY >= top && window.scrollY < top + height) {
                current = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    }

    if (sections.length > 0 && navLinks.length > 0) {
        updateActiveNav();
        window.addEventListener("scroll", updateActiveNav, { passive: true });
    }

    /*=====================================================
      SMOOTH SCROLLING
    =====================================================*/

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            const target = document.querySelector(this.getAttribute("href"));
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    /*=====================================================
      SCROLL REVEAL
    =====================================================*/

    const animatedElements = document.querySelectorAll(
        ".service-card, .feature-card, .review-card, .about-grid"
    );

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: .15 });

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    /*=====================================================
      SCROLL TO TOP BUTTON
    =====================================================*/

    const scrollButton = document.createElement("div");
    scrollButton.id = "scrollTop";
    scrollButton.innerHTML = "▲";
    document.body.appendChild(scrollButton);

    function toggleScrollButton() {
        if (window.scrollY > 500) {
            scrollButton.classList.add("show");
        } else {
            scrollButton.classList.remove("show");
        }
    }

    toggleScrollButton();
    window.addEventListener("scroll", toggleScrollButton, { passive: true });

    scrollButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    /*=====================================================
      BEFORE & AFTER SLIDER
    =====================================================*/

    const slider = document.querySelector(".comparison-slider");

    if (slider) {
        const before = slider.querySelector(".before-image");
        const handle = slider.querySelector(".slider-handle");
        let dragging = false;

        slider.addEventListener("pointerdown", () => {
            dragging = true;
        });

        window.addEventListener("pointerup", () => {
            dragging = false;
        });

        window.addEventListener("pointermove", e => {
            if (!dragging) return;
            const rect = slider.getBoundingClientRect();
            let x = e.clientX - rect.left;
            x = Math.max(0, Math.min(x, rect.width));
            if (before) before.style.width = x + "px";
            if (handle) handle.style.left = x + "px";
        });
    }

    /*=====================================================
      HERO VIDEO FALLBACK
    =====================================================*/

    const heroVideo = document.querySelector("#hero video");
    if (heroVideo) {
        heroVideo.play().catch(() => {
            console.log("Autoplay prevented by browser.");
        });
    }

    /*=====================================================
      FORM ENHANCEMENTS
    =====================================================*/

    const form = document.querySelector(".estimate-form");
    if (form) {
        form.addEventListener("submit", () => {
            const button = form.querySelector("button");
            if (button) {
                button.disabled = true;
                button.innerHTML = "Submitting...";
            }
        });
    }

    /*=====================================================
      CURRENT YEAR
    =====================================================*/

    const copyright = document.querySelector(".copyright");
    if (copyright) {
        const year = new Date().getFullYear();
        copyright.innerHTML = `© ${year} jPar Roofing. All Rights Reserved.`;
    }

});
