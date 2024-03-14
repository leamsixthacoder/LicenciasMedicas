/* eslint-disable @typescript-eslint/no-explicit-any */

export interface ILicenciasMedicasSelectComponentProps {
    labelName: string,
    labelFor: string,
    options: any[],
    isLoading: boolean,
    isRequired?: boolean,
    onSelect: (selectedOption: any) => void
}