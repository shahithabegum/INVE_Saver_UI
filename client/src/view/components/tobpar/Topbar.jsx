import React from 'react'
import hadi from '../../../asset/hadi.jpg'
import download from '../../../asset/download.jpg'
import './topbar.scss'
const Topbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div className="container-fluid">
    <img src={hadi} alt="Logo" width={45} height={45} />
    <a className="navbar-brand ml-1" href="#"><span className='head'>INVE_SAVER</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end mx-2" id="navbarNavDropdown">
      <ul className="navbar-nav mx-2">
     
        <li className="nav-item dropdown mx-2 d-flex">
            <img src={download} alt="profile" className="profile" width={45} height={45} />
          <a className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Shaju
          </a>
          <ul className="dropdown-menu mx-2" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Logout</a></li>
            <li><a className="dropdown-item" href="/changepassword">Change Password</a></li>
          
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Topbar