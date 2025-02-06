import * as React from "react"
import "./mainPage.css"

import Header from "./randomshit/header"
import NavBar from "./randomshit/navbar"
import Tshirt from "./randomshit/tshirt"

function MainPage() {
    return(
        <>
        <Header/>
        <h1>Browse our fine selection of goods: </h1>
        <Tshirt/>
        <Tshirt/>
        <Tshirt/>
        <Tshirt/> <br/>
        <Tshirt/>
        <Tshirt/>
        <Tshirt/>
        <Tshirt/>
        <NavBar/>
        </>
    )
}

export default MainPage
