import getActiveProject from "./getActiveProject";
import renderMainContainer from "../dom/mainContainer";
import updateLocalStorage from "./updateLocalStorage";

export function manageTodoCheckboxes() {
  const todoCheckboxes = document.querySelectorAll(".todo > input");

  todoCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const todoTitle = this.closest(".todo").querySelector(".todo-title");

      if (this.checked) {
        todoTitle.style.textDecoration = "line-through";
      } else {
        todoTitle.style.textDecoration = "none";
      }
    });
  });
}

export function manageTodoDeletion() {
  const deleteButtons = document.querySelectorAll(".todo button:first-of-type");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const todoContainer = this.closest(".todo");
      const todoTitle = todoContainer.querySelector(".todo-title").innerText;

      const activeProject = getActiveProject();
      activeProject.delete(todoTitle);
      renderMainContainer();
      manageTodoCheckboxes();
      manageTodoDeletion();
      updateLocalStorage();
    });
  });
}
