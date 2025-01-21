import createTodo from './createTodo';
import renderMainContainer from '../dom/mainContainer';

const addTodoBtn = document.querySelector('.add-todo-btn');
const addTodoDialog = document.querySelector('.add-todo-dialog');
const addTodoForm = document.querySelector('.add-todo-dialog > form');


export default function addTodoToProject (allProjectsArray) {
	addTodoBtn.addEventListener('click', () => {
		addTodoDialog.showModal();
		addTodoForm.addEventListener('submit', (e) => {
			e.preventDefault();
			const title = e.target.title.value;
			const description = e.target.description.value;
			const priority = e.target.priority.value;
			const date = e.target.date.value;

			const newTodo = new createTodo(title, description, priority, date);
			const activeProject = getActiveProject(allProjectsArray);
			activeProject.addTodo(newTodo);
            renderMainContainer(getActiveProject(allProjectsArray));
		});
	});
}