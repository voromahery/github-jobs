import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  place-content: flex-end;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const ListItem = styled.li``;

export const Button = styled.button`
  color: #b7bcce;
  border: 1px solid #b7bcce;
  box-sizing: border-box;
  border-radius: 4px;
  width: 36px;
  height: 36px;
  background-color: transparent;
  &:hover {
    color: #1e86ff;
    border: 1px solid #1e86ff;
    box-sizing: border-box;
    border-radius: 4px;
  }

  &:focus {
    background-color: #1e86ff;
    color: #ffffff;
  }
`;

export const Arrow = styled.button`
  color: #b7bcce;
  border: 1px solid #b7bcce;
  box-sizing: border-box;
  border-radius: 4px;
  width: 36px;
  height: 36px;
  background-color: transparent;
  &:hover {
    color: #1e86ff;
    border: 1px solid #1e86ff;
    box-sizing: border-box;
    border-radius: 4px;
  }
`;
