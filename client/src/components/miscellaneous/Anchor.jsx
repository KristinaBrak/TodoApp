import styled from "styled-components";

const Anchor = styled.a`
  text-decoration: none;
  color: hsla(315, 100%, 36%, 1);

  &:hover {
    color: white;
  }

  &:active {
    color: hsla(315, 63%, 70%, 1);
  }
`;

export default Anchor;
