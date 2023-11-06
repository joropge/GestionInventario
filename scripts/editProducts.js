import { inventory } from "./products.js";
import { totalInventario } from "./totalInventario.js";

const showEditForm = (product) => {
  // Obtén los elementos del formulario de edición
  const productNameInput = document.getElementById('product-name');
  const productQuantityInput = document.getElementById('product-quantity');
  const productPriceInput = document.getElementById('product-price');
  const confirmEditButton = document.querySelector('.btn-agregar-confirmar button[type="submit"]');

  // Llena el formulario con los datos del producto seleccionado
  productNameInput.value = product.nombre;
  productQuantityInput.value = product.cantidad;
  productPriceInput.value = product.precio;

  // Cambia el texto del botón a "Confirmar edición"
  confirmEditButton.textContent = "Confirmar edición";

  // Agrega un controlador de eventos para confirmar la edición
  confirmEditButton.addEventListener("click", () => {
    confirmEdit(product);
  });
};

const confirmEdit = (product) => {
  const productName = document.getElementById('product-name').value;
  const productQuantity = parseInt(document.getElementById('product-quantity').value);
  const productPrice = parseFloat(document.getElementById('product-price').value);

  if (productName && !isNaN(productQuantity) && !isNaN(productPrice)) {
    // Actualiza los datos del producto
    product.nombre = productName;
    product.cantidad = productQuantity;
    product.precio = productPrice;

    // Restablece el formulario
    const productForm = document.getElementById("product-form-events");
    productForm.reset();

    // Cambia el texto del botón de confirmación a "Agregar producto"
    const confirmEditButton = document.querySelector('.btn-agregar-confirmar button[type="submit"]');
    confirmEditButton.textContent = "Agregar producto";

    // Actualiza la tabla
    cleanTable.innerHTML = "";
    listProducts();
  }
};




// document.addEventListener("DOMContentLoaded", () => {
//   const editProductForm = document.getElementById("edit-product-form");
//   const editProductId = document.getElementById("edit-product-id");
//   const editProductName = document.getElementById("edit-product-name");
//   const editProductQuantity = document.getElementById("edit-product-quantity");
//   const editProductPrice = document.getElementById("edit-product-price");

//   const datosURL = new URLSearchParams(window.location.search);
//   const productId = parseInt(datosURL.get("id"));
//   const product = inventory.find((item) => item.id === productId);

//   if (!product) {
//     alert("Producto no encontrado, se le ridigirá a la página principal");
//     window.location.href = `index.html`;
//   } else {
//     editProductId.value = product.id;
//     editProductName.value = product.nombre;
//     editProductQuantity.value = product.cantidad;
//     editProductPrice.value = product.precio;
//   }
//   editProductForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//   });
//   const saves = document.getElementById("saves");
//   saves.addEventListener("click", () => {
//     const updatedProduct = {
//       id: product.id,
//       nombre: editProductName.value,
//       cantidad: parseInt(editProductQuantity.value),
//       precio: parseFloat(editProductPrice.value),
//     };
//     const index = inventory.findIndex((item) => item.id === productId);

//     if (index !== -1) {
//       inventory[index] = updatedProduct;
//       // Redirigir a la página de índice después de guardar los cambios
//       window.location.href = "index.html";
//     }
//   });
// });
