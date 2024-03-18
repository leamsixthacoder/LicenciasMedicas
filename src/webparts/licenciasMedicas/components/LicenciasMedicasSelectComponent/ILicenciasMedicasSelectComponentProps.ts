/* eslint-disable @typescript-eslint/no-explicit-any */


export interface ILicenciasMedicasSelectComponentProps {
    labelName: string,
    labelFor: string,
    options: any[],
    isLoading: boolean,
    isRequired?: boolean,
    selectedValue:any
    setSelectedValue:any
    onSelect: (selectedOption: any) => void
}