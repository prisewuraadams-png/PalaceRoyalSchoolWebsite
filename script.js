
/* ================= MOBILE MENU ================= */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  });
}

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
function openLightbox(img){
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  if (lightbox && lightboxImg) {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  }
}

function closeLightbox(){
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.style.display = "none";
  }
}

/* ================= GALLERY FILTER ================= */
function filterGallery(category, event){

  const items = document.querySelectorAll(".gallery-item");
  const buttons = document.querySelectorAll(".gallery-filters button");

  buttons.forEach(btn => btn.classList.remove("active"));

  if (event) event.target.classList.add("active");

  items.forEach(item => {
    item.style.display =
      category === "all" || item.classList.contains(category)
        ? "block"
        : "none";
  });
}
/* ================= NEWS TOGGLE (ACCORDION STYLE) ================= */
document.querySelectorAll(".toggle-btn").forEach(btn => {

  btn.addEventListener("click", () => {

    const currentCard = btn.closest(".news-card");
    const allCards = document.querySelectorAll(".news-card");

    // CLOSE ALL OTHER CARDS
    allCards.forEach(card => {
      if (card !== currentCard) {
        card.classList.remove("active");
        card.querySelector(".toggle-btn").textContent = "Show More";
      }
    });

    // TOGGLE CURRENT CARD
    currentCard.classList.toggle("active");

    // UPDATE BUTTON TEXT
    btn.textContent = currentCard.classList.contains("active")
      ? "Show Less"
      : "Show More";
  });

});

/* ================= STAFF FUN FACT (ABOUT PAGE ONLY) ================= */
document.addEventListener("DOMContentLoaded", () => {

  const staffPopup = document.getElementById("staffPopup");

  // STOP if not on About page
  if (!staffPopup) return;

  window.openFunFact = function(card){
    const fact = card.getAttribute("data-fact");
    const img = card.querySelector("img").src;
    const name = card.querySelector("h3").innerText;
    const role = card.querySelector(".role-badge").innerText;

    document.getElementById("popupFact").innerText = fact;
    document.getElementById("popupImg").src = img;
    document.getElementById("popupName").innerText = name;
    document.getElementById("popupRole").innerText = role;

    staffPopup.classList.add("show");
    document.body.style.overflow = "hidden";
  };

  window.closeFunFact = function(){
    staffPopup.classList.remove("show");
    document.body.style.overflow = "auto";
  };

  staffPopup.addEventListener("click", (e) => {
    if (e.target === staffPopup) {
      closeFunFact();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeFunFact();
    }
  });

  const closeBtn = document.getElementById("closePopup");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeFunFact);
  }

});

"use strict";

/* ================= STAFF POPUP ================= */

function openFunFact(el) {
  const popup = document.getElementById("staffPopup");
  if (!popup) return;

  const img = el.querySelector("img");
  const name = el.querySelector("h3");
  const fact = el.dataset.fact;

  document.getElementById("popupImg").src = img ? img.src : "";
  document.getElementById("popupName").textContent = name ? name.textContent : "";
  document.getElementById("popupFact").textContent = fact || "";

  popup.classList.add("show");
}

/* ================= CLOSE POPUP BUTTON ================= */

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("staffPopup");
  const closeBtn = document.getElementById("closePopup");

  if (closeBtn && popup) {
    closeBtn.addEventListener("click", () => {
      popup.classList.remove("show");
    });
  }

  /* CLOSE WHEN CLICKING OUTSIDE CARD */
  if (popup) {
    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.classList.remove("show");
      }
    });
  }
});
function filterGallery(category, event){

  const items = document.querySelectorAll(".gallery-item");
  const buttons = document.querySelectorAll(".gallery-filters button");

  buttons.forEach(btn => btn.classList.remove("active"));
  if(event) event.target.classList.add("active");

  items.forEach(item => {

    if(category === "all" || item.classList.contains(category)){
      item.style.display = "block";
      item.classList.add("show");
    } 
    else{
      item.style.display = "none";
      item.classList.remove("show");
    }

  });
}

/* SHOW ITEMS ON LOAD */
window.addEventListener("load", () => {
  document.querySelectorAll(".gallery-item").forEach(item => {
    item.classList.add("show");
  });
});

function openLightbox(img){
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;
}

function closeLightbox(){
  document.getElementById("lightbox").style.display = "none";
}

function filterGallery(category, event){

  const items = document.querySelectorAll(".gallery-item");
  const buttons = document.querySelectorAll(".gallery-filters button");

  buttons.forEach(btn => btn.classList.remove("active"));
  if(event) event.target.classList.add("active");

  items.forEach(item => {

    if(category === "all" || item.classList.contains(category)){
      item.style.display = "block";
      setTimeout(() => item.classList.add("show"), 50);
    } else {
      item.classList.remove("show");
      item.style.display = "none";
    }

  });
}

function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  lightbox.style.display = "flex";
  lightboxImg.src = img.src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

/* FILTER GALLERY */
function filterGallery(category, event) {
  const items = document.querySelectorAll(".gallery-item");
  const buttons = document.querySelectorAll(".gallery-filters button");

  buttons.forEach(btn => btn.classList.remove("active"));
  if (event) event.target.classList.add("active");

  items.forEach(item => {
    if (category === "all" || item.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

/* SHOW ALL ON LOAD */
window.addEventListener("load", () => {
  document.querySelectorAll(".gallery-item").forEach(item => {
    item.style.display = "block";
  });
});

// OPEN LIGHTBOX
function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  if (!lightbox || !lightboxImg) {
    console.log("Lightbox not found");
    return;
  }

  lightbox.style.display = "flex";
  lightboxImg.src = img.src;
}

// CLOSE LIGHTBOX
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function showStaffGroup(groupId, clickedButton) {
  const groups = document.querySelectorAll(".staff-group-parallax");
  const buttons = document.querySelectorAll(".staff-tab");

  groups.forEach(group => {
    group.classList.remove("active-staff-group");
  });

  buttons.forEach(button => {
    button.classList.remove("active");
  });

  document.getElementById(groupId).classList.add("active-staff-group");
  clickedButton.classList.add("active");
}

function showStaffGroup(groupId, clickedButton) {
  const targetGroup = document.getElementById(groupId);

  if (!targetGroup) {
    console.error("Staff group not found:", groupId);
    return;
  }

  document.querySelectorAll(".staff-group-parallax").forEach(group => {
    group.classList.remove("active-staff-group");
  });

  document.querySelectorAll(".staff-tab").forEach(button => {
    button.classList.remove("active");
  });

  targetGroup.classList.add("active-staff-group");
  clickedButton.classList.add("active");
}

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function (e) {
  e.stopPropagation();
  navLinks.classList.toggle("active");
});

/* Close menu when clicking anywhere outside */
document.addEventListener("click", function (e) {
  if (
    navLinks.classList.contains("active") &&
    !navLinks.contains(e.target) &&
    !menuToggle.contains(e.target)
  ) {
    navLinks.classList.remove("active");
  }
});

/* Close menu when a nav link is clicked */
document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});