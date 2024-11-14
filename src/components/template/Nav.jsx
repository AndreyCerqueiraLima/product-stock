import './Nav.css'
import { Link } from 'react-router-dom'
import React from 'react'

const nav = props => (<aside className="menu-area">
    <nav className="menu">
        <Link to="/"> <i className="fa fa-home"></i> Início </Link>
        <Link to="/users"> <i className="fa fa-users"></i> Usuários </Link>
        <Link to="/products"> <i className="fa fa-shopping-bag"/> Produtos </Link>
    </nav>
</aside>)

export default nav;
