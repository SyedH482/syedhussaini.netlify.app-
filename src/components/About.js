import React from "react";
import Seedimg from "../images/me.jpeg";
import './About.scss'
import Backgroundimg from "../images/grey.jpg"

function About() {
  return (
    <div className="aboutme">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <body>
            <h1 class="header">About Me Page</h1>
            <img id="Syed" src={Seedimg} alt="Syed"/>
            <img id="backgroundAbt" src={Backgroundimg} alt="Grey Background"/>
            <p>- I'm a 24 who's passionate about the intersectionality of coding and accessibility and am currently doing research in it! (Feel free to ask me)</p>
            <p>- I also have 3 younger brothers and also live with my grandma and parents.</p>
            <p>- Also currently own 3 cats: Zara, Lily, and Troy. They're the most adorable cats in the world.</p>
            <p>- Fun fact: I can lift almost deadlift 3 times my bodyweight :D</p>
            </body>
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;