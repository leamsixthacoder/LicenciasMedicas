import { create } from "zustand";
import { type RegistroLicencia } from "../types/IRegistroLicencia";

interface RegisterState {
    registerLeave: RegistroLicencia,
    setRegisterLeave: (stateName: string, value: keyof RegistroLicencia) => void
    setLeaveDays: (amountOfDays: number, payRate: number) => void
    setTssRefound: (amount: number) => void
}
export const UseRegisterStore = create<RegisterState>()((set, get) => {
    return {
        registerLeave: {
            colaborador: '',
            posicion: '',
            area: '',
            diagnostico: '',
            canthorasdia: null,
            inicioLicencia: '',
            finLicencia: '',
            reingreso: '',
            recibida: '',
            cantdias: null,
            costoLicencia: null,
            rembolsoTss: null,
            comentario: '',
        },
        setRegisterLeave(stateName: string, value: keyof RegistroLicencia) {
            const { registerLeave } = get()
            const updatedLeave = { ...registerLeave, [stateName]: value };
            set({ registerLeave: updatedLeave })

        },
        setLeaveDays(amountOfDays: number, payRate: number) {
            const calculateCost = (payRate / 23.83) * amountOfDays
            const { registerLeave } = get()
            const updatedCost = Math.round(calculateCost);
            const updatedLeave = { ...registerLeave, costoLicencia: updatedCost >= 0 ? updatedCost : 0 };
            set({ registerLeave: updatedLeave })
        },
        setTssRefound(amount: number) {
            const { registerLeave } = get()
            const costLeave = registerLeave.costoLicencia
            if (costLeave !== null) {
                const updatedCost = costLeave - amount
                const updatedLeave = { ...registerLeave, costoLicencia: updatedCost >= 0 ? updatedCost : 0 }
                set({ registerLeave: updatedLeave })
            }

        }

    }
})

