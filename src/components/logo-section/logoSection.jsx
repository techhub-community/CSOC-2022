import './logoSection.css';
import mainlogo from './LOGO.png';

import { MIDDLE_SECTION } from '../../Module/General';

function LogoSectionAbout() {
  return (
    <div className="LogoSectionAbout">
      <h1>{MIDDLE_SECTION.TITLE}</h1>
      <p>{MIDDLE_SECTION.LONG_DESCRIPTION}</p>
    </div>
  );
}

function Logo() {
  var myLogo;
  if (MIDDLE_SECTION.LOGO_EFFECT) {
    myLogo = (
      <div className="logoS">
        <img alt="img" className="Logo" src={mainlogo}></img>
      </div>
    );
  }
  return myLogo;
}

export { Logo, LogoSectionAbout };
