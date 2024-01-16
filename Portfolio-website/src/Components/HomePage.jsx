import React from "react";
import "./HomePage.css";
import avatar from "./Assets/JoeWhitworth-Avatar.png";

const HomePage = () => {
  return (
    <div className="homePageContainer">
      <div className="homePageText">
        <h1 className="header">JOE WHITWORTH</h1>
        <h2 className="underHeader">
          SOFTWARE ENGINEER, FULL STACK DEVELOPER.
        </h2>
        <img className="avatarImg" src={avatar} alt="Joe Whitworth Avatar" />
        <button className="scroll-down-button" onClick={scrollDown}>
          Scroll Down
        </button>
      </div>
    </div>
  );
};

function scrollDown() {
  // You can implement your scrolling logic here
  // For example, you can use the scrollTo or animate methods
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
}

export default HomePage;
