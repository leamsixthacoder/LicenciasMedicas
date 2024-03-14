/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { type RegistroLicencia } from "../types/IRegistroLicencia";

interface RegisterState {
    registerLeave: RegistroLicencia,
    setRegisterLeave: (stateName: string, value: any) => void
    setLeaveDays: (amountOfDays: number, payRate: number) => void
    postRegisterLeave: (registerLeave: RegistroLicencia) => Promise<void>
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
            DepartureDate: new Date(),
            EndDate: new Date(),
            ReEntryDate: new Date(),
            DateRecieved: new Date(),
            TotalDays: null,
            LicenseCost: null,
            TSSRefund: null,
            Comments: '',
            Date: new Date(),
            User: ''
        },
        setRegisterLeave: (stateName: string, value: any) => {
            const { registerLeave } = get();
            let updatedValue: any;
        
            // Convert valid numeric strings to numbers
            if (stateName === 'TotalDays' || stateName === 'TSSRefund' || stateName === 'TotalHours') {
                if (typeof value === 'string' && !isNaN(parseFloat(value))) {
                    updatedValue = parseFloat(value);
                } else {
                    updatedValue = null; // Or handle invalid values appropriately
                }
            } else {
                updatedValue = value;
            }
        
            const updatedLeave = { ...registerLeave, [stateName]: updatedValue };
            set({ registerLeave: updatedLeave });
        },
        
        setLeaveDays: (amountOfDays: number, payRate: number) => {
            const calculateCost = (payRate / 23.83) * amountOfDays
            const { registerLeave } = get()
            const updatedCost = Math.round(calculateCost);
            const updatedLeave = { ...registerLeave, LicenseCost: updatedCost >= 0 ? updatedCost : 0 }
            set({ registerLeave: updatedLeave })

        },
        setTssRefound: (amount: number) => {
            const { registerLeave } = get()
            const costLeave = registerLeave.LicenseCost
            if (costLeave !== null) {
                const updatedCost = costLeave - amount
                const updatedLeave = { ...registerLeave, LicenseCost: updatedCost >= 0 ? updatedCost : 0 }
                set({ registerLeave: updatedLeave })
            }

        },

        postRegisterLeave: async (registerLeave: RegistroLicencia) => {
            try {
                const response = await fetch('https://localhost:5001/api/medical-leave/MedicalLeave', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(registerLeave)
                });

                if (!response.ok) {
                    throw new Error('Algo anda mal')
                }

                const responseData = await response.json();
                console.log('Guardado exitosamente')
                return responseData
            } catch (error) {
                console.log('Error')
            }
        }

    }
})

