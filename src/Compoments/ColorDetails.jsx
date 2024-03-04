import React from "react";
import Data from "./Data.json"
import ColorCard from "./ColorCard";
function ColorDetails() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-10 py-16 px-16">
      {Data.map((e,i) => {
        return <ColorCard bg = {e.color} name = {e.name} key={i} />;
      })}
    </div>
  );
}

export default ColorDetails;
