import styled from "styled-components";
import Anchor from "components/miscellaneous/Anchor";

const NavLinkStyled = styled.li`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  font-size: 30px;
  margin: 0;
  border: 1px solid hsla(315, 100%, 36%, 1);
  border-collapse: collapse;

  &:active {
    background-color: hsla(315, 100%, 36%, 1);
    border-color: hsla(315, 100%, 36%, 1);
    color: white;
  }

  @media only screen and (min-width: 600px) {
    width: auto;
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: left;
    font-size: 24px;
    margin: 0;
    padding-left: 10px;
    padding-right: 10px;
    border: none;
  }
`;

export default NavLinkStyled;
