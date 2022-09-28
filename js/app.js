// MAKE MOBILE NAVIGATION WORK

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

const sr = ScrollReveal({
  distance: "100px",
  duration: 750,
  // reset: true,
});

sr.reveal(
  `.heading-primary, .heading-secondary, .hero-sub-heading, .hero-description, .btn-desk, .btn-mob,.hiring-gap-wrap, .hiring-sub-heading, .difference-item, .work-list-wrap, .work-img, .cta-description, .cta-sub-heading, .terms-wrap p, .sub-heading-section-text, .grid-text-box p`,
  {
    origin: "bottom",
    interval: 300,
    opacity: 0,
    easing: "ease",
  }
);
