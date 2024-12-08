document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-comments");

  const fields = [
    { id: "first-name", errorId: "first-name-error-message" },
    { id: "last-name", errorId: "last-name-error-message" },
    { id: "review-title", errorId: "review-error-message" },
    { id: "message", errorId: "message-error-message" },
  ];

  fields.forEach(({ id, errorId }) => {
    const inputField = document.getElementById(id);
    const errorField = document.getElementById(errorId);

    inputField.addEventListener("input", function () {
      errorField.textContent = "";
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;
    const formData = {};

    fields.forEach(({ id, errorId }) => {
      const inputField = document.getElementById(id);
      const errorField = document.getElementById(errorId);
      const value = inputField.value.trim();

      if (id === "message" && value.length < 10) {
        errorField.textContent = "Message must be at least 10 characters.";
        isValid = false;
      } else if (value === "") {
        errorField.textContent = `This field is required.`;
        isValid = false;
      } else {
        formData[id] = value; // Collect the data
      }
    });

    if (isValid) {
      alert(
        `An embbedded page at travello-next.js.vercel.app says ${JSON.stringify(
          formData
        )}`
      );
      form.reset();

      fields.forEach(({ errorId }) => {
        document.getElementById(errorId).textContent = "";
      });
    }
  });
});
