import styled from 'styled-components'

export const ContainerFooter = styled.div`
    background-color: ${({theme})=>theme.colors.blue.ligth};
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: large;
`