import React from 'react'
import P1 from '../img/product-1.png'
import P2 from '../img/product-2.png'

const ProductsData = () => {
    return (
        <>
            {/* <!-- Products Start --> */}
            <div className="container-fluid py-5  bg-dark text-white">
                <div className="container">
                    <div className="mx-auto text-center mb-5" style={{ maxWidth: "500px" }}>
                        <h6 className="text-white text-uppercase">Products</h6>
                        <h1 className="display-5 text-white">Our Fresh & Organic Products</h1>
                    </div>
                    <div className="px-5 row">
                        <div className="pb-5 col-12 col-lg-3 " >
                            <div className="product-item position-relative bg-white d-flex flex-column text-center">
                                <img className="img-fluid mb-4 " src={P1} alt="" />
                                <h6 className="mb-3">Organic Vegetable</h6>
                                <h5 className="text-primary mb-0">₹80</h5>
                                <div className="btn-action d-flex justify-content-center">
                                    <a className="btn bg-primary py-2 px-3" href=""><i className="bi bi-cart text-white"></i></a>
                                    <a className="btn bg-secondary py-2 px-3" href=""><i className="bi bi-eye text-white"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="pb-5 col-12 col-lg-3">
                            <div className="product-item position-relative bg-white d-flex flex-column text-center">
                                <img className="img-fluid mb-4 " src={P2} alt="" />
                                <h6 className="mb-3">Organic Vegetable</h6>
                                <h5 className="text-primary mb-0">₹50</h5>
                                <div className="btn-action d-flex justify-content-center">
                                    <a className="btn bg-primary py-2 px-3" href=""><i className="bi bi-cart text-white"></i></a>
                                    <a className="btn bg-secondary py-2 px-3" href=""><i className="bi bi-eye text-white"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="pb-5 col-12 col-lg-3">
                            <div className="product-item position-relative bg-white d-flex flex-column text-center">
                                <img className="img-fluid mb-4" src={P1} alt="" />
                                <h6 className="mb-3">Organic Vegetable</h6>
                                <h5 className="text-primary mb-0">₹70</h5>
                                <div className="btn-action d-flex justify-content-center">
                                    <a className="btn bg-primary py-2 px-3" href=""><i className="bi bi-cart text-white"></i></a>
                                    <a className="btn bg-secondary py-2 px-3" href=""><i className="bi bi-eye text-white"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="pb-5 col-12 col-lg-3">
                            <div className="product-item position-relative bg-white d-flex flex-column text-center">
                                <img className="img-fluid mb-4" src={P2} alt="" />
                                <h6 className="mb-3">Organic Vegetable</h6>
                                <h5 className="text-primary mb-0">₹45</h5>
                                <div className="btn-action d-flex justify-content-center">
                                    <a className="btn bg-primary py-2 px-3" href=""><i className="bi bi-cart text-white"></i></a>
                                    <a className="btn bg-secondary py-2 px-3" href=""><i className="bi bi-eye text-white"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Products End --> */}
        </>
    )
}
export default ProductsData;
