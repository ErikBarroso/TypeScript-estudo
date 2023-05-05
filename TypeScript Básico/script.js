"use strict";
// function normalizarTexto(texto: string) {
//   return texto.trim().toLowerCase();
// }
// console.log(normalizarTexto(" CoRreção de TExtO"));
// const input = document.querySelector("input");
// const total = localStorage.getItem("total");
// if (input && total) {
//   input.value = total;
//   calcularGanho(Number(input.value));
// }
// function calcularGanho(value: number) {
//   const p = document.querySelector("p");
//   if (p) {
//     p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
//   }
// }
// function totalMudou() {
//   if (input) {
//     localStorage.setItem("total", input.value);
//     calcularGanho(Number(input.value));
//   }
// }
// if (input) {
//   input.addEventListener("keyup", totalMudou);
// }
// let total: string | number = 200;
// total = "3";
// function isNumber(valor: string | number) {
//   if (typeof valor === "number") {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isNumber("300"));
// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")
// function toNumber(valor: string | number) {
//   if (typeof valor === "number") {
//     return valor;
//   }
//   if (typeof valor === "string") {
//     // const numero = parseFloat(valor);
//     // return numero;
//     return +valor;
//   } else {
//     throw "O valor deve ser um número ou uma string";
//   }
// }
// console.log(toNumber(true));
// interface Empresa {
//   nome: "string";
//   fundacao: "number";
//   pais: "string";
// }
// interface InterfaceDados {
//   nome: "string";
//   preco: "number";
//   descricao: "string";
//   garantia: "string";
//   seguroAcidentes: boolean;
//   empresaFabricante: Empresa;
//   empresaMontadora: Empresa;
// }
// async function fetchProduct() {
//   const response = await fetch("https://api.origamid.dev/json/notebook.json");
//   const data = await response.json();
//   showProduct(data);
// }
// fetchProduct();
// function showProduct(data: InterfaceDados) {
//   document.body.innerHTML = `
//     <div>
//       <h2>${data.nome}</h2>
//       <p> R$ ${data.preco}</p>
//     </div>
//     <div>
//       <h3> Fabricante: ${data.empresaFabricante.nome}</h3>
//     </div>
//     <div>
//       <h3> Fabricante: ${data.empresaMontadora.nome}</h3>
//     </div>
//   `;
// }
// interface InterfaceCurso {
//   nome: "string";
//   horas: "number";
//   aulas: "number";
//   gratuito: boolean;
//   tags: string[];
//   idAulas: number[];
//   nivel: "iniciante" | "avancado";
// }
// async function fetchCursos() {
//   const response = await fetch("https://api.origamid.dev/json/cursos.json");
//   const data = await response.json();
//   mostrarCursos(data);
// }
// fetchCursos();
// function mostrarCursos(cursos: InterfaceCurso[]) {
//   cursos.forEach((curso) => {
//     let color;
//     if (curso.nivel === "iniciante") {
//       color = "blue";
//     } else {
//       curso.nivel === "avancado";
//       color = "red";
//     }
//     document.body.innerHTML += `
//     <div>
//       <h2 style = "color: ${color};"> ${curso.nome} </h2>
//       <p>Aulas: ${curso.aulas} </p>
//       <p>Tipo: ${curso.gratuito ? "Gratuito" : "Pago"} </p>
//       <p>Tags: ${curso.tags.join(", ")} </p>
//       <p>Nível: ${curso.nivel} </p>
//     </div>
//   `;
//   });
// }
