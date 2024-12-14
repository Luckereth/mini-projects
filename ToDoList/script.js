const inputText = document.getElementById("inputText");
const submitBtn = document.getElementById("submitBtn");
const toDoList = document.getElementById("toDoList");
let ID = 0;

function clearThis(target) {        //Function for clearing input field
    target.value = "";
};

function createNewTodo() {      //Creates new "div" Element with button
    if (inputText.value.trim() === "") {
        alert("Please enter Your task to complete");
        return;
    }else {}

    const newToDo = document.createElement("div");
    newToDo.innerText = inputText.value;
    newToDo.id = `todo-${ID}`;          // Unique ID for the div
    newToDo.onclick = () => {newToDo.classList.toggle("completed")};       // Toggle completion on click

    const deleteBtn = document.createElement("button");         //Creates remove button
    deleteBtn.innerHTML = "Delete";
    deleteBtn.classList = "deleteBtn";
    deleteBtn.onclick = () => removeToDo(newToDo.id);       // Bind the remove function to the specific ID

    

    newToDo.appendChild(deleteBtn);         // Add button inside the div for better structure
    toDoList.appendChild(newToDo);

    clearThis(inputText);
    ID++;
    updateColors(); // Update colors after adding a new todo
}

function updateColors() {
    const todos = toDoList.children; // Get all current todos
    for (let i = 0; i < todos.length; i++) {
        if (i % 2 === 0) {
            todos[i].style.backgroundColor = "#f0f0f0"; // Light gray for even
        } else {
            todos[i].style.backgroundColor = "#d0d0d0"; // Darker gray for odd
        }
    }
}

function removeToDo(taskId) {
    const taskToRemove = document.getElementById(taskId);
    if (taskToRemove) {
        toDoList.removeChild(taskToRemove);
        updateColors(); // Update colors after removing a todo
    }
}

inputText.addEventListener("keydown", (event) => {      // Execute createNewTodo() when Enter is pressed
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission or other default actions
        createNewTodo();
    }
});
submitBtn.onclick = createNewTodo; // Executes create function
