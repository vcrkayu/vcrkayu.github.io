/* ADD YOUR PHOTOS HERE.
   1. Copy your photos into the images folder.
   2. Replace an empty string below with its path, e.g. "images/portrait.jpg".
   Empty paths intentionally show the designed placeholders.
   Supported formats include JPG, PNG, WebP, and SVG. */
const IMAGE_PATHS = {
  portrait: "",
  thermal: "images/htp-tank.png",
  xenon: "images/ep-thruster-drawing.png",
  geothermal: "",
  clamp: ""
};

document.querySelectorAll("[data-slot]").forEach((slot) => {
  const path = IMAGE_PATHS[slot.dataset.slot];
  if (!path) return;
  const img = slot.querySelector("img");
  const placeholder = slot.querySelector(".image-placeholder");
  // Hidden lazy images can wait indefinitely for layout; load configured images now.
  img.loading = "eager";
  img.addEventListener("load", () => {
    placeholder.hidden = true;
    placeholder.style.display = "none";
    img.hidden = false;
  });
  img.addEventListener("error", () => {
    img.hidden = true;
    placeholder.hidden = false;
    placeholder.style.removeProperty("display");
  });
  img.src = path;
});

document.querySelectorAll(".project-details").forEach((details) => {
  details.addEventListener("toggle", () => {
    details.querySelector("summary > span:first-child").textContent = details.open ? "Close project" : "Read project";
  });
});

if ("IntersectionObserver" in window) {
  const navLinks = document.querySelectorAll(".site-header nav a");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-15% 0px -65% 0px", threshold: 0 });
  document.querySelectorAll("main > section[id]").forEach((section) => observer.observe(section));
}

// Reveal each block once as it enters the viewport. Content is visible by default.
const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
if ("IntersectionObserver" in window && !motionPreference.matches) {
  const revealTargets = document.querySelectorAll(
    ".section-heading, .project-group-heading, .project-card, .resume-group > h3, .resume-entry, .toolkit, .contact > div"
  );
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      reveal(entry.target);
    });
  }, { rootMargin: "0px 0px -48px 0px", threshold: 0 });

  function reveal(element, immediately = false) {
    if (immediately) element.classList.add("reveal-instant");
    element.classList.add("is-revealed");
    revealObserver.unobserve(element);
  }

  revealTargets.forEach((element) => {
    // Keep the initial viewport and restored scroll position immediately readable.
    if (element.getBoundingClientRect().top < window.innerHeight) return;
    element.classList.add("scroll-reveal");
    revealObserver.observe(element);
  });

  // Keyboard navigation and direct project links must never land on faded text.
  document.addEventListener("focusin", (event) => {
    const target = event.target.closest(".scroll-reveal");
    if (target) reveal(target, true);
  });
  const revealHashTarget = () => {
    let target;
    try { target = document.getElementById(decodeURIComponent(location.hash.slice(1))); }
    catch { return; }
    const block = target?.closest(".scroll-reveal");
    if (block) reveal(block, true);
  };
  window.addEventListener("hashchange", revealHashTarget);
  revealHashTarget();

  motionPreference.addEventListener("change", (event) => {
    if (!event.matches) return;
    revealTargets.forEach((element) => reveal(element, true));
    revealObserver.disconnect();
  });
}
