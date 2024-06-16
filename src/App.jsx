import React, { useContext } from "react";
import { ThemeContext } from "./context/themeContext";
import Weather from "./components/Weather/Weather";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Weather />
    </div>
  );
};

export default App;
