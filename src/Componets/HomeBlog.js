import React from 'react'
import BlogI1 from '../img/blog-1.png'
import BlogI2 from '../img/blog-2.png'
import BlogI3 from '../img/blog-3.png'

const HomeBlog = () => {
    return (

        <>
           
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="mx-auto text-center mb-5" style={{maxidth: "500px;"}}>
                        <h6 className="text-primary text-uppercase">Our Blog</h6>
                        <h1 className="display-5">Latest Articles From Our Blog Post</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4">
                            <div className="blog-item position-relative overflow-hidden">
                                <img className="img-fluid" src={BlogI1} alt="" />
                                <a className="blog-overlay" href="/">
                                    <h4 className="text-white">Lorem elitr magna stet eirmod labore amet</h4>
                                    <span className="text-white fw-bold">Jan 01, 2050</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-item position-relative overflow-hidden">
                                <img className="img-fluid" src={BlogI2} alt="" />
                                <a className="blog-overlay" href="/">
                                    <h4 className="text-white">Lorem elitr magna stet eirmod labore amet</h4>
                                    <span className="text-white fw-bold">Jan 01, 2050</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-item position-relative overflow-hidden">
                                <img className="img-fluid" src={BlogI3} alt="" />
                                <a className="blog-overlay" href="/">
                                    <h4 className="text-white">Lorem elitr magna stet eirmod labore amet</h4>
                                    <span className="text-white fw-bold">Jan 01, 2050</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  
        </>
    )
}

export default HomeBlog;
