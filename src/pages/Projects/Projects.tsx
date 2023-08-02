import React, { useState } from "react";

import Blank from "../../assets/img/blank.jpg";

import "./Projects.sass";

export const Projects = () => {
  const [category, setCategory] = useState<number>(0);

  const selectCategory = async (categoryId: number) => {
    const software: number = 1;
    const web: number = 2;
    const backend: number = 3;

    if (categoryId === software) await setCategory(software);
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
                Software
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
            href="https://github.com/nylestroke/mandel-to-image"
            target="_blank"
            className="projects-element"
            data-selected={category === 1 || category === 0}
          >
            <img src={Blank} alt="project" />
            <div className="element__info">
              <h2>Mendel to Image</h2>
              <span>Software</span>
            </div>
          </a>
          <a
            href="https://github.com/nylestroke/quick-replace"
            target="_blank"
            className="projects-element"
            data-selected={category === 1 || category === 0}
          >
            <img src={Blank} alt="project" />
            <div className="element__info">
              <h2>Regex Quick Replace</h2>
              <span>Software</span>
            </div>
          </a>
          <a
            href="https://github.com/nylestroke/sql_convert"
            target="_blank"
            className="projects-element"
            data-selected={category === 1 || category === 0}
          >
            <img src={Blank} alt="project" />
            <div className="element__info">
              <h2>SQL Convert</h2>
              <span>Software</span>
            </div>
          </a>
          <a
            href="https://github.com/nylestroke/rest-vladiola"
            target="_blank"
            className="projects-element"
            data-selected={category === 3 || category === 0}
          >
            <img src={Blank} alt="project" />
            <div className="element__info">
              <h2>Vladiola REST API</h2>
              <span>Backend Development</span>
            </div>
          </a>
          <a
            href="https://github.com/nylestroke/web-vladiola"
            target="_blank"
            className="projects-element"
            data-selected={category === 2 || category === 0}
          >
            <img src={Blank} alt="project" />
            <div className="element__info">
              <h2>Vladiola Website</h2>
              <span>Web Development</span>
            </div>
          </a>
          <a
            href="https://github.com/nylestroke/nylemod-example"
            target="_blank"
            className="projects-element"
            data-selected={category === 1 || category === 0}
          >
            <img src={Blank} alt="project" />
            <div className="element__info">
              <h2>Nylemod (Fabric)</h2>
              <span>Software</span>
            </div>
          </a>
          <a
            href="https://github.com/nylestroke/auth-provider"
            target="_blank"
            className="projects-element"
            data-selected={category === 3 || category === 0}
          >
            <img src={Blank} alt="project" />
            <div className="element__info">
              <h2>Auth Provider</h2>
              <span>Backend Development</span>
            </div>
          </a>
          <a
            href="https://github.com/nylestroke/sontac"
            target="_blank"
            className="projects-element"
            data-selected={category === 2 || category === 0}
          >
            <img src={Blank} alt="project" />
            <div className="element__info">
              <h2>Sontac Movie</h2>
              <span>Web Development</span>
            </div>
          </a>
          <a
            href="https://github.com/nylestroke/studios.enqluence.com"
            target="_blank"
            className="projects-element"
            data-selected={category === 2 || category === 0}
          >
            <img src={Blank} alt="project" />
            <div className="element__info">
              <h2>Enqluence Studios Website</h2>
              <span>Web Development</span>
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
