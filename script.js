// Once the DOM is ready:
document.addEventListener("DOMContentLoaded", () => {
  // 1. Dark Mode Toggle
  const themeToggle = document.getElementById("theme-toggle");
  // Restore saved theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
  });

  // 2. Load Markdown content from content.md and convert to HTML using Marked.js
  fetch("content.md")
    .then(response => response.text())
    .then(markdown => {
      // Convert markdown to HTML
      const html = marked.parse(markdown);
      // Insert into the page
      document.getElementById("resume-content").innerHTML = html;
    })
    .catch(error => console.error("Error loading markdown:", error));
});