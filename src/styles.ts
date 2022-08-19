import styled from "styled-components";

export const Main = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  font-family: "Segoe UI", sans-serif;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;
export const TodoList = styled.ul`
  margin: 15px 0;
  display: grid;
  grid-gap: 15px;
  max-height: 300px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #f9f9fd;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #5eefd2;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: #f9f9fd;
  }
`;
