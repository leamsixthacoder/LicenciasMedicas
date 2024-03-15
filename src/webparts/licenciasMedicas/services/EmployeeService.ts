import { Employees } from "../types/IEmployees";

const fetchEmployees = async (): Promise<Employees[]> => {
    try {
        const response = await fetch(`https://localhost:5001/api/medical-leave/Employee/getAllEmployees`);
        
        if (!response.ok) {
            throw new Error('Error al cargar colaboradores');
        }

        const employees = await response.json();
        return employees;
    } catch (error) {
        console.error('Error al cargar colaboradores:', error);
        throw error; // Re-throw the error to handle it at the calling site
    }
};

export const EmployeeService = {
    fetchEmployees
};
