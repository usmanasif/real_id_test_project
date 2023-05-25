import React from "react";
import criminalRecords from "shared/images/criminal-records.jpg";
import criminalSampleReport from "shared/images/criminal-sample-report-2023.png";
import Banner from "components/Records/RecordList/Banner";
import RecordCheckList from "components/Records/RecordList/CheckList";
import {
  criminalRecordHeading,
  criminalRecordDescription,
  criminalRecordList
} from "constants/recordConstants";
import { tenantButtonText } from "constants/sharedConstants";

const CriminalRecords = () => {
  return (
    <div className="tenant-screening criminalRecords">
      <div className="sitewrapper">
        <div className="contents">
          <div className="col tenant-left">
            <RecordCheckList
              recordHeading={criminalRecordHeading}
              recordDescription={criminalRecordDescription}
              recordList={criminalRecordList}
              buttonText={tenantButtonText}
              isCriminalRecord={true}
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
