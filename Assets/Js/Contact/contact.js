document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    let errorMessage = "";
    if (!firstName) {
      errorMessage += "First Name is required.<br>";
    }
    if (!lastName) {
      errorMessage += "Last Name is required.<br>";
    }
    if (!email) {
      errorMessage += "Email is required.<br>";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errorMessage += "Email format is invalid.<br>";
    }
    if (!phone) {
      errorMessage += "Phone is required.<br>";
    } else if (!/^\d{10,15}$/.test(phone)) {
      errorMessage += "Phone must be between 10-15 digits.<br>";
    }
    if (!subject) {
      errorMessage += "Subject is required.<br>";
    }
    if (!message) {
      errorMessage += "Message is required.<br>";
    }
    const errorDiv = document.getElementById("errorMessage");
    if (errorMessage) {
      errorDiv.innerHTML = errorMessage;
    } else {
      errorDiv.innerHTML = "";
      alert("Form submitted successfully!");
      // Here, you can proceed with form submission or AJAX call
    }
  });
  