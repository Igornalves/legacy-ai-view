import styled from "styled-components";

export const ConteinerDiv = styled.div`
    width: 390px;
    height: 56px;
    margin-top: 38px;
    gap: 4px;
    border-radius: 28px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    background: ${props => props.theme['gray-500']};
`

export const InputConversas = styled.input`
    height: 5vh;
    width: 285px;
    margin-left: 4px;
    /* background-color: red; */
    background: transparent;
    border: 0;
    font-size: 18px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    &:focus {
        color: ${props => props.theme['white']};
        outline: none;
    }
`

