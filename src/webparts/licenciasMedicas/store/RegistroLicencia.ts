import { create } from "zustand";
import { type RegistroLicencia } from "../types/IRegistroLicencia";

interface RegisterState {
    registerLeave: RegistroLicencia,
    setLeaveCost : (amountOfDays: number) =>void
}
export const UseRegisterStore = create<RegisterState>()((set, get) => {
    return {
        registerLeave: {
            colaborador: '',
            posicion: '',
            area: '',
            diagnostico: '',
            canthorasdia: 0,
            inicioLicencia: '',
            finLicencia: '',
            reingreso: '',
            recibida: '',
            cantdias: 0,
            costoLicencia: 0,
            rembolsoTss: 0,
            comentario: '',
        },
        setLeaveCost(amountOfDays: number) {
            const calculateCost = (0.60) * (47000 / 22.85) * amountOfDays
            const {registerLeave} = get()
            const updatedLeave = {...registerLeave, costoLicencia: calculateCost}
            set({registerLeave: updatedLeave })
        }

    }
})

