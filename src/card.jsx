import React from 'react'
import bisu from './img/bisu.jpg'

const Cardd = () => {
  return (
    <div className="card mx-2" style={{width: '18rem'}}>
     <img src = {bisu} className="card-img-top" alt="..."/>
     <div className="card-body">
       <h5 className="card-title">Pulseras personalizadas</h5>
       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" className="btn btn-danger ">Ver coleccion</a>
     </div>
    </div>
  )
}
export default Cardd