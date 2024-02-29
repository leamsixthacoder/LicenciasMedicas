import * as React from "react";
import { ILicenciasMedicasSelectComponentProps } from "./ILicenciasMedicasSelectComponentProps";

const LicenciasMedicasSelectComponent: React.FC<ILicenciasMedicasSelectComponentProps> = (props) => {

    const { labelFor, labelName } = props
    return (


        <div className="grow">
            <label htmlFor={labelFor} className="block text-sm font-medium leading-6 text-gray-900">
                {labelName}
            </label>
            <div className="mt-2">
                <select
                    id={labelFor}
                    name={labelFor}
                    className="box-border w-full rounded-sm h-[30px] border-2 border-[#0058a6]  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                </select>
            </div>
        </div>

    )
}

export default LicenciasMedicasSelectComponent;