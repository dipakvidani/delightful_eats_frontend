import React from 'react'
import AboutData from './AboutData';
import Fact from './Fact';
import OurTeam from './OurTeam';

const About = () => {
    return (
        <>
            {/* <!-- Hero Start --> */}
            <div class="container-fluid bg-primary py-5 bg-hero mb-5">
                <div class="container py-5">
                    <div class="row justify-content-start">
                        <div class="col-lg-8 text-center text-lg-start">
                            <h1 class="display-1 text-white mb-md-4">About Us</h1>
                            <a href="" class="btn btn-primary py-md-3 px-md-5 me-3">Home</a>
                            <a href="" class="btn btn-secondary py-md-3 px-md-5">About Us</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Hero End --> */}
            <AboutData />
            <Fact />
            <OurTeam />
        </>
    )
}
export default About;