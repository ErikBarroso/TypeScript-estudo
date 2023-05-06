// class Produto {
//   nome: string;
//   preco: number;
//   constructor(nomeDoProduto: string, precoDoProduto: number) {
//     this.nome = nomeDoProduto;
//     this.preco = precoDoProduto;
//   }
//   precoReal() {
//     return `R$ ${this.preco}`;
//   }
// }

// const livro = new Produto("O Grande Conflito", 500);

// console.log(livro.nome, livro.preco, livro.precoReal());

const link = document.getElementById("origamid");
if (link instanceof HTMLAnchorElement) {
  link.href = link.href.replace("http://", "https://");
}
