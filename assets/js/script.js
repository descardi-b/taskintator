// Assign JavaScript variable to the entire form
var formEl = document.querySelector("#task-form");

// Assign JavaScript variable to the parent ul element
var tasksToDoEl = document.querySelector("#tasksToDo");

// Create a function that appends child li elements to the parent ul elemnt
var createTaskHandler = function (event) {
    // Initiate first callback function

    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
  };

// Add a click event listener for formEl to run the createTaskHandler function 
formEl.addEventListener("submit", createTaskHandler);