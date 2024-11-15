import React from "react";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import axios from 'axios';

export default function ProductTable({ baseUrl }) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios(baseUrl).then(resp => setProducts(resp.data))
    }, [baseUrl])


    function deleteProduct(productId){
        axios.delete(`${baseUrl}/${productId}`).then(_ => setProducts(products.filter(p => p.id !== productId)))
    }


    
    function getRows() {
        return products.map(product => <tr key={product.id}>
            <td >{product.name}</td>
            <td>{product.value}</td>
            <td>{product.quantity}</td>
            <td>{product.ean}</td>
            <td>
                <Link to={`/product/${product.id}`} className="btn btn-warning">Editar</Link>
                <button className="ml-2 btn btn-danger" onClick={_ => deleteProduct(product.id)}>Remover</button>
            </td>
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
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {getRows()}
            </tbody>
        </table>
    )

}