import Navi from "./nav";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Personalizados from "./personalizados";
import Accesorios from "./accesorios";
import Ropa from "./ropa";
import Galeria from "./galeria";
import About from "./about";

function App() {
  return (
    <div className="app container bg-p h-100">
      <div className="row">
        <div className="col">
          <div className="px-4 py-1 m-2 text-center">
            <Navi/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/galeria" element={<Galeria/>}/>
              <Route path="/personalizados" element={<Personalizados/>}/>
              <Route path="/accesorios" element={<Accesorios/>}/>
              <Route path="/ropa" element={<Ropa/>}/>
              <Route path="/about" element={<About/>}/>
            </Routes>
          </div>          
        </div> 
      </div>
    </div>
  );
}

export default App;
