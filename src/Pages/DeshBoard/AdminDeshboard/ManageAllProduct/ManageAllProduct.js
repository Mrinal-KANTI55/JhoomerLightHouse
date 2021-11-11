import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
const ManageAllProduct = () => {
    const [Products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://fathomless-headland-44349.herokuapp.com/product')
            .then(res => {
                console.log(res.data);
                setProducts(res.data);
            });
    }, []);
    const handelDelete = id => {
        const conform = window.confirm('Are you sure to delete this Oreder?');
        if (conform) {
            const url = `https://fathomless-headland-44349.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted ');
                    }

                })

        }
    }
    return (
        <div>
            <h2 className='mt-5'>All Products Information </h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>price</th>
                        <th>Decision</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Products.map(ProductInfo => <tr key={ProductInfo._id} Product={ProductInfo}>
                            <td>{ProductInfo.ProductName}</td>
                            <td>{ProductInfo.price}</td>
                            <td> <Button onClick={() => {
                    handelDelete(ProductInfo._id)
                }}>X</Button> </td>
                        </tr>)
                    }
                </tbody>
            </Table>
            {/* {
                Products.map(ProductInfo => <TakeDecision key={ProductInfo._id} Product={ProductInfo}></TakeDecision>)
            } */}

        </div>
    );
};

export default ManageAllProduct;