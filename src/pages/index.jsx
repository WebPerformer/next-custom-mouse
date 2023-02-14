import React, { useEffect } from "react"

import Link from "next/link"

// gsap
import gsap from 'gsap'

// icons
import { FiExternalLink } from "react-icons/fi"

export default function Home() {

  function onMouseHover() {
    gsap.to(".cursor__ball--big", .3, {
      scale: 4
    })
  }
  
  function onMouseHoverOut() {
    gsap.to(".cursor__ball--big", .3, {
      scale: 1
    })
  }

  return (
    <div className="main-content">
      <div className="title">
        <div className="small-title">Component Project</div>
        <div className="big-title">Custom Cursor Mouse</div>
      </div>
      <div className="hoverble" onMouseEnter={() => onMouseHover()} onMouseLeave={() => onMouseHoverOut()}>Hover me</div>
      <Link target="_blank" href="https://codepen.io/clementGir/pen/RQqvQx"><div className="credits" onMouseEnter={() => onMouseHover()} onMouseLeave={() => onMouseHoverOut()}>Credits: <span>Clement Girault</span> <FiExternalLink/></div></Link>
    </div>
  )
}
