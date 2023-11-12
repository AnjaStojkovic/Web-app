import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
import {
  Route,
  HashRouter as Router,
  Routes,
} from "react-router-dom";
import HomePage from "./components/home/HomePage";
import NotFound from "./components/NotFound";
import { Container } from "react-bootstrap";
import Login from "./components/Login/Login";
import AddProduct from "./components/pages/AddProduct";
import EditProduct from "./components/pages/EditProduct";
import Popup from "./components/pages/Popup";
import Sale from "./components/home/Sale";
import ProductDetails from "./components/pages/ProductDetails";
import Comments from "./components/pages/Comments";
import AllProducts from "./components/pages/AllProducts";
import Overview from "./components/pages/Overview";

const App = () => {

const[productForEdit, setProductForEdit] = useState({})
const jwt = window.localStorage['jwt'];
console.log(jwt)

    return (
      <div>
        <Router>
          <Container style={{marginTop:25}}>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/all" element={<AllProducts />} />
              <Route path="/overviews" element={<Overview/>} />
              <Route path="/details/:productId" element={<ProductDetails callbackFunction={(productEdit)=>setProductForEdit(productEdit)}/>} />
             {jwt && (
              <>
                <Route path="/products/add" element={<AddProduct/>} />
                <Route path="/products/edit" element={<EditProduct selected={productForEdit}/>} />
              </>
              )} 
              <Route path="/sales" element={<Sale/>} />
              <Route path="/comments" element={<Comments/>} />
              <Route path="/popup/:productId" element={<Popup/>} />
              <Route path="/login" element={<Login/>}/>
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </Container>
        </Router>
      </div>
    );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <App/>,
)
