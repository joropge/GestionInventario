import { listProducts } from "./listProducts.js";
import { insertProducts } from "./insertProducts.js";

/**
 * Autor: Jorge Ordiz Perez(estudiante)
 * GitHub:
 */

document.addEventListener("DOMContentLoaded", listProducts)

document.addEventListener("DOMContentLoaded", () => {
  const btnForm = document.getElementById("product-form-events");

  btnForm.addEventListener("click", () => {
    insertProducts();
  });
});
