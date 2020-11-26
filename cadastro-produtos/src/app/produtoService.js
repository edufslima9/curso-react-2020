const PRODUTOS = "_PRODUTOS";

export function Errovalidacao(errors) {
    this.errors = errors;
}

export default class ProdutoService {

    validar = (produto) => {
        const errors = [];

        if(!produto.nome)
            errors.push("O campo nome é obrigatório");

        if(!produto.sku)
            errors.push("O campo SKU é obrigatório");
        
        if(!produto.preco)
            errors.push("O campo preço é obrigatório");
        else if(!isNaN(produto.preco))
            errors.push("preço inválido");
        else if(!isNaN(produto.preco) && parseInt(produto.preco) <= 0)
            errors.push("O preço do produto deve ter o valor maior que zero (0)");

        if(!produto.fornecedor)
            errors.push("O campo fornecedor é obrigatório");

        if(errors.length > 0) {
            throw new Errovalidacao(errors);
        }
    }

    obterProdutos = () => {
        const produtos = localStorage.getItem(PRODUTOS);
        return JSON.parse(produtos);
    }

    salvar = (produto) => {
        this.validar(produto);

        let produtos = localStorage.getItem(PRODUTOS);
        
        if(!produtos)
            produtos = [];
        else
            produtos = JSON.parse(produtos);

        produtos.push(produto);

        localStorage.setItem(PRODUTOS, JSON.stringify(produtos));
    }
}