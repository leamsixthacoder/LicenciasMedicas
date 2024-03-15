import { create } from "zustand";
import { type Employees } from "../types/IEmployees";
import { EmployeeService } from "../services/EmployeeService"


interface State {
    employees: Employees[] 
    selectedEmployee: Employees | null
    fetchEmployees: () => Promise<void>
    isLoading: boolean
    selectEmployee: (employeeId: string) => void

}

export const UseEmployeesStore = create<State>()((set, get) => {
    return {
        employees: [],
        selectedEmployee: null,
        isLoading: true,
        fetchEmployees: async () => {
            const employees = await EmployeeService.fetchEmployees()
            set({ employees })
            const isLoading = false
            set({ isLoading })
        },
        selectEmployee: (employeeId: string) => {
            const { employees } = get()
            const newEmployee = [...employees]
            const selectedEmployee = newEmployee.find((e: Employees) => e.EmployeeId === employeeId)
            set({selectedEmployee})
        },
    }
})