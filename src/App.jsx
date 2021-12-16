import React from "react"
import { Route, Routes } from "react-router"
import { Succes } from "./Succes"
import { Pay } from "./Pay"
import { BrowserRouter  } from "react-router-dom"


const  App=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/pay" element={<Pay/>}/> 
               
                <Route path="/succes" element={<Succes/>}/>
                   
            </Routes>
        </BrowserRouter>
    )
}
export default App;