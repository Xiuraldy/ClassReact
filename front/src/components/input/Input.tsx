import { ContainerInput, InputText } from "./style"

interface InputProps {
    value: string
    handleChange: (newValue: string) => void
    handleClick?: () => void
    handleBlur?: () => void
}

export const Input = ({value, handleChange, handleClick, handleBlur}: InputProps) => {
    return(
        <ContainerInput >
            <InputText type="text" value={value} onChange={(e) => {
                    console.log("e ->",e)
                    handleChange(e.target.value)
                }} 
                onFocus={handleClick}
                onBlur={handleBlur}
                />
        </ContainerInput>
    )
}