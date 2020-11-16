import React from "react";
import NavLink from "./NavLink";

const NavBar = () => {
  return (
    <ul className="nav-bar">
      <NavLink name="Home" to="/" />
      <NavLink name="Todos" to="/todos" />
    </ul>
  );
};

export default NavBar;
