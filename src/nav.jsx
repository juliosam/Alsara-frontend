import React from "react"
import { Link } from "react-router-dom"

const Navi = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-danger rounded bg-opacity-50">
  <div className="container-fluid">
    <Link to="/"  className="navbar-brand" >ALSARA</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/" className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/galeria" className="nav-link" >Galeria</Link>
        </li>
        <li className="nav-item dropdown">
          <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" >
            Productos
          </span>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to="/personalizados" className="dropdown-item">Personalizados</Link></li>
            <li><Link to="/accesorios" className="dropdown-item">Accesorios</Link></li>
            <li><Link to="/ropa" className="dropdown-item">Ropa</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to="/about"  className="nav-link" tabIndex="-1" aria-disabled="true">About</Link>
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
