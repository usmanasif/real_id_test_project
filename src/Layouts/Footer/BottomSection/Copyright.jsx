import React from "react";
import bbbLogo from "../../../shared/images/bbb-logo.png";
import MenuItem from "../../Header/NavBar/MenuItem";
import ContactInfo from "./ContactInfo";

const Copyright = () => {
  return (
    <div className="copyright">
      <div className="flLeft">
        <ul>
          <li><a href="#" target="_blank"><img src={bbbLogo} border="0" /></a></li>
          <li>Copyright © 2023 Real ID, Inc. All Rights Reserved.</li>
          <MenuItem link="" text="Terms of Use" />
          <MenuItem link="" text="Privacy Policy" />
          <MenuItem link="" text="Laws &amp; Notices" />
        </ul>
      </div>
      <ContactInfo />
    </div>
  );
};

export default Copyright;
