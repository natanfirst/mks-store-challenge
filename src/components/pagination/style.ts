import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const PageList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export const PageItem = styled.li`
  margin: 0;
`;

export const PageButton = styled.button`
  padding: 5px 15px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  color: #333;
  border-radius: 3px;
  margin: 5px;
  text-decoration: none;

  &.active {
    background-color: ${props => props.theme.colors.primary};
    color: white;
  }
`;
