let inputTask = document.querySelector(`[name="task"]`);
let btnAdd = document.querySelector(".add");
let containerTasks = document.querySelector(".tasks");

let updatePopup = document.querySelector(".popupUpdate .update");
let overlayPopup = document.querySelector(".popupUpdate .overlay");
let closePopUp = document.querySelector(".title i");
let inputUpdate = document.querySelector(`[name="update"]`);
let btnUpdate = document.querySelector(".save");

let noTask = document.querySelector(".noavailabel");
let count = 0;

btnAdd.addEventListener("click", function (e) {
  e.preventDefault();

  if (inputTask.value) {
    let divTask = document.createElement("div");
    let head = document.createElement("h2");

    let divContent = document.createElement("div");
    let date = document.createElement("p");

    let iconTask = document.createElement("div");
    let treblleIcone = document.createElement("i");
    let popupEditDelete = document.createElement("div");
    let btnEdit = document.createElement("div");
    let iconEdit = document.createElement("i");
    let btnDelete = document.createElement("div");
    let iconDelete = document.createElement("i");

    divTask.classList.add("task");
    head.append(inputTask.value);

    divContent.classList.add("content");
    date.classList.add("date");
    //
    let d = new Intl.DateTimeFormat("en-us", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
    date.append(d.format());
    //
    iconTask.classList.add("iconetask");
    treblleIcone.classList.add("fa-solid", "fa-ellipsis");

    popupEditDelete.classList.add("btn-edit-delete");

    btnEdit.classList.add("edit");
    iconEdit.classList.add("fa-solid", "fa-pen");
    btnEdit.append(iconEdit, "Edit");

    btnDelete.classList.add("delete");
    iconDelete.classList.add("fa-solid", "fa-trash");
    btnDelete.append(iconDelete, "Delete");

    popupEditDelete.append(btnEdit, btnDelete);
    iconTask.append(treblleIcone, popupEditDelete);

    divContent.append(date, iconTask);
    divTask.append(head, divContent);

    containerTasks.append(divTask);
    //
    count++;
    if (count !== 0) noTask.style.display = "none";
    //
    inputTask.value = "";
    // ###
    treblleIcone.addEventListener("click", () => {
      popupEditDelete.classList.toggle("visible");
    });
    document.addEventListener("click", (e) => {
      if (e.target !== treblleIcone) {
        popupEditDelete.classList.remove("visible");
      }
    });
    // ###
    btnEdit.addEventListener("click", () => {
      updatePopup.parentElement.classList.toggle("active");
      inputUpdate.value = head.innerHTML;
      inputUpdate.focus();
      popupEditDelete.classList.remove("visible");
    });
    btnUpdate.addEventListener("click", () => {
      head.innerHTML = inputUpdate.value;
      updatePopup.parentElement.classList.toggle("active");
    });
    closePopUp.addEventListener("click", () => {
      updatePopup.parentElement.classList.toggle("active");
    });
    overlayPopup.addEventListener("click", () => {
      updatePopup.parentElement.classList.toggle("active");
    });

    btnDelete.addEventListener("click", () => {
      divContent.parentElement.remove();
      //
      count--;
      if (count === 0) noTask.style.display = "block";
      //
    });
  } else {
    alert("Please Add Task");
  }
});
