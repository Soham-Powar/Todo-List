import allProjectsArray from '../index'
import renderMainContainer from '../dom/mainContainer';
import { manageTodoCheckboxes, manageTodoDeletion } from './todoManager';
import addTodoToProject from './addTodoToProject';

export default function handleProjectClicks() {
	const menuProjects = document.querySelectorAll('.todo-holder');

	menuProjects.forEach((project) => {
		project.addEventListener('click', () => {
			console.log(menuProjects);
			console.log(allProjectsArray);
			
			const projectName = project.innerHTML
				.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
					index === 0 ? word.toLowerCase() : word.toUpperCase()
				)
				.replace(/\s+/g, '');

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
