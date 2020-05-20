import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';



const CreateProduct = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({});

    const createNewProduct = (e) => {
        e.preventDefault();
        const products = { title, price, description };
        axios.post("http://localhost:8000/api/products/new", products)
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
        <div className="container bg-mute p-4">
                <div className="form-group m-4 p-4 bg-info rounded shadow-lg">
            <form onSubmit={createNewProduct}>
            <lable className="text-light"><h4>Title</h4></lable>
                <input className="form-control form-control-lg shadow-lg" type="text" onChange={e => setTitle(e.target.value)}></input> { errors.title ? <p className="bg bg-info">{errors.title.message}</p> : "" }
                <lable className="text-light"><h4>Price</h4></lable>
                <input className="form-control form-control-lg shadow-lg" type="number" onChange={e => setPrice(e.target.value)}></input> { errors.price ? <p className="bg bg-info">{errors.price.message}</p> : "" }
                <lable className="text-light"><h4>Description</h4></lable>
                <textarea rows="5" columns="50" className="form-control form-control-lg p-4 m-1 shadow-lg" type="text" onChange={e => setDescription(e.target.value)} ></textarea>{ errors.description ? <p className="bg bg-info">{errors.description.message}</p> : "" }
                <input className="btn shadow btn-outline-light m-4 shadow-lg" type="submit" value="Create"></input>
            </form>
        </div>
        </div>
            
    );
};

export default CreateProduct;