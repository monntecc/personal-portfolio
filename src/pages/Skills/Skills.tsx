import React from "react";

import WebImage from "../../assets/img/web.png";
import TerminalImage from "../../assets/img/terminal.png";
import ArticleImage from "../../assets/img/article.png";

import "./Skills.sass";

export const Skills = () => {
  return (
    <div className="container">
      <div className="skills">
        <div className="skills__start">
          <div className="skills__title">
            <h2>Skills</h2>
          </div>
          {/* <div className='skills__desc'>
						<span>
							I have some skills, I actually have a lot of skills, but below are
							just the ones that I use most often.
						</span>
					</div> */}
        </div>
        <div className="skills__container">
          <div className="skills__element">
            <img src={TerminalImage} alt="skill" />
            <div className="skills__body">
              <div className="body__title">Usually Use Terminal</div>
              <div className="body__overview">
                I'm used to using terminals like this, because it works faster
                than using GUIs like that.
              </div>
            </div>
          </div>
          <div className="skills__element">
            <img src={WebImage} alt="skill" />
            <div className="skills__body">
              <div className="body__title">Web Development</div>
              <div className="body__overview">
                At the moment my main position is a web developer. Im coding in
                frameworks like Angular and React
              </div>
            </div>
          </div>
          <div className="skills__element">
            <img src={ArticleImage} alt="skill" />
            <div className="skills__body">
              <div className="body__title">Write Articles</div>
              <div className="body__overview">
                I usually write articles on the network itself or on my blog,
                although with this I am still not doing as well as I would like
              </div>
            </div>
          </div>
          <div className="skills__element">
            <img src={WebImage} alt="skill" />
            <div className="skills__body">
              <div className="body__title">Web Design</div>
              <div className="body__overview">
                If you need to design a website quickly and beautifully, I
                always have an idea how to design it,
              </div>
            </div>
          </div>
          <div className="skills__element">
            <img src={ArticleImage} alt="skill" />
            <div className="skills__body">
              <div className="body__title">Translate</div>
              <div className="body__overview">
                I have skills in translating websites and applications, so I can
                always help with this.
              </div>
            </div>
          </div>
          <div className="skills__element">
            <img src={TerminalImage} alt="skill" />
            <div className="skills__body">
              <div className="body__title">Backend Development</div>
              <div className="body__overview">
                At the moment, if you need to finish, fix or write a server, I
                am always ready to do it
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
