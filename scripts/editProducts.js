import { inventory } from "./products.js";
import { listProducts } from "./listProducts.js";
import { totalInventario } from "./totalInventario.js";

export const editProduct = (productId) => {
  const product = inventory.find((item) => item.id === productId);

  if (product) {
    const productNameInput = document.getElementById("product-name");
    const productQuantityInput = document.getElementById("product-quantity");
    const productPriceInput = document.getElementById("product-price");

    //Rellenar los campos
    productNameInput.value = product.nombre;
    productQuantityInput.value = product.cantidad;
    productPriceInput.value = parseFloat(product.precio);

    //Agregar evento envío formulario para actualizar
    const productForm = document.getElementById("product-form-events");
    productForm.onsubmit = function (e) {
      e.preventDefault();

      //Actualizar producto

      product.nombre = productNameInput.value;
      product.cantidad = parseInt(productQuantityInput.value);
      product.precio = parseFloat(productPriceInput.value);

      //Limpiar tabla

      const cleanTable = document.getElementById("clear-table");
      cleanTable.innerHTML = "";
      listProducts();

      //Reset campos

      productNameInput.value = "";
      productQuantityInput.value = "";
      productPriceInput.value = "";
      totalInventario();
    };
  }
};
