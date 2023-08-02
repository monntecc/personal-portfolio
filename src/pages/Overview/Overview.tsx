import React from "react";
import OverviewImage from "../../assets/img/overview.jpg";

import "./Overview.sass";

export const Overview = () => {
  return (
    <div className="container">
      <section id="overview">
        <div className="overview">
          <div className="overview__title">
            <h2>Overview</h2>
          </div>
          <div className="overview__desc">
            <span>
              My name is Vladyslav Potapenko, I am a full-stack software developer from Ukraine.
               Currently I am living in Gdansk, Poland. I am a hard-working, responsible and
               I have leadership skills and am committed to using strong
              developmental skills with an emphasis on collaboration,
              communication and passion.
            </span>
          </div>
          <div className="overview__education">
            <h2>Education</h2>
            <div className="education__element">
              <div className="circle">
                <div className="circle-out"></div>
              </div>
              <span>2017-2019 SP2 Gdansk</span>
            </div>
            <div className="education__element">
              <div className="circle">
                <div className="circle-out"></div>
              </div>
              <span>2019-2021 SP6 Gdansk</span>
            </div>
            <div className="education__element">
              <div className="circle">
                <div className="circle-out"></div>
              </div>
              <span>2021-NOW TEB Edukacja Gdansk</span>
            </div>
          </div>
          <div className="overview__work">
            <h2>Work</h2>
            <div className="work__element">
              <div className="circle">
                <div className="circle-out"></div>
              </div>
              <span>August 2022 - NOW <br /> Full-stack Software Engineer at NSG 4L</span>
            </div>
          </div>
        </div>
        <div className="overview__image">
          <img src={OverviewImage} alt="overview" height={440} />
        </div>
      </section>
    </div>
  );
};
