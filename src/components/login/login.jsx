import React, {useState, useEffect} from 'react';

import './login.css'
import svg_block from '../../assets/lock_black.svg';

import HttpClient from '../../services/servicesApi/servicesApi'

import { useNavigate } from 'react-router-dom'

import { motion } from 'framer-motion';

import logo_nuxtbo from '../../assets/logo_nuxtbo.png'

export default function Loging({updateUser}){


    const navigate = useNavigate()

    const [credencials, setCredencials] = useState({
      email:'',
      password:''
    });

    const [messageError, setmessageError] = useState(false)

    async function handleInputs(e){
      // e.preventDefault();
      console.log(e.target.value)
       setCredencials({
        ...credencials,
        [e.target.name]:e.target.value
       })

    }


    async function sendData(e){
      e.preventDefault();
      console.log(credencials)
      if(credencials.password !='' && credencials.email != ''){

        const response = await HttpClient.loginUser('/user/singin',{'email':credencials.email, 'password':credencials.password});
        console.log(response)
        if(response?.status === "successful"){
          updateUser(response?.data?.data[0])
          console.log('---------------------')
          console.log(response?.data?.data[0])
          navigate('/home')  
          // return <Navigate to='/qrcode'></Navigate>
        }

        if(response?.status === "error"){
          setmessageError(true)
          
        }
        
      }

    }

    useEffect(()=>{
        var setinterval  = setInterval((()=>{
          setmessageError(false)
        }),5000) 
        return () => clearInterval(setinterval);;
    },[messageError])

    return(
       
        <div className='container-login'>
          <div className='box-content'>
            <div className='incon-login'>
              <motion.div initial={{y:-80}} animate={{ y:0}} className="img-content">
                <img src={svg_block}></img>
                {/* <h2 className='text-2xl font-bold'>Nuxtbo </h2> */}
                <img className='logo-nuxtbo' src={logo_nuxtbo}></img>
              </motion.div>
            </div>
            <form onSubmit={(e)=>sendData(e)}>
            <input className='input-form outline-none' onChange={(e)=>handleInputs(e)} autoComplete='false' type="text" name='email' placeholder='Email' />
            <input className='input-form outline-none' onChange={(e)=>handleInputs(e)} type="password" name='password' placeholder='Contraseña' />
            {
              !messageError?''
              :
              <div className='error-message'>
                Error en el inicio de sessión
              </div>
            }
            <motion.button    
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 1 }}  className='btn-login'>Ingresar</motion.button>
            </form>
            
            </div>
        </div>
    );
}