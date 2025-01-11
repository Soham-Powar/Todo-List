import './dom.css'

const menu = document.querySelector('.menu');
const defaultMenu = document.createElement('div');
const projectsMenu = document.createElement('div');

defaultMenu.classList.add('default-menu');
projectsMenu.classList.add('projects-menu');

projectsMenu.innerHTML = `
	<div>
		<h3>Projects</h3>
		<button class = 'add-project-btn'>+</button>
	</div>
`;

const inbox = document.createElement('div');
const today = document.createElement('div');
const thisWeek = document.createElement('div');

inbox.innerHTML = 'Inbox'
today.innerHTML = 'Today'
thisWeek.innerHTML = 'This Week'

defaultMenu.appendChild(inbox);
defaultMenu.appendChild(today);
defaultMenu.appendChild(thisWeek);


// const addProjectBtn = document.querySelector('.add-project-btn');
// addProjectBtn.addEventListener('click', () => {

// });

export default function renderMenu() {
	menu.appendChild(defaultMenu);
	menu.appendChild(projectsMenu);
}