import allProjectsArray from "..";


export default function renderNewProject() {
	const newProjectsContainer = document.querySelector('.new-projects-container');

	newProjectsContainer.innerHTML = '';

	allProjectsArray.forEach((newProject) => {
		const newProjectDiv = document.createElement('div');
		newProjectDiv.innerText = newProject.title;
		newProjectsContainer.appendChild(newProjectDiv);
	});
}