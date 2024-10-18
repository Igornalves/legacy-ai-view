import styled from "styled-components";

export const ConteinerHome = styled.main`
    width: 100vw;
    height: 100vh;    
    background: ${props => props.theme['gray-600']};
`

export const DivRetangulo2 = styled.div`
    width: 468px;
    height: 100vh;
    border-radius: 0px 15px 15px 0px;
    display: flex;
    gap: 80px;
    padding-left: 35px;
    /* justify-content: center; */
    flex-direction: column;
    background: ${props => props.theme["gray-100"]};
`

export const Text1 = styled.text`
    color: ${props => props.theme["gray-300"]};
    font-size: 16px;
    margin-left: 5px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
