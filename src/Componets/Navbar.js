import React from 'react'
import Logo from '../img/Logo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            {/* <!-- Topbar Start --> */}
            <div class="container-fluid px-5 d-none d-lg-block " >
                <div class="row gx-5 py-3 align-items-center">
                    <div class="col-lg-3">
                        <div class="d-flex align-items-center justify-content-start">
                            <i class="bi bi-phone-vibrate fs-1 me-2"></i>
                            <h2 class="mb-0">+91 8123456789</h2>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="d-flex align-items-center justify-content-center">
                            <Link to="/" class="navbar-brand ms-lg-5">
                                <img src={Logo} alt="Logo" style={{ height: "7rem" }} />

                            </Link>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="d-flex align-items-center justify-content-end">
                            <Link class="btn btn-primary btn-square rounded-circle me-2" to="/"><i class="fab fa-twitter"></i></Link>
                            <Link class="btn btn-primary btn-square rounded-circle me-2" to="/"><i class="fab fa-facebook-f"></i></Link>
                            <Link class="btn btn-primary btn-square rounded-circle me-2" to="/"><i class="fab fa-linkedin-in"></i></Link>
                            <Link class="btn btn-primary btn-square rounded-circle" to="/"><i class="fab fa-instagram"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}


            {/* <!-- Navbar Start --> */}
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm py-3 py-lg-0 px-3 px-lg-5">
                <Link to="/index.html" class="navbar-brand d-flex d-lg-none">
                    <img src={Logo} alt="Logo" style={{ height: "5rem" }} />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav mx-auto py-0">
                        <Link to="/Home" class="nav-item nav-link ">Home</Link>
                        <Link to="/Product" class="nav-item nav-link">Product</Link>
                        <Link to="/BlogDetail" class="nav-item nav-link">Blog Detail</Link>
                        <Link to="/Service" class="nav-item nav-link">Service</Link>
                        <Link to="/Contact" class="nav-item nav-link">Contact</Link>
                        <Link to="/About" class="nav-item nav-link">About</Link>
                    </div>
                </div>
            </nav>
            {/* <!-- Navbar End --> */}


        </>
    )
}
export default Navbar;
