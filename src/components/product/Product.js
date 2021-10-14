import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



const Product = (props) => {
    // console.log(props)
    const {name, seller, stock, img, key, price} = props.product;
    const icon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product" >
            <div className="product-image">
                <img src={img} alt="chobi-ache"/>
            </div>
            <div className="product-details">
                <h1>{name}</h1>
                <p>by:{seller}</p>
                <h5>${price}</h5>
                <p>Only {stock} left in stock - order soon</p>
                <button className="btn-regular" onClick={()=>props.handleAddToCart(props.product)} >{icon} Add to cart</button>
            </div>
        </div>
    );
};

export default Product;