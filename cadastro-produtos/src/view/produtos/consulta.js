import React, { Component } from 'react';

import ProdutoService from '../../app/produtoService';
import { withRouter } from 'react-router-dom';

class ConsultaProdutos extends Component {
    
    state = {
        produtos: []
    }

    constructor() {
        super();
        this.service = new ProdutoService();
    }

    componentDidMount() {
        const produtos = this.service.obterProdutos();
        this.setState({ produtos });
    }

    preparaEditar = (sku) => {
        console.log('SKU para editar ', sku)
        this.props.history.push(`/cadastro-produtos/${sku}`);
    }
    
    render() {
        return(
            <div className="card">
                <div className="card-header">
                    Consulta de Produtos
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
                                this.state.produtos.map( (prod, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{prod.nome}</td>
                                            <td>{prod.sku}</td>
                                            <td>{prod.preco}</td>
                                            <td>{prod.fornecedor}</td>
                                            <td>
                                                <button onClick={ () => this.preparaEditar(prod.sku)} className="btn btn-primary">Editar</button>
                                            </td>
                                            <td>
                                                <button className="btn btn-danger">Remover</button>
                                            </td>
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

export default withRouter(ConsultaProdutos);