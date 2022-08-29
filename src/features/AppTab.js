import React from "react";
import app1 from "../assests/app1.jpg";
import "../Styles/AppTab.scss";

const AppTab = () => {
  return (
    <div className="AppTabContainer">
      <div>
        <img
          className="AppTabContainer__mainImg"
          alt="startAppImg"
          src={app1}
        />
        <div>
          <h2 className="AppTabContainer__Maintext">
            Using React Native made an app for andriod. It has a login page and
            connection using TCP. IP is fetched using JSON.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AppTab;
