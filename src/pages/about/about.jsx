import React from "react";
import "./about.css";
import { Icon } from "@iconify/react";

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="wrapper">
        <div className="left_about">
          <span className="span1">Hello, my name is</span>
          <span className="span2">Aaryan Patel</span>
          <p>
            I am a full stack developer and passionate about programming. My
            programming journey started at the age of 17 and learnt many
            languages such as HTML, CSS, JavaScript, Python. I am interested in
            web development therefore I also learnt JavaScript frameworks like
            ReactJs, NextJs. Web design is also attract me so currently I am
            learning web design and ux/ui design.
          </p>
          <div className="skills">
            <span>Skills</span>
            <div className="image-lang">
              <Icon icon="vscode-icons:file-type-html" className="lang-icons" />
              <Icon icon="vscode-icons:file-type-css" className="lang-icons" />
              <Icon
                icon="vscode-icons:file-type-js-official"
                className="lang-icons"
              />
              <Icon
                icon="vscode-icons:file-type-python"
                className="lang-icons"
              />
              <Icon
                icon="vscode-icons:file-type-reactjs"
                className="lang-icons"
              />
              <Icon icon="logos:nextjs-icon" className="lang-icons" />
            </div>
          </div>
        </div>
        <div className="right_about">
          <div className="outline"></div>
          <img src="/myimage.jpg" alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default About;
