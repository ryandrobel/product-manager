import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { navigate } from "@reach/router";
import Product from "./Product";

const AllProducts = (props) => {

    const [products, setProducts] = useState([]);

    const fetchProducts = () => {

        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log(res);
                setProducts(res.data.products)

            })
            .catch(err => console.log(err));
    }



    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="form-group m-4 p-4 rounded">
            {products.map(x => <Product key={ x.id} product={ x } /> )}
        </div>
    );

}

export default AllProducts;