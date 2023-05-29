import React from "react";
import animation from "../assets/animation.svg";
import "./animation.css";

const Construction = () => {
  return (
    <div>
      <div className="container-item">
        <div className="animation">
          <img src={animation} width="300" alt="randomealz" />
        </div>
        <h2 className="text-center m-5">
          Sorry this Page is still under construction
        </h2>
      </div>
    </div>
  );
};

export { Construction };
