const today = new Date();
let taskArray = [];
let globalTaskArray=[]
let taskId = 0;
let date = document.getElementById('date');
let name = document.getElementById('creator');
let assignee = document.getElementById('assignee');
let description = document.getElementById('description');
 
function createTask(){
        if(name.value != null && name.value.length <= 20){
            taskArray.push(name.value)
        }
        if(description.value != null && description.value.length <= 500 ){
            taskArray.push(description.value)    
        }
        if(date.value != null){
            taskArray.push(date.value)
        }
        if(assignee.value != null && assignee.value.length <= 20){
            taskArray.push(assignee.value)
        }
        else{
        }
        return(taskArray);
    } 
function addTask() {
    let taskSpace = document.getElementById("task-list");
    taskId++
    let valid = true   
        let task = ``      
        for (i = 0; i < taskArray.length; i++){
            if(taskArray[i] == null || taskArray[i]==""){
                valid=false
                break;
            }else{
                valid=true
            }
        }
        console.log(valid)
            if(valid){
                task =`<div class='card'>
                <div class='card-body'>
                    ${taskArray[0]}, ${taskArray[1]}, ${taskArray[2]}, ${taskArray[3]}
                </div>
                <button type="button" class="btn btn-primary mb-2" purpose="delete">Delete item</button>
                </div>`;
                }else{
                    valid=true                    
                }
                  
        const position = "beforeend";
        taskSpace.insertAdjacentHTML(position, task, taskArray);
        taskArray=[];
        createTaskObject(name, description, assignee, date);       
        };
 
function deletetask(theTarget){
        theTarget.parentNode.parentNode.removeChild(theTarget.parentNode)        
    }
let addButton = document.getElementById("submit");
addButton.addEventListener('click', function(){
    createTask();
    addTask();
});
document.addEventListener('click', function(event){
        const theTarget=event.target;
        let purpose = theTarget.attributes.purpose.value
        if(purpose=='delete'){
            deletetask(theTarget);
        }
    });
function createTaskObject(name, description, assignee, date) {
      globalTaskArray.push({
          "id": `${globalTaskArray.length <1 ? 1 : globalTaskArray.length +1}`,
          "name" : name,
          "description" : description,
          "assignedTo" : assignee,
          "dueDate" : date,
      })
      localStorage.setItem("taskMemory", JSON.stringify(globalTaskArray));
      return globalTaskArray;
    }
    
let dataReturned = localStorage.getItem("taskArray");

    if(dataReturned){
        myTaskManager.allTasks = JSON.parse(dataReturned);
        populatePage(myTaskManager.allTasks)
    } else {
        globalTaskArray = [];
    }
    
    function populatePage(array){
        for(let i=0; i < array.length; i++){
            addTask(array[i]);
        }
    }    