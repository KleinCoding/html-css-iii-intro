import React from "react";
import "./Body.css";

export default class Body extends React.Component {
  

  render() {
    return (
        
      <div className="Body">
          <link href="https://fonts.googleapis.com/css?family=Kaushan+Script|Montserrat:400,400i,900|Roboto+Slab&display=swap" rel="stylesheet"></link>
        <div class="hero-image">
          <div class="hero-text">
            <h1 class="welcome-text">Welcome To Our Studio!</h1>
            <h1 class="meet-text">IT'S NICE TO MEET YOU!</h1>
            <button class ="tellme-button">TELL ME MORE</button>
          </div>
        </div>
        <div className="Bodytext">This is da body</div>
      </div>
    );
  }
}
