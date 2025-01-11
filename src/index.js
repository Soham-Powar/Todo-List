import createTodo from './modules/createTodo';
import createProject from './modules/createProject';


const project1 = new createProject('soham');
const todo1 = new createTodo('soham', 'sfef', 13, 1, false);
const todo2 = new createTodo('sowafcwam', 'sfef', 131, 12, false);


project1.addTodo(todo1);
project1.addTodo(todo2);

console.log(project1);

todo2.toggleTaskDone();
console.log(project1);


