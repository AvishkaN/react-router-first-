import React from 'react'
import {useParams} from 'react-router-dom'

function ProductDetails() {

    const params=useParams();

    console.log(params);

    return (
        <>
        <h1>ProductDetails</h1>
         <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>   
            <h1>{params.productId}</h1>
        </>
    )
}

export default ProductDetails;
