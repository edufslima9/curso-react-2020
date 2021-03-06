import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ProdutoService from '../../app/produtoService';

const estadoInicial = {
    nome: '',
    sku: '',
    descricao: '',
    preco: 0,
    fornecedor: '',
    sucesso: false,
    errors: [],
    atualizando: false
}

class CadastroProduto extends Component {
    
    state = estadoInicial;

    constructor() {
        super();
        this.service = new ProdutoService();
    }

    onChange = (event) => {
        const val = event.target.value;
        const nomeCampo = event.target.name;

        this.setState({ [nomeCampo]: val });
    }

    onSubmit = (event) => {
        const produto = {
            nome: this.state.nome,
            sku: this.state.sku,
            descricao: this.state.descricao,
            preco: this.state.preco,
            fornecedor: this.state.fornecedor
        }
        try {
            this.service.salvar(produto);
            this.limpaCampos();
            this.setState({ sucesso: true });
        }catch(erro) {
            const errors = erro.errors;
            this.setState({ errors: errors });
        }
    }

    limpaCampos = () => {
        this.setState(estadoInicial);
    }

    closeAlert = () => {
        this.setState({ sucesso: false });
    }

    componentDidMount() {
        const sku = this.props.match.params.sku;

        if(sku) {
            const result = this
                    .service
                    .obterProdutos()
                    .filter( produto => produto.sku === sku );
            if(result.length > 0) {
                const produtoEncontrado = result[0];
                this.setState({ ...produtoEncontrado, atualizando: true });
            }
        }
    }
    
    render() {
        const state = this.state;

        return (
            <div className="card">
                <div className="card-header">{ state.atualizando ? 'Atualização' : 'Cadastro' } de Produto</div>
                <div className="card-body">
                    
                    {
                        state.sucesso && 
                        <div className="alert alert-dismissible alert-success">
                            <button onClick={this.closeAlert} type="button" className="close" data-dismiss="alert">&times;</button>
                            <strong>Sucesso!</strong> O produto foi salvo!
                        </div>
                    }
                    {
                        state.errors.length > 0 &&
                        state.errors.map(msg => {
                            return (
                                <div className="alert alert-dismissible alert-danger">
                                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                                    <strong>Erro!</strong> {msg}
                                </div>
                            )
                        })
                    }
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Nome: *</label>
                                <input type="text"name="nome" value={state.nome} onChange={this.onChange} className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>SKU: *</label>
                                <input type="text" name="sku" disabled={state.atualizando} value={state.sku} onChange={this.onChange} className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-md-12">
                            <div className="form-group">
                                <label>Descrição:</label>
                                <textarea name="descricao" value={state.descricao} onChange={this.onChange} className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Preço: *</label>
                                <input type="text" name="preco" value={state.preco} onChange={this.onChange} className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Fornecedor: *</label>
                                <input type="text" name="fornecedor" value={state.fornecedor} onChange={this.onChange} className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <button onClick={this.onSubmit} className="btn btn-success">{ state.atualizando ? 'Atualizar' : 'Salvar' }</button>
                        </div>
                        <div className="col-md-1">
                            <button onClick={this.limpaCampos} className="btn btn-primary">Limpar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(CadastroProduto);