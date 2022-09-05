import React from "react";
import WeatherOrNot from "../../assets/img/WeatherorNot.png";
import NoteTaker from "../../assets/img/notetaker.png";
import BudgetTracker from "../../assets/img/budgettracker.png";
import TechBlog from "../../assets/img/techblog.png";
import IndecisiveDecision from "../../assets/img/IndecisiveDecision.png";
import Tranquilitea from "../../assets/img/tranquilitea.png";

function About() {
  return (
    <div>
      <div className="projects">
        <a>🍍 Projects</a>
      </div>

      <div className="project grid">
        WeatherOrNot!
        <img
          alt="screenshot of weather or not live webpage"
          src={WeatherOrNot}
        />
      </div>

      <div className="project grid">
        Note Taker
        <img alt="screenshot of note taker webpage" src={NoteTaker} />
      </div>

      <div className="project grid">
        Budget Tracker
        <img
          alt="screenshot of budget tracker app webpage"
          src={BudgetTracker}
        />
      </div>

      <div className="project grid">
        Tech Blog
        <img alt="screenshot of Tech Blog webpage" src={TechBlog} />
      </div>

      <div className="project grid">
        Indecisive Decision
        <img
          alt="screenshot of Indecisive Decision Webpage"
          src={IndecisiveDecision}
        />
      </div>

      <div className="project grid">
        Tranquilitea
        <img alt="screenshot of Tranquilitea Webpage" src={Tranquilitea} />
      </div>
    </div>
  );
}

export default About;
