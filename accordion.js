document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".accordion-button");

  buttons.forEach(button => {
    button.addEventListener("click", function() {
      // Schließt alle anderen Abschnitte
      buttons.forEach(btn => {
        if (btn !== button) {
          btn.nextElementSibling.style.display = "none";
        }
      });
      
      // Schaltet den aktuellen Abschnitt um
      const content = this.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });
});
