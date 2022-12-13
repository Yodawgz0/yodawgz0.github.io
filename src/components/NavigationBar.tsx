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
import { Props } from "./IProps";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export const NavigationBar = ({ activeLinkSet, activeLinkValue }: Props) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [emailVal, setEmailVal] = useState<String>("");
  const [innerTextVal, setInnerTextVal] = useState<String>("");
  const onEmailChange = (email: string) => {
    setEmailVal(email);
  };
  const onInnerTextChange = (InnerText: string) => {
    setInnerTextVal(InnerText);
  };
  const handleSubmit = () => {
    if (emailVal.length && innerTextVal.length) {
      console.log("ok");
      setShow(false);
    } else {
      console.log("No");
    }
  };

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY) {
        setScrolled(true);
        activeLinkSet("");
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeLinkSet]);
  return (
    <Navbar
      className={"NavbarMain"}
      style={{
        position: scrolled ? "fixed" : "relative",
      }}
    >
      <div onClick={() => activeLinkSet("HomePage")} className="container">
        <p className="glitch">
          <span aria-hidden="true">Yodawgz0</span>
          Yodawgz0
          <span aria-hidden="true">Yodawgz0</span>
        </p>
      </div>
      <Nav className="NavbarMain__mainPanel">
        {["Skills", "AppDev", "Resume", "Projects"].map((pageLink, index) => (
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
        <button className="contact-us" onClick={() => handleShow()}>
          <span>Let's Connect</span>
        </button>
      </Nav>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hit me Up!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={() => handleSubmit()}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>

              <Form.Control
                required
                type="email"
                placeholder="name@example.com"
                autoFocus
                onChange={(e) => {
                  onEmailChange(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Stuff that you want to say</Form.Label>
              <Form.Control
                as="textarea"
                required
                rows={3}
                placeholder="Something..."
                onChange={(e) => {
                  onInnerTextChange(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Send!
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
};
