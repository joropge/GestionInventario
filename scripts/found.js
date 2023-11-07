import { inventory } from "./products.js";
import { listProducts } from "./listProducts.js";
import { totalInventario } from "./totalInventario.js";



export const buscarPorNombre = () => {
  cleanClasses();
const search= document.getElementById("product-search-input")
const table = document.getElementById("clear-table")
const searchText = search.value.toLowerCase();
inventory.forEach((item, i) => {
  if(item.nombre.toLocaleLowerCase().includes(searchText)){
    console.log(table.rows[i]);
    table.rows[i].classList.add("found");
  }
});

search.value = "";

}

const cleanClasses = () => {
  const table = document.getElementById("clear-table")
  inventory.forEach((item, i) => {
    table.rows[i].classList.remove("found")
  })
}
