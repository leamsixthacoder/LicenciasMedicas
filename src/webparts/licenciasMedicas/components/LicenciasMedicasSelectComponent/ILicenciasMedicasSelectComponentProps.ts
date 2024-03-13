/* eslint-disable @typescript-eslint/no-explicit-any */



export interface ILicenciasMedicasSelectComponentProps {
    labelName: string,
    labelFor: string,
    options: any[],
    isLoading: boolean,
    onSelect: (selectedOption: any, stateName: string) => void
}