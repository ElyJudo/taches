// TP : MA LISTE DE TÂCHES DYNAMIQUE 📝
// Fichier : js/script.js

// Étape 1 : Sélectionnez vos éléments (Input, Bouton, Liste)
// ...
let input = document.querySelector('#task-input');
let addButton = document.querySelector('#add-btn');
let taskList = document.querySelector('#task-list');
let modifier = document.querySelector('#modal-modifier');
let inputTxt=document.getElementById("input-txt");
let btnAnnuler=document.getElementById("btn-annuler");
let btnOk=document.getElementById("btn-ok");

// Étape 2 : Écoutez le clic sur le bouton "Ajouter"
// ...
addButton.addEventListener('click', function() {
    let taskText = input.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        input.value = ''; // Clear the input field after adding the task
    }
});    


// Étape 3 : Créez la fonction pour ajouter une tâche
// ...

let tasks;
let id_=0;

function addTask(taskText) {
        id_=id_+1;
        console.log(tasks);
        tasks=JSON.parse(localStorage.getItem("tasks")) || [];
        let date=new Date();

        //Ajout nouv
        tasks.push({
            id:id_,
            txt:taskText,
            date:date
        })

        localStorage.setItem('tasks',JSON.stringify(tasks));

        // console.log(element.txt);

        //Création li
        let li = document.createElement('li');

        //Création container text
        let taskTxtBox = document.createElement('span');
        taskTxtBox.classList.add('taskTxtBox');
        li.appendChild(taskTxtBox);
        taskTxtBox.textContent = taskText;
        
    
        // Créer un bouton de suppression
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Supprimer';
        deleteBtn.classList.add('delete-btn');
    
        // Ajouter un événement de clic pour supprimer la tâche
        deleteBtn.addEventListener('click', function() {
            let todo=JSON.parse(localStorage.getItem("tasks")) || []; 
            todo.splice(todo.findIndex(el=>el.id===id_),1);
            localStorage.setItem('tasks',JSON.stringify(todo));
            taskList.removeChild(li);


        });
    
        // Créer un bouton de modification
        let changeBtn = document.createElement('button');
        changeBtn.textContent = 'Modifier';
        changeBtn.classList.add('change-btn');
    
        // Ajouter le bouton de modification à la tâche
        li.appendChild(changeBtn);
    
    
        // Ajouter le bouton de suppression à la tâche
        li.appendChild(deleteBtn);
    
        // Ajouter la tâche à la liste
        taskList.appendChild(li);
}


window.onload=function(){
    let todo=JSON.parse(localStorage.getItem("tasks")) || [];
    console.log("tasks  :   "+todo);

    todo.forEach(element => {
        console.log(element.txt);
        let li = document.createElement('li');
        
        //Création container text
        let taskTxtBox = document.createElement('span');
        taskTxtBox.classList.add('taskTxtBox');
        li.appendChild(taskTxtBox);
        taskTxtBox.textContent = element.txt;
    
        // Créer un bouton de suppression
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Supprimer';
        deleteBtn.classList.add('delete-btn');
    
        // Ajouter un événement de clic pour supprimer la tâche
        deleteBtn.addEventListener('click', function() {
            // let todo=JSON.parse(localStorage.getItem("tasks")) || [];
            todo.splice(todo.findIndex(el=>el.id===id_),1);
            localStorage.setItem('tasks',JSON.stringify(todo));

            taskList.removeChild(li);
        });
    
        // Créer un bouton de suppression
        let changeBtn = document.createElement('button');
        changeBtn.textContent = 'Modifier';
        changeBtn.classList.add('change-btn');
    
        // Ajouter le bouton de modification à la tâche
        li.appendChild(changeBtn);
    
    
        // Ajouter le bouton de suppression à la tâche
        li.appendChild(deleteBtn);
    
        // Ajouter la tâche à la liste
        taskList.appendChild(li);
    });
}

// Étape 4 : Créez la fonction pour changer une tâche
// ...
// (Optionnel) Vous pouvez ajouter une fonctionnalité pour éditer les tâches en cliquant dessus
let newText='';

taskList.addEventListener('click', function(event) {
    if (event.target.classList.contains("change-btn")) {
        let currentText = event.target.previousSibling.textContent;
        inputTxt.value=currentText;
        event.target.parentNode.classList.add('rap');

        modifier.classList.toggle('showChang');
        // if (newText !== null && newText.trim() !== '') {
        //     event.target.parentNode.firstChild.textContent = newText.trim();
        // }
    }
});




btnOk.addEventListener('click',()=>{
    newText = inputTxt.value.trim();
    let a=document.querySelector('.rap');
    a.firstChild.textContent=newText;
    console.log(newText);
    a.classList.remove('rap');
    modifier.classList.remove('showChang');  
    inputTxt.value='';  
});

btnAnnuler.addEventListener('click',()=>{
    modifier.classList.remove('showChang'); 
    inputTxt.value='';  

});





// Étape 3 : Créez une table json qui  stock ls tâches
// ...







