import * as React from "react"
import { ITextarea } from "./ITextareaProps"
import { TextField } from "office-ui-fabric-react"

const Textarea: React.FC<ITextarea> = (props) => {

    const { labelName, stateName, value, onChange } = props
    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const inputValue = event.target.value;

        if (onChange) {
            onChange(inputValue, stateName);
        }
    }
    return (
        <div className="w-full">
            <label htmlFor={stateName} className="block text-sm font-medium leading-6 text-gray-900">
                {labelName}
            </label>
            <div className="mt-2">
                <TextField
                    value={value}
                    placeholder={''}
                    onChange={handleOnChange}
                    inputClassName='block w-full rounded-sm border-2'
                    autoComplete="off"
                    multiline
                    rows={4}
                />
            </div>
        </div>
    )
}

export default Textarea