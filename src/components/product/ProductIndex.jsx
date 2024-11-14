import React from "react";
import ProductTable from "./ProductTable";
import Main from "../template/Main"
import { Link } from 'react-router-dom'

export default function ProductIndex() {

    const headerProps = {
        icon: 'shopping-bag',
        title: 'Produtos',
        subtitle: 'Cadastro de produtos'
    }

    const baseUrl = 'http://localhost:3001/products'

    return (
        <Main {...headerProps}>
            <div className="d-flex mb-2 justify-items-end">
                <Link to="/products/new" className="btn btn-primary">Gerar Produto</Link>
            </div>
            <ProductTable baseUrl={baseUrl} /> 
        </Main>
    )

}