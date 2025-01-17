import './styles.css';
import createTodo from './modules/createTodo';
import createProject from './modules/createProject';
import getActiveProject from './modules/getActiveProject';
import setActiveProject from './modules/setActiveProject';
import addTodoToProject from './modules/addTodoToProject';

import renderFooter from './dom/footer';
import renderHeader from './dom/header';
import renderMenu from './dom/menu';
import renderMainContainer from './dom/mainContainer';

const allProjectsArray = [];

const inbox = new createProject('inbox');
allProjectsArray.push(inbox);
const today = new createProject('today');
allProjectsArray.push(today);
const thisWeek = new createProject('thisWeek');
allProjectsArray.push(thisWeek);

const todo1 = new createTodo('soham', 'sfef', 13, 1, false);
const todo2 = new createTodo('sowafcwam', 'sfef', 131, 12, false);
const todo3 = new createTodo('sowafcwam', 'sfef', 131132, 12, false);
inbox.addTodo(todo1);
inbox.addTodo(todo2);
inbox.addTodo(todo3);
today.addTodo(todo1);
today.addTodo(todo2);
thisWeek.addTodo(todo1);



addTodoToProject();
renderFooter();
renderHeader();
renderMenu();

setActiveProject();
renderMainContainer(getActiveProject(allProjectsArray));


