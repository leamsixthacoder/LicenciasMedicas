/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IDatePickerComponent {
    labelName: string,
    placeholder:string,   
    stateName:string, 
    value?: Date | string,
    isRequired?: boolean,
    onChange?: (value: Date | string, inputName: string) => void,
}