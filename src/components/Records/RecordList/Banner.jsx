import React from "react";

const Banner = (props) => {
  const { record, sampleReport } = props;

  return (
    <div className="heroimg">
      {record && <img src={record} alt="" width="" height="" />}
      {sampleReport && <img src={sampleReport} className="mBox" />}
    </div>
  );
};

export default Banner;
