import React from "react";

const TopNav = ({ itemCount }) => {
  return (
    <div className="topPhNumber">
      <span className="phNum">(888) 727-3368</span>
      <a className="cartIcon"><span className="cartItemCount">{itemCount}</span></a>
      <a href="www.google.com" className="topLogin">Login</a>
    </div>
  )
}

export default TopNav;
