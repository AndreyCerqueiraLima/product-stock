import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function ProductForm({product}) {
    
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [value, setValue] = useState("")
    const [quantity, setQuantity] = useState("")
    const [ean, setEan] = useState("")
    
    const navigate = useNavigate(); // Inicialize o hook de navegação

    useEffect(() => {
        if(product){
            setId(product.id)
            setName(product.name)
            setValue(product.value)
            setQuantity(product.quantity)
            setEan(product.ean)
        }
    }, [product])

    function getProduct(){
        return {id,name,value,quantity,ean}
    }

    const baseUrl = 'http://localhost:3001/products'

    async function save(){
        const product = getProduct();

        const httpMethod = product.id ? 'put' : 'post'
        const baseUrlMethod = product.id ? `${baseUrl}/${product.id}` : baseUrl
        await axios[httpMethod](baseUrlMethod,product).then(resp => {console.log(resp)})
        navigate('/products')
    }

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-12 col-sm-6">
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Digite o name..."
                        />
                    </div>
                </div>

                <div className="col-12 col-sm-6">
                    <div className="form-group">
                        <label>Value</label>
                        <input
                            type="text"
                            className="form-control"
                            name="value"
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            placeholder="Digite o Value..."
                        />
                    </div>
                </div>

                <div className="col-12 col-sm-6">
                    <div className="form-group">
                        <label>EAN</label>
                        <input
                            type="text"
                            className="form-control"
                            name="ean"
                            value={ean}
                            onChange={e => setEan(e.target.value)}
                            placeholder="Digite o EAN..."
                        />
                    </div>
                </div>

                <div className="col-12 col-sm-6">
                    <div className="form-group">
                        <label>quantity</label>
                        <input
                            type="text"
                            className="form-control"
                            name="quantity"
                            value={quantity}
                            onChange={e => setQuantity(e.target.value)}
                            placeholder="Digite o quantity..."
                        />
                    </div>
                </div>

                <div className="col-12 col-sm-6">
                    <button type="submit" className="btn btn-primary" onClick={save}>Salvar</button>
                </div>
            </div>
        </React.Fragment>
    )
}