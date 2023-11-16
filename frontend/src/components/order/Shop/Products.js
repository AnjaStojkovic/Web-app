import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import classes from './Products.module.css';
import Axios from '../../../apis/Axios';

const Products = (props) => {

  const[products, setProducts] = useState([]);

  const getProducts = () => {
    Axios.get('/products')
    .then(res => {
        setProducts(res.data);
    })
    .catch(error => {
        alert("An error occurred while loading the products");
    })
}

useEffect(() => {
  getProducts();
},[]);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
        />
        ))}
      </ul>
    </section>
  );
};

export default Products;
