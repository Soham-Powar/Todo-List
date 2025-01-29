import getActiveProject from "./getActiveProject";

const addTodoDialog = document.querySelector('.add-todo-dialog');
const addTodoForm = document.querySelector('.add-todo-dialog > form');

export default function editTodoHandler(editTodoBtn, todo) {
    editTodoBtn.addEventListener('click', () => {
		addTodoForm.elements.title.value = todo.title;
		addTodoForm.elements.description.value = todo.description;
		addTodoForm.elements.priority.value = todo.priority;
		addTodoForm.elements.date.value = todo.date;
        addTodoDialog.showModal();
		const activeProject = getActiveProject();
		activeProject.delete(todo.title);	
    });
} 