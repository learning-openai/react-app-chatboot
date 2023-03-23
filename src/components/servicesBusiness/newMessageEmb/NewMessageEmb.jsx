import React,{useState, useEffect} from "react";
import { Loading } from "../../loading/Loading";
import HttpClient from "../../../services/servicesApi/servicesApi";

export const NewMessageEmb = ({ idService, handleNewEmbModal, handleUpdate }) => {


    // alert messages
    const [stateMessageAlert, setStateMessageAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');


    const [messageEmbData, setmessageEmbData] = useState({
        
        idService : idService, 
        idMessageinEmb : '', 
        title : '', 
        description : '', 
        price : 0, 
        urlResource : '', 
        location : ''
    });

    const [loading, setLoadin] = useState(false);

    const handledData =(e)=>{
        e.preventDefault()
        console.log(e.target.value)
        console.log(e.target.name)
        setmessageEmbData({
            ...messageEmbData,
            [e.target.name]:e.target.value
        })
    }

    const sentDataNewMessageEmb = async(e) => {
        e.preventDefault()

        if(messageEmbData?.title !='' && messageEmbData?.description !='' && messageEmbData?.idService != ''){

            setLoadin(true)
             console.log(messageEmbData)
             const url = "messageembedding/create";
             const response = await HttpClient.createMessageEmbeding(url, messageEmbData);
            if(response?.status ==='successful'){
                setLoadin(false)
                handleUpdate()
                handleNewEmbModal()
            }
             console.log(response)
        }else{
            setAlertMessage('Conplete los campos * ');
            setStateMessageAlert(true)
        }
    }

    useEffect(()=>{

        var setinterval  = setInterval((()=>{
            setStateMessageAlert(false)
          }),3000) 

          return () => clearInterval(setinterval);;

    },[stateMessageAlert])


    return(
        <div className="content-edit-services">

            {
                loading?
                <Loading></Loading>
                :''
            }
           
            <div className="box-model-edit bg-white rounded-lg px-4">
                <div onClick={()=>{handleNewEmbModal()}} className="text-right mr-5 mt-4 font-bold text-xl">x</div>
                
                <div className="form-content">
                    <h2 className="normal-case font-semibold text-center"> Crear un nuevo servicio </h2>
                    <form>  
                        <div className="flex flex-col mb-4">  
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Titulo del servicio
                                </span>
                                <input onChange={(e)=>handledData(e)} value={messageEmbData?.title} type="text" name="title" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Titulo del servicio" />
                            </label>
                        </div>
                        <div className="flex flex-col mb-4">  
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Precio
                                </span>
                                <input onChange={(e)=>handledData(e)}  value={messageEmbData?.price} type="number" name="price" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="00.00" />
                            </label>
                        </div>
                        <div className="flex flex-col mb-4">  
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Descripción
                                </span>
                                <textarea onChange={(e)=>handledData(e)}  value={messageEmbData?.description} type="email" name="description" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Introduce una breve descripción" />
                            </label>
                        </div>
                        <div className="flex flex-col mb-4">  
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Link de recurso adicional
                                </span>
                                <input defaultValue={messageEmbData?.urlResource} type="email" name="urlResource" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Introduce el link de un recurso" />
                            </label>
                        </div>
                        <div className="flex flex-col mb-4">  
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                    Link de la localizacion
                                </span>
                                <input defaultValue={messageEmbData?.location}  type="email" name="location" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Introduce un link de google map" />
                            </label>
                        </div>
                        
                        {
                            stateMessageAlert!=true?<div></div>
                            :
                            <div className="bg-red-400 w-full text-white px-5 text-center font-semibold">
                                {alertMessage}
                            </div>
                        }

                       <div className="pt-12 pb-9">
                        <button onClick={(e)=>sentDataNewMessageEmb(e)} className="rounded-md bg-purple-600 text-white h-9 w-full">Crear</button>
                       </div>
                    </form>
                </div>
            </div>
        </div>
    );
}