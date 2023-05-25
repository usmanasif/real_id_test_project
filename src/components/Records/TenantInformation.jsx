import React from "react";

import Banner from "components/Records/RecordList/Banner";
import RecordCheckList from "components/Records/RecordList/CheckList";
import SignUpForm from "components/CreditChecks/SignUp/Form";

const TenantInformation = (props) => {
  const {
    isTenantInformation=false,
    recordHeading,
    recordDescription,
    recordSubHeading,
    rightImage,
    isCreditCheck=false,
  } = props;

  return (
    <div className="hero">
      <div className="sitewrapper">
        <div className="flLeft hero-left">
          <RecordCheckList
            isTenantInformation={isTenantInformation}
            recordHeading={recordHeading}
            recordDescription={recordDescription}
            recordSubHeading={recordSubHeading}
          />
        </div>

        <div className="flRight hero-right">
          {isCreditCheck && <SignUpForm />}
          <Banner record={rightImage} />
        </div>
      </div>
    </div >
  );
};

export default TenantInformation;
