import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme['']};
        color: ${props => props.theme['gray-100']};
        -webkit-font-smoothing: antialiased;
        font-family: 'Epilogue', 'Inter', sans-serif;
    }

    
`

