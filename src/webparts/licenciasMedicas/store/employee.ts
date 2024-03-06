import { create } from "zustand";
import { type Employees } from "../types/IEmployees";


interface State {
    employees: Employees[]
    selectedEmployee: Employees | null
    fetchEmployees: () => Promise<void>
    isLoading: boolean
    selectEmployee: (employeeId: string) => void;

}

export const UseEmployeesStore = create<State>()((set, get) => {
    return {
        employees: [],
        selectedEmployee: null,
        isLoading: true,
        fetchEmployees: async () => {
            const res = await fetch(`https://localhost:5001/api/medical-leave/Employee/getAllEmployees`)
            const json = await res.json()

            const employees = json
            const isLoading = false
            set({ employees })
            set({ isLoading })
        },
        selectEmployee: (employeeId: string) => {
            const { employees } = get()
            const newEmployee = [...employees]
            const selectedEmployee = newEmployee.find((e: Employees) => e.EmployeeId === employeeId);
            console.log(selectedEmployee)
        },
    }
})