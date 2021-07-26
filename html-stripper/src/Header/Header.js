import { Link } from 'react-router-dom';

import './Header.scss';

import logo from '../Assets/logo.jpg';


function Header() {
  return (
    <header className="app-header">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <div className="container-fluid">

                <div className="logo">
                  <a className="navbar-brand" href="./"><img src={logo} className="app-logo" alt="logo" /></a>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                    <li className="nav-item"><a href="./" className="nav-link">Home</a></li>

                  </ul>
                </div>

              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header