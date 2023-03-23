import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Loging from './components/login/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './components/protectedRoute/protectedRoute';
import { QRcode } from './components/QRcode/QRcode';
import { HomePage } from './pages/home/Home';
import { ServicesBusiness } from './components/servicesBusiness/servicesBusiness';

// import  dotenv from 'dotenv';
// dotenv.config()


function App() {
  const [user, setUser] = useState({})

  const updateUser=(data)=>{
    setUser(data)
  }

  return (
    <div className="App">
      {/* {
        JSON.stringify(user)
      } */}
        <Routes>
          
          <Route path='/login' element={<Loging updateUser={updateUser} />} />

          <Route path='/qrcode' element={
            <ProtectedRoute user={user}>
            <QRcode/>
          </ProtectedRoute>
          } />

          <Route path='/home' element={
            <ProtectedRoute user={user}>
              <HomePage user={user}  updateUser={updateUser}/>
            </ProtectedRoute>
          }>
            <Route path='services' element={<ServicesBusiness user={user}></ServicesBusiness>} ></Route>
            <Route path='qrcode' element={<QRcode></QRcode>} ></Route>
          </Route>
          <Route path='/*' element={<Loging updateUser={updateUser} />} />
        </Routes>
    </div>
  )
}

export default App
