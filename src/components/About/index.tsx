import React from "react";
import { SearchIcon, ArrowLeft } from "../Icons";
import Logo from "../Logo";

const About = () => {
  return (
    <div className="App-header">
      <div className="container text-center">
        <div className="display-3">
          {/* <ArrowLeft /> */}
          <span>About snippets.io</span>
        </div>
        <div className="text-center">
          snippets.io helps devloper to work with ease.
          <p>
            snippets.io is an opensource community project, to share coding
            knowledge with the tech world. It helps you both learn and teach the
            world. In the modern fast growing technical world, development needs
            to to fast and furious without compromising the quality of the code.
          </p>
          <p>
            If you would like to extend your hand in this project, we are very
            happy to join our hand with you. Please click contribute to raise an
            issue in case of any question also checkout other issues to answer
            if you know.
          </p>
          <p>Let's possibly post code with the utmost quality.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
