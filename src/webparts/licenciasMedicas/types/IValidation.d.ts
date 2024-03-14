import { RegistroLicencia } from "./IRegistroLicencia";

export const getValidation = (registerLeave: RegistroLicencia) => {

    let errors = {};
    
    if(!registerLeave.Name) errors['Name'] = 'Favor seleccionar un colaborador'
    if(!registerLeave.Diagnostic) errors['Diagnostic'] = 'Favor introducir diagnostico'
    if(!registerLeave.DepartureDate) errors['DepartureDate'] = 'Favor seleccionar la fecha de inicio'
    if(!registerLeave.EndDate) errors['EndDate'] = 'Favor seleccionar la fecha de fin'
    return errors

}