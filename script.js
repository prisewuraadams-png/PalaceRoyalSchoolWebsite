"use strict";

/* ================= MOBILE MENU ================= */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  document.addEventListener("click", function (e) {
    if (
      navLinks.classList.contains("active") &&
      !navLinks.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
    }
  });

  document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  });
}

/* ================= NEWS SHOW MORE / SHOW LESS ================= */
document.querySelectorAll(".toggle-btn").forEach(button => {
  button.addEventListener("click", () => {
    const currentCard = button.closest(".news-card");
    const allCards = document.querySelectorAll(".news-card");

    if (!currentCard) return;

    allCards.forEach(card => {
      if (card !== currentCard) {
        card.classList.remove("active");

        const otherButton = card.querySelector(".toggle-btn");
        if (otherButton) {
          otherButton.textContent = "Show More";
        }
      }
    });

    currentCard.classList.toggle("active");

    button.textContent = currentCard.classList.contains("active")
      ? "Show Less"
      : "Show More";
  });
});

/* ================= SCROLL ANIMATION ================= */
const fadeElements = document.querySelectorAll(".fade-in");

function handleScroll() {
  fadeElements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);

/* ================= LIGHTBOX ================= */
function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  if (!lightbox || !lightboxImg || !img) return;

  lightbox.style.display = "flex";
  lightboxImg.src = img.src;
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");

  if (lightbox) {
    lightbox.style.display = "none";
  }
}

/* ================= GALLERY FILTER ================= */
function filterGallery(category, event) {
  const items = document.querySelectorAll(".gallery-item");
  const buttons = document.querySelectorAll(".gallery-filters button");

  if (!items.length) return;

  buttons.forEach(btn => btn.classList.remove("active"));

  if (event) {
    event.target.classList.add("active");
  }

  items.forEach(item => {
    if (category === "all" || item.classList.contains(category)) {
      item.style.display = "block";
      setTimeout(() => item.classList.add("show"), 50);
    } else {
      item.classList.remove("show");
      item.style.display = "none";
    }
  });
}

window.addEventListener("load", () => {
  document.querySelectorAll(".gallery-item").forEach(item => {
    item.style.display = "block";
    item.classList.add("show");
  });
});

/* ================= STAFF POPUP ================= */
function openFunFact(card) {
  const staffPopup = document.getElementById("staffPopup");

  if (!staffPopup || !card) return;

  const fact = card.getAttribute("data-fact");
  const img = card.querySelector("img");
  const name = card.querySelector("h3");
  const role = card.querySelector(".role-badge");

  const popupFact = document.getElementById("popupFact");
  const popupImg = document.getElementById("popupImg");
  const popupName = document.getElementById("popupName");
  const popupRole = document.getElementById("popupRole");

  if (popupFact) popupFact.innerText = fact || "";
  if (popupImg) popupImg.src = img ? img.src : "";
  if (popupName) popupName.innerText = name ? name.innerText : "";
  if (popupRole) popupRole.innerText = role ? role.innerText : "";

  staffPopup.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeFunFact() {
  const staffPopup = document.getElementById("staffPopup");

  if (!staffPopup) return;

  staffPopup.classList.remove("show");
  document.body.style.overflow = "auto";
}

document.addEventListener("DOMContentLoaded", () => {
  const staffPopup = document.getElementById("staffPopup");
  const closeBtn = document.getElementById("closePopup");

  if (closeBtn) {
    closeBtn.addEventListener("click", closeFunFact);
  }

  if (staffPopup) {
    staffPopup.addEventListener("click", (e) => {
      if (e.target === staffPopup) {
        closeFunFact();
      }
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeFunFact();
    }
  });
});

/* ================= STAFF GROUP TABS ================= */
function showStaffGroup(groupId, clickedButton) {
  const targetGroup = document.getElementById(groupId);

  if (!targetGroup) return;

  document.querySelectorAll(".staff-group-parallax").forEach(group => {
    group.classList.remove("active-staff-group");
  });

  document.querySelectorAll(".staff-tab").forEach(button => {
    button.classList.remove("active");
  });

  targetGroup.classList.add("active-staff-group");

  if (clickedButton) {
    clickedButton.classList.add("active");
  }
}

/* ================= SMOOTH SCROLL ================= */
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}