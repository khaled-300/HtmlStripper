
import './Footer.scss';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 footer-column">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <span className="footer-title">Product</span>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Product 1</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Product 2</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Plans & Prices</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Frequently asked questions</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 footer-column">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <span className="footer-title">Company</span>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Job postings</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">News and articles</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 footer-column">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <span className="footer-title">Contact & Support</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link">
                                    {/* <FontAwesomeIcon icon={freeSolid.faPhone} /> */}
                                    +47 45 80 80 80
                                </span>
                            </li>
                            <li className="nav-item">

                                <a className="nav-link" href="#">
                                    {/* <FontAwesomeIcon icon={freeSolid.faComment} /> */}
                                    Live chat
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    {/* <FontAwesomeIcon icon={freeSolid.faEnvelope} /> */}
                                    Contact us
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    {/* <FontAwesomeIcon icon={freeSolid.faStar} /> */}
                                    Give feedback
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center">
                    {/* <FontAwesomeIcon icon={freeSolid.faEllipsisH} /> */}
                </div>

                <div className="row text-center">
                    <div className="col-md-4 box">
                        <span className="copyright quick-links">
                            Copyright &copy; Your Website {new Date().getFullYear()}
                        </span>
                    </div>
                    <div className="col-md-4 box">
                        <ul className="list-inline social-buttons">
                            <li className="list-inline-item">
                                <a href="#">
                                <i className="fas fa-phone"></i>

                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">
                                    {/* <FontAwesomeIcon icon={["fab", "facebook"]} /> */}
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">
                                    {/* <FontAwesomeIcon icon={["fab", "linkedin"]} /> */}
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">
                                    {/* <FontAwesomeIcon icon={["fab", "instagram"]} /> */}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 box">
                        <ul className="list-inline quick-links">
                            <li className="list-inline-item">
                                {/* <FontAwesomeIcon icon={freeSolid.faShieldAlt} /> */}
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li className="list-inline-item">
                                {/* <FontAwesomeIcon icon={freeSolid.faFileContract} /> */}
                                <a href="#">Terms of Use</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;