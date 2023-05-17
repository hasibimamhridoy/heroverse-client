import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductsDetails = () => {
    const product = useLoaderData()
    console.log(product);
    return (
        <div>
            <h1>{product.name}</h1>
        </div>
    );
};

export default ProductsDetails;