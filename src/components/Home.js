import React from "react";
import bgvideo from '../images/bg.mp4';
import './Home.scss';

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <body>
          <video loop autoPlay muted id="bg-video">
        <source src={bgvideo} type="video/mp4" />
        </video>
        <h2>Welcome to my website!</h2>
          <ul>Hi my name is Syed Hussaini, I'm a 24 from Waukegan, Illinois. Welcome to my website!</ul>
      </body>
          </div>
          <div class="col-lg-5">

          </div>
        </div>
      </div>
    </div>
  );
}


export default Home;