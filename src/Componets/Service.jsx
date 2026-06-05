import React from 'react'
import ServiceData from './ServiceData';
import TestimonialData from './TestimonialData';

const Service = () => {
    return (
        <>
            {/* <!-- Hero Start --> */}
            <div className="container-fluid bg-primary py-5 bg-hero mb-5">
                <div className="container py-5">
                    <div className="row justify-content-start">
                        <div className="col-lg-8 text-center text-lg-start">
                            <h1 className="display-1 text-white mb-md-4">Our Services</h1>
                            <a href="" className="btn btn-primary py-md-3 px-md-5 me-3">Home</a>
                            <a href="" className="btn btn-secondary py-md-3 px-md-5">Services</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Hero End --> */}
            <ServiceData/>
            <TestimonialData/>
        </>
    )
}
export default Service;
