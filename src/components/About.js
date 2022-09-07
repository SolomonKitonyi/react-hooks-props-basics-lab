import React from "react";
import Links from "./Links";

function About(props) {
  return (
    <div id="about">
      <h1></h1>
      {props.bio?<p>{props.bio}</p>:null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin}/>
      {/* add your <Links /> component here */}
    </div>
  );
}

export default About;
