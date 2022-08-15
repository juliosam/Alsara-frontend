import React from "react"
import { Link } from "react-router-dom"

const Navi = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-danger rounded bg-opacity-50">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">ALSARA</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/"><a className="nav-link active" aria-current="page" >Home</a></Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Galeria</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to="/personalizados"><a className="dropdown-item">Personalizados</a></Link></li>
            <li><Link to="/accesorios"><a className="dropdown-item">Accesorios</a></Link></li>
            <li><Link to="/ropa"><a className="dropdown-item">Ropa</a></Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">About</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-danger" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navi
