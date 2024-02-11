let tasks = [
    {
        name: "go outside",
        completed: "no",
        category: "To-Do"
    },
    {
        name: "eat",
        completed: "yes",
        category: "To-Do"
    },
    {
        name: "drive homeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        completed: "no",
        category: "To-Do"
    },
    {
        name: "cook",
        completed: "no",
        category: "To-Do"
    },
    {
        name: "buy food",
        completed: "yes",
        category: "To-Do"
    },
    {
        name: "drive",
        completed: "yes",
        category: "miscelaneous"
    }
    ];
    let tasksDeleted = [

    ]
    const displayTasks = () => {

    }
    const populateItems = () => {
        tasks.forEach(function(items){
            if(items.name.length > 15){
                items.name = items.name.substring(0, 15)+"...";
                let newTag = document.createElement("li");
                let text;
                if(items.completed == "yes"){
                    text = document.createTextNode("\u2713 "+ items.name);
                }if(items.completed == "no"){
                    text = document.createTextNode("\u2717 "+ items.name);
                }
                
                newTag.appendChild(text);
          
                let ul = document.getElementById("items");
                ul.appendChild(newTag);  
            }else{
                let newTag = document.createElement("li");
                let text;
                if(items.completed == "yes"){
                    text = document.createTextNode("\u2713 "+ items.name);
                }if(items.completed == "no"){
                    text = document.createTextNode("\u2717 "+ items.name);
                }
                
                newTag.appendChild(text);
          
                let ul = document.getElementById("items");
                ul.appendChild(newTag);
            }

        })
    }
    //populate tasks 
    populateItems();

    // const findDistinctCategories = () => {
    //     let catArray = [];
    //     tasks.forEach(function(item){
    //         if(!catArray.includes(item.category)){
    //             catArray.push(item.category)
    //         }
    //     })
    //     populateCategoryUl(catArray);

    // }
    // const populateCategoryUl = (categoryArray) => {
        
    //     categoryArray.forEach(function(items){
    //         let newTag = document.createElement("li");
    //         let text;
    //         text = document.createTextNode(items);
    //         newTag.appendChild(text);
      
    //         let ul = document.getElementById("category");
    //         ul.appendChild(newTag); 
    //     })
    // }
    // findDistinctCategories();

    let form = document.getElementById('form');
        //prevent the form sibmission from updating the page
        form.addEventListener('submit', e => {
            e.preventDefault();
        })

    const checkForInput = () => {
        let taskName = document.forms["form"]["taskName"].value;
        let taskCompleted = document.forms["form"]["decision"].value;
        if(taskName == ""){
            alert("Please Input Task Name");
        }
        if(taskCompleted == ""){
            alert("Please Select a Choice For Completed");
        }else{
            onSubmit(taskName, taskCompleted);
        }
        document.getElementById("form").reset();
    }
    function onSubmit(taskName, taskCompleted) {
        
        // let taskName = document.forms["form"]["taskName"].value;
        // let taskCompleted = document.forms["form"]["decision"].value;
        //create a new object from the entries
        let newObj = {
            name: taskName,
            completed: taskCompleted
        }
        //push the new entries to the existing array
        tasks.push(newObj);
        console.log(tasks)
        filter();
    }

    const emptyUL = () => {
        let myList = document.getElementById("items");
        myList.innerHTML = "";
    }
    function addToUL(x){
        emptyUL();
        x.forEach(function(items){
            let newTag = document.createElement("li");
            let text;
            if(items.completed == "yes"){
                text = document.createTextNode("\u2713 "+ items.name);
            }if(items.completed == "no"){
                text = document.createTextNode("\u2717 "+ items.name);
            }
            
            newTag.appendChild(text);
      
            let ul = document.getElementById("items");
            ul.appendChild(newTag);  
        })

    }

    
    //filter for values
    const filter = () => {
        const newTaskArray = [];
        let filterValue = document.forms["selectForm"]["filter"].value;
        //work on clearing the ul for filter
        tasks.forEach(function(arrayItem){
            let x = arrayItem
            
            if(filterValue == x.completed && filterValue == "yes"){
            //push tot he new task array if yes
            newTaskArray.push(x);
              console.log(newTaskArray);
              addToUL(newTaskArray);
              
            }
            if(filterValue == x.completed && filterValue == "no"){
                //push tot he new task array if yes
                newTaskArray.push(x);
                console.log(newTaskArray);
                addToUL(newTaskArray)
              }
            if(filterValue == "all"){
                addToUL(tasks);
            }
        })
    }
    document.querySelector("#select").addEventListener("change", filter);

    const deleteTask = () => {
        tasks.forEach(function(arrayItem){
            let x = arrayItem;
        })
    }
    const populateDeleteFormOption = () => {

        tasks.forEach(function(arrayItem){
            
            let x = arrayItem;
            if(x.name.length > 15){
                x.name = x.name.substring(0,15)+"...";
                let newTag = document.createElement("option");
                newTag.value = x.name;
                newTag.name = x.name;
                let text = document.createTextNode(x.name);
                newTag.appendChild(text);
        
                let select = document.getElementById("toDelete");
                select.appendChild(newTag);  
                
            }else{
                let newTag = document.createElement("option");
                newTag.value = x.name;
                newTag.name = x.name;
                let text = document.createTextNode(x.name);
                newTag.appendChild(text);
        
                let select = document.getElementById("toDelete");
                select.appendChild(newTag);  
            }
        })
    }

    let toDeletedForm = document.getElementById("taskToDelete");
    //prevent the form sibmission from updating the page
    toDeletedForm.addEventListener("submit", e => {
        e.preventDefault();
    })

    function deleteFromFormOption () {


        tasks.forEach(function(items){
            let formOption = document.forms["taskToDelete"]["toDelete"].value;
            if(formOption == items.name){
                tasksDeleted.push(items)

                deleteFromTasks(items);
            }
        })
    }
    const deleteFromTasks = (itemToDelete) => {
        console.log(itemToDelete)
        tasks = tasks.filter(item => !tasksDeleted.includes(item))
        console.log(tasks)
        //here
        filter();
    }
    populateDeleteFormOption();


