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

    background: ${props => props.theme["gray-100"]};
`
