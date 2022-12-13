import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// @ts-ignore
import instagram from "../assests/instagram.png";
// @ts-ignore
import linkedin from "../assests/linkedin.png";
// @ts-ignore
import github from "../assests/github.png";
import "../Styles/NavigationBarstyle.scss";
import React, { useEffect, useState } from "react";
import "../Styles/coolGlitch.scss";

export const NavigationBar = ({ activeLinkSet, activeLinkValue }: Props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <Navbar
      className={"NavbarMain"}
      style={{
        position: scrolled ? "fixed" : "relative",
      }}
    >
      <div className="container">
        <p className="glitch">
          <span aria-hidden="true">Yodawgz0</span>
          Yodawgz0
          <span aria-hidden="true">Yodawgz0</span>
        </p>
      </div>
      <Nav className="NavbarMain__mainPanel">
        {["Skills", "Resume", "AppDev", "Projects"].map((pageLink, index) => (
          <Nav.Link
            key={index}
            className={
              activeLinkValue === "pageLink"
                ? "acitveNavbarLink"
                : "text-white  navbarlink"
            }
            onClick={() => activeLinkSet(pageLink)}
          >
            <span className="h5">
              {pageLink.slice(0, 1).toUpperCase() + pageLink.slice(1)}
            </span>
          </Nav.Link>
        ))}
        <div className="social-icon-panel">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Yodawgz0"
          >
            <img
              className="social-icon-panel__icon"
              src={github}
              alt="github"
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/ashleytennyson/"
          >
            <img
              className="social-icon-panel__icon"
              src={linkedin}
              alt="linkedin"
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/ashleytennyson0/"
          >
            <img
              className="social-icon-panel__icon"
              src={instagram}
              alt="instagram"
            />
          </a>
        </div>
        <button className="contact-us" onClick={() => console.log("connect")}>
          <span>Let's Connect</span>
        </button>
      </Nav>
    </Navbar>
  );
};
