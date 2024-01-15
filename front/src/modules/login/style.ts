import styled from "styled-components";

export const ContainerLogin = styled.div`
    height: auto;
    width: auto;
    padding: 70px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: aliceblue;
    border: 5px solid ${({theme})=>theme.colors.blue.dark};
`

export const FragmentLogin = styled.div`
    margin: 10px;
`

export const TextLogin = styled.div`
    background-color: ${({theme})=>theme.colors.blue.dark};
    color: aliceblue;
    transform: translateY(6px);
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    text-align: center;
    font-size: 18px;
`

export const TextError = styled.div`
    background-color: ${({theme})=>theme.colors.red.ligth};
    color: ${({theme})=>theme.colors.red.dark};
    padding: 5px;
    border-radius: 5px;
    transition: 2s;
    transform: translateY(-40px);
`

export const TextLoading = styled.div`
    background-color: ${({theme})=>theme.colors.gray.ligth};
    color: ${({theme})=>theme.colors.gray.dark};
    padding: 5px;
    border-radius: 5px;
    transition: 2s;
    transform: translateY(-40px);
`

export const ContentImgLogin = styled.img`
    width: 400px;
    margin-left: -50px;
    @media (max-width: 800px){
        margin-top: -150px;
        margin-left: 0px;
    }
`

export const ContainerLoginImg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
`

export const ContainerEyes = styled.div`
    display: flex;
    background-image: url(https://www.pngall.com/wp-content/uploads/2017/01/Doctor-Needle-PNG-Clipart.png);

`
