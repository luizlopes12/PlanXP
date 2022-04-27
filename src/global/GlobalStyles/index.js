import { createGlobalStyle } from "styled-components";

const bgColor = "#1e1e1e";
const textPrimary = "#ffffff";

const GlobalStyle = createGlobalStyle`

    
    *, body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: 'Montserrat', sans-serif;
        color: ${textPrimary};
    }
    body{
        background-color: ${bgColor};
    }

`;

export default GlobalStyle;
