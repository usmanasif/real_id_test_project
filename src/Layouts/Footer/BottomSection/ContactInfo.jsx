import React from "react";
import facebook from "../../../shared/images/fb.png";
import twitter from "../../../shared/images/twt.png";
import linkedIn from "../../../shared/images/in.png";
import MenuItem from "../../Header/NavBar/MenuItem";

const ContactInfo = () => {
  return (
    <div className="flRight">
      <ul>
        <li>Legal Toll Free: <a href="tel:(888) 727-3368">(888) 727-3368</a></li>
        <MenuItem 
          link="http://www.facebook.com/pages/Real-ID/103000019779005" 
          text="" 
          socials={true} 
          title="Facebook" 
          socialIcon={facebook}
        />
        <MenuItem 
          link="https://twitter.com/RealIDInc"
          text="" 
          socials={true} 
          title="Twitter" 
          socialIcon={twitter}
        />        
      <MenuItem 
        link="http://www.linkedin.com/company/real-id-inc."
        text="" 
        socials={true} 
        title="LinkedIn" 
        socialIcon={linkedIn}
      />
      </ul>
    </div>
  );
};

export default ContactInfo;
