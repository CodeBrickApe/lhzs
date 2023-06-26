import React from 'react'
// import './style.css'
const ShootingStar: React.FC = () => {
  return (

    <svg className="extras" width="100vw" height="100vh" preserveAspectRatio="none" >
      <defs>
        <radialGradient id='comet-gradient' cx="0" cy=".5" r="0.5">
          <stop offset="0%" stopColor="rgba(255,255,255,.8)"></stop>
          <stop offset="100%" stopColor="rgba(255,255,255,0)"></stop>
        </radialGradient>
      </defs >
      <g transform="rotate(-135)">
        <ellipse className="comet comet-a" fill="url(#comet-gradient)" cx="0" cy="0" rx="150" ry="2"></ellipse>
      </g >
      <g transform="rotate(20)">
        <ellipse className="comet comet-b" fill="url(#comet-gradient)" cx="100%" cy="0" rx="150" ry="2"></ellipse>
      </g >
      <g transform="rotate(300)">
        <ellipse className="comet comet-c" fill="url(#comet-gradient)" cx="40%" cy="100%" rx="150" ry="2"></ellipse>
      </g >
      <g transform="rotate(300)">
        <ellipse className="comet comet-d" fill="url(#comet-gradient)" cx="10%" cy="50%" rx="150" ry="2"></ellipse>
      </g >
    </svg >
  )
}

export default ShootingStar