import React, { useContext } from "react";
import toast from "react-hot-toast";
import "./style.scss";
import { ThemeContext } from "../../context/themeContext.jsx";
import { MdSunny } from "react-icons/md";
import { RiMoonFill } from "react-icons/ri";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);

  const toggleTheme = () => {
    let msg;
    if (theme === "dark") msg = "Light";
    else msg = "Dark";
    toast.success(`It's ${msg} Mode`, { duration: 1000 });
    toggle(!theme);
  };

  return (
    <div className="toggle-container">
      {theme === "light" ? (
        <MdSunny color="orange" onClick={toggleTheme} />
      ) : (
        <RiMoonFill color="white" onClick={toggleTheme} />
      )}
    </div>
  );
};

export default ThemeToggle;
