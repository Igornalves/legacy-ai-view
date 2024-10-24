import styled from "styled-components";

export const ConteinerHome = styled.main`
    width: 100vw;
    height: 100vh;    
    position: relative;
    background: ${props => props.theme["gray-800"]};
    display: flex;
    flex-direction: row;
`

export const DivRetangulo2 = styled.div`
    width: 468px;
    height: 100vh;
    border-radius: 0px 15px 15px 0px;
    display: flex;
    gap: 50px;
    padding-left: 35px;
    /* justify-content: center; */
    flex-direction: column;
    background: ${props => props.theme["gray-100"]};
    overflow: hidden
`

export const Text1 = styled.text`
    color: ${props => props.theme["gray-300"]};
    font-size: 16px;
    margin-left: 5px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const DivConta = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    /* display: flex;
    justify-content: center; */
    padding: 3rem;
`
