import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="home-container" id="/">
      <div className="middile_box">
        <span className="name">
          Hi!
          <br />I am Aaryan Patel
        </span>
        <span className="tagline">
          I am a{" "}
          <span className="change_text">
            <Typewriter
              className="typewriter"
              options={{
                strings: [
                  "Full stack developer.",
                  "Freelancer.",
                  "Web developer.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </span>
        <a href="mailto:aaryanpatel683@gmail.com">
          <button>Let's Connect</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
