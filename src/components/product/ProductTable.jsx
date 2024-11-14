import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function ProductTable({ baseUrl }) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios(baseUrl).then(resp => setProducts(resp.data))
    }, [baseUrl])


    function getRows() {
        return products.map(product => <tr key={product.id}>
            <td >{product.name}</td>
            <td>{product.value}</td>
            <td>{product.quantity}</td>
            <td>{product.ean}</td>
        </tr>
        )
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Value</th>
                    <th>Quantity</th>
                    <th>EAN</th>
                </tr>
            </thead>
            <tbody>
                {getRows()}
            </tbody>
        </table>
    )

}