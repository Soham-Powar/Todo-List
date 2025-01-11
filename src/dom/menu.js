import './dom.css'

const menu = document.querySelector('.menu');

export default function renderMenu() {
	menu.innerHTML = `
		Todo List
	`;
}