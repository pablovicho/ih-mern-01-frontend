import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'

const Router = () => {
    return (
<>
    <BrowserRouter>
        <Routes>
            <Route path="/" element ={<Layout/>}>
<Route index element={<Home/>}/>
<Route path="registro" element={<Register/>}/>
<Route  path="iniciar-sesion" element={<Login/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
</>
    )
}


export default Router