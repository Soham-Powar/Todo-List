import './dom.css'

const header = document.querySelector('header');

export default function addFooter() {
	header.innerHTML = `
		<h1>
			TickItOff
		</h1>
	`;
}