import { useGlobalContext } from "../../hooks"

export const Patients = () => {
    const {user} = useGlobalContext()
    return (
        <div>
            Paciente: {user?.name}
        </div>
    )
}