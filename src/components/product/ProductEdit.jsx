import React from "react";
import { useParams } from 'react-router-dom';
import ProductForm from "./ProductForm";
import { useState,useEffect } from "react";
import axios from 'axios';
import Main from "../template/Main"

export default function ProductEdit(){
    const {id} = useParams();
    const [product, setProduct]= useState({})

    const baseUrl = `http://localhost:3001/products/${id}`

    useEffect(() => {
            axios(baseUrl)
            .then(resp => {setProduct(resp.data)})
        }, [baseUrl])

    const headerProps = {
        icon: 'shopping-bag',
        title: 'Produtos',
        subtitle: 'Editando produto'
    }

    return (
        <Main {...headerProps}>
            <ProductForm product={product}/>
        </Main>
    )
}