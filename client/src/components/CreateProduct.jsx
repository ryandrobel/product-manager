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
        <div className="container bg-warning p-4">
                <div className="form-group m-4 p-4 bg-info rounded">
            <form onSubmit={createNewProduct}>
                <lable>Title:</lable>
                <input type="text" onChange={e => setTitle(e.target.value)}></input><br></br>
                {
                    errors.title ?
                        <p className="bg bg-info">{errors.title.message}</p> :
                        ""
                }
                <lable>Price:</lable>
                <input type="number" onChange={e => setPrice(e.target.value)}></input><br></br>
                {
                    errors.price ?
                        <p className="bg bg-info">{errors.price.message}</p> :
                        ""
                }
                <lable>Description:</lable><br></br>
                <textarea type="text" onChange={e => setDescription(e.target.value)} ></textarea><br></br>
                {
                    errors.description ?
                        <p className="bg bg-info">{errors.description.message}</p> :
                        ""
                }
                <input className="btn btn-light" type="submit" value="Create"></input>

            </form>
        </div>
        </div>
            
    );
};

export default CreateProduct;