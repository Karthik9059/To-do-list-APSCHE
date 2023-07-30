document.addEventListener("DOMContentLoaded", function() {
    const addBtn = document.getElementById("add-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    addBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.classList.add("task-item");

            const taskTextElement = document.createElement("span");
            taskTextElement.classList.add("task-text");
            taskTextElement.textContent = taskText;

            const deleteBtn = document.createElement("button");
            deleteBtn.classList.add("delete-btn");
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", function() {
                taskList.removeChild(taskItem);
            });

            taskItem.appendChild(taskTextElement);
            taskItem.appendChild(deleteBtn);
            taskList.appendChild(taskItem);

            taskInput.value = "";
        }
    });
});
