export default function setActiveProject() {
    const allProjects = document.querySelectorAll('.todo-holder');
    allProjects.forEach((project) => {
        project.addEventListener('click', () => {
            allProjects.forEach((proj) => proj.classList.remove('active-project'));
            console.log('suii');
            project.classList.add('active-project');
        });
    });
}
