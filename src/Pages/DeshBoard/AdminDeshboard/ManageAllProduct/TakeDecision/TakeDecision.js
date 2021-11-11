// TakeDecision
import React from 'react';
import { Button, Table } from 'react-bootstrap';

const TakeDecision = (props) => {
    const { _id, ProductName, price} = props.Product;
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
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>price</th>
                        <th>Decision</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{ProductName}</td>
                        <td>{price}</td>
                        <td> <Button onClick={() => {
                            handelDelete(_id)
                        }}>X</Button> </td>
                    </tr>
                </tbody>
            </Table>

        </div>
    );
};

export default TakeDecision;