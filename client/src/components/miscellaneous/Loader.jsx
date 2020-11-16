import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  border: 5px solid hsla(315, 100%, 36%, 0);
  border-radius: 50%;
  border-top: 5px solid hsla(315, 100%, 36%, 1);
  width: 10px;
  height: 10px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: ${spin} 2s linear infinite;
`;

export default Loader;
