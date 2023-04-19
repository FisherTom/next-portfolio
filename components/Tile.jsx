import React, { useEffect, useState } from "react";

function Tile({ animate }) {
  const [rounds, setRounds] = useState([]);
  const [cols, setCols] = useState([
    "#d8f3dcff",
    "#b7e4c7ff",
    "#95d5b2ff",
    "#74c69dff",
    "#52b788ff",
    "#40916cff",
    "#2d6a4fff",
    "#1b4332ff",
    " #081c15ff",
  ]);

  useEffect(() => {
    console.log(animate);
    if (animate) {
      const interval = setInterval(() => {
        changeRounds();
      }, Math.random() * 5000 + 3000); // Random interval between 3 and 8 seconds

      return () => clearInterval(interval);
    }
  }, [animate]);

  const changeRounds = () => {
    setRounds([
      Math.random() > 0.5 ? "0" : "50%",
      Math.random() > 0.5 ? "0" : "50%",
      Math.random() > 0.5 ? "0" : "50%",
      Math.random() > 0.5 ? "0" : "50%",
    ]);
  };

  return (
    <div
      onMouseOver={changeRounds}
      style={{
        borderRadius: `${rounds.join(" ")}`,
        background: `${cols[Math.floor(Math.random() * 9)]}`,
      }}
      className="w-[8vw] h-[8vw] max-w-[70px] max-h-[70px] transition-all duration-1000 "
    ></div>
  );
}

export default Tile;
