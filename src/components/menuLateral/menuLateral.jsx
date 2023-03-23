import React, { useEffect } from "react";

import './menuLateral.css';
import logoImg from '../../assets/logo_nuxtbo.png';
import imgUser from '../../assets/user.jpg';
import { Link } from "react-router-dom";

export const MenuLateral=({user, handaleVisibility, updateUser})=>{


    // useEffect(()=>{
    //     console.log(screen.width)
    // },[window.innerWidth])

    // cierra el menua de opciones el windows es menor a 768
    const handleVisibilitiloca=()=>{
        console.log(window.innerWidth)
        if(window.innerWidth < 768){
            handaleVisibility()

        }
    }

    return(
        <div className="content_menu_lateral">
            <div className="content-icon-close  flex flex-row-reverse h-10 pr-2 pt-2">
                <svg onClick={()=>{handaleVisibility()}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div className="head_menu_latela">
                <img src={logoImg} alt="" />
            </div>
            <div className="data_user">
                <img style={{background:"red"}} src={imgUser}></img>
            </div>
            <ul className="ul_content">
                <Link onClick={()=>{handleVisibilitiloca()}} to="services">
                    <li><span className="icon_content"> icon </span>Mi negocio/clinica</li>
                </Link>
                <Link onClick={()=>{handleVisibilitiloca()}} to="qrcode">
                    <li><span className="icon_content"> icon </span>Conectar Whatsapp</li>
                </Link>
                
                <li><span className="icon_content"> icon </span>Respuestas</li>
                <li><span className="icon_content"> icon </span>Configurción</li>
                <Link  onClick={()=>updateUser({})} to="/login">
                    <li><span className="icon_content"> icon </span>Salir</li>
                </Link>
            </ul>
        </div>
    );

}   