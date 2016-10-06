var myBtn = document.getElementById("btn");

var cont = document.getElementById("container"); 

document.getElementById("btn").addEventListener("click", tog);

function tog(){
	cont.classList.toggle("activeContainer");
	cont.classList.toggle("container");
}




