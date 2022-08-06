import { useEffect, useState } from "react";
import { Navbar, Nav, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import instagram from "../assests/instagram.png";
import linkedin from "../assests/linkedin.png";
import github from "../assests/github.png";
import "../Styles/NavigationBarstyle.scss";

export const NavigationBar = () => {
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

  const onUpodateLink = (pageLink) => {
    setActiveLink(pageLink);
  };

  return (
    <Navbar className={scrolled ? "scrolledNavbar" : "NavbarMain"}>
      <a href="#home" className="NavbarMain__mainLogo">
        Yodawgz0
      </a>

      <Nav className="NavbarMain__mainPanel">
        {["home", "skills", "projects"].map((pageLink, index) => (
          <Nav.Link
            key={index}
            href={"#" + pageLink}
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
            <a href="https://www.instagram.com/">
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
