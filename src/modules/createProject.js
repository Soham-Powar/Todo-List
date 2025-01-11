export default class project {
	constructor(title) {
		this.title = title;
		this.projectTodos = [];
	}

	addTodo(todo) {
		this.projectTodos.push(todo);
	}

	delete(todo) {
		const indexOfTodo = this.projectTodos.indexOf(todo);
		this.projectTodos.splice(indexOfTodo, 1);
	}
};