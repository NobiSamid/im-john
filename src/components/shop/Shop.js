import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // products to be rendered on the UI.
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(()=>{
        console.log('product api called');
        fetch('./products.JSON')
        .then(res=> res.json())
        .then(data=>{
            setProducts(data);
            setDisplayProducts(data);
            console.log('products receved');
        });
    },[]);

    useEffect(()=>{
      console.log('localStorage cart called')
      if(products.length){
        const savedCart = getStoredCart();
        const storedCart = [];
        for (const key in savedCart){
            const addedProduct = products.find(product => product.key === key);
            if(addedProduct){
                const quantity = savedCart[key];
                addedProduct.quantity = quantity;
                storedCart.push(addedProduct);
            }
        }
        setCart(storedCart)
      }
    },[products])

    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if(exists){
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        //save to local storage (for now)
        addToDb(product.key);
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const machedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(machedProducts);
    }
    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="Search Product" />
            </div>

            <div className="shop-container">
                <div className="product-container">
                    {
                        products.map(product=><Product
                        key={product.key} 
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </>
       
    );
};

export default Shop;