function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  if (taskInput.value.trim() !== "") {
    const taskItem = document.createElement("li");
    taskItem.textContent = taskInput.value;
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteButton.addEventListener("click", deleteTask);
    taskItem.appendChild(deleteButton);
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="far fa-check-circle"></i>';
    completeButton.addEventListener("click", toggleTask);
    taskItem.appendChild(completeButton);
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}
function toggleTask() {
  this.parentElement.classList.toggle("completed");
}
function deleteTask() {
  this.parentElement.remove();
}
