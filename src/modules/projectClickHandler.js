import allProjectsArray from '../index'
import renderMainContainer from '../dom/mainContainer';
import { manageTodoCheckboxes, manageTodoDeletion } from './todoManager';
import addTodoToProject from './addTodoToProject';

export default function handleProjectClicks() {
	const menuProjects = document.querySelectorAll('.todo-holder');

	menuProjects.forEach((project) => {
		project.addEventListener('click', () => {
			
			const projectName = project.innerHTML;

			allProjectsArray.forEach((proj) => {
				proj.active = proj.title === projectName;
			});

			renderMainContainer();
			manageTodoCheckboxes();
			manageTodoDeletion();
			addTodoToProject();
		});
	});
}
