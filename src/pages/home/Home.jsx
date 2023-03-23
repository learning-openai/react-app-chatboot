import React,{ useState }from "react";

import { Outlet, useLocation } from 'react-router-dom';

import './home.css'
import { MenuLateral } from "../../components/menuLateral/menuLateral";
import { Navbar } from "../../components/navbar/Navbar";

import logo_nucbo_img from '../../assets/logo_nuxtbo.png'



export const HomePage = ({user, updateUser})=> {

    const location = useLocation();

    const [visibility, setvisibility] = useState(true);

    const handaleVisibility=()=>{
        setvisibility(!visibility)
    }

    
    return(
        <div className="content_home_page" >
            <div className={`menu-lateral ${visibility?'':'visibility-nenu-leteral'}`} >
                <MenuLateral user={user} handaleVisibility={handaleVisibility} updateUser={updateUser} ></MenuLateral>
            </div>
            <div className={`box-home ${visibility?'':'width-box-home'}`}>
                <div className="head">
                    <div className="navbar">
                         <Navbar handaleVisibility={handaleVisibility}></Navbar>
                    </div>
                    {/* <div className="options"> 
                        <a>infomarcion</a>
                        <a>editar</a>
                        <a>crear</a>
                        <a>configurar</a>
                    </div> */}
                </div>
                <div className="content-data">
                    {
                        location.pathname==='/home'?
                        <div className="content-bienvenida w-full h-full">
                        <div className="contetn-logo-text">
                            <img src={logo_nucbo_img} alt="" />
                            <span className="text-gray-500 font-bold">Chatbot con inteligencia artificial</span>
                        </div>
                    </div>
                    :''
                    }

                   <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
}