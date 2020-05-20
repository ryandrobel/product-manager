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
        
            <div className="container bg-warning p-4">
                
            
            <form className="m-4 p-4 bg-info rounded" onSubmit={updateExistingProduct}>

                <lable>Title:</lable>
                <input type="text" onChange={e => setTitle(e.target.value)} value={title}></input><br></br>
                {errors.title ? <p className="bg bg-info">{errors.title.message}</p> : ""}

                <lable>Price:</lable>
                <input type="number" onChange={e => setPrice(e.target.value)} value={price}></input><br></br>{ errors.price ? <p className="bg bg-info">{errors.price.message}</p> : "" }

                <lable>Description:</lable><br></br>
                <textarea type="text" onChange={e => setDescription(e.target.value)} value={description}></textarea><br></br>{errors.description ? <p className="bg bg-warning">{errors.description.message}</p> : "" }

                <input className="btn btn-light m-4" type="submit" value="Edit"></input>
                <button className="btn btn-dark m-4" onClick={buyProduct}>Delete</button>

            </form>
            </div>

    );
}

export default EditProduct;