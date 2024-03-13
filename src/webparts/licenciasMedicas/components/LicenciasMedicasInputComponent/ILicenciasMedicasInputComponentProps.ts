/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ILicenciasMedicasInputComponentProps {
    labelName: string,
    labelFor:string,
    inputType: string,
    placeholder?: string
    value?: any,
    isDisabled: boolean,
    isRequired?: boolean,
    onChange?: (value: any, inputName: string) => void,

}