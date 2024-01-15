import styled from 'styled-components'

export const ContainerInput= styled.div`
`

export const InputText = styled.input`
    padding: 10px;
    background-color: transparent;
    z-index: 2;
    font-size: large;
    border-radius: 10px;
    border: none;
    outline: 1px solid black;
    transition: .2s;
    &:focus {
        outline: 1px solid ${({theme})=>theme.colors.blue.dark};
        border: none;
        z-index: 1;
    }
`
