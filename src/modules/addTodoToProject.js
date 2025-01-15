import createTodo from './createTodo';
import getActiveProject from './getActiveProject';

const addTodoBtn = document.querySelector('.add-todo-btn');
const addTodoDialog = document.querySelector('.add-todo-dialog');
const addTodoForm = document.querySelector('.add-todo-dialog > form');


export default function addTodoToProject () {
	addTodoBtn.addEventListener('click', () => {
		addTodoDialog.showModal();
		addTodoForm.addEventListener('submit', (e) => {
			e.preventDefault();
			const title = e.target.title.value;
			const description = e.target.description.value;
			const priority = e.target.priority.value;
			const date = e.target.date.value;

			const newTodo = new createTodo(title, description, priority, date);
		});
	});
}