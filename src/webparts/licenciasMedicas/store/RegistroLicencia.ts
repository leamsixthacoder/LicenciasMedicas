/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { type RegistroLicencia } from "../types/IRegistroLicencia";
import { calculateCost } from "../logic/CalculateCost";
import { RegisterLeaveService } from "../services/RegisterLeaveService";

const initialRegisterLeave: RegistroLicencia = {
    Code: '',
    Name: '',
    Position: '',
    Area: '',
    Diagnostic: '',
    TotalHours: 0,
    DepartureDate: new Date(),
    EndDate: new Date(),
    ReEntryDate: new Date(),
    DateRecieved: new Date(),
    TotalDays: 0,
    LicenseCost: 0,
    TSSRefund: 0,
    Comments: '',
    Date: new Date(),
    User: ''
};
export interface RegisterState {
    registerLeave: RegistroLicencia,
    setRegisterLeave: (stateName: string, value: any, payRate?: number) => void
    setLeaveTotalCost: (leaveTotalCost: number) => void
    postRegisterLeave: (registerLeave: RegistroLicencia) => Promise<void>
    calculateCost: (totalDays: number | null, salary: number, tssRefound: number | null) => void
    resetRegisterLeaveState: () => void
}
export const UseRegisterStore = create<RegisterState>()((set, get) => {
    return {
        registerLeave: initialRegisterLeave,
        setRegisterLeave: (stateName: string, value: any, payRate?: number) => {
            const { registerLeave, setLeaveTotalCost } = get();
            let updatedValue: any
            let isCalculate: boolean = false
            if (stateName === 'TotalDays' || stateName === 'TSSRefund' || stateName === 'TotalHours') {
                if (typeof value === 'string' && !isNaN(parseFloat(value))) {
                    updatedValue = parseFloat(value);
                    isCalculate = true
                } else {
                    updatedValue = null;
                }
            } else {
                updatedValue = value;

            }

            const updatedLeave = { ...registerLeave, [stateName]: updatedValue };
            set({ registerLeave: updatedLeave });
            if (isCalculate) {
                console.log(updatedLeave.TotalDays )
                console.log( payRate)
                console.log(updatedLeave.TSSRefund)
                const updatedLeaveCost = calculateCost(updatedLeave.TotalDays, payRate, updatedLeave.TSSRefund)
                setLeaveTotalCost(updatedLeaveCost)
            }
        },

        setLeaveTotalCost: (leaveTotalCost: number) => {
            const { registerLeave } = get()
            const updatedLeave = { ...registerLeave, LicenseCost: leaveTotalCost >= 0 ? leaveTotalCost : 0 }
            set({ registerLeave: updatedLeave })

        },

        postRegisterLeave: async (registerLeave: RegistroLicencia) => {
            await RegisterLeaveService.postRegisterLeave(registerLeave)
        },
        calculateCost: calculateCost,
        resetRegisterLeaveState: () => {
            const registerLeave = initialRegisterLeave
            set({registerLeave})
        }

    }
})

