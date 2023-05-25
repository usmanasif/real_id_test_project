import React from "react";

import MenuItem from "components/Layouts/Header/NavBar/MenuItem";
import ContactInfo from "components/Layouts/Footer/BottomSection/ContactInfo";

import bbbLogo from "assets/images/bbb-logo.png";

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
