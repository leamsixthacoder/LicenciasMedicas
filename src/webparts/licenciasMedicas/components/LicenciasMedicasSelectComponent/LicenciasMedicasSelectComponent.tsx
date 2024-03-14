/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react"
import { ILicenciasMedicasSelectComponentProps } from "./ILicenciasMedicasSelectComponentProps"
import Select from 'react-select'
const LicenciasMedicasSelectComponent: React.FC<ILicenciasMedicasSelectComponentProps> = (props) => {
    const { labelFor, labelName, options, isLoading, onSelect, isRequired } = props


    const handleClick = (selectedOption: any) => {
        onSelect(selectedOption)
    }



    return (

        <div className="w-2/4">
            <label htmlFor={labelFor} className="block text-sm font-medium leading-6 text-gray-900">
                <strong className='text-red-600'>{isRequired ? '*' : ''}</strong>{' '}{labelName}
            </label>
            <div className="mt-2">

                <Select options={options} onChange={handleClick} isLoading={isLoading} className="box-border w-full rounded-sm h-[30px] border-2 border-[#0058a6] " />
            </div>
        </div>

    )
}

export default LicenciasMedicasSelectComponent;