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
    <div className="App container bg-warning">
      <h1>Product Manager</h1>
      <nav>
        <Link to="/"><button className="btn-lg btn-info">Home</button></Link>
        <Link to="/new"><button className="btn-lg btn-info">Create Product</button></Link>
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
