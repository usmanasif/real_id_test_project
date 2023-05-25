import React, { useEffect, useState } from "react";
import Review from "components/Clients/Reviews";
import { interval } from "constants/sharedConstants";

const Clients = (props) => {
  const {
    clientImages=false,
    isTransparentBackground=false
  } = props;

  const [updated, setUpdated] = useState(true);

  useEffect(() => {
    function saLoadScript(src) {
      const js = window.document.createElement("script");
      js.src = src;
      js.type = "text/javascript";
      document.getElementsByTagName("head")[0].appendChild(js);
    }

    if (typeof window.shopper_first === "undefined") {
      saLoadScript("//www.shopperapproved.com/widgets/testimonial/3.0/26230.js");
      window.shopper_first = true;
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [updated]);

  const timeoutId = setTimeout(() => {
    setUpdated(!updated);
  }, interval);

  return (
    <div className="client-logo" >
      <Review
        clientImages={clientImages}
        isTransparentBackground={isTransparentBackground}
      />
    </div>
  );
};

export default Clients;
