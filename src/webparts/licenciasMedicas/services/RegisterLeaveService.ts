import { RegistroLicencia } from "../types/IRegistroLicencia";

const postRegisterLeave = async (registerLeave: RegistroLicencia) => {
    try {
        const response = await fetch('https://apisadministrativos.azurewebsites.net/SharepointAPIs/api/medical-leave/MedicalLeave', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerLeave)
        });

        if (!response.ok) {
            throw new Error('Algo anda mal')
        }

        const responseData = await response.json();
        console.log('Guardado exitosamente')
        return responseData
    } catch (error) {
        console.log('Error')
        throw error; // Re-throw the error to handle it at the calling site
    }
}


export const RegisterLeaveService = {
    postRegisterLeave
};