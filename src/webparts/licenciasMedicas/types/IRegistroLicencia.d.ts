export interface RegistroLicencia {
    Code: string;
    Name: string
    Position: string
    Area: string
    Diagnostic: string
    TotalHours: number | null
    DepartureDate: string
    EndDate: string
    ReEntryDate: string
    DateRecieved: string
    TotalDays: number | null
    LicenseCost: number | null
    TSSRefund: number | null
    Comments: string

}