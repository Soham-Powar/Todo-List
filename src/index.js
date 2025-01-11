import createTodo from './modules/createTodo';
import createProject from './modules/createProject';


const project1 = new createProject('soham');
const todo1 = new createTodo('soham', 'sfef', 13, 1);
const todo2 = new createTodo('sowafcwam', 'sfef', 131, 12);


project1.addTodo(todo1);
project1.addTodo(todo2);

console.log(project1);
// console.log(todo1);

project1.delete(todo1);
console.log(project1);

