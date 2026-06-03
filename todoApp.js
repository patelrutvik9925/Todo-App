const input = document.querySelector("input");
const addBtn = document.querySelector("#add-tasks");
const deleteBtn = document.querySelector("#delete-tasks");
const showTasks = document.querySelector("#show-tasks");
const notification = document.querySelector("#notification");

function showNotification(message){

    notification.textContent = message;

    notification.classList.add("show");

    setTimeout(() => {
        notification.classList.remove("show");
    }, 3000);

}

addBtn.addEventListener("click", () => {

    const userInput = input.value.trim();

    if(userInput === ""){
        showNotification("Please enter at least one task.");
        return;
    }

    const tasks = userInput.split(",");

    tasks.forEach((task) => {

        const taskText = task.trim();

        if(taskText !== ""){

            const p = document.createElement("p");
            p.textContent = taskText;

            showTasks.appendChild(p);
        }
    });

    input.value = "";
});

deleteBtn.addEventListener("click", () => {
    const userInput = input.value.trim();

    if(userInput === ""){
        showNotification("Please enter at least one task.");
        return;
    }

    const tasks = userInput.split(",");

    tasks.forEach((task) => {

        const taskText = task.trim();

        if(taskText !== ""){

            Array.from(showTasks.childNodes).forEach((userTask)=>{
                if(userTask.textContent === taskText){
                    showTasks.removeChild(userTask);
                }
            });

        }
    });

    input.value = "";
});