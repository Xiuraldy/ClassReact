import { Button } from "../../components"
import { useGlobalContext } from "../../hooks"
import { ContainerHeader, MenuHeader, ItemMenu, TitleHeader } from "./style"

export const Header = () => {
    const {user, logout} = useGlobalContext();

    return (
        <ContainerHeader>
            <TitleHeader>Doctores Soachunos</TitleHeader>
            {user &&
            <>
                <MenuHeader>
                    <ItemMenu>Citas</ItemMenu>
                    <ItemMenu>Datos</ItemMenu>
                </MenuHeader>
                <Button title="Cerrar Sesión" color="red" handleClick={logout}></Button>
            </>
            }
        </ContainerHeader>
    )
}