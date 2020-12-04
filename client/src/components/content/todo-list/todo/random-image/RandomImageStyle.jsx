import styled from "styled-components";

const RandomImageStyle = styled.div`
  width: 160px;
  display: flex;
  justify-content: center;
  background-color: hsla(360, 100%, 100%, 0);

  & img {
    height: 80px;
    max-width: 160px;
  }
`;

export default RandomImageStyle;
