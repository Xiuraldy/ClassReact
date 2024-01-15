import { useContext } from "react";
import { GlobalContext } from "./context";
import { type } from "os";

export type User = {
    name: string;
    rol: "doctors" | "patients";
} 

export interface GlobalContextValue {
    user: User | null;
    setUser: (value: User) => void;
    logout: () => void;
}

export const useGlobalContext = () => useContext(GlobalContext) as GlobalContextValue