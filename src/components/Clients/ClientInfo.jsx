import React from "react";
import clientOne from "shared/images/cl_01.png";
import clientTwo from "shared/images/cl_02.png";
import clientThree from "shared/images/cl_03.png";

const ClientInfo = () => {

  const clients = [clientOne, clientTwo, clientThree];

  return (
    <div className="padding">
      {clients.map((client, index) => {
        return <li key={index}><img src={client} /></li>
      })}
    </div>
  );
};

export default ClientInfo;
 