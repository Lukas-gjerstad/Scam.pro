import * as React from "react"
import "./mainPage.css"

import Header from "./randomshit/header"
import NavBar from "./randomshit/navbar"
import Tshirt from "./randomshit/tshirt"

import { Discordmode, Ekitten, Zesty, Emo, Metal, Saygex, Stabbed, WifeBeater} from ".";

function MainPage() {
    return(
        <>
        <Header/>
        <h1>Browse our fine selection of goods: </h1>  
        <Tshirt tshirtImage={Metal} tshirtText="Metal Shirt"/>
        <Tshirt tshirtImage={Saygex} tshirtText="Saygex"/>
        <Tshirt tshirtImage={WifeBeater} tshirtText="Wifebeater"/>
        <Tshirt tshirtImage={Emo} tshirtText="Emo"/> <br/>
        <Tshirt tshirtImage={Discordmode} tshirtText="Discordmode"/> 
        <Tshirt tshirtImage={Zesty} tshirtText="Zesty"/>
        <Tshirt tshirtImage={Ekitten} tshirtText="Ekitten"/>
        <Tshirt tshirtImage={Stabbed} tshirtText="Stabbed"/>
        <NavBar/>
        </>
    )
}

export default MainPage
