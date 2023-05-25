import React from "react";
import Header from "Layouts/Header/Header";
import TenantInformation from "components/Records/TenantInformation";
import hero from "shared/images/hero.png";
import RecordCheckList from "components/Records/RecordList/CheckList";
import TenantReport from "components/Records/TenantReport";
import Pricing from "components/Pricing";
import Footer from "Layouts/Footer/Footer";
import ClientInfo from "components/Clients/ClientInfo";

import {
  creditCheckListPriceDescription,
  creditCheckListHeading,
  creditCheckListPriceHeading,
  creditCheckList,
  packageList,
  packageListHeading,
  inclusivePackageAmount,
  rentalAmount
} from "../../constants/priceConstants";
import {
  creditCheckDescription,
  creditCheckHeading,
  creditCheckSubHeading,
  payOptionsDescription,
  payOptionsHeading,
  payOptionsListLeft,
  payOptionsListRight,
  screeningDescription,
  screeningHeading
} from "../../constants/creditCheckConstants";
import {
  creditButtonTextFirst,
  creditButtonTextSecond,
  creditOldPrice,
  creditSignUpButtonText,
  screeningButtonText
} from "../../constants/sharedConstants";

const CreditChecksHome = () => {
  return (
    <div>
      <Header />
      <TenantInformation
        recordHeading={creditCheckHeading}
        recordSubHeading={creditCheckSubHeading}
        recordDescription={creditCheckDescription}
        isTenantInformation={true}
        rightImage={hero}
        isCreditCheck={true}
      />

      <div className="dollar-content ">
        <div className="sitewrapper">
          <div className="contents">
            <RecordCheckList
              recordHeading={payOptionsHeading}
              recordDescription={payOptionsDescription}
              recordList={payOptionsListLeft}
              recordListRight={payOptionsListRight}
            />
          </div>
        </div>
      </div>

      <TenantReport
        heading={screeningHeading}
        description={screeningDescription}
        isScreening={true}
        buttonText={screeningButtonText}
      />

      <Pricing
        priceHeading={creditCheckListPriceHeading}
        priceDescription={creditCheckListPriceDescription}
        creditCheckList={creditCheckList}
        packageList={packageList}
        creditCheckListHeading={creditCheckListHeading}
        packageListHeading={packageListHeading}
        buttonTextFirst={creditButtonTextFirst}
        buttonTextSecond={creditButtonTextSecond}
        creditCheckOff={true}
        packageAmount={inclusivePackageAmount}
        rentalAmount={rentalAmount}
        oldPrice={creditOldPrice}
      />

      <section className="client-logo">
        <div className="sitewrapper">
          <ul>
            <ClientInfo />
          </ul>
        </div>
      </section>

      <Footer creditCheck={true} buttonText={creditSignUpButtonText} />
    </div>
  )
}

export default CreditChecksHome;
