import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assests/logo.png";
import instagram from "../assests/instagram.png";
import linkedin from "../assests/linkedin.png";
import github from "../assests/github.png";

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
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          {["home", "skills", "projects"].map((pageLink, index) => (
            <Nav key={index}>
              <Nav.Link
                href={"#" + pageLink}
                className={
                  activeLink == "pageLink"
                    ? "acitve navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpodateLink(pageLink)}
              >
                <span>
                  {pageLink.slice(0, 1).toUpperCase() + pageLink.slice(1)}
                </span>
              </Nav.Link>
            </Nav>
          ))}

          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://github.com/Yodawgz0">
                <img src={github} alt="github" />
              </a>
              <a href="https://www.linkedin.com/in/ashleytennyson/">
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href="#">
                <img src={instagram} alt="instagram" />
              </a>
            </div>
            <button
              className="contact-us"
              onClick={() => console.log("connect")}
            >
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
