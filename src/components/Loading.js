import React from "react";
import animation from "../assets/animation.svg";
import "./animation.css";

const Loading = () => {
  return (
    <div>
      <div className="container-item">
        <div className="animation">
          <img src={animation} width="300" alt="randomealz" />
        </div>

        <div className="loading">
          <div className="loading__letter">R</div>
          <div className="loading__letter">a</div>
          <div className="loading__letter">n</div>
          <div className="loading__letter">d</div>
          <div className="loading__letter">o</div>
          <div className="loading__letter">m</div>
          <div className="loading__letter">e</div>
          <div className="loading__letter">a</div>
          <div className="loading__letter">l</div>
          <div className="loading__letter">z</div>
          <div className="loading__letter">e</div>
          <div className="loading__letter">r</div>
        </div>
      </div>
    </div>
  );
};

export { Loading };
