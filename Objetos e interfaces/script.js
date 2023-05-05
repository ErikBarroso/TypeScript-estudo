"use strict";
class Produto {
    nome;
    preco;
    constructor(nomeDoProduto, precoDoProduto) {
        this.nome = nomeDoProduto;
        this.preco = precoDoProduto;
    }
    precoReal() {
        return `R$ ${this.preco}`;
    }
}
const livro = new Produto("O Grande Conflito", 500);
console.log(livro.nome, livro.preco, livro.precoReal());
