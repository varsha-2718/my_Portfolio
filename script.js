// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  
  // Contact form
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent! Thank you.");
    this.reset();
  });
  
  // Dark Mode Toggle with persistence
  const toggle = document.getElementById("theme-toggle");
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggle.checked = true;
  }
  
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  });