import styled from "styled-components";

export const ConteinerDiv = styled.div`
    /* background-color: red; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 25px;
`

export const Text = styled.p`
    color: ${props => props.theme.white};
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const Links = styled.a`
    color: ${props => props.theme.white};
    margin-left: 10px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
