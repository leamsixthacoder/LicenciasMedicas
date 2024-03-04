import * as React from "react"
import { ILicenciasMedicasTextareaComponent } from "./ILicenciasMedicasTextareaComponent"

const LicenciasMedicasTextareaComponent: React.FC<ILicenciasMedicasTextareaComponent> = (props) => {

    const {labelName, labelFor } = props
    return (
        <div className="w-full">
            <label htmlFor={labelFor} className="block text-sm font-medium leading-6 text-gray-900">
                {labelName}
            </label>
            <div className="mt-2">
                <textarea
                    id={labelFor}
                    name={labelFor}
                    rows={3}
                    className="block w-full h-16 rounded-sm border-2 "
                    defaultValue={''}
                />
            </div>
        </div>
    )
}

export default LicenciasMedicasTextareaComponent