import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import ReviewItems from './ReviewItems';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();
    const handlePlaceOrder = () =>{
        history.push('/shipping')
        // setCart([]);
        // clearTheCart();
    }
    const handleRemove = key =>{
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        deleteFromDb(key);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product =><ReviewItems 
                    key={product.key}
                    product={product}
                    handleRemove={handleRemove}></ReviewItems>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="btn-regular">Proceed to Shipping</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;