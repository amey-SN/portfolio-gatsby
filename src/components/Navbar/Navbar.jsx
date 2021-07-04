import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <section className="m-0 p-0 shadow-sm " id="navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <div className="container-fluid text-dark  p-3 " >
                <button className="navbar-toggler " onclick="toggle()"type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ">
                        <li className="nav nav-item m-2 p-2  " ><Link to="/" smooth duration={1000} >Home</Link></li>
                        <li className="nav nav-item m-2 p-2  " ><Link to="/" smooth duration={1000} >About</Link></li>
                        <li className="nav nav-item m-2 p-2  " ><Link to="" smooth duration={1000} >Projects</Link></li>
                        <li className="nav nav-item m-2 p-2  " ><Link to="/blog" smooth duration={1000} >Blog</Link></li>
                        <li className="nav nav-item m-2 p-2  " ><Link to="/" smooth duration={1000} >Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        </section>
    )
}
// export default withRouter(Navbar);