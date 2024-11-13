import React, { Component } from "react";
import Main from '../template/Main'
import { Link } from 'react-router-dom'
import UserTable from "./UserTable";

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários'
}

const baseUrl = 'http://localhost:3001/users'

export default class UserCrud extends Component {

    render() {
        return (
            <Main {...headerProps}>
                <div className="d-flex justify-items-end">
                    <Link to="/users/new" className="btn btn-primary">Gerar Usuario</Link>
                </div>
                {/* <UserForm baseUrl={baseUrl}/> */}
                <UserTable baseUrl={baseUrl}/>
            </Main>
        )
    }
}