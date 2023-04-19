import React, { useEffect, useState } from "react";
import Tile from "./Tile";

function Blocks() {
  const [tiles, setTiles] = useState([]);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    console.log(animate);
    let newTiles = [];
    for (let i = 0; i < 8 * 8; i++) {
      newTiles.push(null);
    }
    setTiles(newTiles);
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <div className="grid grid-cols-8 gap-1 flex-wrap">
        {tiles.map((tile) => (
          <Tile animate={animate} />
        ))}
      </div>
      <button
        onClick={() => setAnimate(!animate)}
        className="p-2 w-fit m-auto bg-[#1b4332ff] bg-none my-4 text-xs"
      >
        Pause
      </button>
    </div>
  );
}

export default Blocks;
