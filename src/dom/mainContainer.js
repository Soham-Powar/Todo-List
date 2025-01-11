import './dom.css'

const mainContainer = document.querySelector('.main-container');

export default function renderMainContainer() {
	mainContainer.innerHTML = `
		Todo List
	`;
}
