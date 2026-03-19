/*
======================================================
TEAM
------------------------------------------------------
Developer: Arthur Daniel Belanger Jr.
Role: Lead Developer & Technical Architect
GitHub: https://github.com/coding-with-arty/coding-with-arty

ORGANIZATION
------------------------------------------------------
Project: Augusta Downtown Alliance Website
Purpose: Revitalizing downtown Augusta through community,
         culture, and economic vitality.

TECHNOLOGY
------------------------------------------------------
Standards: HTML5, CSS3, JavaScript, JSON-LD
Tools: XAMPP, Git, PHPMailer
Hosting: GoDaddy Linux Hosting

LAST UPDATED
------------------------------------------------------
2026-02-14
======================================================
 */

(function () {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector("body");
    const selectHeader = document.querySelector("#header");
    if (
      !selectHeader ||
      (!selectHeader.classList.contains("scroll-up-sticky") &&
        !selectHeader.classList.contains("sticky-top") &&
        !selectHeader.classList.contains("fixed-top"))
    )
      return;

    window.scrollY > 100
      ? selectBody.classList.add("scrolled")
      : selectBody.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.classList.toggle("bi-list");
      mobileNavToggleBtn.classList.toggle("bi-x");
    }
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener("click", mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
    navmenu.addEventListener("click", function (e) {
      e.preventDefault();
      if (!this.parentNode) return;
      this.parentNode.classList.toggle("active");
      if (this.parentNode.nextElementSibling) {
        this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      }
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector(".scroll-top");
  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }
  }
  // Guard the click listener to avoid null crashes
  if (scrollTop) {
    scrollTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    if (!window.AOS) return; // avoid errors if AOS not loaded
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", aosInit);

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    if (!window.Swiper) return; // FIX: guard when Swiper isn't present on some pages
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      const cfgNode = swiperElement.querySelector(".swiper-config");
      if (!cfgNode) return; // FIX: prevent JSON.parse on null
      const raw = cfgNode.textContent.trim();
      if (!raw) return;
      let config;
      try {
        config = JSON.parse(raw);
      } catch (err) {
        // Bad JSON in markup should not break the page
        return; // FIX: fail silently
      }

      if (
        swiperElement.classList.contains("swiper-tab") &&
        typeof initSwiperWithCustomPagination === "function"
      ) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate Pure Counter
   */
  if (typeof PureCounter === "function") new PureCounter(); // FIX: guard PureCounter

  /**
   * Init isotope layout, category filters, and "Show 6 + Show More"
   */

  document.querySelectorAll(".isotope-layout").forEach(function (isotopeItem) {
    const layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
    const defaultFilter =
      isotopeItem.getAttribute("data-default-filter") ?? "*";
    const sort = isotopeItem.getAttribute("data-sort") ?? "original-order";

    const containerEl = isotopeItem.querySelector(".isotope-container");
    if (!containerEl || !window.imagesLoaded || !window.Isotope) return;

    const showMoreBtn = document.querySelector(
      '[data-target="#downtown-isotope"]'
    );

    const LIMIT = 6;
    let showAll = false;
    let activeFilter = defaultFilter;
    let iso;

    imagesLoaded(containerEl, function () {
      iso = new Isotope(containerEl, {
        itemSelector: ".isotope-item",
        layoutMode: layout,
        percentPosition: true,
        sortBy: sort,
      });

      function arrangeWithLimit() {
        let shown = 0;
        iso.arrange({
          filter: function (itemElem) {
            const matches =
              activeFilter === "*" ? true : itemElem.matches(activeFilter);
            if (!matches) return false;
            if (showAll) return true;
            if (shown < LIMIT) {
              shown++;
              return true;
            }
            return false;
          },
        });

        if (showMoreBtn) {
          const total =
            activeFilter === "*"
              ? iso.getItemElements().length
              : iso.getItemElements().filter((el) => el.matches(activeFilter))
                  .length;
          showMoreBtn.style.display =
            !showAll && total > LIMIT ? "inline-block" : "none";
        }
      }

      arrangeWithLimit();

      isotopeItem
        .querySelectorAll(".isotope-filters li")
        .forEach(function (btn) {
          btn.addEventListener(
            "click",
            function (e) {
              e.preventDefault();
              const currentActive = isotopeItem.querySelector(
                ".isotope-filters .filter-active"
              );
              if (currentActive)
                currentActive.classList.remove("filter-active");
              this.classList.add("filter-active");
              activeFilter = this.getAttribute("data-filter") || "*";
              showAll = false;
              arrangeWithLimit();
              if (typeof aosInit === "function") aosInit();
            },
            false
          );
        });

      if (showMoreBtn) {
        showMoreBtn.addEventListener("click", function () {
          showAll = true;
          arrangeWithLimit();
        });
      }

      iso.on("arrangeComplete", function () {
        iso.layout();
      });
    });
  });

  /**
   * Initiate glightbox
   */
  if (typeof GLightbox === "function") {
    GLightbox({ selector: ".glightbox" });
  }

  /**
   * Frequently Asked Questions Toggle
   */
  document
    .querySelectorAll(
      ".faq-item h3, .faq-item .faq-toggle, .faq-item .faq-header"
    )
    .forEach((faqItem) => {
      faqItem.addEventListener("click", () => {
        if (faqItem.parentNode)
          faqItem.parentNode.classList.toggle("faq-active");
      });
    });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener("load", function () {
    if (window.location.hash && document.querySelector(window.location.hash)) {
      setTimeout(() => {
        const section = document.querySelector(window.location.hash);
        if (!section) return;
        const scrollMarginTop = getComputedStyle(section).scrollMarginTop;
        window.scrollTo({
          top: section.offsetTop - parseInt(scrollMarginTop, 10),
          behavior: "smooth",
        });
      }, 100);
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll(".navmenu a");

  function navmenuScrollspy() {
    navmenulinks.forEach((navmenulink) => {
      if (!navmenulink.hash) return;
      const section = document.querySelector(navmenulink.hash);
      if (!section) return;
      const position = window.scrollY + 200;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        document
          .querySelectorAll(".navmenu a.active")
          .forEach((link) => link.classList.remove("active"));
        navmenulink.classList.add("active");
      } else {
        navmenulink.classList.remove("active");
      }
    });
  }
  window.addEventListener("load", navmenuScrollspy);
  document.addEventListener("scroll", navmenuScrollspy);
})();

/**
 * FormSubmit contact forms (supports multiple forms by id)
 */

(function attachFormsubmitHandlers() {
  const selectors = ["#contact-form", "#business-contact-form"];
  selectors.forEach((sel) => {
    const form = document.querySelector(sel);
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const loading = form.querySelector(".loading");
      const error = form.querySelector(".error-message");
      const sent = form.querySelector(".sent-message");
      if (!loading || !error || !sent) return;

      const submitBtn = form.querySelector('[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;

      loading.style.display = "block";
      error.style.display = "none";
      error.textContent = "";
      sent.style.display = "none";

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
        .then((response) => {
          loading.style.display = "none";
          if (submitBtn) submitBtn.disabled = false;

          if (response.ok) {
            sent.style.display = "block";
            form.reset();
          } else {
            error.style.display = "block";
            error.textContent = "There was a problem sending your message.";
          }
        })
        .catch(() => {
          loading.style.display = "none";
          if (submitBtn) submitBtn.disabled = false;

          error.style.display = "block";
          error.textContent = "Network error. Please try again.";
        });
    });
  });
})();
