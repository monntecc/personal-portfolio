import React from "react";
import LoginImage from "../../assets/img/login.png";
import ArrowForward from "@mui/icons-material/ArrowForward";

import "./Main.sass";
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <main>
      <div className="hero">
        <div className="hero__title">
          <h2>Hi, they call me</h2>
          <span>Vladyslav Potapenko!</span>
        </div>
        <div className="hero__overview">
          I am a full-stack software developer, gamer, football and basketball enthusiast, and
          student at TEB Edukacja technical school in Gdansk, Poland.
        </div>
        <Link to="/overview" className="hero__link">
          <span>Go To Overview</span>
          <div className="icon">
            <ArrowForward />
          </div>
        </Link>
        <div className="hero__introduction">
          <div className="introduction__block">
            <h2>PROJECTS</h2>
            <span>9+</span>
          </div>
          <div className="introduction__block">
            <h2>EXPERIENCE</h2>
            <span>above 1 year</span>
          </div>
          <div className="introduction__block nationality">
            <h2>NATIONALITY</h2>
            <span>
              <div>Ukrainian</div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="14">
                  <rect width="18" height="7" fill="#005BBB" />
                  <rect width="18" height="7" y="7" fill="#FFD500" />
                </svg>
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="hero__image">
        <img src={LoginImage} alt="login" draggable={false} />
      </div>
    </main>
  );
};
