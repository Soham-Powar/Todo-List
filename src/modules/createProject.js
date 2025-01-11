export default class project {
	constructor(title) {
		this.title = title;
		this.projectTodos = [];
	}

	addTodo(todo) {
		this.projectTodos.push(todo);
	}

	delete(todo) {
		return this
			.projectTodos
			.find((object) => object.title === todo.title)
	}
};