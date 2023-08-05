let addMessage = document.querySelector('.message'),
    addButton = document.querySelector('#add'),
    todo = document.querySelector('.todo');

addButton.addEventListener("click", function(){
    if (addMessage.value === ''){
        alert("НЕТ ДЕЛА");
    }

    else{
        let li = document.createElement("li");
        li.innerHTML = addMessage.value;
        todo.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    addMessage.value = '';
    saveData();
})

todo.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

}, false);

function saveData(){
    localStorage.setItem("data",todo.innerHTML);
}

function showList(){
    todo.innerHTML = localStorage.getItem("data");
}

showList();