import "./top-division-c.css";
import MytypedComponent from "../typing-effect/typing.js";

import { TOP_SECTION } from "../../Module/General";

function Btn(props) {
  return (
    <div
      className="apply-button"
      data-hackathon-slug="DUHacks"
      data-button-theme="light"
      style={{ height: "44px", width: "312px" }}
    ></div>
  );
}

function About() {
  return (
    <div className="AboutMe">
      <h2>{TOP_SECTION.TITLE}</h2>
      <MytypedComponent />
    </div>
  );
}

function Myinfo() {
  return (
    <div className="Myinfo">
      <About />
      <br />
      <p className="shortjoin"> {TOP_SECTION.SHORT_DESCRIPTION}</p>
      <br /><br />
      <a href="#" target="_blank"><button>Register Here</button></a>
    </div>


  );
}

export { Btn, Myinfo };
