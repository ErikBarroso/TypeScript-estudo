"use strict";
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
// const link = document.getElementById("origamid");
// if (link instanceof HTMLAnchorElement) {
//   link.href = link.href.replace("http://", "https://");
// }
// const links = document.querySelectorAll(".link");
// links.forEach((item) => {
//   if (item instanceof HTMLAnchorElement) {
//     ativarElemento(item);
//   }
// });
// function ativarElemento(elemento: HTMLAnchorElement) {
//   elemento.style.color = "red";
//   elemento.style.border = "12px solid red";
// }
async function fetchCursos() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const json = await response.json();
    handleCursos(json);
}
fetchCursos();
function isCurso(value) {
    if (value &&
        typeof value === "object" &&
        "nome" in value &&
        "horas" in value &&
        "tags" in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleCursos(data) {
    if (Array.isArray(data)) {
        data.filter(isCurso).forEach((item) => {
            document.body.innerHTML += `
      <div> 
      <h2>${item.nome}</h2>
      <p>${item.horas}</p>
      </div>
      
      `;
        });
    }
}
