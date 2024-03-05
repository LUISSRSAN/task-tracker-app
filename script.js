// Section 1: TODOs
// TODO: Register submissions from the user on the form.
// TODO: Determine the value of the data submitted and add it to a JavaScript array calle
// TODO: Call the render function to update the table with the new tasks.











// script.js
// Section 2: App State Variables
let tasks = [];

// script.js
// Section 3: Cached Element References
var taskForm = null;
var taskTable = null;
taskForm = document.getElementById('taskForm');
taskTable = document.getElementById('taskTable');
console.log(taskForm);
console.log(taskTable);



// Function to handle form submissions
function handleSubmission(event) {
    event.preventDefault();
    // TODO: Get form input values
    var taskName = document.getElementById('taskName').value;
    var taskDescription = document.getElementById('taskDescription').value;
    var taskDeadline = document.getElementById('taskDeadline').value;
    // TODO: Validate input fields
    if (taskName === '' || taskDescription === '' || taskDeadline ===''){
    console.log('Task name and deadline are required!');
      
    }

    // TODO: Update the tasks array
tasks.push({name:taskName,description:taskDescription,deadline:taskDeadline});


    render();
    }
    // Function to render tasks in the table
    function render() {
    // TODO: Use array methods to create a new table row of data for each item in the arr

    taskTable.innerHTML = tasks.map(task =>
        `
        <tr>
            <td>${task.name}</td>
            <td>${task.description}</td>
            <td>${task.deadline}</td>
            <td><button onClick="markTask Complete(this)">Complete</button></td>
            <td><button onclick="removeTask(this)">Remove</button></td>
        </tr>
        `).join('');
    }




    // Function to initialize the table
    function init() {
    taskTable.innerHTML = ''; // Clear the table
    tasks = []; // Reset the tasks array
    render(); // Call the render function
    }
