window.addEventListener('load', ()  => {
    const form = document.querySelector("#task-form");
    const input = document.querySelector("#task-input");
    const listElems = document.querySelector("#tasks");
    
    form.addEventListener('submit', (e) => {
        e.preventDefault(); //stops it from refreshing the page
        
        const task = input.value;
        
        const taskElems = document.createElement('div');
        taskElems.classList.add('task');
        
        const taskContentElems = document.createElement('div');
        taskContentElems.classList.add('content');
        
        taskElems.appendChild(taskContentElems);

            const taskInputElems = document.createElement('input');
            taskInputElems.classList.add('text');
            taskInputElems.type = 'text';
            taskInputElems.value = task;
            taskInputElems.setAttribute('readonly', 'readonly');

            taskContentElems.appendChild(taskInputElems);

            const taskActionsElems = document.createElement('div');
            taskActionsElems.classList.add('actions')
            
            //Edit
            
            const taskEditElems = document.createElement("button");
            taskEditElems.classList.add("edit");
            taskEditElems.innerText = 'Edit';
            
            //Delete
            
            const taskDeleteElems = document.createElement('button');
            taskDeleteElems.classList.add("delete");
            taskDeleteElems.innerText = 'Delete';
            
            
            taskActionsElems.appendChild(taskEditElems);
            taskActionsElems.appendChild(taskDeleteElems);
            
            taskElems.appendChild(taskActionsElems);
            
            listElems.appendChild(taskElems);

            input.value = '';



            taskEditElems.addEventListener('click', (e) =>{
                if (taskEditElems.innerText.toLowerCase() == "edit"){
                    taskEditElems.innerText = "Save";
                    taskInputElems.removeAttribute("readonly");
                    taskInputElems.focus();
                    
                }else {
                    taskEditElems.innerText = "Edit"; // Fixed a typo here
                    taskInputElems.setAttribute("readonly" , "readonly");

                } });

       

            

            // taskContentElems.appendChild(taskInputElems);
            // taskActionsElems.classList.add("actions");



            

            taskDeleteElems.addEventListener('click', (e) => {
                listElems.removeChild(taskElems);

                });
            
        })
    

});
