import './styles.css';
import createTodo from './modules/createTodo';
import createProject from './modules/createProject';

import renderFooter from './dom/footer';
import renderHeader from './dom/header';
import renderMenu from './dom/menu';
import renderMainContainer from './dom/mainContainer';


const inbox = new createProject('Inbox');
const todo1 = new createTodo('soham', 'sfef', 13, 1, false);
const todo2 = new createTodo('sowafcwam', 'sfef', 131, 12, false);
const todo3 = new createTodo('sowafcwam', 'sfef', 131132, 12, false);
inbox.addTodo(todo1);
inbox.addTodo(todo2);
inbox.addTodo(todo3);

renderFooter();
renderHeader();
renderMenu();
renderMainContainer(inbox);


// console.log(inbox);

// todo2.toggleTaskDone();
// console.log(inbox);


