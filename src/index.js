import './styles.css';
import createTodo from './modules/createTodo';
import createProject from './modules/createProject';
import addTodoToProject from './modules/addTodoToProject';
import { manageTodoCheckboxes, manageTodoDeletion } from './modules/todoManager';

import renderFooter from './dom/footer';
import renderHeader from './dom/header';
import renderMenu from './dom/menu';
import renderMainContainer from './dom/mainContainer';
import renderNewProject from './dom/renderNewProjects';


const allProjectsArray = [];
export default allProjectsArray;

const inbox = new createProject('inbox');
allProjectsArray.push(inbox);
const today = new createProject('today');
allProjectsArray.push(today);
const thisWeek = new createProject('thisWeek');
allProjectsArray.push(thisWeek);

const todo1 = new createTodo('soham', 'sfef', '2025-01-18', 'low', false);
const todo2 = new createTodo('socwam', 'sfef', '2025-01-17', 'medium', false);
const todo3 = new createTodo('sowafcwam', 'sfef', '2025-01-24', 'high', false);
inbox.addTodo(todo1);
inbox.addTodo(todo2);
inbox.addTodo(todo3);
today.addTodo(todo1);
today.addTodo(todo2);
thisWeek.addTodo(todo1);

inbox.active = true;


renderFooter();
renderHeader();
renderMenu();

renderMainContainer();
manageTodoCheckboxes();
manageTodoDeletion();
addTodoToProject(allProjectsArray);


//project btns in menu click
const menuProjects = document.querySelectorAll('.todo-holder');
menuProjects.forEach((project) => {
	project.addEventListener('click', () => {
		const projectName = project.innerHTML.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
			return index == 0 ? word.toLowerCase() : word.toUpperCase();
		}).replace(/\s+/g, '');
		
		allProjectsArray.forEach((proj) => {
			proj.active = proj.title === projectName;
		});
		renderMainContainer();
		manageTodoCheckboxes();
		manageTodoDeletion();
		addTodoToProject(allProjectsArray);
	});
});


//project dialog on click
const addProjectBtn = document.querySelector('.add-project-btn');
const addProjectDialog = document.querySelector('.add-project-dialog');
const addProjectForm = document.querySelector('.add-project-dialog form');

addProjectBtn.addEventListener('click', () => {
	addProjectDialog.showModal();
});

addProjectForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const title = e.target.project_title.value;
	// const description = e.target.project_description.value;

	const newProject = new createProject(title);
	allProjectsArray.push(newProject);
	addProjectForm.reset();
	addProjectDialog.close();
	console.log(allProjectsArray);
	renderNewProject();
});




