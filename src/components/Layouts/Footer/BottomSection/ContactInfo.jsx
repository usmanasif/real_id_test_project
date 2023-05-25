import React from "react";

import facebook from "assets/images/fb.png";
import twitter from "assets/images/twt.png";
import linkedIn from "assets/images/in.png";
import MenuItem from "components/Layouts/Header/NavBar/MenuItem";

const ContactInfo = () => {
  return (
    <div className="flRight">
      <ul>
        <li>Legal Toll Free: <a href="tel:(888) 727-3368">(888) 727-3368</a></li>
        <MenuItem
          link="http://www.facebook.com/pages/Real-ID/103000019779005"
          text=""
          socials
          title="Facebook"
          socialIcon={facebook}
        />
        <MenuItem
          link="https://twitter.com/RealIDInc"
          text=""
          socials
          title="Twitter"
          socialIcon={twitter}
        />
      <MenuItem
        link="http://www.linkedin.com/company/real-id-inc."
        text=""
        socials
        title="LinkedIn"
        socialIcon={linkedIn}
      />
      </ul>
    </div>
  );
};

export default ContactInfo;
