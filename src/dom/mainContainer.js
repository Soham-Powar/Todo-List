import './dom.css'
import getActiveProject from '../modules/getActiveProject';

const mainContainer = document.querySelector('.main-container');
const mainContainerHeading = document.querySelector('.head > h3')
const todoContainer = document.createElement('div');
todoContainer.classList.add('todo-container');
mainContainer.appendChild(todoContainer);

export default function renderMainContainer() {
	todoContainer.innerHTML = '';
	const project = getActiveProject();

	mainContainerHeading.innerHTML = `
		${project.title}
	`;
	project.projectTodos.forEach(todoTask => {
		const todo = document.createElement('div');
		const todoTitle = document.createElement('div');
		const todoDueDate = document.createElement('div');

		const checkbox = document.createElement('input');
		checkbox.setAttribute("type", "checkbox");
		todo.appendChild(checkbox);

		todo.classList.add('todo');
		todoTitle.classList.add('todo-title');
		todoDueDate.classList.add('todo-due-title');
		todoTitle.innerHTML = `
			${todoTask.title}
		`;
		todoDueDate.innerHTML = `
			${todoTask.dueDate}
		`;
		todo.appendChild(todoTitle);
		todo.appendChild(todoDueDate);

		const removeTodoBtn = document.createElement('button');
		removeTodoBtn.innerHTML = 'X';

		todo.appendChild(removeTodoBtn);
		todoContainer.appendChild(todo);
	});
}
