// get elements
const input = document.querySelector("input");
const addBtn = document.querySelector("#add-tasks");
const removeBtn = document.querySelector("#delete-tasks");
const showTasks = document.querySelector("#show-tasks");
const notification = document.querySelector("#notification");

// create funcations 

// clear function
function clearInput(){
    input.value = "";
}

// notification function
function showNotification(message){
    notification.textContent = message;
    notification.classList.add("show");
    
    setTimeout(()=>{
        notification.classList.remove("show");
    },3000);
    
    clearInput();
}

// validatation userinput function
function validateUserInput(userInput){
    if(userInput===""){
        showNotification("Please enter at least one Task.");
        return false
    }
    return true;
}

// get child element function
function getChildElement(parent,textContent){
    const children = parent.children;
    for(const child of children){
        if(child.textContent === textContent){
            return child;
        }
    }
}   

// match textContent function
function matchChildTextContent(parent,textContent){
    const children = parent.children;
    
    for(const child of children){
        if(child.textContent === textContent){
            return true;
        }
    }

    return false;
}

// add task callback function 
const addTask = (userInput)=>{
    const taskArray = userInput.split(",");

    for(const task of taskArray){
        const taskText = task.trim();
        
        if(taskText === ""){
            continue;
        }
        
        const para = document.createElement("p");
        para.textContent = taskText;
        showTasks.appendChild(para);
    }
}

// remove task callback function
const removeTask = (userInput)=>{
    const taskArray = userInput.split(",");

    for(const task of taskArray){
        const taskText = task.trim();
        
        if(taskText === ""){
            continue;
        }
        
        if(matchChildTextContent(showTasks,taskText)){
            const child = getChildElement(showTasks,taskText);
            showTasks.removeChild(child);
        }else{
            showNotification(`Task "${taskText}" not Found. Please try again !`);
        }
    }

}

// add and remove tasks button handler function
function runAction(action){
    const userInput = input.value.trim();
    
    if(validateUserInput(userInput)){
        if(action==="add"){
            addTask(userInput);
        }
        if(action==="remove"){
            removeTask(userInput);
        }
        clearInput();
    }
}

// create event listeners

// add button
addBtn.addEventListener("click",()=>{
    runAction("add");
});

// remove button
removeBtn.addEventListener("click",()=>{
    runAction("remove");
});
