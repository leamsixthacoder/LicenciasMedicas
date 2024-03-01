import * as React from 'react'
import type { ILicenciasMedicasInputComponentProps } from './ILicenciasMedicasInputComponentProps'

const LicenciasMedicasInputComponent: React.FC<ILicenciasMedicasInputComponentProps> = (props) => {

    const { labelName, inputType, labelFor, isDisabled, } = props
    const disableAttribute = isDisabled ? { disabled: true } : {};
    const disableStyle = isDisabled ? 'bg-blue-200' : ''
    return (
        <div className='grow'>
            <label htmlFor={labelFor.toLowerCase()} className='block text-sm font-medium leading-6 text-gray-900'>{labelName}</label>
            <div className='mt-2'>
                <input type={inputType} {...disableAttribute} name={labelFor.toLowerCase()} id={labelFor.toLowerCase()} className={`box-border w-full rounded-sm h-[30px] focus:border-[#0058a6] border ${disableStyle} text-sm`} />
            </div>
        </div>
    )
}

export default LicenciasMedicasInputComponent