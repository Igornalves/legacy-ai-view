import styled from "styled-components";

export const Conteiner = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const DivFormsInput = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
`

export const InputForms = styled.input`
    width: 270px;
    height: 44px;
    margin-top: 12px;
    padding: 5px;
    border: 0;
    border-radius: 10px;
    background-color: ${props => props.theme["gray-400"]};
    color: ${props => props.theme['white']};
    font-size: 20px;

    &:focus {
        border: 0;
    }

`

export const TextForms = styled.text`
    color: ${props => props.theme['white']};
    font-size: 20px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
