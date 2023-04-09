import React from 'react';
import './Product.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
 
const Product = (props) => {
    const {name, image, price, categories} = props.product;   
    return (

        <div className="container">
            <div className="product-card shadow-sm">
            <h4 className="summary-title">Shopping Cart </h4> <hr/>

            <img className="product-img img-fluid" src={image} alt=""/>
            <h5 className="categories">{categories}</h5>
            <h5 className="product-title">{name}</h5>
            <h5>Price: ${price}</h5>
 
            <Button onClick={() => props.addProduct(props.product)}
                className="btn btn-success" style={{ backgroundColor:"orange"}}> Add to Cart</Button>
            </div>
            <label htmlFor="promo-code">Have A Promo Code?</label>
            <input type="text"/>
            <button type="button"/>
        </div>
    );
};
 
export default Product;
