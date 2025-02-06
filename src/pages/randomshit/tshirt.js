import * as React from "react"
import "./tshirt.css"
import WifeBeater from "./WifeBeater.png"

function Tshirt() {

    return(
        <div className="tshirt">
            <img src={WifeBeater}></img>
            <p>Wife Beater T-Shirt</p>
        </div>
    )
}

export default Tshirt