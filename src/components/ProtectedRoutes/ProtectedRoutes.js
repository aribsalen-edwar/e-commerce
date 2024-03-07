import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function ProtectedRoutes(props) {
let navigate = useNavigate ()
if (localStorage.getItem("userToken") != null){

    return props.children
}else{
    return <Navigate to={'/login'}/>
}
}
