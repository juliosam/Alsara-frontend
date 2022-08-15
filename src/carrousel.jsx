import React from 'react'
import dise1 from './img/dise-1.jpg'
import dise2 from './img/dise-2.jpg'
import dise3 from './img/dise-3.jpg'

const Carrousel = () => {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide " data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={dise1} className="d-block w-100" alt="pulsera" />
        </div>
        <div className="carousel-item">
          <img src={dise2} className="d-block w-100" alt="portaCB" />
        </div>
        <div className="carousel-item">
          <img src={dise3} className="d-block w-100" alt="collar" />
        </div>
      </div>
    </div>
  )
}

export default Carrousel
