import styled from 'styled-components'

export const ContainerButton= styled.div`
    padding: 10px;
`

export const ButtonClick= styled.button<{color: "blue" | "red" | "green"}>`
    background-color: ${({theme, color, disabled})=>theme.colors[disabled ? "gray" : color].ligth};
    color: black;
    border-radius: 10px;
    border: none;
    margin: 10px;
    padding: 5px;
    cursor: ${({disabled}) => disabled ? "" : "pointer"};
    box-shadow: 0px 5px ${({theme, color, disabled})=>theme.colors[disabled ? "gray" : color].dark};
    line-height: 16px;
    font-size: larger;
    &:active {
        ${({disabled}) => disabled ? "" : "box-shadow: none; transform: translateY(5px);"};
    }
    &:hover {
        ${({disabled}) => disabled ? "" : "backdrop-filter: grayscale(0.5) opacity(0.8)"};
    }
`
