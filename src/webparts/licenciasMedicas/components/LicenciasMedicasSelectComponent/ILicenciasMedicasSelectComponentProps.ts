

export interface ILicenciasMedicasSelectComponentProps {
    labelName: string,
    labelFor: string,
    options: unknown[],
    isLoading: boolean,
    onSelect: (selectedOption: unknown) => void
}