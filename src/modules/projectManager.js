import updateLocalStorage from "./updateLocalStorage";

export default function addProjectLogic(allProjectsArray) {
  const addProjectBtn = document.querySelector(".add-project-btn");
  const addProjectDialog = document.querySelector(".add-project-dialog");
  const addProjectForm = document.querySelector(".add-project-dialog form");

  addProjectBtn.addEventListener("click", () => {
    addProjectDialog.showModal();
  });

  addProjectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = e.target.project_title.value;

    const newProject = new createProject(title);
    allProjectsArray.push(newProject);
    updateLocalStorage();
    addProjectForm.reset();
    addProjectDialog.close();
  });
}
