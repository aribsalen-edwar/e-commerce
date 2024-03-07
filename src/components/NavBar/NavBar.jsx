import React, { useContext } from 'react';
import styles from "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../img/freshcart-logo.svg';
import Home from '../Home/Home';
import { TokenContext } from '../../Context/Token';
import { CounterContext } from '../../Context/Counter';
import { CartContext } from '../../Context/CartContext';


const NavBar = () => {
let {counter} = useContext(CounterContext)
let {token,setToken} = useContext(TokenContext)
let {numOfCartItems} = useContext(CartContext)
let navigate = useNavigate ()
function logout (){
  localStorage.removeItem ("userToken")
  setToken (null);
  navigate ("/login")
}
  return (
    <>
    <div className="container">
<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"Home"}><img src={logo} alt="logo" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      {token ?   <ul className="navbar-nav me-auto mb-2 mb-lg-0">
   
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"Products"}>Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"Categories"}>Categories</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"Brand"}>Brand</Link>
        </li>
        
     
      </ul> : null} 
    
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item align-self-center ps-3 pe-3">
      <a href="https://www.facebook.com/"  target="_blank"><i className='fa-brands fa-facebook  ps-1 pe-1'></i></a>
         <a href="https://www.instagram.com/"  target="_blank" > <i className='fa-brands fa-instagram ps-1 pe-1'></i></a>
         <a href="https://www.linkedin.com/login" target="_blank" > <i className='fa-brands fa-linkedin  ps-1 pe-1'></i></a>
        </li>
     
       {token ?  <>
        <li>
        <Link className="nav-link active pe-2" aria-current="page" to={"wishes"}><i class="fa-solid fa-heart heart-color"></i>
          
          </Link>
        </li>
        <>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"Cart"}><i className='text-success fa fa-shopping-cart'></i>
          <span className='text-success p-1  rounded position-absolute'>{numOfCartItems}</span>
          </Link>
          
        </li>
        </>
    
       <li className="nav-item">
          <button className="nav-link active ps-5" aria-current="page" onClick={logout} >Logout</button>
        </li> 
        
        </>
        : 
        <>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"Register"}>Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to={"Login"}>Login</Link>
        </li>
        </>}
       
   
     
      </ul>
      </div>
  </div>
</nav>
</div>

    </>
  )
       
}
export default NavBar
