import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from '../../apis/Axios';
import { useCallback, useEffect} from "react"

const EditProduct = (props) => {

    const navigate = useNavigate();

    let product = {
        id: props.selected.id,
        name: props.selected.name,
        price: props.selected.price,
        available: props.selected.available,
        rating: props.selected.rating,
        description: props.selected.description,
        ingredients: props.selected.ingredients,
        categoryId: props.selected.categoryId
    }

    const[updateProduct, setUpdateProduct] = useState(product);
    const[categories, setCategories] = useState([]);

    const getCategories = useCallback(() => {
        Axios.get('/categories')
            .then(res => {
                setCategories(res.data);
            })
            .catch(error => {
                alert('An error occurred while loading the categories');
            })
    },[])

    useEffect(() => {
        getCategories();
    },[])

    const renderCategories = () => {
        return categories.map((category) => 
            <option selected={category.id===product.categoryId} key={category.id} value={category.id}>{category.name}</option>)
    }

    const valueInputChanged = (e) => {
        let input = e.target;

        let name = input.name;
        let value = input.value;

        let fromState = updateProduct;
        fromState[name] = value;

        setUpdateProduct(fromState)
    }

    const edit = () => {
          Axios.put('/products/' + updateProduct.id, updateProduct)
            .then(res => {
                alert('Successfully edited');
                navigate('/all');
            })
            .catch(error => {
                alert("An error occured while editing the product");
            })
        }

        return (
            <>
            <section>
            <div className="row">
                <div className="product">
                    <div className="product__form">
                    <form className='form'>
                    <div className="u-margin-bottom-medium">
                        <h2 className="heading-add">EDIT PRODUCT</h2>
                    </div>
                        <div className="form__group">
                            <label htmlFor="name" className="form__label">Name</label>
                            <input type="text" className="form__input" id="name" name="name" defaultValue={updateProduct.name}
                             onChange={(e) => valueInputChanged(e)} />
                        </div>
                        <div className="form__group">
                            <label htmlFor="price" className="form__label">Price</label>
                            <input type="text" className="form__input" id="price" name="price" defaultValue={updateProduct.price}
                            onChange={(e) => valueInputChanged(e)} />
                        </div>
                        <div className="form__group">
                            <label htmlFor="availability" className="form__label u-margin-bottom-small">Available</label>
                            <div className="form__radio-group">
                                <input type="radio" className="form__radio-input" id='yes' name="available" value="true" defaultValue={updateProduct.available}
                                onChange={(e) => valueInputChanged(e)} /> 
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
                            <input type="text" className="form__input" id="rating" name="rating" defaultValue={updateProduct.rating}
                            onChange={(e) => valueInputChanged(e)} />
                        </div>
                        <div className="form__group">
                            <label htmlFor="description" className="form__label">Description</label>
                            <input id="description" className="form__input" name="description"  defaultValue={updateProduct.description}
                            onChange={(e) => valueInputChanged(e)}></input>
                        </div>
                        <div className="form__group">
                            <label htmlFor="ingredients" className="form__label">Ingredients</label>
                            <input type="text" className="form__input" id="ingredients" name="ingredients" defaultValue={updateProduct.ingredients}
                            onChange={(e) => valueInputChanged(e)} />
                        </div>
                        <div className="form__group">
                            <label htmlFor="categoryId" className="form__label">Category</label>
                            <select name="categoryId" defaultValue={updateProduct.categoryId}
                            onChange={(e) => valueInputChanged(e)}>
                                <option></option>
                                {renderCategories()}
                            </select>
                        </div>
                        <div className="form__group">
                             <button type="button" className='btn btn--pink' onClick={() => edit()}>Edit</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </section>
        </>
        )
}

export default EditProduct;