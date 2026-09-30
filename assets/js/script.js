
/* =========================================================
   SUKRUTI NGO
   COMMON HEADER + FOOTER LOADER
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    loadComponent(
        "#site-header",
        "./components/header.html"
    );

    loadComponent(
        "#site-footer",
        "./components/footer.html"
    );

});


/* =========================================================
   LOAD COMPONENT
========================================================= */

async function loadComponent(selector, file) {

    const container = document.querySelector(selector);

    if (!container) {
        return;
    }

    try {

        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(
                `Unable to load ${file}`
            );
        }

        const html = await response.text();

        container.innerHTML = html;


        /* ---------------------------------------------
           Header-specific setup
        --------------------------------------------- */

        if (selector === "#site-header") {

            setActiveNavigation();

            setupMobileNavigation();

        }


    } catch (error) {

        console.error(
            "Component loading error:",
            error
        );

    }

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

function setActiveNavigation() {

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    const navigationLinks =
        document.querySelectorAll(
            ".nav-menu .nav-link, .nav-menu .nav-donate"
        );


    navigationLinks.forEach(function (link) {

        link.classList.remove("active");

        const page =
            link.getAttribute("data-page");

        if (
            currentPage === "" &&
            page === "home"
        ) {

            link.classList.add("active");

        }


        if (
            currentPage === "index.html" &&
            page === "home"
        ) {

            link.classList.add("active");

        }


        if (
            currentPage === "about.html" &&
            page === "about"
        ) {

            link.classList.add("active");

        }


        if (
            currentPage === "contact.html" &&
            page === "contact"
        ) {

            link.classList.add("active");

        }


        if (
            currentPage === "donate.html" &&
            page === "donate"
        ) {

            link.classList.add("active");

        }


        const programPages = [
            "helth.html",
            "edu.html",
            "lhood.html",
            "skilld.html",
            "water.html",
            "dairy.html"
        ];


        if (
            programPages.includes(currentPage) &&
            page === "programs"
        ) {

            link.classList.add("active");

        }

    });

}


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

function setupMobileNavigation() {

    const menuCheckbox =
        document.querySelector(
            "#mobile-menu"
        );


    const navLinks =
        document.querySelectorAll(
            ".nav-menu a"
        );


    if (!menuCheckbox) {
        return;
    }


    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                menuCheckbox.checked = false;

            }
        );

    });

}

