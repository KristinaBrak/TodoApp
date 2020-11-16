import React from "react";
import NavLink from "./NavLink";

const NavBar = () => {
  return (
    <ul className="nav-bar">
      <NavLink title="Home" to="/" />
      <NavLink title="Todos" to="/todos" />
    </ul>
  );
};

export default NavBar;
