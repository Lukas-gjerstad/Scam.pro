import * as React from "react"
import "./index.css"
import "./app.css"
import MainPage from "./mainPage"
import Tshirt from "./randomshit/tshirt"

import ShoppingCartPage from "./randomshit/shoppingCartPage";
import { Routes, Route, HashRouter } from "react-router-dom";
import { discordmode, ekitten, Zesty, fear, metaltshirt, saygex, stabbed, WifeBeater } from ".";

function App() {
    let tShirts = [
    {id: 0, Text: "Metal Tshirt", image: metaltshirt}, 
    {id: 1, Text: "Say Gex", image: saygex}, 
    {id: 2, Text: "Wife Beater", image: WifeBeater}, 
    {id: 3, Text: "Fear", image: fear}, 
    {id: 4, Text: "Zesty", image: Zesty}, 
    {id: 5, Text: "Discord Moderator", image: discordmode}, 
    {id: 6, Text: "Stabbed", image: stabbed}, 
    {id: 7, Text: "E Kitten", image: ekitten}, 
    ]
    
    return (
        <> 
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/> 
                <Route path="/shoppingCartPage" element={<ShoppingCartPage/>}/> 
            </Routes>
        </HashRouter>
        </>
    )
}
export default App