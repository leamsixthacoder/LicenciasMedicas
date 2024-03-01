import * as React from "react"
import { ILicenciasMedicasSelectComponentProps } from "./ILicenciasMedicasSelectComponentProps"
import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const LicenciasMedicasSelectComponent: React.FC<ILicenciasMedicasSelectComponentProps> = (props) => {

    const { labelFor, labelName } = props
    return (


        <div className="grow">
            <label htmlFor={labelFor} className="block text-sm font-medium leading-6 text-gray-900">
                {labelName}
            </label>
            <div className="mt-2">

                <Select options={options} isLoading={true} className="box-border w-full rounded-sm h-[30px] border-2 border-[#0058a6] " />
            </div>
        </div>

    )
}

export default LicenciasMedicasSelectComponent;