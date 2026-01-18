import React from "react"
import {createRoot} from "react-dom/client"

const AppLayout = () =>{
    return(
        <div className="app_layout">
            <h1>Hi! React Hook</h1>
        </div>
    )
}
const root = createRoot(document.getElementById("root"))
root.render(<AppLayout/>)