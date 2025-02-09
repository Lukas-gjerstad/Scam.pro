import * as React from "react"
import "./tshirt.css"
import App from "../app"
import { useParams } from "react-router-dom";

function Tshirt({tshirtImage, tshirtText}) {
    return(
        <div className="tshirt">
            <img className="tshirtImg" src={tshirtImage}></img>
            <p>{tshirtText}</p>
        </div>
    )
}
 
export default Tshirt 