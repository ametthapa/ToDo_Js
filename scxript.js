var newTodo = document.getElementById('new_todo');
var addBtn = document.getElementById('add_task');

var todoList = document.getElementById('list');
// var liValues = document.querySelectorAll('li');

var clearBtn = document.getElementById('clear_btn');
var editBtn = document.getElementById('edit_btn')
var saveBtn = document.getElementById('save_task')



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
        newLiTag += `<li><span>${element}</span><button class="edit_btn"  onclick="editTask(${index})"><i class="far fa-edit"></i></button>
           <button class="delete_btn" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></button>
        </li>` 
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

function editTask(index){
    let getLocalStorage = localStorage.getItem("New Task");
    listArr = JSON.parse(getLocalStorage);

    let saveindex = document.getElementById('save_index');
    saveindex.value = index;
    newTodo.value = listArr[index];

    addBtn.style.display='none';
    saveBtn.style.display='block';




    // const input = document.createElement('input');
    // input.type ='text';
    // input.value = theTask;
    // console.log(theTask);
}

showTasks();

//event listeners
addBtn.addEventListener('click', () => {
    let userValue = newTodo.value;
    if (userValue.trim()!=0){
        let getLocalStorage = localStorage.getItem("New Task");
        if(getLocalStorage == null){
            listArr = [];
        }else{
            listArr = JSON.parse(getLocalStorage);
        }
        listArr.push(userValue);
        localStorage.setItem("New Task", JSON.stringify(listArr));
        showTasks();
    }
});

clearBtn.addEventListener('click', ()=>{
    listArr =[];
    localStorage.setItem("New Task", JSON.stringify(listArr));
    showTasks();
});

saveBtn.addEventListener('click',()=>{
    let getLocalStorage = localStorage.getItem("New Task");
    listArr = JSON.parse(getLocalStorage);
    let saveindex=document.getElementById('save_index').value;
    listArr[saveindex]=newTodo.value;

    addBtn.style.display='block';
    saveBtn.style.display='none';
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
