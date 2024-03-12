import { create } from "zustand";
import { type RegistroLicencia } from "../types/IRegistroLicencia";

interface RegisterState {
    registerLeave: RegistroLicencia,
    setLeaveDays : (amountOfDays: number) =>void
    setTssRefound : (amount:number) => void
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
        setLeaveDays(amountOfDays: number) {
            const calculateCost = (0.60) * (47000 / 22.85) * amountOfDays
            const {registerLeave} = get()
            const updatedLeave = {...registerLeave, costoLicencia: Math.round(calculateCost)}
            set({registerLeave: updatedLeave })
        },
        setTssRefound(amount: number) {
            const {registerLeave} = get()
            const costLeave = registerLeave.costoLicencia
            let calculateCost = costLeave - amount
            if(calculateCost < 0 ) calculateCost = 0
            const updatedLeave = {...registerLeave, costoLicencia: calculateCost}
            set({registerLeave: updatedLeave })
        }

    }
})

