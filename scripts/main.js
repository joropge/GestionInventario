import { listProducts } from "./listProducts.js";
import { insertProducts } from "./insertProducts.js";
import { totalInventario } from "./totalInventario.js";
import { buscarPorNombre } from "./found.js";

/**
 * Autor: Jorge Ordiz Perez(estudiante)
 * GitHub:
 */

document.addEventListener("DOMContentLoaded", listProducts);

document.addEventListener("DOMContentLoaded", () => {
  const btnForm = document.getElementById("product-form-events");

  btnForm.addEventListener("click", () => {
    insertProducts();
  });

  // Obtener el botón de alternar
  const toggleButton = document.getElementById("btnMode");

  // Obtener el elemento body
  const body = document.body;

  // Agregar un event listener para el botón de alternar
  toggleButton.addEventListener("click", () => {
    // Alternar la clase dark-mode en el body
    body.classList.toggle("dark-mode");
    document.querySelector("header").classList.toggle("dark-mode");
    document.querySelector("h1").classList.toggle("dark-mode");
    document.querySelector("table").classList.toggle("dark-mode");
    document.querySelector("button").classList.toggle("dark-mode");
  });

  const btnSearch = document.getElementById("product-search");
  btnSearch.addEventListener("click", () => {
    buscarPorNombre();
  });

  // const btnTotal = document.getElementById("btnTotal");
  // btnTotal.addEventListener("click", () => {
  //   totalInventario();
  // });
});
document.addEventListener("DOMContentLoaded", totalInventario);
