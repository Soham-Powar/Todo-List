export default function (allProjectsArray) {
	const activeProject = document.querySelector(".active-project");
	const activeProjectName = activeProject.innerHTML.toLowerCase();
	return allProjectsArray.find(({title}) => title === activeProjectName);
}