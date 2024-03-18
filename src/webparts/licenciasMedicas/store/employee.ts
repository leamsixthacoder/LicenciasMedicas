import { create } from "zustand";
import { type Employees } from "../types/IEmployees";
import { EmployeeService } from "../services/EmployeeService"

const initialEmployees: Employees = {

    Name: '',
    Position: '',
    Area: '',
    Department: '',
    EmployeeId: '',
    Salary: 0
};
interface State {
    employees: Employees[]
    selectedEmployee: Employees 
    fetchEmployees: () => Promise<void>
    isLoading: boolean
    selectEmployee: (employeeId: string) => void
    resetSelectedEmployeeState: () => void
}

export const UseEmployeesStore = create<State>()((set, get) => {
    return {
        employees: [],
        selectedEmployee: initialEmployees,
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
            set({ selectedEmployee })
        },
        resetSelectedEmployeeState: () => {
            const selectedEmployee = initialEmployees
            set({ selectedEmployee })
        }
    }
})