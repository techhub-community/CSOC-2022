import React, { useState, useEffect, useRef } from "react";
import HomePage from "../Main-page/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import hamLogo from "./ham.svg";
import logoClose from "./ham-c.svg";
import styled from "styled-components";
import "./styles.scss";
import RegistrationForm from "../Form/RegistrationForm"

const Wrapper = styled.div`
  display: block;
  width: 40%;
  margin-top: 20px;
  @media (max-width: 712px) {
    margin: 0;
    display: ${props => (props.toggle ? "none" : "static")};
    height: 160vh;
    width: 100vw;
    position: fixed;
    top: ${props => (props.toggle ? "-1000px" : "0px")};
    transition: top 2s;
    .nav-content {
      height: 50%;
      background-color: #121930;
    }
  }
`;

const NAVBAR = () => {

  const [toggle, setToggle] = useState(true);
  const [color] = useState("#354f52");

  const navigation = useRef();


  const handleOutsideCick = (event, ref) => {
    if (!ref.current.contains(event.target)) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", e =>
      handleOutsideCick(e, navigation)
    );

    return () => {
      document.removeEventListener("mousedown", e =>
        handleOutsideCick(e, navigation)
      );
    };
  }, []);

  return (
    <nav className="nav_bar" style={{ backgroundColor: color }}>
      <li className="headerlogo_container1">
        <div className="logi_none">
          <span className="logo_name1 header--log1" >&lt;codeshack&gt;</span>
        </div>
      </li>
      <Wrapper toggle={toggle} className="nav-wrapper">

        <div className="nav-content" ref={navigation}>
          <ul className="ulnav">
            <li className="headerlogo_container">
              <div className="header_logo">
                <span className="logo_name1" >&lt;codeshack&gt;</span>
              </div>
            </li>
            <div className="padd">

            </div>
            <li className="liw list--general">
              <Link to={`#about`}>
                <span className="links">About </span>{" "}
              </Link>
            </li>
            <li className="liw list--general">
              <Link to={`#themes`}>
                <span className="links">Themes </span>{" "}
              </Link>
            </li>
            <li className="liw list--general">
              <Link to={`#timeline`}>
                <span className="links">Timeline </span>{" "}
              </Link>
            </li>
            <li className="liw list--general">
              <Link to={`#prizes`}>
                <span className="links">Prizes </span>{" "}
              </Link>
            </li>
            <li className="liw list--general">
              <Link to={`#teams`}>
                <span className="links">Team </span>{" "}
              </Link>
            </li>
            <li className="liw list--general">
              <Link to={`#faqs`}>
                <span className="links">FAQ </span>{" "}
              </Link>
            </li>
            <img
              alt="img"
              className="s-close"
              onClick={() => setToggle(true)}
              src={logoClose}
            />
          </ul>
        </div>
        <div className="ease" />
      </Wrapper>
      <img
        alt="img"
        className="s-open"
        onClick={() => setToggle(false)}
        src={hamLogo}
      />
    </nav>

  );
};


export default NAVBAR;
