document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    const firstNameError = document.getElementById("first-name-error-message");
    const lastNameError = document.getElementById("last-name-error-message");
    const emailError = document.getElementById("email-error-message");
    const phoneError = document.getElementById("phone-error-message");
    const subjectError = document.getElementById("subject-error-message");
    const messageError = document.getElementById("message-error-message");
    firstNameError.innerHTML = "";
    lastNameError.innerHTML = "";
    emailError.innerHTML = "";
    phoneError.innerHTML = "";
    subjectError.innerHTML = "";
    messageError.innerHTML = "";
    if (!firstName) {
      firstNameError.innerHTML = "*First Name is required.*";
    }
    if (!lastName) {
      lastNameError.innerHTML = "*Last Name is required.*";
    }
    if (!email) {
      emailError.innerHTML = "*Email is required.*";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      emailError.innerHTML = "*Email format is invalid.*";
    }
    if (!phone) {
      phoneError.innerHTML = "*Phone is required.*";
    } else if (!/^\d{10,15}$/.test(phone)) {
      phoneError.innerHTML = "*Phone must be between 10-15 digits.*";
    }
    if (!subject) {
      subjectError.innerHTML = "*Subject is required.*";
    }
    if (!message) {
      messageError.innerHTML = "*Message is required.*";
    } else {
      alert("Form submitted successfully!");
    }
  });

fetch("../../newsletter.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("newsletter-sec").innerHTML = data));

fetch("../../nav.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("nav").innerHTML = data));
fetch("../../footer.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("footer").innerHTML = data));