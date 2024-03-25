/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import { IDatePickerComponent } from "./IDatePickerComponentProps"
import { DatePicker, DayOfWeek } from "office-ui-fabric-react";
import { DatePickerStrings } from '../../loc/datepickerStrings';
import * as moment from 'moment';
// import { useState } from 'react';

const DatePickerComponent: React.FC<IDatePickerComponent> = (props) => {
    const { labelName, placeholder, stateName, onChange, value, isRequired } = props;
    // const [isValueChanged, setIsValueChanged] = useState(false)

    const handleOnChange = (selectedDate: Date | string) => {
        // setIsValueChanged(true)
        if (onChange) {
            onChange(selectedDate, stateName);
        }
    }

    const onFormatDate = (date?: Date) => {
        return moment(date).format("DD/MM/YYYY")
    }
    // const valueDate = isValueChanged ? moment(value).toDate() : moment().toDate();
    return (
        <div className="w-2/4">
            <label className='block text-sm font-medium leading-6 text-gray-900'><strong className='text-red-600'>{isRequired ? '*' : ''}</strong>{' '}{labelName}</label>
            <DatePicker
                className='box-border w-full rounded-sm h-[30px] text-sm border-2 border-[#0058a6]'
                firstDayOfWeek={DayOfWeek.Monday}
                strings={DatePickerStrings}
                formatDate={onFormatDate}
                onSelectDate={(e) => {
                    if (e)
                        handleOnChange(
                            moment(e).toDate()
                        )
                    else
                        handleOnChange(
                            moment().toDate()
                        )
                }}

                placeholder={placeholder}
                value={moment(value).toDate()}
            />
        </div>

    )
}
export default DatePickerComponent