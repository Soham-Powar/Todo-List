import createProject from './createProject';
import handleProjectClicks from './projectClickHandler';
export default function handleProjectDialog(allProjectsArray, renderNewProject) {
	const addProjectBtn = document.querySelector('.add-project-btn');
	const addProjectDialog = document.querySelector('.add-project-dialog');
	const addProjectForm = document.querySelector('.add-project-dialog form');

	addProjectBtn.addEventListener('click', () => {
		addProjectDialog.showModal();
	});

	addProjectForm.addEventListener('submit', (e) => {
		e.preventDefault();
		const title = e.target.project_title.value;

		const newProject = new createProject(title);
		allProjectsArray.push(newProject);
		addProjectForm.reset();
		addProjectDialog.close();

		console.log(allProjectsArray);
		renderNewProject();
		handleProjectClicks(allProjectsArray, renderMainContainer, manageTodoCheckboxes, manageTodoDeletion, addTodoToProject);
	});
}
