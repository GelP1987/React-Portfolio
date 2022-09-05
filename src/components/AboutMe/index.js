import avatar from "../../assets/img/philporfolioicon.png";
import React from "react";
function AboutMe() {
  return (
    <div className="aboutMe">
      <img alt="avatar of developer" src={avatar} />
      <h2>🐳 About me: </h2> Philip Gelin is an up and coming web developer, and
      coder. Having trained under the UCF Full Stack web development bootcamp
      run by Trilogy education Services, he's proven that no matter how
      insurmountable the odds, a solution is always available if you work hard
      and use your resources.{" "}
    </div>
  );
}
export default AboutMe;
