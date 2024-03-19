import * as React from "react"
import { ILicenciasMedicasButtonComponent } from "./ILicenciasMedicasButtonComponent"

const LicenciasMedicasButtonComponent: React.FC<ILicenciasMedicasButtonComponent> = (props) => {
    const {buttonName, buttonStyle, isDisabled, onClick} =props
    
    const handleOnClick = () => {
        onClick()
    }
    return (
        <button className={`${buttonStyle} ${isDisabled ? `bg-slate-400 text-gray-500`: ``}`} disabled={isDisabled} onClick={handleOnClick}>{buttonName}</button>
    )
}

export default LicenciasMedicasButtonComponent