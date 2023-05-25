import React from "react";

import NavBar from "components/Layouts/Header/NavBar/Menu";

import logo from "assets/images/logo.png";

const Header = (props) => {
  const {
    itemCount = {},
    isEvictionReport=false
  } = props;
  return (
    <div className="header" style={{padding: !isEvictionReport && 0}}>
      <div className="sitewrapper">
        <a className="logo">
          <img src={logo}/>
        </a>
        <NavBar itemCount={itemCount} isEvictionReport={isEvictionReport}/>
      </div>
    </div>
  )
}

export default Header;
