import React, { useEffect, useState } from "react";
import "./footer.scss";
import { SOCIALS, } from "../../Module/General";



export default function Footer() {
  const [template, setTemplate] = useState(false);
  const [viewTemplate, setViewTemplate] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const listenScrollEvent = e => {
    if (window.scrollY > 2800) setTemplate(true);
    else if (window.scrollY < 2800) setTemplate(false);
  };

  return (
    <div>
      <footer>
        <div class="content">
          <div class="top">
            <div class="logo-details">
              <span class="logo_name">&nbsp;&lt;codeshack&gt;</span>
            </div>
            <div class="media-icons">
              <a target="_blank" href={SOCIALS.discord}><i class="iconlink fab fa-discord"></i></a>
              <a target="_blank" href={SOCIALS.twitter}><i class="iconlink fab fa-twitter"></i></a>
              <a target="_blank" href={SOCIALS.instagram}><i class="iconlink fab fa-instagram"></i></a>
              <a target="_blank" href={SOCIALS.linkedin}><i class="iconlink fab fa-linkedin-in"></i></a>
              <a target="_blank" href={SOCIALS.email}><i class="iconlink fa-solid fa-envelope"></i></a>
              <a target="_blank" href={SOCIALS.github}><i class="iconlink fab fa-solid fa-github"></i></a>
            </div>
          </div>

        </div>
        <div class="bottom-details">
          <div class="bottom_text">
            <center>
              <span class="copyright_text">Copyright © 2022 CodeShack</span>
            </center>
          </div>
        </div>
      </footer>

    </div>
  );
}
