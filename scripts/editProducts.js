import { inventory } from "./products.js";

document.addEventListener("DOMContentLoaded", () => {
  const editProductForm = document.getElementById("edit-product-form");
  const editProductId = document.getElementById("edit-product-id");
  const editProductName = document.getElementById("edit-product-name");
  const editProductQuantity = document.getElementById("edit-product-quantity");
  const editProductPrice = document.getElementById("edit-product-price");

  const datosURL = new URLSearchParams(window.location.search);
  const productId = parseInt(datosURL.get("id"));
  const product = inventory.find((item) => item.id === productId);

  if (!product) {
    alert("Producto no encontrado, se le ridigirá a la página principal");
    window.location.href = `index.html`;
  } else {
    editProductId.value = product.id;
    editProductName.value = product.nombre;
    editProductQuantity.value = product.cantidad;
    editProductPrice.value = product.precio;
  }
  editProductForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });
  const saves = document.getElementById("saves");
  saves.addEventListener("click", () => {
    const updatedProduct = {
      id: product.id,
      nombre: editProductName.value,
      cantidad: parseInt(editProductQuantity.value),
      precio: parseFloat(editProductPrice.value),
    };
    const index = inventory.findIndex((item) => item.id === productId);

    if (index !== -1) {
      inventory[index] = updatedProduct;
      // Redirigir a la página de índice después de guardar los cambios
      window.location.href = "index.html";
    }
  });
});
