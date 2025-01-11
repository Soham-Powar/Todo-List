import createTodo from './modules/createTodo';
import createProject from './modules/createProject';


const inbox = new createProject('Inbox');
const todo1 = new createTodo('soham', 'sfef', 13, 1, false);
const todo2 = new createTodo('sowafcwam', 'sfef', 131, 12, false);


inbox.addTodo(todo1);
inbox.addTodo(todo2);

console.log(inbox);

todo2.toggleTaskDone();
console.log(inbox);


