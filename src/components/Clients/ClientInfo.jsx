import React from "react";

import clientOne from "assets/images/cl_01.png";
import clientTwo from "assets/images/cl_02.png";
import clientThree from "assets/images/cl_03.png";

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
