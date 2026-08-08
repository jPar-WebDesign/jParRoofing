/*=========================================================
    jPar Roofing
    Version 2.0
==========================================================*/


/*=========================================================
    RESET
==========================================================*/

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Poppins', sans-serif;
    background: #fff;
    color: #444;
    line-height: 1.7;
    overflow-x: hidden;
}

img {
    display: block;
    max-width: 100%;
}

a {
    color: inherit;
    text-decoration: none;
}

ul {
    list-style: none;
}


/*=========================================================
    VARIABLES
==========================================================*/

:root {
    --primary: #161616;
    --secondary: #C89B3C;
    --white: #ffffff;
    --light: #f7f7f7;
    --gray: #6c6c6c;
    --shadow: 0 18px 45px rgba(0, 0, 0, .12);
    --radius: 18px;
    --transition: .35s ease;
}


/*=========================================================
    TYPOGRAPHY
==========================================================*/

h1,
h2,
h3,
h4 {
    font-family: 'Cinzel', serif;
    color: var(--primary);
    line-height: 1.2;
}

h1 {
    font-size: 3.4rem;
}

h2 {
    font-size: 2.5rem;
}

h3 {
    font-size: 1.4rem;
}

p {
    color: #666;
}

.section-title {
    display: inline-block;
    color: var(--secondary);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 15px;
    font-size: .9rem;
}

.section-description {
    width: min(750px, 90%);
    margin: auto;
    margin-bottom: 55px;
}


/*=========================================================
    LAYOUT
==========================================================*/

section {
    padding: 110px 20px;
}

.container {
    width: min(1240px, 94%);
    margin: auto;
}


/*=========================================================
    TOP BAR
==========================================================*/

.top-bar {
    background: var(--secondary);
    color: #fff;
    padding: 10px 0;
    font-size: .9rem;
}

.top-bar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.top-bar a {
    font-weight: 600;
}


/*=========================================================
    HEADER
==========================================================*/

header {
    position: fixed;
    width: 100%;
    top: 40px;
    left: 0;
    z-index: 999;
    transition: .35s;
}

header.scrolled {
    background: rgba(20, 20, 20, .96);
    backdrop-filter: blur(14px);
    top: 0;
    box-shadow: 0 8px 20px rgba(0, 0, 0, .25);
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 0;
}

.logo img {
    width: 190px;
}


/*=========================================================
    NAVIGATION
==========================================================*/

nav ul {
    display: flex;
    gap: 38px;
}

nav a {
    color: #fff;
    font-weight: 500;
    position: relative;
}

nav a::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--secondary);
    transition: var(--transition);
}

nav a:hover::after {
    width: 100%;
}

.header-phone {
    color: #fff;
    font-weight: 700;
}

#menu-button {
    display: none;
}


/*=========================================================
    HERO
==========================================================*/

#hero {
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden;
}

#hero video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(rgba(0, 0, 0, .70), rgba(0, 0, 0, .45));
}

.hero-content {
    position: relative;
    z-index: 10;
    width: min(900px, 92%);
}

.hero-logo {
    width: 260px;
    margin: auto;
    margin-bottom: 35px;
}

.hero-tag {
    display: inline-block;
    padding: 8px 18px;
    background: rgba(255, 255, 255, .12);
    backdrop-filter: blur(10px);
    color: #fff;
    border-radius: 30px;
    margin-bottom: 25px;
}

.hero-content h1 {
    color: #fff;
    margin-bottom: 25px;
}

.hero-content p {
    color: #eee;
    font-size: 1.2rem;
    margin-bottom: 45px;
}

.hero-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}


/*=========================================================
    BUTTONS
==========================================================*/

.btn-primary {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 16px 38px;
    background: var(--secondary);
    color: #fff;
    border-radius: 50px;
    font-weight: 600;
    transition: all .35s ease;
    box-shadow: 0 15px 35px rgba(200, 155, 60, .35);
}

.btn-primary:hover {
    transform: translateY(-4px);
    background: #b4872d;
    box-shadow: 0 22px 45px rgba(200, 155, 60, .45);
}

.btn-secondary {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 16px 38px;
    border: 2px solid rgba(255, 255, 255, .65);
    border-radius: 50px;
    color: #fff;
    backdrop-filter: blur(12px);
    transition: .35s;
}

.btn-secondary:hover {
    background: #fff;
    color: #222;
}


/*=========================================================
    TRUST BAR
==========================================================*/

.trust-bar {
    background: #ffffff;
    padding: 40px 20px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, .05);
}

.trust-bar .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    text-align: center;
}

.trust-bar strong {
    display: block;
    font-size: 1.4rem;
    color: var(--secondary);
    margin-bottom: 8px;
}

.trust-bar div {
    font-weight: 500;
}


/*=========================================================
    ABOUT
==========================================================*/

#about {
    background: var(--light);
}

.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
}

.about-image {
    position: relative;
}

.about-image img {
    border-radius: 24px;
    box-shadow: var(--shadow);
}

.about-image::after {
    content: "";
    position: absolute;
    width: 180px;
    height: 180px;
    border: 8px solid var(--secondary);
    bottom: -35px;
    right: -35px;
    border-radius: 24px;
    z-index: -1;
}

.about-content h2 {
    margin-bottom: 25px;
}

.about-content p {
    margin-bottom: 20px;
}

.check-list {
    margin-top: 35px;
}

.check-list li {
    margin-bottom: 16px;
    padding-left: 34px;
    position: relative;
    font-weight: 600;
}

.check-list li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: var(--secondary);
    font-size: 1.2rem;
}


/*=========================================================
    SERVICES
==========================================================*/

#services {
    background: #fff;
    text-align: center;
}

.service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 35px;
    margin-top: 60px;
}

.service-card {
    background: #fff;
    border-radius: 22px;
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: all .35s ease;
    position: relative;
}

.service-card:hover {
    transform: translateY(-12px);
}

.service-card img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    transition: transform .8s;
}

.service-card:hover img {
    transform: scale(1.08);
}

.service-content {
    padding: 35px;
}

.service-content h3 {
    margin-bottom: 15px;
}

.service-content p {
    margin-bottom: 20px;
}

.service-card::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 6px;
    background: var(--secondary);
    transform: scaleX(0);
    transition: .35s;
}

.service-card:hover::before {
    transform: scaleX(1);
}


/*=========================================================
    WHY CHOOSE US
==========================================================*/

#why-us {
    background: linear-gradient(180deg, #f7f7f7, #ffffff);
    text-align: center;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 35px;
    margin-top: 60px;
}

.feature-card {
    background: #fff;
    padding: 45px 35px;
    border-radius: 20px;
    transition: .35s;
    box-shadow: var(--shadow);
}

.feature-card:hover {
    transform: translateY(-10px);
}

.feature-icon {
    width: 85px;
    height: 85px;
    margin: auto;
    margin-bottom: 25px;
    border-radius: 50%;
    background: rgba(200, 155, 60, .12);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.4rem;
    color: var(--secondary);
}

.feature-card h3 {
    margin-bottom: 15px;
}

.feature-card:hover .feature-icon {
    transform: rotate(10deg) scale(1.08);
}


/*=========================================================
    SECTION TITLE DECORATION
==========================================================*/

.section-title::after {
    content: "";
    display: block;
    width: 70px;
    height: 3px;
    background: var(--secondary);
    margin: 14px auto 0;
}


/*=========================================================
    IMAGE HOVER EFFECT
==========================================================*/

.service-card,
.about-image img {
    transition: .45s;
}

.about-image:hover img {
    transform: scale(1.03);
}


/*=========================================================
    GENERAL CARD SHADOWS
==========================================================*/

.service-card,
.feature-card {
    border: 1px solid rgba(0, 0, 0, .05);
}


/*=========================================================
    BEFORE & AFTER SLIDER
==========================================================*/

#projects {
    background: #161616;
    color: #fff;
    text-align: center;
}

#projects h2 {
    color: #fff;
}

.comparison-slider {
    position: relative;
    width: 100%;
    max-width: 1000px;
    margin: 70px auto 0;
    overflow: hidden;
    border-radius: 20px;
    cursor: ew-resize;
    box-shadow: 0 20px 50px rgba(0, 0, 0, .35);
}

.comparison-slider img {
    display: block;
    width: 100%;
    user-select: none;
    pointer-events: none;
}

.before-image {
    position: absolute;
    inset: 0;
    width: 50%;
    overflow: hidden;
}

.before-image img {
    width: 1000px;
    max-width: none;
}

.slider-handle {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: #fff;
    transform: translateX(-50%);
}

.slider-handle span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    transform: translate(-50%, -50%);
    background: var(--secondary);
    border-radius: 50%;
    border: 5px solid white;
    box-shadow: 0 10px 25px rgba(0, 0, 0, .25);
}

.slider-handle span::before {
    content: "◀ ▶";
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
}


/*=========================================================
    CUSTOMER REVIEWS
==========================================================*/

#reviews {
    background: #f7f7f7;
    text-align: center;
}

.reviews-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    margin-top: 50px;
}

.review-card {
    background: #fff;
    padding: 35px 30px;
    border-radius: 20px;
    box-shadow: var(--shadow);
    transition: .35s;
}

.review-card:hover {
    transform: translateY(-8px);
}

.review-card .stars {
    color: var(--secondary);
    font-size: 1.5rem;
    margin-bottom: 15px;
    letter-spacing: 3px;
}

.review-card p {
    font-style: italic;
    margin-bottom: 20px;
    color: #555;
}

.review-card h4 {
    font-family: 'Poppins', sans-serif;
    font-size: 0.95rem;
    color: var(--primary);
    font-weight: 600;
}


/*=========================================================
    CALL TO ACTION
==========================================================*/

#cta {
    background: var(--secondary);
    padding: 70px 20px;
}

.cta-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
}

.cta-box h2 {
    color: #fff;
    margin-bottom: 10px;
}

.cta-box p {
    color: rgba(255, 255, 255, .85);
    font-size: 1.1rem;
}

.cta-box .btn-primary {
    background: #fff;
    color: var(--primary);
    box-shadow: 0 15px 35px rgba(0, 0, 0, .2);
    flex-shrink: 0;
}

.cta-box .btn-primary:hover {
    background: var(--primary);
    color: #fff;
    transform: translateY(-4px);
}


/*=========================================================
    CONTACT
==========================================================*/

#contact {
    background: #fff;
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: start;
}

.contact-info h2 {
    margin-bottom: 20px;
}

.contact-info p {
    margin-bottom: 35px;
}

.contact-list div {
    margin-bottom: 20px;
}

.contact-list strong {
    display: block;
    color: var(--primary);
    font-weight: 600;
    font-size: .85rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 3px;
}

.contact-list a {
    color: var(--secondary);
    font-weight: 500;
    font-size: 1.1rem;
}

.contact-list a:hover {
    text-decoration: underline;
}

.estimate-form {
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.estimate-form input,
.estimate-form select,
.estimate-form textarea {
    padding: 16px 20px;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    transition: .3s;
    background: #fafafa;
    width: 100%;
}

.estimate-form input:focus,
.estimate-form select:focus,
.estimate-form textarea:focus {
    border-color: var(--secondary);
    outline: none;
    background: #fff;
    box-shadow: 0 0 0 4px rgba(200, 155, 60, .1);
}

.estimate-form .btn-primary {
    border: none;
    cursor: pointer;
    font-size: 1rem;
    padding: 18px 38px;
}


/*=========================================================
    FOOTER
==========================================================*/

footer {
    background: var(--primary);
    color: rgba(255, 255, 255, .7);
    padding: 60px 20px 0;
}

.footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 50px;
    padding-bottom: 50px;
    border-bottom: 1px solid rgba(255, 255, 255, .08);
}

.footer-logo {
    width: 170px;
    margin-bottom: 18px;
}

footer h3 {
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 20px;
    letter-spacing: 1px;
}

footer ul li {
    margin-bottom: 12px;
}

footer ul a {
    transition: .3s;
}

footer ul a:hover {
    color: var(--secondary);
}

footer p a {
    color: var(--secondary);
}

footer p a:hover {
    text-decoration: underline;
}

.copyright {
    text-align: center;
    padding: 25px 0;
    font-size: .9rem;
    color: rgba(255, 255, 255, .4);
    border-top: 1px solid rgba(255, 255, 255, .05);
    margin-top: 0;
}


/*=========================================================
    SCROLL TO TOP BUTTON
==========================================================*/

#scrollTop {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--secondary);
    color: #fff;
    border: none;
    border-radius: 50%;
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: all .35s ease;
    box-shadow: 0 8px 25px rgba(200, 155, 60, .35);
    z-index: 999;
}

#scrollTop.show {
    opacity: 1;
    visibility: visible;
}

#scrollTop:hover {
    transform: translateY(-5px);
    background: #b4872d;
}


/*=========================================================
    RESPONSIVE
==========================================================*/

@media (max-width: 1024px) {

    h1 {
        font-size: 2.8rem;
    }

    h2 {
        font-size: 2.2rem;
    }

    .about-grid {
        gap: 50px;
    }

    .footer-grid {
        grid-template-columns: 1fr 1fr;
        gap: 40px;
    }

}

@media (max-width: 768px) {

    /* Typography */
    h1 {
        font-size: 2.2rem;
    }

    h2 {
        font-size: 1.8rem;
    }

    section {
        padding: 70px 15px;
    }

    /* Mobile Menu */
    #menu-button {
        display: block;
        background: transparent;
        border: none;
        color: #fff;
        font-size: 1.8rem;
        cursor: pointer;
        padding: 5px 10px;
    }

    nav {
        position: fixed;
        top: 0;
        right: -100%;
        width: 280px;
        height: 100vh;
        background: var(--primary);
        padding: 80px 30px 30px;
        transition: .4s;
        box-shadow: -10px 0 30px rgba(0, 0, 0, .3);
        overflow-y: auto;
    }

    nav.active {
        right: 0;
    }

    nav ul {
        flex-direction: column;
        gap: 25px;
    }

    nav a {
        font-size: 1.1rem;
    }

    .header-phone {
        display: none;
    }

    /* Hero */
    .hero-logo {
        width: 180px;
    }

    .hero-content p {
        font-size: 1rem;
    }

    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }

    .btn-primary,
    .btn-secondary {
        width: 100%;
        max-width: 280px;
        justify-content: center;
    }

    /* Trust Bar */
    .trust-bar .container {
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }

    /* About */
    .about-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .about-image::after {
        width: 100px;
        height: 100px;
        bottom: -20px;
        right: -20px;
    }

    /* Services */
    .service-grid {
        grid-template-columns: 1fr;
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
    }

    /* Reviews */
    .reviews-grid {
        grid-template-columns: 1fr;
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
    }

    /* CTA */
    .cta-box {
        flex-direction: column;
        text-align: center;
    }

    /* Contact */
    .contact-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    /* Footer */
    .footer-grid {
        grid-template-columns: 1fr;
        gap: 30px;
    }

    /* Comparison Slider */
    .comparison-slider {
        border-radius: 12px;
        margin-top: 40px;
    }

    .slider-handle span {
        width: 45px;
        height: 45px;
    }

    .slider-handle span::before {
        font-size: 10px;
    }

    #scrollTop {
        width: 42px;
        height: 42px;
        font-size: 1rem;
        bottom: 20px;
        right: 20px;
    }

}

@media (max-width: 480px) {

    h1 {
        font-size: 1.8rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    .top-bar .container {
        flex-direction: column;
        gap: 5px;
        text-align: center;
        font-size: .8rem;
    }

    .trust-bar .container {
        grid-template-columns: 1fr 1fr;
        gap: 15px;
    }

    .trust-bar strong {
        font-size: 1.1rem;
    }

    .trust-bar div {
        font-size: .9rem;
    }

    .service-card img {
        height: 200px;
    }

    .service-content {
        padding: 25px;
    }

    .feature-card {
        padding: 30px 20px;
    }

    .review-card {
        padding: 25px 20px;
    }

    .estimate-form input,
    .estimate-form select,
    .estimate-form textarea {
        padding: 14px 16px;
        font-size: .95rem;
    }

    .slider-handle span {
        width: 36px;
        height: 36px;
    }

    .slider-handle span::before {
        font-size: 8px;
    }

}
