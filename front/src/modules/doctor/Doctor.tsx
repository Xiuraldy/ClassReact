import { useGlobalContext } from "../../hooks"

export const Doctor = () => {
    const {user} = useGlobalContext()
    return (
        <div>
            Doctorsito: {user?.name}
        </div>
    )
}