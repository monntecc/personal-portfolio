import React, { useState } from "react";

import ProjectImage from "../../assets/img/project.png";
import Project2Image from "../../assets/img/project2.png";
import Project3Image from "../../assets/img/project3.png";
import Project4Image from "../../assets/img/project4.png";
import Project5Image from "../../assets/img/project5.png";
import Project6Image from "../../assets/img/project6.png";

import "./Projects.sass";

export const Projects = () => {
  const [category, setCategory] = useState<number>(0);

  const selectCategory = async (categoryId: number) => {
    const ui: number = 1;
    const web: number = 2;
    const backend: number = 3;

    if (categoryId === ui) await setCategory(ui);
    if (categoryId === web) await setCategory(web);
    if (categoryId === backend) await setCategory(backend);
  };

  return (
    <div className="container">
      <div className="projects">
        <div className="projects__information">
          <div className="projects__title">
            <h2>Projects</h2>
          </div>
          <div className="projects__desc">
            <span>On this page you will find projects that I have made.</span>
          </div>
          <div className="categories">
            <div className="category__item">
              <div className="circle">
                <div className="circle-out"></div>
              </div>
              <span
                onClick={() => selectCategory(1)}
                data-selected={category === 1}
              >
                UI Design
              </span>
            </div>
            <div className="category__item">
              <div className="circle">
                <div className="circle-out"></div>
              </div>
              <span
                onClick={() => selectCategory(2)}
                data-selected={category === 2}
              >
                Web Development
              </span>
            </div>
            <div className="category__item">
              <div className="circle">
                <div className="circle-out"></div>
              </div>
              <span
                onClick={() => selectCategory(3)}
                data-selected={category === 3}
              >
                Backend Development
              </span>
            </div>
            <div className="category__item reset-btn">
              <span onClick={() => setCategory(0)}>Reset to default</span>
            </div>
          </div>
        </div>
        <div className="projects-container">
          <a
            href="https://github.com/nylestroke/mat-sample-login-page"
            target="_blank"
            className="projects-element"
            data-selected={category === 1 || category === 0}
          >
            <img src={ProjectImage} alt="project" />
            <div className="element__info">
              <h2>MUI Login Page UI</h2>
              <span>UI Design</span>
            </div>
          </a>
          <a
            href="https://github.com/nylestroke/sontac"
            target="_blank"
            className="projects-element"
            data-selected={category === 2 || category === 0}
          >
            <img src={Project2Image} alt="project" />
            <div className="element__info">
              <h2>Sontac Movies App</h2>
              <span>Web Development</span>
            </div>
          </a>
          <a
            href="https://github.com/nylestroke/shopping-list-php"
            target="_blank"
            className="projects-element"
            data-selected={category === 2 || category === 0}
          >
            <img src={Project5Image} alt="project" />
            <div className="element__info">
              <h2>Shopping List UI</h2>
              <span>Web Development</span>
            </div>
          </a>
          <a
            href="https://github.com/nylestroke/rayabot"
            target="_blank"
            className="projects-element"
            data-selected={category === 3 || category === 0}
          >
            <img src={Project3Image} alt="project" />
            <div className="element__info">
              <h2>Raya Discord Bot</h2>
              <span>Backend Development</span>
            </div>
          </a>
          <a
            href="https://github.com/nylestroke/enqluence-backend-alpha"
            target="_blank"
            className="projects-element"
            data-selected={category === 3 || category === 0}
          >
            <img src={Project6Image} alt="project" />
            <div className="element__info">
              <h2>Express Backend</h2>
              <span>Backend Development</span>
            </div>
          </a>
          <a
            href="https://github.com/nylestroke/enqluence-forum-alpha"
            target="_blank"
            className="projects-element"
            data-selected={category === 1 || category === 0}
          >
            <img src={Project4Image} alt="project" />
            <div className="element__info">
              <h2>React Example Forum</h2>
              <span>UI Design</span>
            </div>
          </a>
          <div
            className="projects-element skeleton"
            data-selected={category !== 0}
          >
            <div className="image"></div>
            <div className="element__info">
              <h2></h2>
              <span></span>
            </div>
          </div>
          <div
            className="projects-element skeleton"
            data-selected={category !== 0}
          >
            <div className="image"></div>
            <div className="element__info">
              <h2></h2>
              <span></span>
            </div>
          </div>
          <div
            className="projects-element skeleton"
            data-selected={category !== 0}
          >
            <div className="image"></div>
            <div className="element__info">
              <h2></h2>
              <span></span>
            </div>
          </div>
          <div
            className="projects-element skeleton"
            data-selected={category !== 0}
          >
            <div className="image"></div>
            <div className="element__info">
              <h2></h2>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
