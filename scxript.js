var newTodo = document.getElementById('new_todo');
var addBtn = document.getElementById('add_task');

var todoList = document.getElementById('list');
// var liValues = document.querySelectorAll('li');

var clearBtn = document.getElementById('clear_btn');


newTodo.onkeyup = () =>{
    let userValue = newTodo.value;
    if(userValue.trim() != 0){
        addBtn.classList.add("active");
    } else{
        addBtn.classList.remove("active");
    }
}



function showTasks(){
    let getLocalStorage = localStorage.getItem("New Task");
    if(getLocalStorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    let newLiTag ='';
    listArr.forEach((element, index) => {
        newLiTag += `<li>${element} <button class="delete_btn" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></button></li>` 
    })

    todoList.innerHTML = newLiTag;
    newTodo.value='';


    const countPendingTask = document.getElementById('count');
    countPendingTask.innerHTML = listArr.length;
}

function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Task");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index,1);

    localStorage.setItem("New Task", JSON.stringify(listArr));
    showTasks();
}

showTasks();

//event listeners
addBtn.addEventListener('click', () => {
    let userValue = newTodo.value;
    let getLocalStorage = localStorage.getItem("New Task");
    if(getLocalStorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userValue);
    localStorage.setItem("New Task", JSON.stringify(listArr));
    showTasks();
})

clearBtn.addEventListener('click', ()=>{
    listArr =[];
    localStorage.setItem("New Task", JSON.stringify(listArr));
    showTasks();
})

























// My line of codes



// var li_count = li_values.length;
// console.log(liValues);

// this_is = Math.random().toString(16).slice(2);
// console.log(this_is);

// function newTask(){
//     var userValue = newTodo.value;

//     let getLocalStorage = localStorage.getItem("New Task");

//     if(getLocalStorage == null){
//         listArr = [];
//     }else{
//         listArr = JSON.parse(getLocalStorage);
//     }
//     listArr.push(userValue);

//     localStorage.setItem("task", JSON.stringify(listArr))
//     const item = document.createElement('li');
//     item.innerHTML = `${userValue} <button class="delete_btn"><i class="fas fa-trash"></i></button>`
//     list.appendChild(item);
//     newTodo.value ='';
// }

// newTask();
// // event listeners
// add_task.addEventListener('click',newTask);
