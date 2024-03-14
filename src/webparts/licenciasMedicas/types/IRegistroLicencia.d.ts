export interface RegistroLicencia {
    Code: string;
    Name: string
    Position: string
    Area: string
    Diagnostic: string
    TotalHours: number | null
    DepartureDate: Date
    EndDate:  Date
    ReEntryDate:  Date
    DateRecieved: Date
    TotalDays: number | null
    LicenseCost: number | null
    TSSRefund: number | null
    Comments: string
    Date:  Date
    User: string;

}