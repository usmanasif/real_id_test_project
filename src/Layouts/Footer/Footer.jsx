import React from "react";
import Clients from "../../components/Clients";
import Copyright from "./BottomSection/Copyright";
import Finding from "./Details/Finding";

const Footer = (props) => {
  const {
    creditCheck = false,
    buttonText
  } = props;

  return (
    <div className="footer">
      <div className="sitewrapper">
        {creditCheck && <Clients clientImages={false} isTransparentBackground={true} />}
        <Finding creditCheck={creditCheck} buttonText={buttonText} />
        <Copyright />
      </div>
    </div>
  );
};

export default Footer;
