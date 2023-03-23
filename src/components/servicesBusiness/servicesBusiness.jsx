import React, { useEffect, useState } from "react";
import './servicesBusiness.css'
import HttpClient from "../../services/servicesApi/servicesApi";
import { Loading } from "../loading/Loading";
import { ServicesEmbedding } from "./servucesEnbeddgin/servicesEmbedding";

export const ServicesBusiness=({user})=>{

    const [dataServices, setDataService ] = useState([])
    const [loading, setLoading] = useState(true)

    const [idService, seetIdService] = useState('');
    const [titleService, setitleService] = useState('');
    


    useEffect(()=>{
        getDataService(user.id)
    },[])

    const getDataService = async(idUser)=>{

        <Loading></Loading>
        const url = `service/idUser=${idUser}`;
        const response =await  HttpClient.getListServices(url);
        console.log(response);
        if(response?.status==='successful'){
            setDataService(response?.data?.data);
            setLoading(false)
        }

    }
    

    const businessService=(dataService={})=>{

        if(dataService){
            seetIdService(dataService?._id);
            setitleService(dataService?.name)
        }
    }
    

    return(
        <div className="container_services_business">
            {/* {JSON.stringify(user)} */}
            {/* {JSON.stringify(dataServices)} */}
            {

            loading?
            <Loading></Loading>
            :
            <div className="list-services">
                <h3 className="text-lg font-semibold pb-5">Informacion del negocio o clinica</h3>

                <div className="service">

                  {
                    dataServices.map((service, index)=>{
                        return(
                            <div key={index.toString()+'serv'} className="card-services p-2 rounded-md">
                            <div className="head-card my-4 flex flex-row gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                                </svg>
                                <h3 className="font-bold">{service?.name}</h3>
                            </div>
                            <div className="car-body">
                                <p>{service?.description}
                                </p>
                            </div>
                            <div className="text-left w-full my-4"><span>Whatsapp : </span><span>{user?.slugPhoneNumber}</span></div>
                            <div className="border-t-4 border-black"/>
                            <div className="card-foot pt-6 py-3">
                                    <h4> {service?.state===true?'Activo':'Desactivado'}</h4>
                                    <div className="option_cards">
                                        <a href="#section_servcices_embedding" onClick={()=>{console.log(service); businessService(service)}} className="bg-gray-200 hover:bg-gray-300 mx-0.5 px-4 rounded-sm">Servicios</a>
                                        <button className="bg-gray-200 hover:bg-gray-300 mx-0.5 px-4 rounded-sm"> Configurar </button>
                                    </div>
                            </div>
                        </div> 
                        );
                    })
                  }                  
                </div>

                <h2 id="section_servcices_embedding" className="my-12 font-semibold"> Lista de servicios del negocio {titleService}</h2>
                
                <ServicesEmbedding idService={idService}></ServicesEmbedding>

           </div>
        }

        </div>
    );
}





