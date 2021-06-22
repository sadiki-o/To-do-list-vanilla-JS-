//TASKS list
var tasks = [];

//Id
var id = 0;
//button selector
var text = document.querySelector(".btn");



text.addEventListener("click", function (){
	if(document.querySelector(".inp").value == ""){
		alert("Enter non empty value")
	}else if( tasks.includes(document.querySelector(".inp").value)){
  	    alert("task already added");
        document.querySelector(".inp").value = "";
    }else{
        let task = document.createElement('div');
        task.className = "tas";

        let task_name = document.createElement('div');
        task_name.className = "task_name";
        task_name.innerHTML = document.querySelector(".inp").value;
        task.append(task_name)

        let remov = document.createElement('i');
        remov.className = `del${id} fas fa-trash-alt`;
        task.append(remov);

        let mark = document.createElement('i');
        mark.className = `mar${id} fas fa-check-circle`;
        task.append(mark);
        document.querySelector("#tasks").appendChild(task);
            tasks.push(document.querySelector(".inp").value);
        document.querySelector(".inp").value = "";
        
        //Delete event button
        document.querySelector(`.del${id} `).addEventListener("click", function (e) {
        let ne = tasks.filter(el => el !== e.target.parentNode.childNodes[0].innerHTML);
        tasks = ne;
        e.target.parentNode.remove();
        });
        
        //mark as done event button
        document.querySelector(`.mar${id} `).addEventListener("click", function (e) {
        e.target.parentNode.childNodes[0].style.textDecoration = "line-through"
        });
        
        id += 1;
    
  }

})


