import React, { Component } from "react";
import Main from '../template/Main';
import { Link } from 'react-router-dom';
import axios from 'axios';

const initialState = {
    user: {
        name: '',
        email: ''
    },
    message: '',
    isLoading: false,
};

const headerProps = {
    icon: 'user',
    title: 'Criando Usuário',
    subtitle: 'Cadastro de usuários'
};


export default class UserForm extends Component {
    
    
    constructor(props) {
        super(props);
        this.baseUrl = 'http://localhost:3001/users';
    }

    state = { ...initialState };

    
    updateFields = (event) => {
        const user = { ...this.state.user };
        user[event.target.name] = event.target.value;
        this.setState({ user });
    };

    save = async () => {
        const { user } = this.state;

        if (!user.name || !user.email) {
            this.setState({ message: 'Por favor, preencha todos os campos.' });
            return;
        }

        this.setState({ isLoading: true, message: '' });

        const httpMethod = user.id ? 'put' : 'post';
        const url = user.id ? `${this.baseUrl}/${user.id}` : this.baseUrl;

        try {
            const resp = await axios[httpMethod](url, user);
            if (resp.status === 200) {
                this.setState({
                    message: 'Usuário salvo com sucesso!',
                    user: initialState.user, // Limpa o formulário após o envio
                });
            }
        } catch (error) {
            this.setState({ message: 'Erro ao salvar o usuário. Tente novamente.' });
        } finally {
            this.setState({ isLoading: false });
        }
    };

    load = (user) => {
        this.setState({ user });
    };

    clear = () => {
        this.setState({ user: initialState.user });
    };

    render() {
        const { user, message, isLoading } = this.state;

        return (
            <Main {...headerProps}>
                <div className="form">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            {message && <div className="alert alert-info">{message}</div>}

                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={user.name}
                                    onChange={this.updateFields}
                                    placeholder="Digite o nome..."
                                />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={user.email}
                                    onChange={this.updateFields}
                                    placeholder="Digite o email..."
                                />
                            </div>

                            <hr />

                            <div className="col-12 d-flex justify-content-end">
                                <button
                                    className="btn btn-primary"
                                    onClick={this.save}
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            {' '}Salvando...
                                        </>
                                    ) : (
                                        'Salvar'
                                    )}
                                </button>
                                <Link to="/users" className="ml-2 btn btn-secondary">
                                    Cancelar
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Main>
        );
    }
}
