
const nuevaTareaInput = document.querySelector("input");
const tbody = document.querySelector("tbody");
const btn = document.querySelector("button");

const tareas = []



btn.addEventListener("click", () => {

  const { value: nuevaTarea } = nuevaTareaInput;

  if (nuevaTarea) {

    addTask(nuevaTarea)
    refresh()
  } else {

    alert("Debe escribir una escripción de la Tarea");

  }

});

const addTask = (nuevaTarea) => {

  const id = Math.floor(Math.random() * 99);
  const tarea = {
    id,
    tarea: nuevaTarea,
    check: false,
  };
  tareas.push(tarea);
  nuevaTareaInput.value = "";
};

const fillTableRow = ({ id, tarea, check }) => {
  const row =
    ` <tr>
          <td>${id}</td>
          <td>${tarea}</td>
          <td class="x-delete">
            <input onchange="checkInput(${id})" ${check ? "checked" : ""}  type="checkbox" />
            <span onclick="editTask"(${id})><i class="fas fa-edit"></i></span>
            <span onclick="deleteTask(${id})"><i class="fas fa-trash-alt"></i></span>
          </td>
        </tr>
      `;
  return row;
};

const fillTable = () => {
  let rows = tareas.map((e) => fillTableRow(e));
  tbody.innerHTML = rows;
};

const editTask = (id) => {
  const tarea = tareas.find((e) => e.id === id);
  const {tarea: tareaDescription} = tarea;
  const nuevaDescription = prompt("Editar Tarea:", tareaDescription);
  tarea.tarea = nuevaDescription;
  refresh();
};

const deleteTask = (id) => {
  const decision = confirm("Se eliminará data. ¿Está seguro de elimirala?");
  if(decision){
      const index = tareas.findIndex(e => e.id === id)
      tareas.splice(index, 1);
      refresh();
  }
};


const refresh = () => {
  fillTable();
  //Editar
  //Eliminar
};
