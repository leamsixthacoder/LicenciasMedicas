import * as React from "react"
import { ILicenciasMedicasButtonComponent } from "./ILicenciasMedicasButtonComponent"

const LicenciasMedicasButtonComponent: React.FC<ILicenciasMedicasButtonComponent> = (props) => {
    const {buttonName, buttonStyle, onClick} =props

    const handleOnClick = () => {
        onClick()
    }
    return (
        <button className={buttonStyle} onClick={handleOnClick}>{buttonName}</button>
    )
}

export default LicenciasMedicasButtonComponent