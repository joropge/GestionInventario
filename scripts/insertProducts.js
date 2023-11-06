import { inventory } from "./products.js";
import { listProducts } from "./listProducts.js";
import { totalInventario } from "./totalInventario.js";

export const insertProducts = () => {
  let nextId = inventory.length + 1; // Inicializa el contador de ID
  const productForm = document.getElementById("product-form-events");
  productForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const productName = document.getElementById("product-name").value;
    const productQuantity = parseInt(
      document.getElementById("product-quantity").value
    );
    const productPrice = parseFloat(
      document.getElementById("product-price").value
    );

    if (productName && !isNaN(productQuantity) && !isNaN(productPrice)) {
      const newProduct = {
        id: nextId,
        nombre: productName,
        cantidad: productQuantity,
        precio: productPrice,
      };
      //Agregar el nuevo producto al inventario
      inventory.push(newProduct);
      nextId++;

      //limpiar los campos del formulario
      productForm.reset();
      //limpiar la tabla antes de la nueva inserción
      const cleanTable = document.getElementById("clear-table");
      cleanTable.innerHTML = "";

      listProducts();
      totalInventario();
    }
  });
};
