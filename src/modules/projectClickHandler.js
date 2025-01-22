export default function handleProjectClicks(allProjectsArray, renderMainContainer, manageTodoCheckboxes, manageTodoDeletion, addTodoToProject) {
	const menuProjects = document.querySelectorAll('.todo-holder');
	menuProjects.forEach((project) => {
		project.addEventListener('click', () => {
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
			addTodoToProject(allProjectsArray);
		});
	});
}
