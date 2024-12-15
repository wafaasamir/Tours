// Load navigation and footer asynchronously
fetch("../../nav.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("nav").innerHTML = data;

    // Trigger nav.js logic after nav.html content is injected
    initializeNav();
  });

fetch("../../footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });

// Define the navigation initialization logic
function initializeNav() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  console.log("Hamburger:", hamburger);
  console.log("NavLinks:", navLinks);

  if (!hamburger) {
    console.error("Hamburger element not found. Check its ID in the HTML.");
    return;
  }

  if (!navLinks) {
    console.error("NavLinks element not found. Check its ID in the HTML.");
    return;
  }

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });
}
