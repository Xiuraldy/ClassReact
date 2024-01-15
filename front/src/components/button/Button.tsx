import { useEffect } from "react"
import { ButtonClick, ContainerButton } from "./style"

interface ButtonProps {
        handleClick: () => void
        title?: string
        color?: "blue" | "red" | "green"
        disabled?: boolean
    }
export const Button = ({handleClick, title, color="blue", disabled}: ButtonProps) => {

    useEffect(() => {
      const prueba = () => console.log("evento")
      document.addEventListener("focusout", prueba)
      return () => document.removeEventListener("focusout", prueba)
    }, [])
    
    return (
        <>
            <ContainerButton onClick={() => console.log("Oprimi este boton :D")}>
                <ButtonClick disabled={disabled} color={color} onClick={(e) => {
                        console.log("e ->",e)
                        e.stopPropagation()
                        handleClick()
                    }}>
                    {title ?? 'click'}
                </ButtonClick>
            </ContainerButton>
        </>
    )
}