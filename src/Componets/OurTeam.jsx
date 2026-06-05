import React from 'react'
import ImgT1 from '../img/team-1.png'
import ImgT2 from '../img/team-2.png'
import ImgT3 from '../img/team-3.png'

const OurTeam = () => {
    return (
        <>
            {/* <!-- Team Start --> */}
            <div class="container-fluid py-5">
                <div class="container">
                    <div class="mx-auto text-center mb-5" style={{ maxWidth: "500px;" }}>
                        <h6 class="text-primary text-uppercase">The Team</h6>
                        <h1 class="display-5">We Are Professional Organic Farmers</h1>
                    </div>
                    <div class="row g-5">
                        <div class="col-lg-4 col-md-6">
                            <div class="row g-0">
                                <div class="col-10">
                                    <div class="position-relative">
                                        <img class="img-fluid w-100" src={ImgT1} alt="" />
                                        <div class="position-absolute start-0 bottom-0 w-100 py-3 px-4" style={{ background: "rgba(52, 173, 84, .85)" }}>
                                            <h4 class="text-white">Farmer Name</h4>
                                            <span class="text-white">Designation</span>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5">
                                        <a class="btn btn-square rounded-circle bg-white" href="#"><i class="fab fa-twitter text-secondary"></i></a>
                                        <a class="btn btn-square rounded-circle bg-white" href="#"><i class="fab fa-facebook-f text-secondary"></i></a>
                                        <a class="btn btn-square rounded-circle bg-white" href="#"><i class="fab fa-linkedin-in text-secondary"></i></a>
                                        <a class="btn btn-square rounded-circle bg-white" href="#"><i class="fab fa-instagram text-secondary"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="row g-0">
                                <div class="col-10">
                                    <div class="position-relative">
                                        <img class="img-fluid w-100" src={ImgT2} alt="" />
                                        <div class="position-absolute start-0 bottom-0 w-100 py-3 px-4" style={{ background: "rgba(52, 173, 84, .85)" }}>
                                            <h4 class="text-white">Farmer Name</h4>
                                            <span class="text-white">Designation</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5">
                                        <a class="btn btn-square rounded-circle bg-white" href="#"><i class="fab fa-twitter text-secondary"></i></a>
                                        <a class="btn btn-square rounded-circle bg-white" href="#"><i class="fab fa-facebook-f text-secondary"></i></a>
                                        <a class="btn btn-square rounded-circle bg-white" href="#"><i class="fab fa-linkedin-in text-secondary"></i></a>
                                        <a class="btn btn-square rounded-circle bg-white" href="#"><i class="fab fa-instagram text-secondary"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="row g-0">
                                <div class="col-10">
                                    <div class="position-relative">
                                        <img class="img-fluid w-100" src={ImgT3} alt="" />
                                        <div class="position-absolute start-0 bottom-0 w-100 py-3 px-4" style={{ background: "rgba(52, 173, 84, .85)" }}>
                                            <h4 class="text-white">Farmer Name</h4>
                                            <span class="text-white">Designation</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="h-100 d-flex flex-column align-items-center justify-content-around bg-secondary py-5">
                                        <a class="btn btn-square rounded-circle bg-white" href="#"><i class="fab fa-twitter text-secondary"></i></a>
                                        <a class="btn btn-square rounded-circle bg-white" href="#"><i class="fab fa-facebook-f text-secondary"></i></a>
                                        <a class="btn btn-square rounded-circle bg-white" href="#"><i class="fab fa-linkedin-in text-secondary"></i></a>
                                        <a class="btn btn-square rounded-circle bg-white" href="#"><i class="fab fa-instagram text-secondary"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Team End --> */}
        </>
    )
}
export default OurTeam;