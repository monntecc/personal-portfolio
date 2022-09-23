import React from "react";

import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import LineBgImage from '../../assets/img/line-bg.png';
import SmallImage from '../../assets/img/small-image.png';

import "./Contact.sass";

export const Contact = () => {
  return (
    <div className="container">
      <div className="contact">
        <div className="contact__information">
          <div className="contact__title">Contact</div>
          <div className="contact__desc">
            You can contact me via the two contacts below.
            Also you can subscribe to newsletter
          </div>
          <div className="contact-container">
            <div className="contact__item">
              <div className="icon">
                <PhoneInTalkOutlinedIcon />
              </div>
              <div className="information">
                <div className="header">Phone</div>
                <div className="content">+48 729 368 168</div>
              </div>
            </div>
            <div className="contact__item">
              <div className="icon">
                <EmailOutlinedIcon />
              </div>
              <div className="information">
                <div className="header">Email</div>
                <div className="content">
                  <a href="mailto:contact@nylestroke.me">
                    contact@nylestroke.me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact__preview">
          <img src={LineBgImage} alt="overview" className="line-bg"/>
          <div className="relative">
            <div className="preview__content">
              <span>"I would love to get a message from you, thx for watching my website"</span>
            </div>
            <div className="preview__image">
              <img src={SmallImage} alt="small-image" />
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
