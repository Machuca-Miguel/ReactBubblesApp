import React from 'react'
import "./style/bubbleCoverStyle.scss"
import { NavbarTitle } from '../navbarTitle/NavbarTitle'

export const BubbleCover = ({setShowCover}) => {
  return (
    <div className="wrapper" onClick={()=>{setShowCover(false)}}>
        <h1>Welcome to Bubbling</h1>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
      <div><span className="dot"></span></div>
    </div>
  )
}
