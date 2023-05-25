import React from "react";

import Header from "components/Layouts/Header/Header";
import TenantInformation from "components/Records/TenantInformation";
import RecordCheckList from "components/Records/RecordList/CheckList";
import TenantReport from "components/Records/TenantReport";
import Pricing from "components/Pricing";
import Footer from "components/Layouts/Footer/Footer";
import ClientInfo from "components/Clients/ClientInfo";

import hero from "assets/images/hero.png";

import {
  CREDIT_CHECKLIST_PRICE_DESCRIPTION,
  CREDIT_CHECKLIST_HEADING,
  CREDIT_CHECKLIST_PRICE_HEADING,
  CREDIT_CHECKLIST,
  PAKAGE_LIST,
  PACKAGE_LIST_HEADING,
  INCLUSIVE_PAKAGE_AMOUNT,
  RENTAL_AMOUNT
} from "constants/priceConstants";
import {
  CREDIT_CHECK_DESCRIPTION,
  CREDIT_CHECK_HEADING,
  CREDIT_CHECK_SUBHEADING,
  PAY_OPTIONS_DESCRIPTION,
  PAY_OPTIONS_HEADING,
  PAY_OPTIONS_LIST_LEFT,
  PAY_OPTIONS_LIST_RIGHT,
  SCREENING_DESCRIPTION,
  SCREENING_HEADING
} from "constants/creditCheckConstants";
import {
  CREDIT_BUTTON_TEXT_FIRST,
  CREDIT_BUTTON_TEXT_SECOND,
  CREDIT_OLD_PRICE,
  CREDIT_SIGN_UP_BUTTON_TEXT,
  SCREENING_BUTTON_TEXT
} from "constants/sharedConstants";

const CreditChecksHome = () => {
  return (
    <div>
      <Header />
      <TenantInformation
        recordHeading={CREDIT_CHECK_HEADING}
        recordSubHeading={CREDIT_CHECK_SUBHEADING}
        recordDescription={CREDIT_CHECK_DESCRIPTION}
        isTenantInformation
        rightImage={hero}
        isCreditCheck
      />

      <div className="dollar-content ">
        <div className="sitewrapper">
          <div className="contents">
            <RecordCheckList
              recordHeading={PAY_OPTIONS_HEADING}
              recordDescription={PAY_OPTIONS_DESCRIPTION}
              recordList={PAY_OPTIONS_LIST_LEFT}
              recordListRight={PAY_OPTIONS_LIST_RIGHT}
            />
          </div>
        </div>
      </div>

      <TenantReport
        heading={SCREENING_HEADING}
        description={SCREENING_DESCRIPTION}
        isScreening
        buttonText={SCREENING_BUTTON_TEXT}
      />

      <Pricing
        priceHeading={CREDIT_CHECKLIST_PRICE_HEADING}
        priceDescription={CREDIT_CHECKLIST_PRICE_DESCRIPTION}
        creditCheckList={CREDIT_CHECKLIST}
        packageList={PAKAGE_LIST}
        creditCheckListHeading={CREDIT_CHECKLIST_HEADING}
        packageListHeading={PACKAGE_LIST_HEADING}
        buttonTextFirst={CREDIT_BUTTON_TEXT_FIRST}
        buttonTextSecond={CREDIT_BUTTON_TEXT_SECOND}
        creditCheckOff
        packageAmount={INCLUSIVE_PAKAGE_AMOUNT}
        rentalAmount={RENTAL_AMOUNT}
        oldPrice={CREDIT_OLD_PRICE}
      />

      <section className="client-logo">
        <div className="sitewrapper">
          <ul>
            <ClientInfo />
          </ul>
        </div>
      </section>

      <Footer creditCheck buttonText={CREDIT_SIGN_UP_BUTTON_TEXT} />
    </div>
  )
}

export default CreditChecksHome;
