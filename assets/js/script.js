// Assign JavaScript variable to items with the id "taskAdder"
var addTaskButton = document.querySelector("#taskAdder");

// Assign JavaScript variable to items with the id "tasksToDo"
var tasksToDoEl = document.querySelector("#tasksToDo");

// Create a function that appends child li elements to the parent ul elemnt
var createTaskHandler = function () {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
}

// Add a click event listener for addTaskButton to run the createTaskHandler function 
addTaskButton.addEventListener("click", createTaskHandler);