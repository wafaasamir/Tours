document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  console.log("Hamburger:", hamburger);
  console.log("NavLinks:", navLinks);

  if (!hamburger) {
    console.error("Hamburger element not found. Check its ID in the HTML.");
  }

  if (!navLinks) {
    console.error("NavLinks element not found. Check its ID in the HTML.");
  }

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });
  }
});
