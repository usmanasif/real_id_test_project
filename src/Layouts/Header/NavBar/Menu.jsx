import React from "react";
import TopNav from "./TopNav";
import MenuItem from "./MenuItem";

const NavBar = (props) => {
  const {
    itemCount = {},
    isEvictionReport = false
  } = props;

  return (
    <ul className="menu" style={{ marginTop: !isEvictionReport && 0 }}>
      {isEvictionReport && <TopNav itemCount={itemCount} />}
      <MenuItem link="/credit-checks" text="Credit Checks" />
      <MenuItem link="/eviction-report" text="Eviction Reports" />
      <MenuItem link="" text="Background Checks" />
      <MenuItem link="" text="Pricing" />
      <MenuItem link="" text="FAQ" />
      <MenuItem link="" text="Sign Up" />
    </ul>
  )
}

export default NavBar;
