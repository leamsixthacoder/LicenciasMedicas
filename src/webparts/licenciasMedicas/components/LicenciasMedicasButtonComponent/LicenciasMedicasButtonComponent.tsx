import * as React from "react"
import { ILicenciasMedicasButtonComponent } from "./ILicenciasMedicasButtonComponent"

const LicenciasMedicasButtonComponent: React.FC<ILicenciasMedicasButtonComponent> = (props) => {
    const {buttonName, buttonStyle, disabled, onClick} =props

    const handleOnClick = () => {
        onClick()
    }
    return (
        <button className={buttonStyle} disabled={disabled} onClick={handleOnClick}>{buttonName}</button>
    )
}

export default LicenciasMedicasButtonComponent