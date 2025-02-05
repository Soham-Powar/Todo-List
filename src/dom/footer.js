import "./dom.css";

const footer = document.querySelector("footer");

export default function addFooter() {
  footer.innerHTML = `
		made with ❤️
		${new Date().getFullYear()}
	`;
}
