import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link, Outlet } from 'react-router-dom';
export default function Newnav() {
  return (
    <div className='container'>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    {/* <Link className="navbar-brand" to="/">Navbar</Link> */}
    {/* <img src="img/Screenshot crc.png" height={100} width={150}/> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/newhome"><b><i>Home</i></b></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact"><b><i>Contact</i></b></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/newabout1"><b><i>About</i></b></Link>
        </li>
        </ul>
        <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
    </div>
    
    </nav>
    
    <Outlet/>
    </div>
  )
}

