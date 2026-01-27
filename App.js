import React from "react"
import {createRoot} from "react-dom/client"
import { useState } from "react";

// Our Raw Data
const user = {
  name: "Prakritish Bhattacharya",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90
}

//  Our Component which fetch data from user
const Profile = ()=>{
  return(
    <>
      <h1>{user.name}</h1>
      <img
          className= "avatar"
          src = {user.imageUrl}
          alt = {"Photo of" + user.name}
          style = {{
            width: user.imageSize,
            height: user.imageSize
          }}
      ></img>
    </>
  )
}
const root = createRoot(document.getElementById("root"))
root.render(<Profile/>)