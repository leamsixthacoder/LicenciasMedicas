import { create } from "zustand";
import { type Employees } from "../types/IEmployees";


interface State {
    employees: Employees[]
    selectedEmployee: Employees | null
    fetchEmployees: () => Promise<void>
    isLoading: boolean
    selectEmployee: (employeeId: string) => void;

}

export const UseEmployeesStore = create<State>()((set) => {
    return {
        employees: [],
        selectedEmployee: null,
        isLoading: true,
        fetchEmployees: async () => {
            const res = await fetch(`https://apisadministrativos.azurewebsites.net/SharepointAPIs/api/Employee/getAllEmployees`)
            const json = await res.json()

            const employees = json
            const isLoading = false
            set({ employees })
            set({ isLoading })
        },
        selectEmployee: (employeeId: string) => {
            const selectedEmployee = set((state) => ({ selectedEmployee: state.employees.find((e) => e.EmployeeId === employeeId) }));
        },
    }
})