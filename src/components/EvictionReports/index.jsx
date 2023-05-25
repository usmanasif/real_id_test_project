import React, { useState } from "react";

import Header from "components/Layouts/Header/Header.jsx";
import Footer from "components/Layouts/Footer/Footer.jsx";
import Pricing from "components/Pricing/index.jsx";
import Clients from "components/Clients/index.jsx";
import CriminalRecords from "components/Records/CriminalRecords.jsx";
import TenantReport from "components/Records/TenantReport.jsx";
import TenantInformation from "components/Records/TenantInformation.jsx";

import {
  EVICTION_HISTORY_HEADING,
  EVICTION_HISTORY_SUB_HEADING,
  EVICTION_HISTORY_DESCRIPTION,
  EVICTION_RECORD_HEADING,
  EVICTION_RECORD_DESCRIPTION,
  EVICTION_RECORD_LIST
} from "constants/recordConstants.js";
import {
  EVICTION_PRICE_DESCRIPTION,
  EVICTION_PRICE_HEADING,
  EVICTION_REPORT,
  BACKGROUND_CHECK,
  RENTAL_HISTORY,
  EVICTION_REPORT_HEADING,
  BACKGROUND_CHECK_HEADING,
  RENTAL_HISTORY_HEADING,
  EVICTION_REPORT_AMOUNT,
  RENTAL_AMOUNT
} from "constants/priceConstants.js";
import {
  EVICTION_OLD_PRICE,
  TENNANT_BUTTON_TEXT,
} from "constants/sharedConstants.js";

import map from "assets/images/map.jpg";

const EvictionReportsHome = () => {
  const count = JSON.parse(window.localStorage.getItem('itemCount')) || 0;
  const [itemCount, setItemCount] = useState(count);

  return (
    <div className="site-fluid">
      <Header itemCount={itemCount} isEvictionReport />
      <TenantInformation
        isTenantInformation
        recordHeading={EVICTION_HISTORY_HEADING}
        recordSubHeading={EVICTION_HISTORY_SUB_HEADING}
        recordDescription={EVICTION_HISTORY_DESCRIPTION}
        rightImage={map}
      />

      <TenantReport
        heading={EVICTION_RECORD_HEADING}
        description={EVICTION_RECORD_DESCRIPTION}
        recordList={EVICTION_RECORD_LIST}
        isEvictionRecord
        buttonText={TENNANT_BUTTON_TEXT}
      />

      <CriminalRecords isEvictionRecord/>

      <Pricing
        setItemCount={setItemCount}
        itemCount={itemCount}
        priceHeading={EVICTION_PRICE_HEADING}
        priceDescription={EVICTION_PRICE_DESCRIPTION}
        evictionReport={EVICTION_REPORT}
        backgroundCheck={BACKGROUND_CHECK}
        rentalHistory={RENTAL_HISTORY}
        isEvictionRecord
        evictionReportHeading={EVICTION_REPORT_HEADING}
        backgroundCheckHeading={BACKGROUND_CHECK_HEADING}
        rentalHistoryHeading={RENTAL_HISTORY_HEADING}
        rentalAmount={RENTAL_AMOUNT}
        oldPrice={EVICTION_OLD_PRICE}
        evictionReportAmount={EVICTION_REPORT_AMOUNT}
      />

      <Clients clientImages />
      <Footer />
    </div>
  );
};

export default EvictionReportsHome;
