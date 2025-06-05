import '../css/index.css'
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg top">
                <div className="container text-light">
                    <a className="navbar-brand fs-2 text-light" href="#">Sanjaysudhan S</a>
                    <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" color='white' fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </button>
                    <div className="offcanvas offcanvas-start sidebar bg" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header bg">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Sanjaysudhan S</h5>
                            <button type="button" className="btn-close btn-close-white shadow-none " data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body bg">
                            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3 gap-4">
                                <li className="nav-item">
                                    <a className="nav-link text-light" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">Project</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">Contact</a>
                                </li>
                            </ul>
                            <div>
                                <a className="btn btn-light rounded-5" href="#">Resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;