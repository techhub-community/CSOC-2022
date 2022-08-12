import { Myinfo } from "../Top-division-components/Top-division-components.jsx";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./about.css";
import { Logo, LogoSectionAbout } from "../logo-section/logoSection.jsx";
import { PrizeHeading } from "../prize tracks/prizes.jsx";
import { Accordion } from "../FAQ/faq.jsx";
import Footer from "../Footer/footer.jsx";
import { Member } from "../team/team.jsx";
import ThemeType from "../Themes/theme.jsx";
import TimeLine from "../Timeline/Timeline.jsx";
import RegistrationForm from "../Form/RegistrationForm";

import {
  TOP_SECTION,
  TeamInfo,
  frequentlyAskedQuestions,
} from "../../Module/General";


function TeamMembers(props) {
  return (
    <Row className="members">
      {props.map((s, k) => (
        <Col key={k} className="" sm={12} lg={4} md={4}>
          <Member info={s} />
        </Col>
      ))}
    </Row>
  );
}

function FrequentlyAsked(props) {
  return (
    <Row className="sf">
      {props.map((s, k) => (
        <Col key={k} className="" sm={12} lg={6} md={6}>
          <Accordion panels={s} />
        </Col>
      ))}
    </Row>
  );
}

export default function HomePage(props) {

  window.onscroll = () => {
    toggleTopButton();
    console.log(document.body.scrollHeight);
    console.log(document.body.scrollTop);
    console.log("Diff", document.body.scrollHeight - document.body.scrollTop);
  }

  const scrollToTop = (event) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function toggleTopButton() {
    if ((document.body.scrollHeight - document.body.scrollTop) < 800) {
      document.getElementById('back-to-up').style.display = 'none';
    }
    else if (document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20) {
      document.getElementById('back-to-up').style.display = 'block';
    } else {
      document.getElementById('back-to-up').style.display = 'none';
    }
  }



  return (
    <div id="top" className="Whole_div" >
      <div className="color_sectiom">
        <Container fluid>
          <Row className="Row info">
            <Col className="info-div" sm={12} lg={7} md={8}>
              <Myinfo />
            </Col>
            <Col className="d-image" sm={12} lg={5} md={4}>
              <img alt="img" src={TOP_SECTION.IMG_SRC} />
              <br />
            </Col>
          </Row>

        </Container>
      </div>
      <Container fluid>
        {/* Logo section  */}
        <Row className=" logoSection" id="about">
          <Col className="info-div" sm={12} lg={8} md={8}>
            <LogoSectionAbout />
          </Col>
          <Col className="info-div" sm={12} lg={4} md={4}>
            <Logo />
          </Col>
        </Row>

        {/*Theme Section*/}
        <Row className="prizesection non-coding" id="themes">
          <br />
          <ThemeType />
          <br />
        </Row>

        {/*TimeLine Section*/}
        <Row className="timeline" id="timeline">
          <h1 className="heading">Timeline</h1>
          <TimeLine />
        </Row>

        <Row className="prizesection" id="prizes">
          <PrizeHeading type="Prizes" />
        </Row>
        <div class="row1-container">

          <div class="box red">
            <h2><b>Top Two Teams</b></h2>
            <h4><b>Prize</b>: Swags & Accessories <br /><br /></h4>
          </div>

          <div class="box box-down cyan">
            <h2><b>Best Idea</b></h2>
            <h4><b>Prize</b>: Swags & Certificate <br /><br /></h4>
          </div>

          <div class="box box-down blue">
            <h2><b>Best Implementation</b></h2>
            <h4><b>Prize</b>: Swags & Certificate <br /><br /></h4>
          </div>
          <br />
          <br />
        </div>
        <br />
        <br />
        <h1 id="teams">Event Mentors</h1>
        {TeamInfo.map(TeamMembers)}
        {/* ********Team ending here ***** */}

        {/* ********Team ending here ***** */}
        <br />
        <br />
        <h1 id="faqs">FAQs</h1>
        <br />
        <br />
        {/* ********Frequently asked Questions here ***** */}
        <div className="Myfaqs">
          {frequentlyAskedQuestions.map(FrequentlyAsked)}
          {/* ********Frequently asked Questions ending here ***** */}
        </div>
        <br />
      </Container>
      <br />

      <Footer />
      <div class="backtotop" id="back-to-up"><a onClick={scrollToTop}><p><i class="fa-solid fa-arrow-up"></i></p></a></div>
    </div >
  );

}
