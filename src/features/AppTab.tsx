// @ts-nocheck
import React from "react";
import app1 from "../assests/app1.jpg";
import python from "../assests/python.png";
import javascript from "../assests/javascript.png";
import reactNative from "../assests/reactNative.png";
import sass from "../assests/sass.png";
import "../Styles/AppTab.scss";
import ReactMarkdown from "react-markdown";
import { readmeapp } from "../common/readmeAppDev.ts";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AppTab = () => {
  return (
    <div className="AppTabContainer">
      <a
        className="AppTabContainer__GithubLink"
        href="https://github.com/Yodawgz0/All-Manager"
      >
        <FontAwesomeIcon icon={faLink} />
        All Manager
      </a>
      <div className="AppTabContainer__conatiner">
        <img
          className="AppTabContainer__conatiner__mainImg"
          alt="startAppImg"
          src={app1}
        />
        <div>
          <h2 className="AppTabContainer__conatiner__Maintext">
            <ul>
              <li>
                Using React Native made an app for andriod. Has a login page and
                connection using TCP.
              </li>
              <li>
                IP is fecthed and connection is established. Over which data
                like images and information can be transferred.
              </li>
              <li>
                Data like photo can be captured using the App and then can be
                processed further based on user action. Save or send can be
                done.
              </li>
              <li>
                Todo List can be generated from the app and data can be saved on
                laptop.
              </li>
            </ul>
          </h2>
        </div>
      </div>
      <div className="AppTabContainer__conatiner">
        <div className="AppTabContainer__conatiner__techLogo">
          <img
            className="AppTabContainer__conatiner__techLogo__pyImg"
            alt="transferAppImg"
            src={python}
          />
          <img
            className="AppTabContainer__conatiner__techLogo__JSImg"
            alt="transferAppImg"
            src={javascript}
          />
          <img
            className="AppTabContainer__conatiner__techLogo__rnImg"
            alt="transferAppImg"
            src={reactNative}
          />
          <img
            className="AppTabContainer__conatiner__techLogo__sassImg"
            alt="transferAppImg"
            src={sass}
          />
        </div>
      </div>
      <h2 className="AppTabContainer__conatiner__Maintext">
        Python is used for connection and data processing. Socket programming
        and multi-threading is used for further effective data transmission.
        Backend!
        <br />
        React-Native, SASS, JavaScript is used for front-end development.
      </h2>
      <ReactMarkdown
        className="AppTabContainer__conatiner__markdowntext"
        children={readmeapp}
      />
    </div>
  );
};

export default AppTab;
