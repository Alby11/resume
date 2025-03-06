document.addEventListener("DOMContentLoaded", function () {
  // Dark mode toggle
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
  });
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  // Load Markdown content from content.md and convert to HTML using Marked.js
  fetch("content.md")
    .then(response => response.text())
    .then(markdown => {
      document.getElementById("content").innerHTML = marked.parse(markdown);
    })
    .catch(error => console.error("Error loading markdown:", error));
});

