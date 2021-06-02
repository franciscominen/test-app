import React, { useReducer } from 'react'
import productReducer, { initialProductState } from '../reducer/productReducer';
import ProductCard from './ProductCard';

const ProductsContainer = () => {
    const [productState, dispatch] = useReducer(productReducer, initialProductState);
    const {products, cart} = productState;

    return (
        <>
            <h1>Todos los productos</h1>
            {
                products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))
            }
        </>
    )
}

export default ProductsContainer
