import React, { useEffect, useState } from "react";
import HttpClient from "../../services/servicesApi/servicesApi";

import { useNavigate } from 'react-router-dom'

import './QrCode.css';
import svg_reload from '../../assets/restore_black.svg'
import { Loading } from "../loading/Loading";

export const QRcode=()=>{

    const navigate = useNavigate();

    const [dataQR, setDataQR]= useState({})
    const [loading, setloading]= useState(false)

    const [msReload, setMsReload]=useState(false)

    useEffect(()=>{

        // if(user){
            setloading(true)
            getQR()
        // }
    },[])

    useEffect(()=>{
        setMsReload(true)
        var setinterval  = setInterval((()=>{
            setMsReload(false)
          }),60000) 
          return () => clearInterval(setinterval);;
    },[loading])


    const getQR = async() =>{
        const data = await HttpClient.getDataQR('qr-code');
        if(data.status ==="successful"){
            const response = data?.data?.data[0]
            setDataQR(response)
            setloading(false)
        }
        console.log(data);
    }

    // se ejecuta al demontar el componente
    useEffect(()=>{
      return()=>{
        console.log(' ---- exit component ---')
        navigate('/login')
      }
    },[])

    return(
       
        <div className="container-qr">
            <div className="qr">
                {
                    !loading?''
                    :
                    <Loading></Loading>
                }
                {
                    loading?''
                    : shoqMessage()
                }
                
                <img src={dataQR} alt=""/>

                {
                    msReload?''
                    :
                    <div className="reaload-qr-data">
                    <div className="text-content">
                        <span>
                            El codigo QR ya no es valido, vuelve a cargar
                        </span>
                    </div>
                    <div onClick={()=>navigate('/login')} className="content-btn-realod">
                        <img src={svg_reload} alt="" />
                    </div>
                </div>
                }
            </div>
        </div>
    );
}

function shoqMessage(){
    
    return(
        <div className="text-message">
            <p>
                ¡Hola! Escanea este código con tú WhatsApp para iniciar un chatbot integrado a tu negocio y brindar respuestas rápidas a tus clientes. Abre WhatsApp en tu teléfono, ve a la pestaña de chats y toca el ícono de escaneo en la esquina superior derecha. Apunta la cámara hacia el código y listo, ¡comenzaremos con el servicio!
            </p>
        </div>
    );
}