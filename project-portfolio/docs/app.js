const LINKS = {
  repo: "https://github.com/<your-username>/project-portfolio",
  docs: "technical-overview.html",
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

function initLightbox() {
  const root = document.getElementById("lightbox");
  const image = document.getElementById("lightbox-image");
  const caption = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("lightbox-close");
  const triggers = [...document.querySelectorAll("[data-lightbox-src]")];

  if (!root || !image || !caption || !closeBtn || triggers.length === 0) {
    return;
  }

  function closeLightbox() {
    root.hidden = true;
    document.body.style.overflow = "";
  }

  function openLightbox(src, alt, text) {
    image.src = src;
    image.alt = alt || "Image preview";
    caption.textContent = text || "";
    root.hidden = false;
    document.body.style.overflow = "hidden";
  }

  triggers.forEach((node) => {
    node.addEventListener("click", () => {
      openLightbox(
        node.dataset.lightboxSrc || "",
        node.dataset.lightboxAlt || "",
        node.dataset.lightboxCaption || ""
      );
    });
  });

  closeBtn.addEventListener("click", closeLightbox);
  root.addEventListener("click", (event) => {
    if (event.target === root) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!root.hidden && event.key === "Escape") {
      closeLightbox();
    }
  });
}

wireLinks();
initReveals();
initLightbox();

