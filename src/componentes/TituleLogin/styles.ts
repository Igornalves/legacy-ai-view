import styled from "styled-components"

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