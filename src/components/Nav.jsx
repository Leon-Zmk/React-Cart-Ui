import React from 'react'
import { Link , NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className="row">
        <div className="col-12">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to="/">
      <button className=' nav-link' href="">Home</button>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse  navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <Link to="/">
            <button className=' nav-link' href="">Home</button>
          </Link> 
           <Link to="/about">
            <button className=' nav-link' href="">About</button>
          </Link> 
           <Link to="/contact">
            <button className=' nav-link' href="">Contact</button>
          </Link>
      </ul>
    </div>
  </div>
</nav>
        </div>
    </div>
  )
}

export default Nav
