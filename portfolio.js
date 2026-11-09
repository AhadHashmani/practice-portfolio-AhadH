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

const projectFilters = document.querySelectorAll("[data-project-filter]");
const projectCards = document.querySelectorAll("[data-project-categories]");
const projectResults = document.querySelector(".project-results");
const projectSearch = document.querySelector("[data-project-search]");
const printButton = document.querySelector("[data-print-page]");

function filterProjects(filter, query = "") {
  let visibleProjects = 0;
  const searchTerm = query.trim().toLocaleLowerCase();

  projectCards.forEach((card) => {
    const categories = card.dataset.projectCategories.split(" ");
    const matchesCategory = filter === "all" || categories.includes(filter);
    const matchesSearch =
      !searchTerm || card.textContent.toLocaleLowerCase().includes(searchTerm);
    const isVisible = matchesCategory && matchesSearch;

    card.hidden = !isVisible;
    visibleProjects += Number(isVisible);
  });

  projectFilters.forEach((button) => {
    const isActive = button.dataset.projectFilter === filter;

    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  projectResults.textContent = visibleProjects
    ? `Showing ${visibleProjects} of ${projectCards.length} projects`
    : "No projects match. Try another search or category.";
}

if (projectFilters.length && projectCards.length && projectResults) {
  projectFilters.forEach((button) => {
    button.addEventListener("click", () => {
      filterProjects(button.dataset.projectFilter, projectSearch?.value);
    });
  });

  projectSearch?.addEventListener("input", () => {
    const activeFilter = document.querySelector(
      ".project-filter[aria-pressed='true']",
    );
    filterProjects(activeFilter?.dataset.projectFilter ?? "all", projectSearch.value);
  });

  filterProjects("all");
}

printButton?.addEventListener("click", () => window.print());
