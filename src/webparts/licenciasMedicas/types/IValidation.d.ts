import { RegistroLicencia } from "./IRegistroLicencia";

export const getValidation = (registerLeave: RegistroLicencia) => {

    let errors = {};
    
    if(!registerLeave.colaborador) errors['colaborador'] = 'Favor seleccionar un colaborador'

    return errors

}