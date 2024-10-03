document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");
    const todoForm = document.getElementById("todo-form");

    todoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const todoText = todoInput.value.trim();

        if (todoText) {
            addTodoItem(todoText);
            todoInput.value = "";
        }
    });

    function addTodoItem(todoText) {
        const li = document.createElement("li");
        li.classList.add("todo");
    
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const todoId = `todo-${Date.now()}`;
        checkbox.id = todoId;
    
        const customCheckboxLabel = document.createElement("label");
        customCheckboxLabel.classList.add("custom-checkbox");
        customCheckboxLabel.setAttribute("for", todoId);
    
        const checkIcon = document.createElement("svg");
        checkIcon.innerHTML = `<path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>`;
        customCheckboxLabel.appendChild(checkIcon);
    
        const todoLabel = document.createElement("label");
        todoLabel.classList.add("todo-text");
        todoLabel.setAttribute("for", todoId);
        todoLabel.textContent = todoText;
    
        const currentDate = new Date();
        const formattedDate = `${String(currentDate.getMonth() + 1).padStart(2, '0')}/${String(currentDate.getDate()).padStart(2, '0')}/${String(currentDate.getFullYear()).slice(-2)}`;
    
        const dateSpan = document.createElement("span");
        dateSpan.classList.add("todo-date");
        dateSpan.textContent = `${formattedDate}`;
    
        const editButton = document.createElement("button");
        editButton.classList.add("edit-button");

        editButton.innerHTML = `
            <svg fill="var(--secondary-color)" svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
            <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/>
            </svg>`;

        editButton.addEventListener("click", () => {
        const newText = prompt("Edit your task:", todoLabel.textContent);
         if (newText) {
            todoLabel.textContent = newText;
    }
});

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.innerHTML = `<svg fill="var(--secondary-color)" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                                  </svg>`;
    
        deleteButton.addEventListener("click", () => {
            li.remove();
        });
    
        li.appendChild(checkbox);
        li.appendChild(customCheckboxLabel);
        li.appendChild(todoLabel);
        li.appendChild(dateSpan);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
    
        todoList.appendChild(li);
    }
    
});
