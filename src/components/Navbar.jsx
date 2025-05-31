import '../css/index.css'
function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg fixed-top">
                <div class="container text-light">
                    <a class="navbar-brand fs-2 text-light" href="#">Sanjaysudhan S</a>
                    <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" color='white' fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </button>
                    <div class="offcanvas offcanvas-start sidebar bg" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header bg">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                            <button type="button" class="btn-close btn-close-white shadow-none " data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body bg">
                            <ul class="navbar-nav justify-content-center flex-grow-1 pe-3 gap-4">
                                <li class="nav-item">
                                    <a class="nav-link text-light" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light" href="#">Project</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light" href="#">Contact</a>
                                </li>
                            </ul>
                            <div >
                                <a class="btn btn-light rounded-5" href="#">Resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;