import React from 'react'
import bisu from '../img/bisu.jpg'
import { Link } from 'react-router-dom'

const Cardd = () => {
  return (
    <div className="card mx-2 col-12 col-lg-4 col-md-6 col-sm-12" >
     <img src = {bisu} className="card-img-top" alt="..."/>
     <div className="card-body">
       <h5 className="card-title">Pulseras personalizadas</h5>
       <p className="card-text">Elige de una variedad de pulseras originales hechas por manos artesanas mexicanas.</p>
       <Link to="/accesorios" className="btn btn-danger ">Ver coleccion</Link>
     </div>
    </div>
  )
}
export default Cardd