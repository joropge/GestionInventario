import { inventory } from "./products.js";
import { totalInventario } from "./totalInventario.js";


export const listProducts = () => {
  
  const cleanTable = document.getElementById("clear-table");
  inventory.forEach((item) => {
    const row = cleanTable.insertRow();

    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    



    cell1.innerHTML = item.nombre;

    cell2.innerHTML = item.cantidad;

    cell3.innerHTML = item.precio;


    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", () => {
      if (confirm(`¿Estás seguro que deseas borrar "${item.nombre}"?`)) 
      {
        const index = inventory.findIndex(product => product.id === item.id)

        if (index !== -1) {
          inventory.splice(index, 1);
          totalInventario();
        }
      }
      cleanTable.innerHTML = "";

      listProducts();
    });
    cell4.appendChild(deleteBtn); //con esta linea estamos insertando el boton delete en la celda correspondiente

    const editBtn = document.createElement("button");
    editBtn.classList.add("btn");
    editBtn.innerText = "Edit";
    editBtn.addEventListener("click", () => {
      // showEditForm(item)
      //
      window.location.href = `/templates/editProducts.html?id=${item.id}`;
    });
    cell4.appendChild(editBtn); //con este boton se editará

  });
};
