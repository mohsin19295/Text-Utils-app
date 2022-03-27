import React from "react";
import "../App.css";

function About(props) {
  return (
    <div>
      <img className="about-img" src={props.img} alt="" />
      <h1 style={{ color: props.mode === "light" ? "#042743" : "white" }}>
        {props.discription}
      </h1>
    </div>
  );
}

export default About;
