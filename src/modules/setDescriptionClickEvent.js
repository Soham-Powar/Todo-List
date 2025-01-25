export default function setDescriptionClickEvent(moreTodoBtn, description) {
	moreTodoBtn.addEventListener('click', () => {
		console.log(description);
	});
}