// Variable Declarations
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
const themeToggleBtn = document.getElementById('theme-toggle');
const copyrightParagraph = document.getElementById('copyright');

function SetInitialTheme() {
  const theme = localStorage.getItem('color-theme');
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

function ToggleTheme() {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('color-theme', 'light');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('color-theme', 'dark');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  SetInitialTheme();
  themeToggleBtn.addEventListener('click', ToggleTheme);

  copyrightParagraph.innerHTML = `Copyrights reserved &copy ${new Date().getFullYear()}`;
});
