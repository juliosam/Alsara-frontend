import React from 'react'
import Accordeon from './components/accordeon';
import Cardd from './components/card';
import alsara2 from './img/Alsara2.png'

const Home = () => {

  return (
    <div className='home'>
      <img src={alsara2} alt='logo' style={{width:'180px'}}/>
      <div className='d-flex'>
        <Accordeon/>
        <Cardd/>
      </div>
    </div>
  )
}

export default Home
