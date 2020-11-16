import React from "react";
import { Link } from "react-router-dom";
import NavLinkStyled from "./NavLinkStyled";
import Anchor from "components/miscellaneous/Anchor";

const NavLink = ({ title, to }) => (
  <Link to={to} component={Anchor}>
    <NavLinkStyled>{title}</NavLinkStyled>
  </Link>
);

export default NavLink;
