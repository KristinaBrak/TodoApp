import React from "react";
import { Link } from "react-router-dom";
import NavLinkStyled from "./NavLinkStyled";
import Anchor from "components/miscellaneous/Anchor";

const NavLink = ({ name, to }) => (
  <Link to={to} component={Anchor}>
    <NavLinkStyled>{name}</NavLinkStyled>
  </Link>
);

export default NavLink;
