// Function to get the theme from localStorage
function getThemeFromStorage() {
    return localStorage.getItem('theme') || 'light'; // Default to light mode if no preference is stored
}

// Function to apply the theme to the body
function applyTheme(theme) {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(`${theme}-mode`);
    document.getElementById('toggleThemeBtn').textContent = theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';
}

// Function to toggle the theme and store it in localStorage
function toggleTheme() {
    const currentTheme = getThemeFromStorage();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme); // Store the new theme preference
    applyTheme(newTheme);
}

// Initialize the page with the stored theme
document.addEventListener('DOMContentLoaded', () => {
    const storedTheme = getThemeFromStorage();
    applyTheme(storedTheme);

    // Set up event listener for the button to toggle themes
    document.getElementById('toggleThemeBtn').addEventListener('click', toggleTheme);
});
