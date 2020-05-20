import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';





const EditProduct = (props) => {

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


    const updateExistingProduct = (e) => {
        e.preventDefault();
        const products = { title, price, description };
        axios.put(`http://localhost:8000/api/products/update/${props._id}`, products)
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

    const buyProduct = (e) => {
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
        
            <div className="container bg-mute border p-4 border-dark">
                
            
            <form className="m-4 p-4 bg-light rounded shadow-lg border border-dark" onSubmit={updateExistingProduct}>
            <lable className="text-dark"><h4>Title</h4></lable>
                <input className="form-control form-control-lg shadow-lg" type="text" onChange={e => setTitle(e.target.value)} value={title}></input>
                {errors.title ? <p>{errors.title.message}</p> : ""}
                <lable className="text-dark"><h4>Price</h4></lable>
                <input className="form-control form-control-lg shadow-lg" type="number" onChange={e => setPrice(e.target.value)} value={price}></input><br></br>{ errors.price ? <p>{errors.price.message}</p> : "" }
                <lable className="text-dark"><h4>Description</h4></lable>
                <textarea 
                rows="5"
                columns="50"
                className="form-control form-control-lg shadow-lg" type="text" onChange={e => setDescription(e.target.value)} value={description}></textarea><br></br>{errors.description ? <p>{errors.description.message}</p> : "" }

                <input className="btn btn-outline-dark m-4" type="submit" value="Edit"></input>
                <button className="btn btn-outline-dark m-4" onClick={buyProduct}>Delete</button>

            </form>
            </div>

    );
}

export default EditProduct;
