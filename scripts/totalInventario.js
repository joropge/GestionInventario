import { inventory } from "./products.js";

export const totalInventario = () => {
  const totalValue = document.getElementById("totalValue");
  let precioTotal = 0;
  inventory.forEach((item) => {
    precioTotal += parseInt(item.cantidad) * parseFloat(item.precio);
  });
  totalValue.innerText = precioTotal.toLocaleString() + "€";
};
