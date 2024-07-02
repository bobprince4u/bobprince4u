// Functions
function addTask() {
    const task = taskInput.value;
    if (task !== '') {
        console.log('Task added:', task); // Log the task object when it's added
        console.log('State:', state); // Log the state array when the task is added

        const taskListItem = document.createElement('li');
        taskListItem.textContent = task;
        taskList.appendChild(taskListItem);
        taskInput.value = '';
    }
}
