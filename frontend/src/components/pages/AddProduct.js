import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Axios from '../../apis/Axios';
import { useEffect} from "react"
import './../../sass/main.scss';

const AddProduct = () => {

    const navigate = useNavigate();

    let product = {
        "name":"",
        "price": 0.0,
        "available": false,
        "rating": 0,
        "description": "",
        "ingredients": "",
        "categoryId": null
    }

    const[newProduct, setNewProduct] = useState(product);
    const[categories, setCategories] = useState([]);

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
        getCategories();
    },[]);

    const create = () => {
            Axios.post('/products', newProduct)
            .then(res => {
                alert('Successfully added');
                navigate('/all');
            })
            .catch(error => {
                alert("An error occured while adding the product");
            })
        }

        const renderCategories = () => {
            return categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)
        }

        const valueInputChanged = (e) => {
            let input = e.target;
    
            const name = input.name;
            const value = input.value;
    
            let fromState = newProduct;
            fromState[name] = value;
    
            setNewProduct(fromState);
        }

        return (
              <>
            <section>
            <div className="row">
                <div className="product">
                    <div className="product__form">
                    <form className='form'>
                    <div className="u-margin-bottom-medium">
                        <h2 className="heading-add">ADD A PRODUCT</h2>
                    </div>
                        <div className="form__group">
                            <label htmlFor="name" className="form__label">Name</label>
                            <input type="text" className="form__input" id="name" name="name" onChange={(e) => valueInputChanged(e)} />
                        </div>
                        <div className="form__group">
                            <label htmlFor="price" className="form__label">Price</label>
                            <input type="text" className="form__input" id="price" name="price" onChange={(e) => valueInputChanged(e)} />
                        </div>
                        <div className="form__group">
                            <label htmlFor="availability" className="form__label u-margin-bottom-small">Available</label>
                            <div className="form__radio-group">
                                <input type="radio" className="form__radio-input" id='yes' name="available" value="true" onChange={(e) => valueInputChanged(e)} /> 
                                <label htmlFor="yes" className="form__radio-label">
                                <span className="form__radio-button"></span>
                                    Yes
                                </label>
                            </div>
                            <div className="form__radio-group"> 
                                <input type="radio" className="form__radio-input" id='no' name="available" value="false" onChange={(e) => valueInputChanged(e)} />     
                                <label htmlFor="no" className="form__radio-label">
                                <span className="form__radio-button"></span>
                                    No
                                </label>
                            </div>
                        </div>
                        <div className="form__group">
                            <label htmlFor="rating" className="form__label">Rating</label>
                            <input type="text" className="form__input" id="rating" name="rating" onChange={(e) => valueInputChanged(e)} />
                        </div>
                        <div className="form__group">
                            <label htmlFor="description" className="form__label">Description</label>
                            <input id="description" className="form__input" name="description" onChange={(e) => valueInputChanged(e)}></input>
                        </div>
                        <div className="form__group">
                            <label htmlFor="ingredients" className="form__label">Ingredients</label>
                            <input type="text" className="form__input" id="ingredients" name="ingredients" onChange={(e) => valueInputChanged(e)} />
                        </div>
                        <div className="form__group">
                            <label htmlFor="categoryId" className="form__label">Category</label>
                            <select name="categoryId" onChange={(e) => valueInputChanged(e)}>
                                <option></option>
                                {renderCategories()}
                            </select>
                        </div>
                        <div className="form__group">
                             <button type="button" className='btn btn--pink' onClick={() => create()}>Add</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </section>
        </>
        )
}

export default AddProduct;