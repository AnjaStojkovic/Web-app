import React, { useState, useEffect, useCallback } from 'react';
import Axios from '../../apis/Axios';
import { useNavigate, useParams } from 'react-router-dom';
import grid1 from '../../assets/grid1.avif';
import grid2 from '../../assets/grid2.avif';
import './../../sass/main.scss';
import { Link } from 'react-router-dom/dist';

const ProductDetails = ({callbackFunction}) => {

    const[product, setProduct] = useState([]);
    const[categories, setCategories] = useState([]);
    const { productId } = useParams();

    const navigate = useNavigate()

    const goToEdit = (product) => {
        callbackFunction(product);
        navigate('/products/edit');
         
    }

    const getProduct = () => {
        Axios.get(`/products/${productId}`)
        .then(res => {
            setProduct(res.data);
        })
        .catch(error => {
            alert("An error occurred while loading the product");
        })
}

    const getCategories = () => {
    Axios.get('/categories')
        .then(res => {
            setCategories(res.data);
        })
        .catch(error => {
            alert('An error occurred while loading the categories');
        })
    }

    useEffect(() => {
        getProduct();
        getCategories();
    },[])

    const deleteProduct = (productId) => {
        Axios.delete('/products/' + productId)
            .then(res => {
                alert("Successfully deleted");
                navigate('/all');
            })
            .catch(error => {
                alert("An error occurred while deleting.");
            })
    }

    const renderCategories= () => {
        return categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)
    }

    return (
        <div className='display'>
            <div className="product__imgs">
                <img src={grid1} alt="product" className="product__img--1" />
                <img src={grid2} alt="product" className="product__img--2" />
            </div>
            <table className="product__content">
                <thead>
                    <tr>
                        <th className='heading-detail u-margin-bottom-medium'>Product details</th>
                    </tr>
                </thead>
                <tbody>
                    {product && (
                        <>
                        <tr key={product.id}>
                            <td className='column-one'>Name:</td>
                            <td className='column-two'>{product.name}</td>
                        </tr>
                        <tr key={product.id}>
                            <td className='column-one'>Price:</td>
                            <td className='column-two'>{product.price}</td>
                        </tr>
                        <tr key={product.id}>
                            <td className='column-one'>Category:</td>
                            <td className='column-two'>{product.categoryName}</td>
                        </tr>
                        <tr key={product.id}>
                            <td className='column-one'>In-store availability:</td>
                            <td className='column-two'>{product.available ? "Available" : "Unavailable"}</td>
                        </tr>
                        <tr key={product.id}>
                            <td className='column-one'>Rating:</td>
                            <td className='column-two'>{product.rating}</td>
                        </tr>
                        <tr key={product.id}>
                            <td className='column-one'>Description:</td>
                            <td className='column-two'>{product.description}</td>
                        </tr>
                        <tr key={product.id}>
                            <td className='column-one'>Ingredients:</td>
                            <td className='column-two'>{product.ingredients}</td>
                        </tr>
                        <tr key={product.id}>
                            <td className='column-one'>
                            <button
                                    disabled={window.localStorage.getItem('role') !== "ROLE_ADMIN"}
                                    className="btn-change"
                                    onClick={() => deleteProduct(product.id)}>
                                    Delete
                                </button>
                            </td>
                            <td className='column-two'>
                               <button
                                    className="btn-change"
                                    disabled={window.localStorage.getItem('role') !== "ROLE_ADMIN"}
                                    onClick={() => goToEdit(product)}>
                                    Edit 
                                </button>
                            </td>
                            <td className='column-two'>
                               <Link className="btn-link" to="/all">
                                        Back
                               </Link>
                            </td>
                        </tr>
                        </>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ProductDetails;