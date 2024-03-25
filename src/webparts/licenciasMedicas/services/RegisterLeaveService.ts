import { RegistroLicencia } from "../types/IRegisterLeave";

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
            return false
        }

        const responseData = await response.json();
        return responseData
    } catch (error) {
        console.log('Error')
        return false// Re-throw the error to handle it at the calling site
    }
}


export const RegisterLeaveService = {
    postRegisterLeave
};