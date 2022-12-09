import { useEffect, useState, useRef } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// @ts-ignore
import instagram from "../assests/instagram.png";
// @ts-ignore
import linkedin from "../assests/linkedin.png";
// @ts-ignore
import github from "../assests/github.png";
import "../Styles/NavigationBarstyle.scss";
import React from "react";

export const NavigationBar = () => {
  const scrolltoSkills = useRef();
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpodateLink = (pageLink: string) => {
    setActiveLink(pageLink);
  };

  return (
    // Todo ->>>>> <Navbar className={scrolled ? "scrolledBar" : "NavbarMain"}>
    <Navbar className={scrolled ? "NavbarMain" : "NavbarMain"}>
      <a href="#home" className="NavbarMain__mainLogo">
        Yodawgz0
      </a>

      <Nav className="NavbarMain__mainPanel">
        {["Skills", "Resume", "AppDev", "Projects"].map((pageLink, index) => (
          <Nav.Link
            key={index}
            className={
              activeLink === "pageLink"
                ? "acitveNavbarLink"
                : "text-white  navbarlink"
            }
            onClick={() => onUpodateLink(pageLink)}
          >
            <span className="h5">
              {pageLink.slice(0, 1).toUpperCase() + pageLink.slice(1)}
            </span>
          </Nav.Link>
        ))}

        <span>
          <div className="social-icon-panel">
            <a href="https://github.com/Yodawgz0">
              <img
                className="social-icon-panel__icon"
                src={github}
                alt="github"
              />
            </a>
            <a href="https://www.linkedin.com/in/ashleytennyson/">
              <img
                className="social-icon-panel__icon"
                src={linkedin}
                alt="linkedin"
              />
            </a>
            <a href="https://www.instagram.com/ashleytennyson0/">
              <img
                className="social-icon-panel__icon"
                src={instagram}
                alt="instagram"
              />
            </a>
          </div>
        </span>
        <button className="contact-us" onClick={() => console.log("connect")}>
          <span>Let's Connect</span>
        </button>
      </Nav>
    </Navbar>
  );
};
