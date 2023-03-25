import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav classnamename="Navbar Navbar-expand-lg bg-body-tertiary">
        <div classname="container-fluid">
          <a classname="Navbar-brand" href="/amount bank">amount bank</a>
          <button classname="Navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#NavbarSupportedContent" aria-controls="NavbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span classname="Navbar-toggler-icon"></span>
          </button>
          <div classname="collapse Navbar-collapse" id="NavbarSupportedContent">
            <ul classname="Navbar-nav me-auto mb-2 mb-lg-0">
              <li classname="nav-item">
                <a classname="nav-link active" aria-current="page" href="/home">Home</a>
              </li>
              <li classname="nav-item">
                <a classname="nav-link" href="/link">link</a>
              </li>
              <li classname="nav-item dropdown">
                <a classname="nav-link dropdown-toggle" href="/Dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a></li>
              <ul classname="dropdown-menu">
                <li><a classname="dropdown-item" href="/home">Home</a></li>
                <li><a classname="dropdown-item" href="/contact">contact </a></li>

                <li><a classname="dropdown-item" href="/bank details">bank details</a></li>
              </ul>

              <div>
                <button disabled={true} classname-="btn-primary">your balance:1000</button>
              </div>
              <li classname="nav-item">
                <a classname="nav-link disabled">Disabled</a></li>
            </ul>
            <form classname="d-flex" role="search">
              <input classname="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button classname="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
