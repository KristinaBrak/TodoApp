import React from "react";
import { Link } from "react-router-dom";
import NavLinkStyled from "./NavLinkStyled";
import Anchor from "components/miscellaneous/Anchor";

const NavLink = ({ title, to }) => (
  <NavLinkStyled>
    <Link to={to} component={Anchor}>
      {title}
    </Link>
  </NavLinkStyled>
);

export default NavLink;
