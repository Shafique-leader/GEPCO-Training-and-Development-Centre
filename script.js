// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector("#menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
// =========================
// CONTACT FORM
// =========================

const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");

    return;
  }

  alert("Thank you, " + name + "! Your message has been received.");

  contactForm.reset();
});
// =========================
// SEARCH BOX
// =========================

const searchBtn = document.querySelector("#search-btn");
const searchBox = document.querySelector("#search-box");
const closeSearch = document.querySelector("#close-search");
const searchInput = document.querySelector("#search-input");

searchBtn.addEventListener("click", () => {
  searchBox.classList.toggle("active");

  searchInput.focus();
});

closeSearch.addEventListener("click", () => {
  searchBox.classList.remove("active");

  searchInput.value = "";
});
// =========================
// WEBSITE SEARCH
// =========================

searchInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") {
    return;
  }

  const searchText = searchInput.value.toLowerCase().trim();

  const searchItems = {
    home: "#home",
    about: "#about",
    facilities: "#facilities",
    courses: "#courses",
    faculty: "#faculty",
    sop: "#sop",
    schedule: "#schedule",
    gallery: "#gallery",
    contact: "#contact",
    training: "#courses",
    library: "#facilities",
    hostel: "#facilities",
    classroom: "#facilities",
    computer: "#courses",
    technical: "#courses",
  };

  if (searchItems[searchText]) {
    document.querySelector(searchItems[searchText]).scrollIntoView({
      behavior: "smooth",
    });

    searchBox.classList.remove("active");

    searchInput.value = "";
  } else {
    alert("Sorry, section not found.");
  }
}); // =========================
// CLOSE MOBILE MENU
// =========================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});
// =========================
// ACTIVE NAVBAR LINK
// =========================

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
});
