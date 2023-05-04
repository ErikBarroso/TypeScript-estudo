"use strict";
// function normalizarTexto(texto: string) {
//   return texto.trim().toLowerCase();
// }
// console.log(normalizarTexto(" CoRreção de TExtO"));
const input = document.querySelector("input");
const total = localStorage.getItem("total");
input.value = total;
calcularGanho(input.value);
function calcularGanho(value) {
    const p = document.querySelector("p");
    p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
}
function totalMudou() {
    const value = Number(input.value);
    localStorage.setItem("total", value);
    calcularGanho(value);
}
input.addEventListener("keyup", totalMudou);
