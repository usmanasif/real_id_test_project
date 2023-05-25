import React from "react";

const Finding = (props) => {
  const {
    creditCheck = false,
    buttonText = "Buy Instant Reports",
  } = props;

  return (
    <div className="finding">
      {creditCheck ?
        <h2>Finding The Right Tenant Has Never Been Easier.</h2>
        :
        <>
          <h2>A few dollars now could save you thousands later.</h2>
          <h4>Evictions can be stressful and cost unnecessary time and expenses. Use rTenant to verify your — or your rental applicant's — criminal &amp; eviction history.					</h4>
          <p>Backed by Real ID, Inc, rTenant<sup>TM</sup> offers the same quality and scope of screening solutions that large property management firms rely on but at affordable prices. From credit and criminal background checks to eviction reports, purchase what you need — a single report or a package deal — and pay as you go.</p>
        </>
      }
      <div className="btn">
        <a href="#" className="button">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default Finding;
