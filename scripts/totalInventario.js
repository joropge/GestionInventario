import { inventory } from "./products.js";

export const totalInventario = () => {
  const valorTotal = document.getElementById("valorTotal");
  let precioTotal = 0;
  inventory.forEach((item) => {
    precioTotal += parseInt(item.cantidad) * parseFloat(item.precio);
  });
  valorTotal.innerText = precioTotal.toLocaleString() + "€";
};
