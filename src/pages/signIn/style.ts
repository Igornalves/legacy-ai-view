import styled from "styled-components";

export const DivConteiner = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme['gray-100']};
`

export const DivForms = styled.div`
    width: 446px;
    height: 610px;
    border-radius: 20px ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${props => props.theme['gray-200']};
`
