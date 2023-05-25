import React from "react";
import Checklist from "components/Pricing/PriceList/Checklist";

const CheckList = (props) => {
  const {
    isTenantInformation=false,
    isEvictionRecord=false,
    recordHeading,
    recordDescription,
    recordList=[],
    recordSubHeading="",
    recordListRight=[],
    isScreening=false,
    buttonText="",
    isCriminalRecord=false
  } = props;

  return (
    <div>
      {isTenantInformation && (
        <>
          <h1 dangerouslySetInnerHTML={{ __html: recordHeading }} />
          <h4>{recordSubHeading}</h4>
          <p dangerouslySetInnerHTML={{ __html: recordDescription }} />
        </>
      )}

      {!isTenantInformation && (
        <>
          <h2>{recordHeading}</h2>
          <p dangerouslySetInnerHTML={{ __html: recordDescription }} />
          {!isScreening && (
            <>
              <h5>You’ll have access to:</h5>
              <div className={isEvictionRecord ? "" : "checkwrap"}>
                <ul className={isEvictionRecord ? "access-listing two-col" : "access-listing"} >
                  <Checklist checkPoints={recordList} />
                </ul>
                {recordListRight.length > 0 && (
                  <ul className={isEvictionRecord ? "access-listing two-col" : "access-listing"} >
                    <Checklist checkPoints={recordListRight} />
                  </ul>
                )}
              </div>
            </>
          )}
        </>
      )}

      {(isEvictionRecord || isScreening || isCriminalRecord) && (
        <div className="btn">
          <a href="#" className="button">
            {buttonText}
          </a>
        </div>
      )}
    </div>
  );
};

export default CheckList;
