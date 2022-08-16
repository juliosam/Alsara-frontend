import React from 'react'
import dise1 from '../img/dise-1.jpg'
import dise2 from '../img/dise-2.jpg'
import dise3 from '../img/dise-3.jpg'
import dise4 from '../img/dise-4.jpg'
import dise5 from '../img/dise-5.jpg'
import dise6 from '../img/dise-6.jpg'

const Grid = () => {
    
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-12 col-lg-4 col-md-6 col-sm-12 img-div">
          <img src={dise1} className="d-block w-100 " alt="pulsera" />
        </div>
        <div className="col-12 col-lg-4 col-md-6 col-sm-12 img-div">
          <img src={dise2} className="d-block w-100 " alt="pulsera" />
        </div>
        <div className="col-12 col-lg-4 col-md-6 col-sm-12 img-div">
          <img src={dise3} className="d-block w-100 " alt="pulsera" />
        </div>
        <div className="col-12 col-lg-4 col-md-6 col-sm-12 img-div">
          <img src={dise4} className="d-block w-100 " alt="pulsera" />
        </div>
        <div className="col-12 col-lg-4 col-md-6 col-sm-12 img-div">
          <img src={dise5} className="d-block w-100 " alt="pulsera" />
        </div>
        <div className="col-12 col-lg-4 col-md-6 col-sm-12 img-div">
          <img src={dise6} className="d-block w-100 " alt="pulsera" />
        </div>
      </div>
    </div>
  )
}

export default Grid
