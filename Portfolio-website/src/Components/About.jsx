import React from "react";
import "./About.css";

const About = ({ isDarkMode }) => {
  const containerClassName = `aboutContainer ${isDarkMode ? "dark-text" : ""}`;
  return (
    <div id="about" className={containerClassName}>
      <h1 className="aboutHeader">Hi, I'm Joe. It's a pleasure to meet you!</h1>
      <h2 className="aboutParagraph">
        I took the leap into software development just six
        months ago, leaving behind a career in finance to enroll in the
        Northcoders bootcamp. This journey not only demanded
        significant preparation but also included 13 weeks of immersive learning
        and hands-on coding. During this experience, I collaborated
        with diverse and talented individuals on team
        projects, tackling coding challenges and building real-world
        applications. One of my notable achievements during this time was
        building 'Resource Rivals' in just 7 days, where I demonstrated
        proficiency in Javascript, React, CSS and Socket.IO. This experience solidified
        my passion for technology and showcased my ability to adapt quickly to
        new environments. Coming from a finance background, I bring a unique
        perspective to software development, combining analytical skills with a
        creative problem-solving mindset. My journey into tech has reinforced my
        belief that this career shift was worth every moment. I am
        excited to contribute my skills and continue my learning journey in a
        dynamic and collaborative tech environment.
      </h2>
      <h2 className="extraAboutParagraph">
        While I'm usually busy crafting epic D&D campaigns as a proud Dungeon
        Master 🐉 I'm also a devoted cat dad to three furry companions. My love
        for all things tech competes only with my cats' fondness for cozy naps.
        Let's connect and chat tech or share some quirky cat stories!
      </h2>
    </div>
  );
};

export default About;
