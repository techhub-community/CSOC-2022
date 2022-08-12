import "./top-division-c.css";
import MytypedComponent from "../typing-effect/typing.js";
import { Link } from "react-router-dom";

import { TOP_SECTION } from "../../Module/General";

function Btn(props) {
  return (
    <div
      className="apply-button"
      data-hackathon-slug="CSOC-2022"
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
      <Link to="/register"><button className="btnres">Resgister Here</button></Link>
    </div>


  );
}

export { Btn, Myinfo };
