import React, { useEffect, useState } from 'react'
import P1 from '../img/product-1.png'
import P2 from '../img/product-2.png'
import { api } from '../api/client'

const fallbackProducts = [
    {
        id: 1,
        name: "Organic Vegetable Basket",
        price: 80,
        category: "Vegetables",
        image: "product-1.png"
    },
    {
        id: 2,
        name: "Fresh Fruit Box",
        price: 50,
        category: "Fruits",
        image: "product-2.png"
    },
    {
        id: 3,
        name: "Green Vegetable Pack",
        price: 70,
        category: "Vegetables",
        image: "product-1.png"
    },
    {
        id: 4,
        name: "Daily Organic Combo",
        price: 45,
        category: "Combo",
        image: "product-2.png"
    }
];

function getProductImage(image) {
    if (!image) return P1;
    if (image.includes("product-2")) return P2;
    if (image.includes("product-1")) return P1;
    return image;
}

const ProductsData = () => {
    const [products, setProducts] = useState(fallbackProducts);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadProducts() {
            try {
                const { data } = await api.get("/products");
                if (data.products?.length) {
                    setProducts(data.products);
                }
            } catch (error) {
                console.error("Could not load products", error);
            } finally {
                setLoading(false);
            }
        }

        loadProducts();
    }, []);

    return (
        <>
            {/* <!-- Products Start --> */}
            <div className="container-fluid py-5 bg-dark text-white">
                <div className="container">
                    <div className="mx-auto text-center mb-5" style={{ maxWidth: "500px" }}>
                        <h6 className="text-white text-uppercase">Products</h6>
                        <h1 className="display-5 text-white">Our Fresh & Organic Products</h1>
                    </div>
                    {loading && <p className="text-center text-white">Loading products...</p>}
                    <div className="px-5 row">
                        {products.map((product) => (
                            <div className="pb-5 col-12 col-lg-3" key={product.id}>
                                <div className="product-item position-relative bg-white d-flex flex-column text-center">
                                    <img className="img-fluid mb-4" src={getProductImage(product.image)} alt={product.name} />
                                    <h6 className="mb-3">{product.name}</h6>
                                    <p className="small text-muted mb-2">{product.category}</p>
                                    <h5 className="text-primary mb-0">₹{Number(product.price).toFixed(2)}</h5>
                                    <div className="btn-action d-flex justify-content-center">
                                        <button className="btn bg-primary py-2 px-3" type="button"><i className="bi bi-cart text-white"></i></button>
                                        <button className="btn bg-secondary py-2 px-3" type="button"><i className="bi bi-eye text-white"></i></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <!-- Products End --> */}
        </>
    )
}
export default ProductsData;
