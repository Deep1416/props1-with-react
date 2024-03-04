import React from "react";

function ColorCard({bg , name}) {

  return (
    <div className="w-40 h-40  shadow-xl">
      <div className="h-28 w-full "  style={{ backgroundColor: `${bg}` }}></div>
      <div className="w-full h-[48px] m-1 flex flex-col items-center ">
        <p className="text-base"><b>{bg}</b></p>
        <p className="text-[12px] font-medium" style ={{color:`${bg}`}}>{name}</p>
      </div>
    </div>
  );
}

export default ColorCard;
