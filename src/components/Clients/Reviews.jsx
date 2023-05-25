import React from "react";

import ClientInfo from "components/Clients/ClientInfo";
import { REVIEW_STAR_COUNT } from "constants/sharedConstants";

const Review = (props) => {
  const {
    clientImages=false,
    isTransparentBackground=false
  } = props;

  return (
    <section className={isTransparentBackground && "client-logo transparent-background" || "client-logo"}>
      <div className="sitewrapper">
        <ul>
          {clientImages && <ClientInfo />}
          <div className="shopperapproved_widget sa_rotate sa_count3 sa_horizontal sa_count3 sa_bgWhite sa_colorBlack sa_borderGray sa_rounded sa_jMy sa_fixed sa_showlinks sa_large sa_showdate ">
            <table cellPadding="5px">
              <tbody>
                <tr>
                  <td>
                    <div className="sa_review" >
                      <div className="sa_info">
                        <span>
                          {Array.from(Array(REVIEW_STAR_COUNT), (_, index) => (
                            <span key={index} className="sa_star sa_activestar" />
                          ))}
                        </span>
                        <div className="sa_name">
                          <span className="sa_displayname">
                            Gabrielle A.
                          </span>
                        </div>
                        <div className="sa_date">
                          16 Feb 2023
                        </div>
                      </div>
                      <div className="sa_comments">
                        Good
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </ul>
      </div>
    </section>
  )
}

export default Review;
