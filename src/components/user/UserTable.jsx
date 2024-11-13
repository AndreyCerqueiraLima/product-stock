import React, {Component} from "react";
import axios from 'axios';

const initialState = {
    list: []
}


export default class UserTable extends Component{
    
    state = {...initialState}
    
    constructor(props){
        super(props)
        this.baseUrl = props.baseUrl
    }
    

    componentWillMount() {
        axios(this.baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    remove(user) {
        axios.delete(`${this.baseUrl}/${user.id}`).then(resp => {
            const list = this.state.list.filter(u => u !== user)
            this.setState({ list })
        })
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button onClick={_ => this.load(user)} className="btn btn-warning"><i className="fa fa-pencil"></i></button>
                        <button onClick={_ => this.remove(user)} className="btn btn-danger"><i className="fa fa-trash"></i></button>
                    </td>
                </tr>
            )
        })
    }


    render() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

}