import React from 'react'
import Img1 from '../img/carousel-1.jpg'

const Hero = () => {
    return (
        <>
            {/* <!-- Hero Start --> */}
            <div className="container-fluid p-0">
                <div className="carousel slide carousel-fade">
                    <img className="w-100" src={Img1} alt="Image" />
                    <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
                        <div className="text-start p-5" style={{ maxWidth: "900px" }}>
                            <h3 className="text-white">Organic Fruits</h3>
                            <h1 className="display-1 text-white mb-md-4">Organic Fruits For Better Health</h1><br />
                            <a href="/" className="btn btn-primary py-md-3 px-md-5 me-3">Explore</a>
                            <a href="/" className="btn btn-secondary py-md-3 px-md-5">Contact</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Hero End --> */}

            {/* <!-- Banner Start --> */}
            <div className="container-fluid banner mb-5 ">
                <div className="container">
                    <div className="row gx-0">
                        <div className="col-md-6">
                            <div className="bg-primary bg-vegetable d-flex flex-column justify-content-center p-5" style={{ height: "300px" }}>
                                <h3 className="text-white mb-3">Organic Vegetables</h3>
                                <p className="text-white">Dolor magna ipsum elitr sea erat elitr amet ipsum stet justo dolor, amet lorem diam no duo sed dolore amet diam</p>
                                <a className="text-white fw-bold" href="">Read More<i className="bi bi-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="bg-secondary bg-fruit d-flex flex-column justify-content-center p-5" style={{ height: "300px" }}>
                                <h3 className="text-white mb-3">Organic Fruits</h3>
                                <p className="text-white">Dolor magna ipsum elitr sea erat elitr amet ipsum stet justo dolor, amet lorem diam no duo sed dolore amet diam</p>
                                <a className="text-white fw-bold" href="">Read More<i className="bi bi-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Banner Start --> */}

        </>

    )
}
export default Hero;