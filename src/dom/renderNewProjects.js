import allProjectsArray from "..";


export default function renderNewProject() {
	const newProjectsContainer = document.querySelector('.new-projects-container');

	newProjectsContainer.innerHTML = '';

	allProjectsArray.slice(3).forEach((newProject) => {
		const newProjectDiv = document.createElement('div');
		newProjectDiv.classList.add('todo-holder');
		newProjectDiv.innerText = newProject.title;
		newProjectsContainer.appendChild(newProjectDiv);
	});
}