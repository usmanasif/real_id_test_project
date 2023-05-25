import React, { useEffect } from "react";

import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";

import Checklist from "components/Pricing/PriceList/Checklist";

import { ADD_TO_CART_BUTTON_TEXT } from "constants/sharedConstants";
import star from "assets/images/star.png";

const PriceListItem = (props) => {
  const {
    isBackgroundCheck=false,
    heading="",
    subHeading="",
    checkPoints,
    isEvictionReport=false,
    buttonText="",
    setItemCount,
    itemCount,
    oldPrice,
    amount,
    creditCheckOff,
    isEvictionRecord=false,
  } = props;

  const navigate = useNavigate();

  const handleCartItemCount = () => {
    if (isEvictionRecord)
    {
      toast.success("Item Added to cart", {autoClose: 2000})
      setItemCount(itemCount + 1);
    }
    else
      navigate("/eviction-report");
  }

  useEffect(() => {
    if (itemCount != 0)
      window.localStorage.setItem('itemCount', itemCount);
  }, [itemCount])

  return (
    <li className={isEvictionReport && "purple" || ""}>
      <div className="price-head">
        {isEvictionReport && (
          <>
            {creditCheckOff && (
              <>
                <h4>All-Inclusive Package</h4>
                <div className="star">
                  <img src={star} />
                </div>
              </>
            )}
            {!creditCheckOff && (
              <>
                <div className="star">
                  <img src={star} />
                </div>
                <h6>Package Discount</h6>
                <h4>Criminal &amp; Eviction Report </h4>
              </>
            )}
          </>
        )}
        {!isEvictionReport &&  (
          <h4>
            <span dangerouslySetInnerHTML={{ __html: heading }} /><sup>TM</sup>{isBackgroundCheck && 'Criminal'} <br />
            {isEvictionRecord || subHeading}
          </h4>
        )}
        <h3 dangerouslySetInnerHTML={{ __html: amount }}></h3>
        {isEvictionReport && (
          <h3 className="oldprice">{oldPrice}</h3>
        )}
        {!isEvictionReport && (
          <a href="#" className="viewSample">View Sample</a>
        )}
      </div>

      <Checklist checkPoints={checkPoints} />

      <div className="price-foot">
        <div className="btn">
          <a onClick={handleCartItemCount} className="buybtn">
            {isEvictionRecord && ADD_TO_CART_BUTTON_TEXT || buttonText}
          </a>
        </div>
      </div>
    </li>
  )
}

export default PriceListItem;
