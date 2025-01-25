import createTodo from './createTodo';
import renderMainContainer from '../dom/mainContainer';
import getActiveProject from './getActiveProject';
import { manageTodoCheckboxes, manageTodoDeletion } from './todoManager';
import updateLocalStorage from './updateLocalStorage';

const addTodoBtn = document.querySelector('.add-todo-btn');
const addTodoDialog = document.querySelector('.add-todo-dialog');
const addTodoForm = document.querySelector('.add-todo-dialog > form');

let isAddTodoListenerAttached = false;

export default function addTodoToProject () {

    if(!isAddTodoListenerAttached) {

        addTodoBtn.addEventListener('click', () => {
            addTodoDialog.showModal();
        });

        addTodoForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const title = e.target.title.value;
            const description = e.target.description.value;
            const priority = e.target.priority.value;
            const date = e.target.date.value;

            const newTodo = new createTodo(title, description, date, priority);
            const activeProject = getActiveProject();
            activeProject.addTodo(newTodo);
            updateLocalStorage();

            renderMainContainer();
            manageTodoCheckboxes();
            manageTodoDeletion();

            addTodoForm.reset();
            addTodoDialog.close();
        });

        isAddTodoListenerAttached = true;
    }
}
