import { inventory } from "./products.js";

export const listProducts = () => {
  
  const cleanTable = document.getElementById("clear-table");
  inventory.forEach((item) => {
    const row = cleanTable.insertRow();

    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);



    cell1.innerHTML = item.id;

    cell2.innerHTML = item.nombre;

    cell3.innerHTML = item.cantidad;

    cell4.innerHTML = item.precio;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", () => {
      if (confirm(`¿Estás seguro que deseas borrar "${item.nombre}"?`)) 
      {
        const index = inventory.findIndex(product => product.id === item.id)

        if (index !== -1) {
          inventory.splice(index, 1);
        }
      }
      cleanTable.innerHTML = "";

      listProducts();
    });
    cell5.appendChild(deleteBtn); //con esta linea estamos insertando el boton delete en la celda correspondiente

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.addEventListener("click", () => {
      // showEditForm(item)
      window.location.href = `/templates/editProducts.html?id=${item.id}`;
    });
    cell5.appendChild(editBtn); //con este boton se editará
  });
};
