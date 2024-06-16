import React, { useContext } from "react";
import "./style.scss";
import { ThemeContext } from "../../context/themeContext.jsx";
import { Watch } from "react-loader-spinner";

const Loader = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="loading-container">
      <Watch
        visible={true}
        height="80"
        width="80"
        radius="48"
        color="white"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
