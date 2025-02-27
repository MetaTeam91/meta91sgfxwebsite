const themes = [
    { primary: "#ff9100", secondary: "#ffcc00", bg: "#121212", text: "#ffffff", button: "#ff9100", hover: "#ffcc00" }, // Orange & Black (Default)
    { primary: "#ff0000", secondary: "#ffffff", bg: "#000000", text: "#ffffff", button: "#ff0000", hover: "#ff6666" }, // Red & White
    { primary: "#007bff", secondary: "#ffffff", bg: "#000000", text: "#ffffff", button: "#007bff", hover: "#3399ff" }, // Blue & White
    { primary: "#00ff00", secondary: "#ffffff", bg: "#121212", text: "#ffffff", button: "#00ff00", hover: "#66ff66" }, // Green & Black
    { primary: "#8000ff", secondary: "#ffffff", bg: "#121212", text: "#ffffff", button: "#8000ff", hover: "#aa66ff" }, // Purple & Black
    { primary: "#900fff", secondary: "93200ff", bg: "#848279", text: "#ffffff", button: "#909090", hover: "#aaaaaa" }, // RANDOM
];

let currentTheme = parseInt(localStorage.getItem("themeIndex")) || 0;

// Function to apply theme
function applyTheme(theme) {
    document.documentElement.style.setProperty("--primary-color", theme.primary);
    document.documentElement.style.setProperty("--secondary-color", theme.secondary);
    document.documentElement.style.setProperty("--bg-color", theme.bg);
    document.documentElement.style.setProperty("--text-color", theme.text);
    document.documentElement.style.setProperty("--button-bg", theme.button);
    document.documentElement.style.setProperty("--button-hover", theme.hover);
}

// Apply saved theme on page load
applyTheme(themes[currentTheme]);

// Change theme on button click
document.getElementById("theme-btn").addEventListener("click", () => {
    currentTheme = (currentTheme + 1) % themes.length;
    applyTheme(themes[currentTheme]);
    localStorage.setItem("themeIndex", currentTheme);
});
z