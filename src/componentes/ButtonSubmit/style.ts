import styled from "styled-components";

export const Conteiner = styled.div`
    /* background-color: red;   */
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ButtonSubmitExist = styled.button`
    width: 162px;
    height: 65px;
    border-radius: 10px;
    margin-top: 25px;
    margin-bottom: 35px;
    border: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${props => props.theme["gray-700"]};
    color: ${props => props.theme.white};
    cursor: pointer;

    &:hover {
        background: ${props => props.theme['gray-600']};
    }

    &:focus {
        border-color: ${props => props.theme['gray-600']};
    }
`
