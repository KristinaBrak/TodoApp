import styled from "styled-components";

const TodoAddFormStyle = styled.div`
  --pink: hsla(351, 100%, 86%, 1);
  --purple: hsla(315, 63%, 70%, 1);
  --deep-purple: hsla(315, 100%, 36%, 1);
  --white: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & input[type="text"] {
    border: 1px solid var(--pink);
    border-radius: 0.3em;
    width: 15em;
  }

  & input[type="text"]:focus {
    border-color: var(--deep-purple);
    outline: none;
  }

  & input[type="text"]::selection {
    background: var(--purple);
    color: var(--white);
    outline: none;
  }
`;

export default TodoAddFormStyle;
