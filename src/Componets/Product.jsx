import React from 'react'
import ProductsData from './ProductsData';
import FeaturesData from './FeaturesData';

const Product = () => {
    return (
        <>
            {/* <!-- Hero Start --> */}
            <div class="container-fluid bg-primary py-5 bg-hero mb-5">
                <div class="container py-5">
                    <div class="row justify-content-start">
                        <div class="col-lg-8 text-center text-lg-start">
                            <h1 class="display-1 text-white mb-md-4">Our Products</h1>
                            <a href="" class="btn btn-primary py-md-3 px-md-5 me-3">Home</a>
                            <a href="" class="btn btn-secondary py-md-3 px-md-5">Products</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Hero End --> */}
            <ProductsData />
            <FeaturesData />
            
        </>
    )
}

export default Product;