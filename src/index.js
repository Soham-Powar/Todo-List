import './styles.css';

import initProjects from './modules/initProjects';
import handleProjectClicks from './modules/projectClickHandler';
import handleProjectDialog from './modules/projectDialogHandler';
import addTodoToProject from './modules/addTodoToProject';
import { manageTodoCheckboxes, manageTodoDeletion } from './modules/todoManager';
import renderFooter from './dom/footer';
import renderHeader from './dom/header';
import renderMenu from './dom/menu';
import renderMainContainer from './dom/mainContainer';
import renderNewProject from './dom/renderNewProjects';


const allProjectsArray = initProjects();
export default allProjectsArray;

document.addEventListener('DOMContentLoaded', () => {
	// Render UI
	renderFooter();
	renderHeader();
	renderMenu();
	renderMainContainer();
	renderNewProject();

	// Setup handlers
	manageTodoCheckboxes();
	manageTodoDeletion();
	addTodoToProject(allProjectsArray);
	handleProjectClicks();
	handleProjectDialog(allProjectsArray, renderNewProject);
});

//check everything
//fix the project add thingy
//date and storage.
//also expand the todo to show description
//also do something about priority
//css




