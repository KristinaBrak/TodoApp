import styled from "styled-components";

const NavBarStyled = styled.ul`
  display: flex;
  background: lightpink;
  list-style-type: none;
  flex-direction: column;
  padding-inline-start: 0;
  align-items: center;
  margin-top: -10px;
  margin-left: -10px;
  margin-right: -10px;

  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

export default NavBarStyled;
