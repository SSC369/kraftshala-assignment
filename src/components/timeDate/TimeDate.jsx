import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import "./style.scss";

const TimeDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    // Cleanup timer on component unmount
    return () => clearInterval(timerID);
  }, []);

  const tick = () => {
    setDate(new Date());
  };

  return (
    <div className="time-container">
      <h1> {date.toLocaleTimeString()}</h1>
      <p>{dayjs(date.toLocaleDateString()).format("MMM D, YYYY")}</p>
    </div>
  );
};

export default TimeDate;
