import React from "react";
import {
  creditButtonTextFirst,
  instantPrice
} from "constants/sharedConstants";

const InstantPrice = () => {

  return (
    <ul className="eviction-reports">
      <li>
        Instant Background Checks or Eviction Reports.  
        <strong className="underline">${instantPrice}5</strong>
      </li>
      <li>
        <a href="#" className="buybtn">{creditButtonTextFirst}</a>
      </li>
    </ul>
  );
};

export default InstantPrice;
