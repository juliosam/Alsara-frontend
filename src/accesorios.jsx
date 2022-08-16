import React from 'react'
import { useEffect, useState } from 'react';

const Accesorios = () => {
  useEffect(()=>{fetcher()},[]);
  const [data, setData] = useState([]);

  const fetcher = async () => {
    const res = await fetch('/api/products');
    const data = await res.json();
    console.log(data)
    setData(data)
  }

  return (
    <div>
      <div className="container text-center mt-5">
        <div className="row">
          {data.map(item => {
            return (
              <div className="col-12 col-lg-4 col-md-6 col-sm-12" key={item.id}>
                <div className='img-div-dinamic'>
                  <img src={require(`./${item.image}`)} className="d-block w-100 fit" alt={item.name}/>
                </div>
                <p>{`$ ${item.price}.00`}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Accesorios
