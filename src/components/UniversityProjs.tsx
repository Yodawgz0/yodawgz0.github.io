import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../Styles/UniversityProjs.scss";
import LMSImg from "../assests/LMS.png";

function UniversityProjs() {
  return (
    <div className="universityProject">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://brainwave-one.vercel.app/"
        className="universityProject__title mb-4"
      >
        <FontAwesomeIcon icon={faLink} />
        Learning Management System
      </a>

      <div className="universityProject__WebProj mt-5">
        <div className="universityProject__WebProj__details">
          {" "}
          <h3>Features:</h3>
          <ul>
            <li>
              Allows for the creation, storage, sharing, and communication of
              educational materials and courses
            </li>
            <li>
              Provides remote access to course materials and resources for
              learners
            </li>
            <li>Supports online and blended learning opportunities</li>
            <li>
              Supports multiple views, including student, instructor, and admin
              views
            </li>
            <li>
              Enables instructors to create, publish, and grade assignments
            </li>
            <li>Facilitates communication between instructors and students</li>
            <li>
              Provides progress tracking and reporting for both students and
              instructors
            </li>
          </ul>
          <h3>Roles:</h3>
          <ul>
            <li>
              Students: have access to their submissions, announcements, and
              progress through the course
            </li>
            <li>
              Instructors: can view student activity, publish course content,
              create assignments, provide feedback, and grades
            </li>
            <li>
              Admins: manage the system, define user roles, ensure stable
              operation of LMS, etc.
            </li>
          </ul>
        </div>
        <img className="universityProject__LMSImg" alt="LMSImg" src={LMSImg} />
      </div>
    </div>
  );
}

export default UniversityProjs;
