var ol = document.getElementById("todoList");
var add = document.getElementById("add");
var del = document.getElementById("delete");
var len = document.getElementsByTagName("li").length;
var list = [];
var temp = document.getElementById("temp");
var c = 0;


add.addEventListener("click", function()
{
	var newTask = prompt("Enter new task!");
	list.push(String(newTask));
	console.log(list);
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(String(newTask)));
	ol.appendChild(li);
})
del.addEventListener("click", function()
{
	var toDelete = prompt("Enter the task's number!");
	if(toDelete > list.length)
	{
		if(toDelete == 1)
		{
			alert("There aren't any to-dos");
		}
		else if(toDelete == 2)
		{
			alert("There isn't a second to-do");
		}
		else if(toDelete == 3)
		{
			alert("There isn't a third to-do");
		}

		else
		{
			alert("There isn't a " + String(toDelete) + "th to-do item");
		}
		
	}
	console.log(toDelete);
	list.splice(toDelete - 1, 1);
	console.log(list);
	ol.removeChild(ol.childNodes[toDelete]);
	c++;
	temp.textContent = String(c);
})