fetch("../../newsletter.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("newsletter-sec").innerHTML = data));

fetch("../../nav.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("nav").innerHTML = data));
fetch("../../footer.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("footer").innerHTML = data));