import "./dom.css";

const menu = document.querySelector(".menu");
const defaultMenu = document.createElement("div");
const projectsMenu = document.createElement("div");

defaultMenu.classList.add("default-menu");
projectsMenu.classList.add("projects-menu");

projectsMenu.innerHTML = `
	<div>
		<h3>Projects</h3>
		<button class = 'add-project-btn'>+</button>
	</div>
	<div class = 'new-projects-container'>
	</div>
`;

const inbox = document.createElement("div");
const today = document.createElement("div");
const thisWeek = document.createElement("div");

inbox.innerHTML = "Inbox";
today.innerHTML = "Today";
thisWeek.innerHTML = "This Week";
inbox.classList.add("todo-holder");
today.classList.add("todo-holder");
thisWeek.classList.add("todo-holder");

defaultMenu.appendChild(inbox);
defaultMenu.appendChild(today);
defaultMenu.appendChild(thisWeek);

export default function renderMenu() {
  menu.appendChild(defaultMenu);
  menu.appendChild(projectsMenu);
}
