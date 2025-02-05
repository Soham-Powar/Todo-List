export default class project {
  constructor(title) {
    this.title = title;
    this.projectTodos = [];
    this.active = false;
  }

  addTodo(todo) {
    this.projectTodos.push(todo);
  }

  delete(todoTitle) {
    const indexOfTodo = this.projectTodos.findIndex(
      (todo) => todo.title === todoTitle,
    );
    if (indexOfTodo !== -1) {
      this.projectTodos.splice(indexOfTodo, 1); // Remove the todo by title
    }
  }
}
