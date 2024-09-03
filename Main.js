document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("taskButton");
    const taskList = document.getElementById("taskList");

    function createTaskItem(taskText) {
        const li = document.createElement('li');
        li.className = 'task-item';

        const textSpan = document.createElement('span');
        textSpan.textContent = taskText;
        li.appendChild(textSpan);

        const editButton = document.createElement('button');
        editButton.textContent = "Edit";
        editButton.className = 'edit-button';
        editButton.addEventListener('click', () => {
            const currentText = textSpan.textContent;
            const newTaskText = prompt("Edit your task:", currentText);

            if (newTaskText !== null && newTaskText.trim() !== "") {
                textSpan.textContent = newTaskText.trim();
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(editButton);
        li.appendChild(deleteButton);

        return li;
    }

    addTaskButton.addEventListener('click', (event) => {
        event.preventDefault();

        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const newTaskItem = createTaskItem(taskText);
            taskList.appendChild(newTaskItem);
            taskInput.value = ''; 
        }
    });

    taskInput.addEventListener("keypress", (e) => {
        if (e.key === 'Enter') {
           e.preventDefault(); 
            addTaskButton.click(); 
        }
    });
});
