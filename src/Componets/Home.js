import React from 'react'
import Hero from './Hero';
import AboutData from './AboutData';
import Fact from './Fact';
import ServiceData from './ServiceData';
import FeaturesData from './FeaturesData';
import TestimonialData from './TestimonialData';
import ProductsData from './ProductsData';
import OurTeam from './OurTeam';
import HomeBlog from './HomeBlog';

const Home = () => {
    return (
        <>
            {/* <!-- Hero Start --> */}
            <Hero />
            {/* <!-- Hero End --> */}

            {/* <!-- AboutData Start --> */}
            <AboutData />
            {/* <!-- AboutData End --> */}

            {/* <!-- Fact Start --> */}
            <Fact />
            {/* <!-- Fact End --> */}

            {/* <!-- Services Start --> */}
            <ServiceData />
            {/* <!-- Services End --> */}

            {/* <!-- FeaturesData Start --> */}
            <FeaturesData />
            {/* <!-- FeaturesData End --> */}

            {/* <!-- ProductsData Start --> */}
            <ProductsData />
            {/* <!-- ProductsData End --> */}

            {/* <!-- TestimonialData Start --> */}
            <TestimonialData />
            {/* <!-- TestimonialData End --> */}

            {/* <!-- OurTeam Start --> */}
            <OurTeam />
            {/* <!-- OurTeam End --> */}

            {/* <!-- HomeBlog Start --> */}
            <HomeBlog />
            {/* <!-- HomeBlog End --> */}
        </>

    )
}

export default Home;