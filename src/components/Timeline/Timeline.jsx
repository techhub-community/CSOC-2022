import "./Timeline.css";
import { GiIndiaGate, GiIndianPalace, GiArcher, GiFarmTractor, GiLion, GiHockey, GiLotus } from "react-icons/gi";
import { AiFillFlag } from "react-icons/ai"

function TimeLine() {
  return (

    <div>
      <div class="wrap">
        <div class="center-line">
          <a href="#" class="scroll-icon"><i class="fas fa-caret-up"></i></a>
        </div>
        <div class="row row-1">
          <section>
            <i class="icon fas "><GiIndiaGate /></i>
            <div class="details">
              <span class="title">Registration Starts</span>
              <span>12th August 2022</span>
            </div>
          </section>
        </div>
        <div class="row row-2">
          <section>
            <i class="icon fas"><GiIndianPalace /></i>
            <div class="details">
              <span class="title">Registration Ends</span>
              <span>14th August 2022</span>
            </div>
          </section>
        </div>
        <div class="row row-1">
          <section>
            <i class="icon fas fa"><GiArcher /></i>
            <div class="details">
              <span class="title">Opening Ceremony</span>
              <span>12th August 2022</span>
            </div>
            <p className="timeline_text" style={{ fontSize: "14px" }}>Hackathon opening ceremony will start from 6:00 PM onwards.</p>

          </section>
        </div>
        <div class="row row-2">
          <section>
            <i class="icon fas "><GiFarmTractor /></i>
            <div class="details">
              <span class="title">Hackathon Starts</span>
              <span>12th August 2022</span>
            </div>
            <p className="timeline_text" style={{ fontSize: "14px" }}>Hackathon coding period will start from 8:00 PM onwards.</p>

          </section>
        </div>
        <div class="row row-1">
          <section>
            <i class="icon fas"><GiLotus /></i>
            <div class="details">
              <span class="title">Project Submission</span>
              <span>15th August 2022</span>
            </div>
            <p className="timeline_text" style={{ fontSize: "14px" }}>Participants will have to submit their projects by 10 AM, 15th August 2022</p>
          </section>
        </div>
        <div class="row row-2">
          <section>
            <i class="icon fas "><GiLion /></i>
            <div class="details">
              <span class="title">Round 1 Result Announcement</span>
              <span>15th August 2022</span>
            </div>
            <p className="timeline_text" style={{ fontSize: "14px" }}>The teams qualified for next round will be announced by 8:00 pm, 15th August 2022</p>

          </section>
        </div>
        <div class="row row-1">
          <section>
            <i class="icon fas" ><GiHockey /></i>
            <div class="details">
              <span class="title">Jury Round</span>
              <span>16th August 2022</span>
            </div>
            <p className="timeline_text" style={{ fontSize: "14px" }}>The qualified teams will have a jury round in offline mode</p>

          </section>
        </div>
        <div class="row row-2">
          <section>
            <i class="icon fas fa"><AiFillFlag /></i>
            <div class="details">
              <span class="title">Closing Ceremony</span>
              <span>16th August 2022</span>
            </div>
            <p className="timeline_text" style={{ fontSize: "14px" }}>The program will be concluded and the results will be announced.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TimeLine;