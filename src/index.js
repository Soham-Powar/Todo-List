import createTodo from './modules/createTodo';
import createProject from './modules/createProject';


const project1 = new createProject('soham');
const todo1 = new createTodo('soham', 'sfef', 13, 1);


project1.addTodo(todo1);

console.log(project1);
console.log(todo1);

console.log(project1.delete(todo1));