export default class todos {
  constructor(title, description, dueDate, priority, taskDone) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.taskDone = taskDone;
  }

  toggleTaskDone() {
    this.taskDone = !this.taskDone;
  }
}
