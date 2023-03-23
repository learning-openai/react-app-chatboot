import React, { useEffect, useState } from "react";

import './editServiceEmb.css'
import HttpClient from "../../../services/servicesApi/servicesApi";
import { Loading } from "../../loading/Loading";

export const EditServiceEmb=({serviceEmb, handleShowEditaModal, handleUpdate})=>{

    const [serviceData, setServiceData] = useState(serviceEmb);
    const [serviceDataUpdate, setserviceDataUpdate] = useState({
        
        idService : serviceEmb?.idService, 
        idMessageinEmb : serviceEmb?._id, 
        title : serviceEmb?.title, 
        description : serviceEmb?.description, 
        price : serviceEmb?.price, 
        urlResource : serviceEmb?.urlResource, 
        location : serviceEmb?.location,
        state: serviceEmb?.state
    });

    const [loading, setLoadin] = useState(false);


    const handledData =(e)=>{
        e.preventDefault()

        console.log(e.target.value)
        console.log(e.target.name)
        setserviceDataUpdate({
            ...serviceDataUpdate,
            [e.target.name]:e.target.value
        })


    }

    const handlestate =(state)=>{

        console.log(state.toString())
        var stateMsEmb = !state;
        setserviceDataUpdate({
            ...serviceDataUpdate,
            state : stateMsEmb
        })
    }

    const sentUpdateData=async(e)=>{
        e.preventDefault()
        setLoadin(true)
         console.log(serviceDataUpdate)
         const url = "messageembedding/update";
         const response = await HttpClient.updateMessageEmbeding(url, serviceDataUpdate);
        if(response?.status ==='successful'){
            setLoadin(false)
            handleUpdate()
            handleShowEditaModal()
        }
         console.log(response)
    }


    return(
        <div className="content-edit-services">
            {/* {
                JSON.stringify(serviceDataUpdate)
            } */}

            {
                loading?
                <Loading></Loading>
                :''
            }
            <div className="box-model-edit bg-white rounded-lg px-4 mt-20 mb-10">
                <div onClick={()=>{handleShowEditaModal()}} className="text-right mr-5 mt-4 font-bold text-xl">x</div>
                
                <div className="form-content">
                    <h2 className="normal-case font-semibold text-center">{serviceEmb?.title} </h2>
                    <form>  
                        <div className="flex flex-col mb-4">  
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Titulo del servicio
                                </span>
                                <input onChange={(e)=>handledData(e)} value={serviceDataUpdate?.title} type="text" name="title" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Titulo del servicio" />
                            </label>
                        </div>
                        <div className="flex flex-col mb-4">  
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Precio
                                </span>
                                <input onChange={(e)=>handledData(e)}  value={serviceDataUpdate?.price} type="number" name="price" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="00.00" />
                            </label>
                        </div>
                        <div className="flex flex-col mb-4">  
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Descripción
                                </span>
                                <textarea onChange={(e)=>handledData(e)}  value={serviceDataUpdate?.description} type="email" name="description" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Introduce una breve descripción" />
                            </label>
                        </div>
                        <div className="flex flex-col mb-4">  
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Link de recurso adicional
                                </span>
                                <input defaultValue={serviceDataUpdate?.urlResource} type="email" name="urlResource" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Introduce el link de un recurso" />
                            </label>
                        </div>
                        <div className="flex flex-col mb-4">  
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Link de la localizacion
                                </span>
                                <input defaultValue={serviceDataUpdate?.location}  type="email" name="location" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Introduce un link de google map" />
                            </label>
                        </div>

                        <div className="flex flex-col mb-4">
                                <span className=" block text-sm font-medium text-slate-700 mb-2">
                                    Estado del servicio  
                                </span>
                            <label className="contetn-switch-btn w-14">
                                <input onChange={()=>{handlestate(serviceDataUpdate?.state)}}  id="toggle_switch"  checked={serviceDataUpdate?.state} type="checkbox" name="state" />
                            </label>
                        </div>
                       <div className="pt-12 pb-9">
                        <button onClick={(e)=>sentUpdateData(e)} className="rounded-md bg-purple-600 text-white h-9 w-full">Guardae cambios</button>
                       </div>
                    </form>
                </div>
            </div>
        </div>
    );
    
}