import React from "react";
import { Link } from "react-router-dom";
import NavLinkStyled from "./NavLinkStyled";
import Anchor from "components/miscellaneous/Anchor";
import Button from "components/miscellaneous/Button";

const NavLink = ({ title, to }) => (
  <NavLinkStyled>
    <Link to={to} component={Anchor}>
      {title}
    </Link>
  </NavLinkStyled>
);

export default NavLink;
