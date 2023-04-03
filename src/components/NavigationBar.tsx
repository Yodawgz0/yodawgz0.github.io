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
import emailjs from "@emailjs/browser";
import NavDropdown from "react-bootstrap/NavDropdown";

export const NavigationBar = ({ activeLinkSet }: Props) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [emailVal, setEmailVal] = useState<string>("");
  const [innerTextVal, setInnerTextVal] = useState<string>("");
  const [showError, setShowError] = useState<[boolean, string]>([false, ""]);

  const sendEmail = () => {
    let templateParams = {
      name: emailVal,
      notes: innerTextVal,
    };

    emailjs
      .send(
        "service_9cqzfve",
        "template_apd52qc",
        templateParams,
        "zuD_XodEGBui09Nzj"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  const onEmailChange = (email: string) => {
    setShowError([false, "email"]);
    setEmailVal(email);
  };
  const onInnerTextChange = (InnerText: string) => {
    setShowError([false, "text"]);
    setInnerTextVal(InnerText);
  };
  const handleSubmit = () => {
    if (!emailVal.length && !innerTextVal.length) {
      setShowError([true, "empty"]);
      return;
    } else {
      if (emailVal.length) {
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(emailVal)) {
        } else {
          setShowError([true, "email"]);
          return;
        }
      }
      if (innerTextVal.length < 2) {
        setShowError([true, "text"]);
        return;
      }
      sendEmail();
      handleClose();
    }
  };

  const handleClose = () => {
    setEmailVal("");
    setInnerTextVal("");
    setShowError([false, "text"]);
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
      className="NavbarMain"
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
            className="acitveNavbarLink"
            onClick={() => activeLinkSet(pageLink)}
          >
            <span className="text-white navbarlink">
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
      <Nav className="NavbarMain__phone">
        <NavDropdown className="NavbarDropdownContainer" title="</>">
          {["Skills", "AppDev", "Resume", "Projects"].map((pageLink, index) => (
            <NavDropdown.Item
              key={index}
              className="NabvarDropdown"
              onClick={() => activeLinkSet(pageLink)}
            >
              <span className="text-white">
                {pageLink.slice(0, 1).toUpperCase() + pageLink.slice(1)}
              </span>
            </NavDropdown.Item>
          ))}
          <NavDropdown.Divider className="NabvarDropdown__divider" />
          <NavDropdown.Item style={{ display: "flex" }}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Yodawgz0"
            >
              <img className="NabvarDropdown__icon" src={github} alt="github" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/ashleytennyson/"
            >
              <img
                className="NabvarDropdown__icon"
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
                className="NabvarDropdown__icon"
                src={instagram}
                alt="instagram"
              />
            </a>
          </NavDropdown.Item>
        </NavDropdown>
        <button className="contact-us" onClick={() => handleShow()}>
          <span>Let's Connect</span>
        </button>
      </Nav>

      <Modal backdrop="static" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hit me Up!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
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
                placeholder="Something...(Also please include your name :D)"
                onChange={(e) => {
                  onInnerTextChange(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
          {showError[1] === "email" && showError[0] ? (
            <span>That doesn't seem like an email address...</span>
          ) : showError[1] === "text" && showError[0] ? (
            <span>Message is way less than I expected :'(</span>
          ) : showError[1] === "empty" && showError[0] ? (
            <span>Empty? that's just spam ;)</span>
          ) : (
            <></>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmit()}>
            Send!
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
};
