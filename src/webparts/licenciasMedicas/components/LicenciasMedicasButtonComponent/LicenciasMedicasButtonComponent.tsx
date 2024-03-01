import * as React from "react"
import { ILicenciasMedicasButtonComponent } from "./ILicenciasMedicasButtonComponent"

const LicenciasMedicasButtonComponent: React.FC<ILicenciasMedicasButtonComponent> = (props) => {
    const {buttonName, buttonStyle} =props
    return (
        <button className={buttonStyle}>{buttonName}</button>
    )
}

export default LicenciasMedicasButtonComponent