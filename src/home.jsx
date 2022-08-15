import React from 'react'
import Accordeon from "./accordeon";
import Cardd from "./card";

const Home = () => {
  return (
    <div className='home'>
      <h2>Alsara</h2>
      <div className="d-flex">
        <Accordeon/>
        <Cardd/>
      </div>
    </div>
  )
}

export default Home
