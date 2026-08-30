
document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll(".needs-validation");
  forms.forEach(form => {
    form.addEventListener("submit", event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        const message = document.getElementById("formMessage");
        if (message) {
          message.classList.remove("d-none");
          message.textContent = "Thanks! Your message has been prepared successfully.";
        }
      }
      form.classList.add("was-validated");
    });
  });
});
