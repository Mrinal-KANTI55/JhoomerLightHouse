import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TakeDecision from './TakeDecision/TakeDecision';

const ManageAllProduct = () => {
    const [Products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://fathomless-headland-44349.herokuapp.com/product')
            .then(res => {
                console.log(res.data);
                setProducts(res.data);
            });
    }, []);
    return (
        <div>
            <h2 className='mt-5'>All Products Information </h2>
            {
                Products.map(ProductInfo => <TakeDecision key={ProductInfo._id} Product={ProductInfo}></TakeDecision>)
            }

        </div>
    );
};

export default ManageAllProduct;