import styled from "styled-components";

const Button = styled.button`
  text-decoration: none;
  color: hsla(315, 100%, 36%, 1);

  &:hover {
    color: white;
  }

  &:active {
    color: hsla(315, 63%, 70%, 1);
  }
`;

export default Button;
