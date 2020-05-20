import React from 'react';
import { Link } from "@reach/router";


const Product = (props) => {



    return (
        <div className="card text-white bg-info m-4 p-4">
            <h4>{props.product.title}</h4>
            <p>${props.product.price}</p>
            <p>{props.product.description}</p>
            <Link className="btn btn-light" to={"/update/" + props.product._id} >Edit</Link>
            <Link className="btn btn-dark" to={"/delete/" + props.product._id}>Delete?</Link>
        </div>

    );

}

export default Product;