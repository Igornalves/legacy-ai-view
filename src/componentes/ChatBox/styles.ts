import styled from "styled-components";

export const ConteinerBox = styled.div`
    width: 797px;
    height: 114px;
    background: ${props => props.theme["gray-600"]};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10rem;

    border-radius: 20px;
`

export const DivBox = styled.div`
    width: 679px;
    height: 56px;
    background: ${props => props.theme["gray-900"]};
    border-radius: 20px;

    display: flex;
    align-items: center;
    padding-left: 20px;
`

export const ConteinerBoxTwo = styled.div`


`

export const InputForChat = styled.input`
    width: 620px;
    height: 52px;

    background: transparent;
    border: 0;
    font-size: 18px;
    color: ${props => props.theme['white']};

    &::placeholder {
        font-size: 18px;
        margin-left: 4px
    }

    &:focus {
        color: ${props => props.theme['white']};
        outline: none;
    }
`

export const ButtonPaper = styled.button`
    background: transparent;
    /* border: 0; */
`

export const InputBox = styled.input`


`

