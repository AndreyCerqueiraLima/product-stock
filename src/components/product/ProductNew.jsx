import React from "react";
import Main from "../template/Main"
import ProductForm from "./ProductForm";

export default function ProductNew(){

    const headerProps = {
        icon: 'shopping-bag',
        title: 'Produtos',
        subtitle: 'Editando produto'
    }

    return (
        <Main {...headerProps}>
            <ProductForm/>
        </Main>
    )
}