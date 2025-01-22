import createProject from './createProject'
import createTodo from './createTodo'

const allProjectsArray = [];

export default function initProjects() {
	const inbox = new createProject('inbox');
	const today = new createProject('today');
	const thisWeek = new createProject('thisWeek');

	allProjectsArray.push(inbox, today, thisWeek);

	const todo1 = new createTodo('soham', 'sfef', '2025-01-18', 'low', false);
	const todo2 = new createTodo('socwam', 'sfef', '2025-01-17', 'medium', false);
	const todo3 = new createTodo('sowafcwam', 'sfef', '2025-01-24', 'high', false);

	inbox.addTodo(todo1);
	inbox.addTodo(todo2);
	inbox.addTodo(todo3);

	today.addTodo(todo1);
	today.addTodo(todo2);
	thisWeek.addTodo(todo1);

	inbox.active = true;

	return allProjectsArray;
}