import React from "react";
import Main from '../template/Main'
import { Link } from 'react-router-dom'
import UserTable from "./UserTable";


export default function UserIndex(){
    
    const headerProps = {
        icon: 'users',
        title: 'Usuários',
        subtitle: 'Cadastro de usuários'
    }

    const baseUrl = 'http://localhost:3001/users'

    return (
        <Main {...headerProps}>
            <div className="d-flex justify-items-end">
                <Link to="/users/new" className="btn btn-primary">Gerar Usuario</Link>
            </div>
            <UserTable baseUrl={baseUrl}/>
        </Main>
    )
}

