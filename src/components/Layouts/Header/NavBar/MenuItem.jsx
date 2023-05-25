import React from "react";

import { Link } from "react-router-dom";

const MenuItem = (props) => {
  const {
    link,
    text = "",
    socials,
    title = "",
    socialIcon = {},

  } = props;
  return (
    <li>
      <Link to={link} target={socials && "_blank" || ""} >
        {socials ? <img src={socialIcon} title={title} /> : text}
      </Link>
    </li>
  )
}

export default MenuItem;
