"use strict";

(function () {
  /* ===== Scroll Reveal ===== */
  const revealObserver = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          revealObserver.unobserve(e.target);
        }
      }),
    { threshold: 0.12 },
  );
  document
    .querySelectorAll("[data-reveal]")
    .forEach((el) => revealObserver.observe(el));

  /* ===== Mobile nav ===== */
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute(
      "aria-label",
      isOpen ? "Fermer le menu" : "Ouvrir le menu de navigation",
    );
  });

  // Close menu when a link is clicked
  navMenu.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Ouvrir le menu de navigation");
    }),
  );

  // Close menu on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("open")) {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Ouvrir le menu de navigation");
      navToggle.focus();
    }
  });

  /* ===== Product filter ===== */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll("[data-cat]");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.filter;
      filterBtns.forEach((b) => b.setAttribute("aria-pressed", "false"));
      btn.setAttribute("aria-pressed", "true");
      productCards.forEach((card) => {
        card.classList.toggle(
          "hidden",
          cat !== "tous" && card.dataset.cat !== cat,
        );
      });
    });
  });

  /* ===== FAQ accordion ===== */
  document.querySelectorAll(".faq-question").forEach((btn) => {
    btn.addEventListener("click", () => {
      const wasOpen = btn.getAttribute("aria-expanded") === "true";

      // Close all
      document.querySelectorAll(".faq-question").forEach((b) => {
        b.setAttribute("aria-expanded", "false");
        document
          .getElementById(b.getAttribute("aria-controls"))
          .classList.remove("open");
      });

      // Open the clicked one if it was closed
      if (!wasOpen) {
        btn.setAttribute("aria-expanded", "true");
        document
          .getElementById(btn.getAttribute("aria-controls"))
          .classList.add("open");
      }
    });
  });

  /* ===== Contact form ===== */
  const contactForm = document.getElementById("contact-form");
  const contactSuccess = document.getElementById("contact-success");
  const contactReset = document.getElementById("contact-reset");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // TODO: connect to Formspree / Netlify Forms before going live
    contactForm.hidden = true;
    contactSuccess.hidden = false;
    contactSuccess.focus();
  });

  contactReset.addEventListener("click", () => {
    contactSuccess.hidden = true;
    contactForm.reset();
    contactForm.hidden = false;
    document.getElementById("cf-name").focus();
  });

  /* ===== Leaflet Map (lazy init) ===== */
  const mapContainer = document.getElementById("leaflet-map");
  if (typeof L === "undefined" || !mapContainer) return;

  let mapInitialized = false;

  const initMap = () => {
    if (mapInitialized) return;
    mapInitialized = true;

    const map = L.map("leaflet-map", {
      center: [47.3, 5.18],
      zoom: 10,
      scrollWheelZoom: false,
      zoomControl: true,
      attributionControl: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", {
      attribution:
        '&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      subdomains: "abc",
      maxZoom: 20,
    }).addTo(map);

  // Custom markers
  const homeIcon = L.divIcon({
    html: `<div style="
      width:22px;height:22px;border-radius:50%;
      background:#A14E36;border:3px solid #fff;
      box-shadow:0 0 0 2.5px #A14E36,0 3px 10px rgba(0,0,0,.45);
    "></div>`,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
    className: "",
  });

  const marketIcon = L.divIcon({
    html: `<div style="
      width:16px;height:16px;border-radius:50%;
      background:#5C6648;border:2.5px solid #fff;
      box-shadow:0 0 0 2px #5C6648,0 2px 8px rgba(0,0,0,.4);
    "></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
    className: "",
  });

  const locations = [
    {
      lat: 47.2497,
      lng: 5.2006,
      icon: homeIcon,
      title: "La Grange aux Cookies – Genlis (atelier)",
      popup:
        "<strong>La Grange aux Cookies</strong><br>Genlis - notre atelier<br><em>Marchés : samedis matin</em>",
    },
    {
      lat: 47.3031,
      lng: 5.125,
      icon: marketIcon,
      title: "Marché nocturne – Chevigny-Saint-Sauveur",
      popup:
        "<strong>Marché nocturne</strong><br>Chevigny-Saint-Sauveur<br><em>13 juil. & 29 août 2026</em>",
    },
    {
      lat: 47.1978,
      lng: 5.3836,
      icon: marketIcon,
      title: "Marché d'Auxonne",
      popup:
        "<strong>Marché d'Auxonne</strong><br>Centre-ville - Auxonne<br><em>Vendredi matin</em>",
    },
    {
      lat: 47.2217,
      lng: 4.9728,
      icon: marketIcon,
      title: "Marché de Gevrey-Chambertin",
      popup:
        "<strong>Marché de Gevrey-Chambertin</strong><br>Gevrey-Chambertin<br><em>Samedi matin</em>",
    },
    {
      lat: 47.5208,
      lng: 5.2072,
      icon: marketIcon,
      title: "Fête de la Truffe – Is-sur-Tille",
      popup:
        "<strong>Fête de la Truffe</strong><br>Is-sur-Tille<br><em>17 octobre 2026</em>",
    },
    {
      lat: 47.1539,
      lng: 5.1889,
      icon: marketIcon,
      title: "Foire aux plantes – Brazey-en-Plaine",
      popup:
        "<strong>Foire aux plantes</strong><br>Brazey-en-Plaine<br><em>24-25 octobre 2026</em>",
    },
  ];

  locations.forEach((loc) => {
    loc.marker = L.marker([loc.lat, loc.lng], { icon: loc.icon, title: loc.title })
      .bindPopup(loc.popup)
      .addTo(map);
  });

  /* ===== Market card → map interaction ===== */
  document.querySelectorAll(".market-item").forEach((item) => {
    const activate = () => {
      const lat = parseFloat(item.dataset.lat);
      const lng = parseFloat(item.dataset.lng);
      if (isNaN(lat) || isNaN(lng)) return;
      const loc = locations.find((l) => l.lat === lat && l.lng === lng);
      if (!loc) return;
      map.getContainer().scrollIntoView({ behavior: "smooth", block: "center" });
      map.flyTo([lat, lng], 13, { duration: 0.8 });
      loc.marker.openPopup();
    };
    item.addEventListener("click", activate);
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        activate();
      }
    });
  });
};

new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) initMap();
  },
  { rootMargin: "200px" },
).observe(mapContainer);
})();
