import * as React from "react"
import { IMedicalLeavePopupAlert } from "./IMedicalLeavePopupAlert";


const MedicalLeavePopupAlert: React.FC<IMedicalLeavePopupAlert> = (props) => {

    const { message, styles } = props
    return (
        <div className={`mt-2 px-6 py-4 rounded-lg ${styles} `}>
            <span className="font-bold"> {message}</span>
        </div>
    )
}

export default MedicalLeavePopupAlert