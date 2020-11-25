import styled from "styled-components";

const Button = styled.button`
  border-color: var(--pink);
  background-color: var(--pink);
  color: var(--white);
  border-radius: 0.2em;
  width: 8em;
  height: auto;
  margin-top: 0.2em;

  &:hover {
    background-color: var(--purple);
    border-color: var(--purple);
  }
  &:active {
    background-color: var(--deep-purple);
    border-color: var(--deep-purple);
  }

  &:focus {
    outline: none;
    background-color: var(--deep-purple);
    border-color: var(--deep-purple);
  }

  &::selection {
    background: var(--purple);
    color: var(--white);
  }
`;

export default Button;
