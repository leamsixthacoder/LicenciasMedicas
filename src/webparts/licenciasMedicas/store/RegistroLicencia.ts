/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { type RegistroLicencia } from "../types/IRegistroLicencia";

interface RegisterState {
    registerLeave: RegistroLicencia,
    setRegisterLeave: (stateName: string, value: any) => void
    setLeaveDays: (amountOfDays: number, payRate: number) => void
    setTssRefound: (amount: number) => void
}
export const UseRegisterStore = create<RegisterState>()((set, get) => {
    return {
        registerLeave: {
            Code: '',
            Name: '',
            Position: '',
            Area: '',
            Diagnostic: '',
            TotalHours: null,
            DepartureDate: '',
            EndDate: '',
            ReEntryDate: '',
            DateRecieved: '',
            TotalDays: null,
            LicenseCost: null,
            TSSRefund: null,
            Comments: '',
        },
        setRegisterLeave: (stateName: string, value: any) =>{
            const { registerLeave } = get()
            const updatedLeave = { ...registerLeave, [stateName]: value };
            set({ registerLeave: updatedLeave })
            // console.log(registerLeave)
        },
        setLeaveDays: (amountOfDays: number, payRate: number) =>{
            const calculateCost = (payRate / 23.83) * amountOfDays
            const { registerLeave } = get()
            const updatedCost = Math.round(calculateCost);
            const updatedLeave = { ...registerLeave, LicenseCost: updatedCost >= 0 ? updatedCost : 0 }
            set({ registerLeave: updatedLeave })

        },
        setTssRefound: (amount: number) =>{
            const { registerLeave } = get()
            const costLeave = registerLeave.LicenseCost
            if (costLeave !== null) {
                const updatedCost = costLeave - amount
                const updatedLeave = { ...registerLeave, LicenseCost: updatedCost >= 0 ? updatedCost : 0 }
                set({ registerLeave: updatedLeave })
            }

        }

    }
})

