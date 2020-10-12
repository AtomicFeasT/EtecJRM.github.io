    // function to set a given theme/color-scheme
  function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
  }
  
  // function to toggle between light and dark theme
  function toggleTheme() {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-light");
    } else if(localStorage.getItem("theme") === "theme-contrast") {
      setTheme("theme-dark");
    } else {
      setTheme("theme-contrast")
    }
  }
  
  // Immediately invoked function to set the theme on initial load
  (function () {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-dark");
    } else if (localStorage.getItem("theme") === "theme-light"){
      setTheme("theme-light");
    } else {
      setTheme("theme-contrast");
    }
  })(); 