import React from "react";
import background from "../images/me.jpeg";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <body>
        <h2>Welcome to my website!</h2>
          <img id="Syed" src={background} alt="Syed"/>
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