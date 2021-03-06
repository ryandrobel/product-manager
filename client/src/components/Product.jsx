import React from 'react';
import { Link } from "@reach/router";


const Product = (props) => {



    return (
        
        <div className="card text-dark bg-light m-4 p-4 shadow-lg border border-dark">
            <h4>{props.product.title}</h4>
            <p>${props.product.price}</p>
            <p>{props.product.description}</p>
            <Link className="btn btn-outline-dark m-2 shadow-lg" to={"/update/" + props.product._id} >Edit</Link>
            <Link className="btn btn-outline-dark m-2 shadow-lg" to={"/delete/" + props.product._id}>Delete</Link>
        </div>
        

    );

}

export default Product;