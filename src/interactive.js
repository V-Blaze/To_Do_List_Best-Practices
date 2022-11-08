import Methods from './utils.js';

export default class Interactive {
static toggleCompleted = (id, curStatus) => {
  const todoList = Methods.getLocalStorageData();
  todoList[id].completed = curStatus;
  Methods.setLocalStorageData(todoList);
  Methods.showTodoItems();
}

static addCheckEvent = () => {
  const checkboxes = document.querySelectorAll('.checkbox');

  checkboxes.forEach((box) => box.addEventListener('change', () => {
    const id = box.id - 1;
    let curStatus;

    if (box.checked === true) {
      curStatus = true;
    } else {
      curStatus = false;
    }

    this.toggleCompleted(id, curStatus);
  }));
};

static deleteAllCompleted = () => {
  let todoList = Methods.getLocalStorageData();

  todoList = todoList.filter((item) => item.completed !== true);
  Methods.reassignIndex(todoList);
  Methods.setLocalStorageData(todoList);
  Methods.showTodoItems();
}
}