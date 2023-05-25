import React from "react";

import Banner from "components/Records/RecordList/Banner";
import RecordCheckList from "components/Records/RecordList/CheckList";

import {
  CRIMINAL_RECORD_HEADING,
  CRIMINAL_RECORD_DESCRIPTION,
  CRIMINAL_RECORD_LIST
} from "constants/recordConstants";
import { TENNANT_BUTTON_TEXT } from "constants/sharedConstants";

import criminalRecords from "assets/images/criminal-records.jpg";
import criminalSampleReport from "assets/images/criminal-sample-report-2023.png";

const CriminalRecords = () => {
  return (
    <div className="tenant-screening criminalRecords">
      <div className="sitewrapper">
        <div className="contents">
          <div className="col tenant-left">
            <RecordCheckList
              recordHeading={CRIMINAL_RECORD_HEADING}
              recordDescription={CRIMINAL_RECORD_DESCRIPTION}
              recordList={CRIMINAL_RECORD_LIST}
              buttonText={TENNANT_BUTTON_TEXT}
              isCriminalRecord
              isEvictionRecord
            />
          </div>

          <div className="col tenant-right">
            <Banner record={criminalRecords} sampleReport={criminalSampleReport} />
          </div>
        </div>
      </div>
    </div >
  );
};

export default CriminalRecords;
