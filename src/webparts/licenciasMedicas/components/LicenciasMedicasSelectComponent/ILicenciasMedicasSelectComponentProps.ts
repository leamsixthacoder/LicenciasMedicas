

export interface ILicenciasMedicasSelectComponentProps {
    labelName: string,
    labelFor: string,
    options: unknown[],
    isLoading: boolean,
    value?: any,
    onSelect: (selectedOption: unknown) => void
}