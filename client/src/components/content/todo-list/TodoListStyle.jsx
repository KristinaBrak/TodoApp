import styled from "styled-components";

const TodoListStyle = styled.div`
  background-color: white;
  color: hsla(315, 100%, 36%, 1);
  margin: auto;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-around;
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding: 10px 10px 30px 10px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 10px 0 -5px #eee,
    0 10px 1px -4px rgba(0, 0, 0, 0.15), 0 20px 0 -10px #eee,
    0 20px 1px -9px rgba(0, 0, 0, 0.15);
  & body {
    background-color: whitesmoke;
  }
`;

export default TodoListStyle;
