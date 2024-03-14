/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ILicenciasMedicasInputComponentProps {
    labelName: string,
    stateName:string,
    inputType: string,
    placeholder?: string
    value?: any,
    isDisabled: boolean,
    isRequired?: boolean,
    onChange?: (value: any, inputName: string) => void,

}