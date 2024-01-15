import { useNavigate } from "react-router-dom"
import { Button } from "../../components"

export const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Button title="Iniciar Sesión" handleClick={() => navigate("/login")} />
        </div>
    )
}