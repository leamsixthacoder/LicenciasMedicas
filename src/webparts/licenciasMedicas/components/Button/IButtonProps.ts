export interface IButton {
    buttonName: string,
    buttonStyle:string,
    isDisabled?: boolean,
    onClick: () =>  void
}
