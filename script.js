function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        const newTask = document.createElement("li");
        newTask.innerHTML = `
            ${taskInput.value}
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;

        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}

function deleteTask(button) {
    const task = button.parentNode;
    task.parentNode.removeChild(task);
}

