import React, { useState } from 'react';

function ThemeToggle() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    // Implement theme toggle logic here
    document.body.classList.toggle('dark-theme'); // Example: Toggle dark theme class on body
  };

  return (
    <div className="form-check form-switch" style={{fontSize: "18px", marginTop: "6px", marginRight: "20px"}}>
      <input
        className="form-check-input"
        type="checkbox"
        id="themeToggle"
        checked={isDarkTheme}
        onChange={toggleTheme}
      />
      {/* <label className="form-check-label" htmlFor="themeToggle">Dark Mode</label> */}
    </div>
  );
}

export default ThemeToggle;
