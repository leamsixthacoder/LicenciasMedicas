import * as React from "react"
import { IPopupAlert } from "./IPopupAlert";


const PopupAlert: React.FC<IPopupAlert> = (props) => {

    const { message, styles } = props
    return (
        <div className={`mt-2 px-6 py-4 rounded-lg ${styles} `}>
            <span className="font-bold"> {message}</span>
        </div>
    )
}

export default PopupAlert