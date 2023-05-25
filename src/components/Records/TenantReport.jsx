import React from "react";

import Banner from "components/Records/RecordList/Banner";
import RecordCheckList from "components/Records/RecordList/CheckList";

import records from "assets/images/records.jpg";
import evictionSampleReport from "assets/images/eviction-sample-report-2023.png";

const TenantReport = (props) => {
  const {
    heading,
    description,
    isEvictionRecord=false,
    recordList=[],
    isScreening=false,
    buttonText
  } = props;

  return (
    <div className="tenant-screening criminalRecords">
      <div className="sitewrapper">
        <div className="contents">
          <div className="col tenant-left">
            <Banner record={records} sampleReport={evictionSampleReport} />
          </div>

          <div className="col tenant-right">
            <RecordCheckList
              isEvictionRecord={isEvictionRecord}
              recordHeading={heading}
              recordDescription={description}
              recordList={recordList}
              isScreening={isScreening}
              buttonText={buttonText}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantReport;
