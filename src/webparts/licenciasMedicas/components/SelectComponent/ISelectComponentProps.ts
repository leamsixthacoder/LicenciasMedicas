/* eslint-disable @typescript-eslint/no-explicit-any */


export interface ISelectComponent {
    labelName: string,
    labelFor: string,
    options: any[],
    isLoading: boolean,
    isRequired?: boolean,
    selectedValue:any
    setSelectedValue:any
    onSelect: (selectedOption: any) => void
}