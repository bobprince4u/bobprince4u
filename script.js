// Selectors
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const deleteTaskBtn = document.getElementById('delete-task-btn');

// Event Listeners
addTaskBtn.addEventListener('click', addTask);
deleteTaskBtn.addEventListener('click', deleteTask);

// Functions
function addTask() {
  const task = taskInput.value;
  if (task !== '') {
    
    const taskListItem = document.createElement('li');
    taskListItem.textContent = task;
    taskList.appendChild(taskListItem);
    taskInput.value = '';
  }
}

function deleteTask() {
    const taskListItems = taskList.children;
    for (let i = 0; i < taskListItems.length; i++) {
      const taskListItem = taskListItems[i];
      taskListItem.remove();
    }
  }
  
  