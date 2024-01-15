import styled from 'styled-components'

export const ContainerHeader = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({theme})=>theme.colors.blue.main};
`

export const MenuHeader = styled.div`
    width: 50%;
    background-color: aliceblue;
    font-size: 20px;
    color: black;
    padding: 5px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin: 10px;
    height: 50%;
`

export const TitleHeader = styled.div`
    font-size: 20px;
    line-height: 15px;
    color: aliceblue;
    padding: 20px;
`

export const ItemMenu = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
    margin: 10px;
    font-style: italic;

    &:hover {
        transition: 0.5s;
        transform: rotate3d(1, 1, 1, 5deg);
    }
`