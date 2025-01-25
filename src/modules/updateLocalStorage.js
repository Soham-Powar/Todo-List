import allProjectsArray from '../index'

export default function updateLocalStorage() {
	localStorage.setItem("allProjectsArray", JSON.stringify(allProjectsArray));
}