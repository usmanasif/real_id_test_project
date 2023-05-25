import React from "react";

import {
  CREDIT_BUTTON_TEXT_FIRST,
  INSTANT_PRICE
} from "constants/sharedConstants";

const InstantPrice = () => {

  return (
    <ul className="eviction-reports">
      <li>
        Instant Background Checks or Eviction Reports.
        <strong className="underline">${INSTANT_PRICE}5</strong>
      </li>
      <li>
        <a href="#" className="buybtn">{CREDIT_BUTTON_TEXT_FIRST}</a>
      </li>
    </ul>
  );
};

export default InstantPrice;
