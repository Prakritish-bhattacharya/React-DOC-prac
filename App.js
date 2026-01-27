import React from "react"
import {createRoot} from "react-dom/client"
import { useState } from "react";

const AppLayout = () =>{
    return(
        <div className="app_layout">
            <Gallary/>
        </div>
    )
}
const root = createRoot(document.getElementById("root"))
root.render(<AppLayout/>)