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
        const taskItem = document.createElement('div');
        taskItem.innerHTML = `
            ${task}
            <button onclick="removeTask(${index})">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
}

function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}
