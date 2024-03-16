var taskInput = document.getElementById("taskInput");
var addTaskBtn = document.getElementById("addTaskBtn");
addTaskBtn.addEventListener("click", function () {
    if (taskInput.style.display == "none") {
        taskInput.style.display = "flex";
        addTaskBtn.innerHTML = `<i class="fa-solid fa-minus"></i>`;
    } else {
        taskInput.style.display = "none";
        addTaskBtn.innerHTML = `<i class="fa-solid fa-plus"></i>`;
    }
});

var addGivenTask = document.getElementById("addBtn");
var list = document.getElementById("listOfTask");
var input = document.getElementById("givenTask");

addGivenTask.addEventListener("click", function () {
    let givenTask = input.value;
    if (givenTask.length == 0) {
        alert("Kindly Enter Task!")
    } else {
        list.innerHTML += `
            <div class="task">
                <span class="taskName">${givenTask}</span>
                <button class="delete"><i class="fa-regular fa-circle-xmark"></i></button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
        if (current_tasks.length > 0) {
            document.getElementById("defaultListOfTask").remove();
        }
    }
});