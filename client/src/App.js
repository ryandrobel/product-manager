import React from 'react';
// import axios from 'axios';
import CreateProduct from './components/CreateProduct';
import AllProducts from './components/AllProducts';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Link } from "@reach/router";
import EditProduct from "./components/EditProduct";
import DeleteProduct from "./components/DeleteProduct";



function App() {

  return (
    <div className="App container border border-dark bg-dark p-4">
      <div className="col-md-auto shadow-lg p-3 mb-5 bg-primary text-light rounded">
            <h1>Product Manger</h1>
        </div>
      <nav>
        <Link to="/"><button className="btn-lg btn-outline-primary m-4 shadow-lg">Home</button></Link><br></br>
        <Link to="/new"><button className="btn-lg btn-outline-primary m-4 shadow-lg">Create Product</button></Link>
      </nav>
      <Router>
        <AllProducts path="/" />
        <CreateProduct path="/new" />
        <EditProduct path="update/:_id" />
        <DeleteProduct path="delete/:_id" />
      </Router>
    </div>
  );
}

export default App;
