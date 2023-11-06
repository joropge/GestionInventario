import { inventory } from "./products.js";
import { listProducts } from "./listProducts.js";
import { totalInventario } from "./totalInventario.js";

export const editProduct = (productId) => {
  const product = inventory.find((item) => item.id === productId);

  if (product) {
    //Obtener los campos del formulario
    const productNameInput = document.getElementById("product-name");
    const productQuantityInput = document.getElementById("product-quantity");
    const productPriceInput = document.getElementById("product-price");

    //Rellenar los campos con los datos del producto
    productNameInput.value = product.nombre;
    productQuantityInput.value = product.cantidad;
    productPriceInput.value = product.precio;

    //Agregar un evento de envío de formulario para actualizar
    const productForm = document.getElementById("product-form-events");
    productForm.onsubmit = function (e) {
      e.preventDefault();

      //Actualizar el producto con los nuevos datos

      product.nombre = productNameInput.value;
      product.cantidad = parseInt(productQuantityInput.value);
      product.precio = parseFloat(productPriceInput.value);

      //Limpiar la tabla y volver a listar los productos

      const cleanTable = document.getElementById("clear-table");
      cleanTable.innerHTML = "";
      listProducts();

      //Devolvemos el nombre del botón y reseteamos los campos
      productNameInput.value = "";
      productQuantityInput.value = "";
      productPriceInput.value = "";
      totalInventario();
    };
  }
};
