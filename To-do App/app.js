// document.addEventListener("DOMContentLoaded", function() {
//     const taskInput = document.getElementById("taskInput");
//     const addTaskBtn = document.getElementById("addTaskBtn");
//     const taskList = document.getElementById("taskList");

//     addTaskBtn.addEventListener("click", addTask);

//     function addTask() {
//         const taskText = taskInput.value.trim();

//         if (taskText !== "") {
//             const li = document.createElement("li");
//             li.textContent = taskText;
            
//             const deleteBtn = document.createElement("button");
//             deleteBtn.textContent = "Delete";
//             deleteBtn.addEventListener("click", function() {
//                 taskList.removeChild(li);
//             });

//             li.appendChild(deleteBtn);
//             taskList.appendChild(li);

//             taskInput.value = "";
//         }
//     }
// });
