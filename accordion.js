// Accordion für OBD- und AT-Befehle
document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".accordion-button");

  buttons.forEach(button => {
    button.addEventListener("click", function() {
      // Toggle visibility des nächsten Elements (accordion content)
      const content = this.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });
});
