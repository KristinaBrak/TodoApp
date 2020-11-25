import React from "react";
import NavLink from "./NavLink";
import NavBarStyled from "./NavBarStyle";
const NavBar = () => {
  return (
    <NavBarStyled>
      <NavLink title="Home" to="/" />
      <NavLink title="Todos" to="/todos" />
    </NavBarStyled>
  );
};

export default NavBar;
