import getActiveProject from "./getActiveProject";
import { parse, format } from "date-fns";

const addTodoDialog = document.querySelector(".add-todo-dialog");
const addTodoForm = document.querySelector(".add-todo-dialog > form");

export default function editTodoHandler(editTodoBtn, todo) {
  editTodoBtn.addEventListener("click", () => {
    addTodoForm.elements.title.value = todo.title;
    addTodoForm.elements.description.value = todo.description;
    addTodoForm.elements.priority.value = todo.priority;
    addTodoForm.elements.date.value = format(
      parse(todo.dueDate, "dd/MM/yyyy", new Date()),
      "yyyy-MM-dd",
    );
    addTodoDialog.showModal();
    const activeProject = getActiveProject();
    activeProject.delete(todo.title);
  });
}
