import styled from "styled-components";

export const DivConteiner = styled.div`
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

export const TextTitule = styled.text`
    color: ${props => props.theme['white']};
    font-size: 32px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const Image = styled.img`
    width: 147px;
`

export const DivTitule = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`
