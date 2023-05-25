import React from "react";
import InstantPrice from "components/Pricing/PriceList/InstantPrice";
import PriceListItem from "components/Pricing/PriceList/PriceListItem";
import { addToCartButtonText, rentalEvictionHistory } from "constants/sharedConstants";

const Pricing = (props) => {
  const {
    itemCount=0,
    setItemCount={},
    priceHeading,
    priceDescription,
    rentalHistory,
    evictionReport,
    backgroundCheck,
    creditCheckList,
    packageList,
    isEvictionRecord=false,
    rentalHistoryHeading,
    backgroundCheckHeading,
    evictionReportHeading,
    creditCheckListHeading,
    packageListHeading,
    packageAmount,
    creditCheckOff,
    buttonTextFirst,
    buttonTextSecond,
    oldPrice="",
    rentalAmount,
    evictionReportAmount
  } = props;

  return (
    <section className="pricing">
      <div className="sitewrapper">
        <h2>{priceHeading}</h2>
        <p>{priceDescription}</p>
        <ul className="pricelist" style={{ justifyContent: !isEvictionRecord && "center" }}>
          <PriceListItem
            checkPoints={rentalHistory || creditCheckList}
            heading={rentalHistoryHeading ?? creditCheckListHeading}
            subHeading={rentalEvictionHistory}
            buttonLink="#"
            setItemCount={setItemCount}
            buttonText={buttonTextFirst}
            itemCount={itemCount}
            amount={rentalAmount}
            isEvictionRecord={isEvictionRecord}
          />
          <PriceListItem
            isEvictionReport={true}
            heading={packageListHeading ?? evictionReportHeading}
            checkPoints={evictionReport ?? packageList}
            buttonLink="#"
            setItemCount={setItemCount}
            itemCount={itemCount}
            oldPrice={oldPrice}
            buttonText={buttonTextSecond}
            creditCheckOff={creditCheckOff}
            amount={evictionReportAmount ?? packageAmount}
            isEvictionRecord={isEvictionRecord}
          />
          {isEvictionRecord &&
            <PriceListItem
              checkPoints={backgroundCheck}
              heading={backgroundCheckHeading}
              subHeading={backgroundCheck}
              buttonLink="#"
              isBackgroundCheck={true}
              setItemCount={setItemCount}
              itemCount={itemCount}
              amount={rentalAmount}
              buttonText={addToCartButtonText}
              isEvictionRecord={isEvictionRecord}
            />
          }
            
          {!isEvictionRecord && <InstantPrice />}
        </ul>
      </div>
    </section>
  );
};

export default Pricing;
