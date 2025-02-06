import * as React from "react"
import "./tshirt.css"
import App from "../app"
import { useParams } from "react-router-dom";

import { discordmode, ekitten, Zesty, emo, metaltshirt, saygex, stabbed, WifeBeater } from "../index";

function Tshirt({ tShirts }) {

    return(
        <div className="tshirt">
            <img src={<></>}></img>
            <p>Wife Beater T-Shirt</p>
        </div>
    )
}
 
export default Tshirt 