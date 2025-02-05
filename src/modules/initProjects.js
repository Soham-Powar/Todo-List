import createProject from "./createProject";
import createTodo from "./createTodo";
import { format } from "date-fns";

export default function initProjects() {
  let allProjectsArray = JSON.parse(localStorage.getItem("allProjectsArray"));

  if (allProjectsArray === null) {
    allProjectsArray = [];
    const inbox = new createProject("Inbox");
    const today = new createProject("Today");
    const thisWeek = new createProject("This Week");

    allProjectsArray.push(inbox, today, thisWeek);

    const todo1 = new createTodo(
      "Fix bugs in user authentication system",
      "do it asap",
      format(new Date(), "dd/MM/yyyy"),
      "low",
      false,
    );
    const todo2 = new createTodo(
      "Write a summary of annual report",
      "do it",
      format(new Date(), "dd/MM/yyyy"),
      "medium",
      false,
    );
    const todo3 = new createTodo(
      "Drink water",
      "do it everyday",
      format(new Date(), "dd/MM/yyyy"),
      "high",
      false,
    );

    inbox.addTodo(todo1);
    inbox.addTodo(todo2);
    inbox.addTodo(todo3);

    today.addTodo(todo1);
    today.addTodo(todo2);
    thisWeek.addTodo(todo1);

    inbox.active = true;

    localStorage.setItem("allProjectsArray", JSON.stringify(allProjectsArray));
  } else {
    allProjectsArray = allProjectsArray.map((unitProjectData) => {
      const projectInstance = new createProject(unitProjectData.title);

      projectInstance.projectTodos = unitProjectData.projectTodos.map(
        (todoData) => {
          return new createTodo(
            todoData.title,
            todoData.description,
            todoData.dueDate,
            todoData.priority,
            todoData.taskDone,
          );
        },
      );
      projectInstance.active = unitProjectData.active;
      return projectInstance;
    });
  }
  return allProjectsArray;
}
