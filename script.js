let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();

    if (task !== '') {
        tasks.push(task);
        displayTasks();
        taskInput.value = '';
    }
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskBox = document.createElement('div');
        taskBox.className = 'task-box';
        taskBox.innerHTML = `
            <span class="task-text">${task}</span>
            <i class="fas fa-times delete-icon" onclick="removeTask(${index})"></i>
        `;
        taskList.appendChild(taskBox);
    });
}

function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}
