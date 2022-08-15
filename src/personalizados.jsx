import React from 'react'
import Carrousel from './carrousel'

const Personalizados = () => {
  return (
    <div className='personalizados'>
      <div className='carousel-container'>
        <Carrousel/>
      </div>
      <h2>Cotiza con nosotros</h2>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Describe tu disenio y te contactamos a la brevedad</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
    </div>
  )
}

export default Personalizados
