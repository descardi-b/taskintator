// Assign JavaScript variable to the entire form
var formEl = document.querySelector("#task-form");

// Assign JavaScript variable to the parent ul element
var tasksToDoEl = document.querySelector("#tasksToDo");

// Create a function that appends child li elements to the parent ul elemnt
var createTaskHandler = function (event) {
    // Initiate first callback function

    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // Create div to hold task info and task type together
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = `<h3 class='task-name'>${taskNameInput}</h3><span class='task-type'>${taskTypeInput}</span>`;

    // Append all form submissions to the list item
    listItemEl.appendChild(taskInfoEl);

    // Append the new list item to the parent ul element
    tasksToDoEl.appendChild(listItemEl);
  };

// Add a click event listener for formEl to run the createTaskHandler function 
formEl.addEventListener("submit", createTaskHandler);