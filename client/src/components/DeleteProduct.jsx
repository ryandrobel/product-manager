import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';





const DeleteProduct = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props._id}`)
            .then(res => {
                setTitle(res.data.product.title);
                setPrice(res.data.product.price);
                setDescription(res.data.product.description);
                console.log(res);
            })
            .catch(err => console.log(err));
            
    }, []);


    const deleteProduct = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/products/delete/${props._id}`)
            .then(res => {
                console.log(res);
                if (res.data.error) {
                    setErrors(res.data.error.errors);
                } else {
                    navigate("/");
                }
            })
            .catch(err => console.log(err));

    }



    return (
        <button className="btn-lg btn-dark m-4 p-4" onClick={deleteProduct}>Are you sure you want to Delete</button>

    );
}

export default DeleteProduct;