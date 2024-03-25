/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ITextarea {
    labelName: string,
    stateName:string,
    value?: any,
    onChange?: (value: any, inputName: string) => void,
}