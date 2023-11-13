"use client";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
      font-size: 16px; 
      font-family: Arial, sans-serif; 
      line-height: 1.6; 
      background-color: #F9F9F9; 
      height: 100%;
    }

    body {
      margin: 0; 
      padding: 0; 
      height: 100%;
    }

    button , li , a {
      cursor: pointer;
    }
`;

export const LayoutContainer = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
