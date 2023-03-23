import React from "react";
import { useNavigate, Navigate } from 'react-router-dom';


export const ProtectedRoute = ({user, children})=>{
    const navigate = useNavigate();
    // console.log(user)
    if( JSON.stringify(user) ==='{}'){
            navigate('/login')
         return <Navigate replace to='/login' />;
    }

    return children;

};