import * as React from 'react'
import type { LicenciasMedicasInputComponentProps } from './LicenciasMedicasInputComponentProps'

const LicenciasMedicasInputComponent: React.FC<LicenciasMedicasInputComponentProps> = (props) => {

    const {labelName, inputType, labelFor, isDisabled,} = props
    const disableAttribute = isDisabled ? { disabled: true } : {};
    const disableStyle = isDisabled ? 'bg-blue-200 border-0' : 'border-2 border-[#0058a6]'
    return (
        <>
            <div className='grow'>
                <label htmlFor={labelFor.toLowerCase()} className='block text-sm font-medium leading-6 text-gray-900'>{labelName}</label>
                <div className='mt-1'>
                    <input type={inputType} {...disableAttribute} name={labelFor.toLowerCase()} id={labelFor.toLowerCase()} className={`box-border w-full rounded-sm h-[26px] ${disableStyle} text-sm`} />
                </div>
            </div>
        </>
    )
}

export default LicenciasMedicasInputComponent