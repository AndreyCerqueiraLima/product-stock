import React from "react";
import {  Routes, Route } from "react-router-dom";
import Home from '../components/home/Home'
import UserIndex from "../components/user/UserIndex";
import UserForm from "../components/user/UserForm";
import ProductIndex from "../components/product/ProductIndex";
import ProductNew from "../components/product/ProductNew";
import ProductEdit from "../components/product/ProductEdit";

const routes =  props => (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/users" element={<UserIndex/>} />
        <Route path="/users/new" element={<UserForm/>} />
        
        <Route exact path="/products" element={<ProductIndex/>} />
        <Route path="/products/new" element={<ProductNew/>} />
        <Route path="/product/:id" element={<ProductEdit/>} />

        <Route path="*" element={<Home/>} />
    </Routes>

);

export default routes;