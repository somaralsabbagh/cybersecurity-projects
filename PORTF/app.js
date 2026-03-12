const LINKS = {
  repo: "https://github.com/<your-username>/<public-repo>",
  docs: "https://github.com/<your-username>/<public-repo>/tree/main/docs",
};

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function formatNumber(value, decimals = 0) {
  const parsed = Number(value);
  return parsed.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function animateCounter(el) {
  if (el.dataset.done === "1") {
    return;
  }

  const end = Number(el.dataset.counter || 0);
  const decimals = Number(el.dataset.decimals || 0);

  if (reduceMotion) {
    el.textContent = formatNumber(end, decimals);
    el.dataset.done = "1";
    return;
  }

  const duration = 1200;
  const start = performance.now();

  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = end * eased;
    el.textContent = formatNumber(current, decimals);

    if (progress < 1) {
      requestAnimationFrame(frame);
      return;
    }

    el.textContent = formatNumber(end, decimals);
    el.dataset.done = "1";
  }

  requestAnimationFrame(frame);
}

function wireLinks() {
  document.querySelectorAll("[data-link]").forEach((anchor) => {
    const key = anchor.dataset.link;
    const href = LINKS[key] || "#";
    anchor.href = href;

    if (href.includes("<your-username>") || href === "#") {
      anchor.classList.add("btn-disabled");
      anchor.title = "Update LINKS in app.js with your public repo URL";
    }
  });
}

function initReveals() {
  const reveals = [...document.querySelectorAll(".reveal")];

  reveals.forEach((el, idx) => {
    el.style.transitionDelay = `${Math.min(idx * 45, 360)}ms`;
  });

  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("inview"));
    document.querySelectorAll("[data-counter]").forEach(animateCounter);
    const bars = document.querySelector(".bars");
    if (bars) {
      bars.classList.add("animate");
    }
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const el = entry.target;
        el.classList.add("inview");

        if (el.classList.contains("kpi")) {
          const value = el.querySelector("[data-counter]");
          if (value) {
            animateCounter(value);
          }
        }

        if (el.classList.contains("bars")) {
          el.classList.add("animate");
        }

        observer.unobserve(el);
      });
    },
    { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
  );

  reveals.forEach((el) => observer.observe(el));
}

wireLinks();
initReveals();
