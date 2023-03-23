import React from "react";
import './navbar.css'

export const Navbar=({handaleVisibility})=>{

    return(
        <div className="navbar-content">
            <div className="left-contenet">
                {/* this content let */}
            </div>
            <div onClick={()=>{handaleVisibility()}} className="right-contenet">
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
        </div>
    )
}