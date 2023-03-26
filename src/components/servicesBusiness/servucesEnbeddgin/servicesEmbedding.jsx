import React, {useState, useEffect} from "react";
import HttpClient from "../../../services/servicesApi/servicesApi";

import './servicesEmbedding.css'
import { Loading } from "../../loading/Loading";
import { EditServiceEmb } from "../editServiceEmb/EditServiceEmb";
import { NewMessageEmb } from "../newMessageEmb/NewMessageEmb";
export const ServicesEmbedding = ({idService})=>{


    const [ dataServicesEm, setDataServiceEm ] = useState([])
    const [loading, setLoading] = useState(false)

    const [service, setService] = useState({})
    const [showEditaModal, setShowEditModal] = useState(false);

    const [modalNewService, setModalNewService] = useState(false);



    useEffect(()=>{
        console.log(idService);
        if(idService!=''){
            setLoading(true)
            getDataServiceEmbeddings(idService)  
        }
    },[idService])

    const handleUpdate=()=>{
        getDataServiceEmbeddings(idService)
    }

    const getDataServiceEmbeddings = async(idService)=>{

        const url = `/messageembedding/list/`;
        const response =await  HttpClient.getListServicesEmbddings(url,{idService:idService});
        console.log('----------------------');
        console.log(response);
        if(response?.status==='successful'){
            setDataServiceEm(response?.data?.data);
            setLoading(false)
            setLoading(false)
        }

    }

    const showModalEdit =(serviceEmb={})=>{
        if(JSON.stringify(serviceEmb)!='{}'){
            console.log(serviceEmb)
            setService(serviceEmb)
            handleShowEditaModal()
        }
        
    }

    const handleShowEditaModal =()=>{
        setShowEditModal(!showEditaModal)
    }

    const handleNewEmbModal=()=>{
        setModalNewService(!modalNewService)
    }

    return(
        <div style={{height:'inherit'}}>

            {
                !showEditaModal?
                ''
                :
                <EditServiceEmb serviceEmb={service}  handleShowEditaModal={handleShowEditaModal} handleUpdate={handleUpdate}></EditServiceEmb>
            }

            {
                !modalNewService?
                ''
                :
                <NewMessageEmb idService={idService} handleNewEmbModal={handleNewEmbModal} handleUpdate={handleUpdate}></NewMessageEmb>
            }

            {
                loading?
                <Loading ></Loading>
                :
                <div className="services-embeddins">
                    {
                        dataServicesEm.map((serviceEmb, index)=>{
                            return(
                                <div key={index.toString()+'serEmb'} className="card-services p-2 rounded-lg">
                                    <div className="head-card my-4 flex flex-row gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                        </svg>
                                        <h3 className="font-bold">{serviceEmb?.title}</h3>
                                    </div>
                                    <div className="card-body">
                                        <p>{serviceEmb?.description}
                                        </p>
                                    </div>
                                    <div className="text-left w-full my-4"><span>precio : </span><span>{serviceEmb?.price} Bs.</span></div>
                                    {/* <div className="text-left w-full my-4"><span>precio : </span><span>{serviceEmb?.urlResource} Bs.</span></div> */}
                                    <div className="card-foot pt-6 py-3">
                                        <h4>{serviceEmb?.state?'Activo':'Desactivado'}</h4>
                                        <div className="option_cards">
                                            <button onClick={()=>{showModalEdit(serviceEmb)}} className="bg-gray-200 hover:bg-gray-300  mx-0.5 px-4 rounded-sm"> Editar </button>
                                        </div>
                                    </div>
                                </div>                    
                            );
                        })
                    }
                    {
                        idService!=''
                        ?
                        <div onClick={()=>{setModalNewService(!modalNewService)}} className="card-services add-new-service p-2 rounded-lg cursor-default">
                            <div className="icon-content">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        :
                        ''
                    }
                </div>
            }
            {
                dataServicesEm.length===0?
                <div className="no_hay_servicios my-20">
                    No hay lista de servicios para las respuestas automatizadas
                </div>
                :
                ''
            }
        </div>
    );
}