import { useMemo, useState } from "react"
import { Button, Input } from "../../components"
import { ContainerLogin, ContainerLoginImg, FragmentLogin, TextError, TextLoading, TextLogin, ContainerEyes } from "./style"
import { useLogin } from "../../hooks/useLogin"
import { CircleLoader } from "react-spinners"
// import imgLogin from "../../assets/img/login.png"

export const Login = () => {

    const [userName, setUserName] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const positionEye = useMemo(() => {
        const percentage = Math.min(userName.length/27, 1)
        return Math.floor((percentage*54) + 5)
    }, [userName])
    const [coverEyes, setCoverEyes] = useState(false)

    const {loading, error, login} = useLogin()

    // useEffect(() => {
    //     console.log("hola")
    // }, [])

    return (
        <ContainerLoginImg>
            <ContainerLogin>
                {error && <TextError>{error}</TextError>}
                {loading && <TextLoading>{loading && "cargando..."}<CircleLoader loading={loading} /></TextLoading>}
                <FragmentLogin>
                    <TextLogin>Usuario</TextLogin> <Input value={userName} handleChange={setUserName} />
                </FragmentLogin>
                <FragmentLogin>
                    <TextLogin>Clave</TextLogin> <Input value={userPassword} handleChange={setUserPassword} handleClick={() => setCoverEyes(true)} handleBlur={() => setCoverEyes(false)} />
                </FragmentLogin>
                <Button title="Inicia Sesión" handleClick={() => login(userName, userPassword)}/>
            </ContainerLogin>
            {/* <ContentImgLogin src={imgLogin} /> */}
        </ContainerLoginImg>
    )
}