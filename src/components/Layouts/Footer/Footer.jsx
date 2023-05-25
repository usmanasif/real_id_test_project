import React from "react";

import Clients from "components/Clients";
import Copyright from "components/Layouts/Footer/BottomSection/Copyright";
import Finding from "components/Layouts/Footer/Details/Finding";

const Footer = (props) => {
  const {
    creditCheck = false,
    buttonText
  } = props;

  return (
    <div className="footer">
      <div className="sitewrapper">
        {creditCheck && <Clients clientImages={false} isTransparentBackground />}
        <Finding creditCheck={creditCheck} buttonText={buttonText} />
        <Copyright />
      </div>
    </div>
  );
};

export default Footer;
