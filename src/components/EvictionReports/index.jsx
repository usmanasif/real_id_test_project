import React, { useState } from "react";
import Header from "../../Layouts/Header/Header.jsx";
import Footer from "../../Layouts/Footer/Footer.jsx";
import Pricing from "../Pricing/index.jsx";
import Clients from "../Clients/index.jsx";
import CriminalRecords from "../Records/CriminalRecords.jsx";
import TenantReport from "../Records/TenantReport.jsx";
import TenantInformation from "../Records/TenantInformation.jsx";
import map from "../../shared/images/map.jpg";

import {
  evictionHistoryHeading,
  evictionHistorySubHeading,
  evictionHistoryDescription,
  evictionRecordHeading,
  evictionRecordDescription,
  evictionRecordList
} from "../../constants/recordConstants.js";
import {
  evictionPriceDescription,
  evictionPriceHeading,
  evictionReport,
  backgroundCheck,
  rentalHistory,
  evictionReportHeading,
  backgroundCheckHeading,
  rentalHistoryHeading,
  evictionReportAmount,
  rentalAmount
} from "../../constants/priceConstants.js";
import {
  evictionOldPrice,
  tenantButtonText,
} from "../../constants/sharedConstants.js";

const EvictionReportsHome = () => {
  const count = JSON.parse(window.localStorage.getItem('itemCount')) || 0;
  const [itemCount, setItemCount] = useState(count);

  return (
    <div className="site-fluid">
      <Header itemCount={itemCount} isEvictionReport={true} />
      <TenantInformation
        isTenantInformation={true}
        recordHeading={evictionHistoryHeading}
        recordSubHeading={evictionHistorySubHeading}
        recordDescription={evictionHistoryDescription}
        rightImage={map}
      />

      <TenantReport
        heading={evictionRecordHeading}
        recordDescription={evictionRecordDescription}
        recordList={evictionRecordList}
        isEvictionRecord={true}
        buttonText={tenantButtonText}
      />

      <CriminalRecords />
      <Pricing
        setItemCount={setItemCount}
        itemCount={itemCount}
        priceHeading={evictionPriceHeading}
        priceDescription={evictionPriceDescription}
        evictionReport={evictionReport}
        backgroundCheck={backgroundCheck}
        rentalHistory={rentalHistory}
        isEvictionRecord={true}
        evictionReportHeading={evictionReportHeading}
        backgroundCheckHeading={backgroundCheckHeading}
        rentalHistoryHeading={rentalHistoryHeading}
        rentalAmount={rentalAmount}
        oldPrice={evictionOldPrice}
        evictionReportAmount={evictionReportAmount}
      />

      <Clients clientImages={true} />
      <Footer />
    </div>
  );
};

export default EvictionReportsHome;
