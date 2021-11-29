//dates
const d = new Date();
document.getElementById("date").innerHTML = d;


//selectors
const todoInput = document.querySelector(".todo-input");
const inputBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list"); 
const filterOption = document.querySelector(".filter-todo");

//event listeners
inputBtn.addEventListener('click' , addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//functions
function addTodo(event) {
   event.preventDefault();
   const todoDiv = document.createElement('div');
   todoDiv.classList.add("todo");
   const newTodo = document.createElement('li');
   newTodo.innerText = todoInput.value;
   newTodo.classList.add('todo-item');
   todoDiv.appendChild(newTodo);

   //checked button
   const completedButton = document.createElement('button');
   completedButton.innerHTML = '<i class="far fa-check-square"></i>';
   completedButton.classList.add("complete-btn");
   todoDiv.appendChild(completedButton);

   //edit button
   const editButton = document.createElement('button');
   editButton.innerHTML = ' <i class="far fa-edit"></i>';
   editButton.classList.add("edit-btn");
   todoDiv.appendChild(editButton);

   //delete button
   const deleteButton = document.createElement('button');
   deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';
   deleteButton.classList.add("delete-btn");
   todoDiv.appendChild(deleteButton);

   //now link tododiv to list(li) (append)
   todoList.appendChild(todoDiv);

   //input clear
   todoInput.value = "";
}

//delete function

function deleteCheck(e) {
    //console.log(e.target);
    const item = e.target;
    if(item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
                  todo.remove();  

    }
    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}


// todo select filter
function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(
        function(todo) {
            switch (e.target.value) {
                case "all":
                    //todo.style.display = "flex";
                    break;
                case "completed":
                    if(todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    }else{
                        todo.style.display = "none";
                    }
                
            }
        })
}