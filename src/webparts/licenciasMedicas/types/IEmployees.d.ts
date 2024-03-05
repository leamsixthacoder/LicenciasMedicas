
export interface Employees {
    Name: string
    EmployeeId: string
    Email: string
    Area: string
    BirthDate: string
    Position: Position
    Supervisor: Supervisor
    Manager: Manager
    Department: Department
  }
  
  export interface Position {
    PositionId: string
    DepartmentId: string
    PositionName: string
    EmployeeId: string
    SupervisorPositionId: string
  }
  
  export interface Supervisor {
    SupervisorName: string
    SupervisorId: string
    SupervisorEmail: string
  }
  
  export interface Manager {
    MangerName: string
    MangerId: string
    MangerEmail: string
  }
  
  export interface Department {
    DepartmentName: string
    ManagerId: string
    DepartmentId: string
  }