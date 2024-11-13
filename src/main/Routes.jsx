import React from "react";
import {  Routes, Route } from "react-router-dom";
import Home from '../components/home/Home'
import UserCrud from "../components/user/UserCrud";
import UserForm from "../components/user/UserForm";

const routes =  props => (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/users" element={<UserCrud/>} />
        <Route path="/users/new" element={<UserForm/>} />
        <Route path="*" element={<Home/>} />
    </Routes>

);

export default routes;