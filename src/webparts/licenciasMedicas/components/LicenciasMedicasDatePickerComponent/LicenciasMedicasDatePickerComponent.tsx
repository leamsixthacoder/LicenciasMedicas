import * as React from 'react'
import { ILicenciasMedicasDatePickerComponent } from "./ILicenciasMedicasDatePickerComponent"
import { DatePicker, DayOfWeek } from "office-ui-fabric-react";
import { DatePickerStrings } from '../../loc/datepickerStrings';

const LicenciasMedicasDatePickerComponent: React.FC<ILicenciasMedicasDatePickerComponent> = (props) => {
const {labelName, placeholder} = props;
    return (
        <div className="w-2/4">
            <label className='block text-sm font-medium leading-6 text-gray-900'>{labelName}</label>
            <DatePicker className='box-border w-full rounded-sm h-[30px] text-sm border-2 border-[#0058a6]' firstDayOfWeek={DayOfWeek.Monday} strings={DatePickerStrings} placeholder={placeholder}/>
        </div>

    )
}
export default LicenciasMedicasDatePickerComponent