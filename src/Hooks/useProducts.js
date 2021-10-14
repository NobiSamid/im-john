import { useEffect, useState } from "react"

const useProducts = () => {
    const [ products, setProducts ] = useState([]);
    useEffect(() => {
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    // Return necessary things
    return [products, setProducts];
    //একাধিক জিনিস রাখার জন্য  এরে ব্যাবহার করা হয়েছে 
}

export default useProducts;