const progressBar = document.querySelector(".scroll-progress");
const navigationLinks = document.querySelectorAll('.nav-links a[href^="#"]');
const sections = document.querySelectorAll("main section[id]");

let scrollUpdateScheduled = false;

function updateScrollUI() {
  const scrollableDistance =
    document.documentElement.scrollHeight - window.innerHeight;
  const progress =
    scrollableDistance > 0 ? window.scrollY / scrollableDistance : 0;

  progressBar.style.transform = `scaleX(${progress})`;
  document.body.classList.toggle("has-scrolled", window.scrollY > 420);
  scrollUpdateScheduled = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (!scrollUpdateScheduled) {
      window.requestAnimationFrame(updateScrollUI);
      scrollUpdateScheduled = true;
    }
  },
  { passive: true },
);

updateScrollUI();

if ("IntersectionObserver" in window) {
  document.body.classList.add("motion-ready");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
  );

  document
    .querySelectorAll(".content-section, .timeline-item, .project-card")
    .forEach((item) => {
      item.classList.add("reveal-item");
      revealObserver.observe(item);
    });

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        navigationLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${entry.target.id}`) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    },
    { rootMargin: "-25% 0px -65% 0px" },
  );

  sections.forEach((section) => sectionObserver.observe(section));
}
