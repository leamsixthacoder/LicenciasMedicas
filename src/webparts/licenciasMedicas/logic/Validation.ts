/* eslint-disable @typescript-eslint/no-explicit-any */
import { RegistroLicencia } from "../types/IRegistroLicencia";

export const getValidation = (registerLeave: RegistroLicencia) => {

    const errors: any = {};

    if (!registerLeave.Name) errors.Name = 'Favor seleccionar un colaborador'
    if (!registerLeave.Diagnostic) errors.Diagnostic = 'Favor introducir diagnostico'
    if (!registerLeave.DepartureDate) errors.DepartureDate = 'Favor seleccionar la fecha de inicio'
    if (!registerLeave.EndDate) errors.EndDate = 'Favor seleccionar la fecha de fin'
    if (registerLeave.EndDate && registerLeave.DepartureDate && registerLeave.EndDate < registerLeave.DepartureDate) {
        errors.EndDate = 'La fecha de fin no puede ser anterior a la fecha de inicio';
    }
    return errors

}