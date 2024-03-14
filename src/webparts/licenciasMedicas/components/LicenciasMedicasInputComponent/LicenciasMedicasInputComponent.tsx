import * as React from 'react'
import type { ILicenciasMedicasInputComponentProps } from './ILicenciasMedicasInputComponentProps'

const LicenciasMedicasInputComponent: React.FC<ILicenciasMedicasInputComponentProps> = (props) => {

    const { labelName, inputType, stateName, isDisabled, value, onChange, isRequired, placeholder} = props
    const disableAttribute = isDisabled ? { disabled: true } : {};
    const disableStyle = isDisabled ? 'bg-sky-100' : ''


    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;

        if (onChange) {
            onChange(inputValue, stateName);
        }
    }

    return (
        <div className='w-2/4'>
            <label htmlFor={stateName.toLowerCase()} className='block text-sm font-medium leading-6 text-gray-900'><strong className='text-red-600'>{isRequired ? '*' : ''}</strong>{' '} {labelName}</label>
            <div className='mt-2'>
                <input type={inputType} {...disableAttribute} placeholder={placeholder} onChange={handleOnChange} value={value} name={stateName.toLowerCase()} id={stateName.toLowerCase()} className={`box-border w-full pl-1 font-semibold text-black rounded-sm h-[30px] focus:border-[#0058a6] border ${disableStyle} text-sm`} />
            </div>
        </div>
    )
}

export default LicenciasMedicasInputComponent