const PRODUTOS = "_PRODUTOS";

export function Errovalidacao(errors) {
    this.errors = errors;
    console.log(errors);
}

export default class ProdutoService {

    validar = (produto) => {
        const errors = [];

        if(!produto.nome)
            errors.push("O campo nome é obrigatório");

        if(!produto.sku)
            errors.push("O campo SKU é obrigatório");
        
        if(!produto.preco || produto.preco <= 0)
            errors.push("O preço do produto deve ser maior que zero (0)");

        if(!produto.fornecedor)
            errors.push("O campo fornecedor é obrigatório");

        if(errors.length > 0) {
            throw new Errovalidacao(errors);
        }
    }

    obterProdutos = () => {
        const produtos = localStorage.getItem(PRODUTOS);
        if(!produtos) return [];
        return JSON.parse(produtos);
    }

    obterIndex = (sku) => {
        let index = null;
        const prods = localStorage.getItem(PRODUTOS);
        this.obterProdutos().forEach( (prod, i) => {
            if(prod.sku === sku)
                index = i;
        });
        return index;
    }

    salvar = (produto) => {
        this.validar(produto);

        let produtos = localStorage.getItem(PRODUTOS);
        
        if(!produtos)
            produtos = [];
        else
            produtos = JSON.parse(produtos);

        const index = this.obterIndex(produto.sku);
        if(index === null)
            produtos.push(produto);
        else
            produtos[index] = produto;

        localStorage.setItem(PRODUTOS, JSON.stringify(produtos));
    }
}