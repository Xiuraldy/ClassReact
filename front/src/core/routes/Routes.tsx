import {Routes as RoutesApp, Route} from "react-router-dom"
import { Doctor, Home, Login, Patients } from "../../modules"

export const Routes = () => {
    return (
        <RoutesApp>
            <Route path="/" element={<Home />} />           
            <Route path="/login" element={<Login />} />           
            <Route path="/doctors" element={<Doctor />} />
            <Route path="/patients" element={<Patients />} />           
        </RoutesApp>
    )
}