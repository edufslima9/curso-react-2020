import React, { Component } from 'react';

export default class ConsultaProdutos extends Component {
    
    state = {
        produtos: []
    }

    componentDidMount() {

    }
    
    render() {
        return(
            <div className="card">
                <div className="card-header">
                    Cadastro de Produto
                </div>
                <div className="card-body">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>SKU</th>
                                <th>Preço</th>
                                <th>Fornecedor</th>
                                <th>Editar</th>
                                <th>Remover</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.produtos.map(prod => {
                                    return (
                                        <tr>
                                            <td>{prod.nome}</td>
                                            <td>{prod.sku}</td>
                                            <td>{prod.preco}</td>
                                            <td>{prod.fornecedor}</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}