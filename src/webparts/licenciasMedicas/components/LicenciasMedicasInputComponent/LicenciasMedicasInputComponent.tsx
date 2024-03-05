import * as React from 'react'
import type { ILicenciasMedicasInputComponentProps } from './ILicenciasMedicasInputComponentProps'

const LicenciasMedicasInputComponent: React.FC<ILicenciasMedicasInputComponentProps> = (props) => {

    const { labelName, inputType, labelFor, isDisabled, value} = props
    const disableAttribute = isDisabled ? { disabled: true } : {};
    const disableStyle = isDisabled ? 'bg-blue-200' : ''
    return (
        <div className='w-2/4'>
            <label htmlFor={labelFor.toLowerCase()} className='block text-sm font-medium leading-6 text-gray-900'>{labelName}</label>
            <div className='mt-2'>
                <input type={inputType} {...disableAttribute} value={value} name={labelFor.toLowerCase()} id={labelFor.toLowerCase()} className={`box-border w-full rounded-sm h-[30px] focus:border-[#0058a6] border ${disableStyle} text-sm`} />
            </div>
        </div>
    )
}

export default LicenciasMedicasInputComponent