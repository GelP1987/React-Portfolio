import React from "react";
import WeatherOrNot from "../../assets/img/WeatherorNot.png";
import NoteTaker from "../../assets/img/notetaker.png";
import Hive from "../../assets/img/hive.png";
import TechBlog from "../../assets/img/techblog.png";
import IndecisiveDecision from "../../assets/img/IndecisiveDecision.png";
import Tranquilitea from "../../assets/img/tranquilitea.png";

function About() {
  return (
    <div>
      <div className="projects">
        <h2 href="#projects">
          🍍 Projects: Click the title for the GitHub, or the image for the Live
          Webpage.
        </h2>
      </div>

      <div className="project grid">
        <a href="https://github.com/GelP1987/WeatherOrNot"> WeatherOrNot!</a>
        <a href="https://gelp1987.github.io/WeatherOrNot/">
          <img
            alt="screenshot of weather or not live webpage"
            src={WeatherOrNot}
          />
        </a>
      </div>

      <div className="project grid">
        <a href="https://github.com/GelP1987/NoteTaker"> Note Taker</a>
        <a href="https://shielded-eyrie-70121.herokuapp.com/">
          <img alt="screenshot of note taker webpage" src={NoteTaker} />
        </a>
      </div>

      <div className="project grid">
        <a href="https://afternoon-citadel-47605.herokuapp.com/">
          Hive Social Wellness
        </a>
        <a href="https://afternoon-citadel-47605.herokuapp.com/">
          <img alt="screenshot of Hive app webpage" src={Hive} />
        </a>
      </div>

      <div className="project grid">
        <a href="https://github.com/GelP1987/techblog">Tech Blog</a>
        <a href="https://peaceful-cliffs-43767.herokuapp.com/">
          <img alt="screenshot of Tech Blog webpage" src={TechBlog} />
        </a>
      </div>

      <div className="project grid">
        <a href="https://github.com/MaraDear/IndecisiveDecision">
          {" "}
          Indecisive Decision{" "}
        </a>
        <a href="https://maradear.github.io/IndecisiveDecision/">
          <img
            alt="screenshot of Indecisive Decision Webpage"
            src={IndecisiveDecision}
          />
        </a>
      </div>

      <div className="project grid">
        <a href="https://github.com/israel386/TranquiliTea">Tranquilitea</a>
        <a href="https://frozen-fjord-79958.herokuapp.com/">
          <img alt="screenshot of Tranquilitea Webpage" src={Tranquilitea} />
        </a>
      </div>
    </div>
  );
}

export default About;
