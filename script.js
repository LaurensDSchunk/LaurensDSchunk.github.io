let gallery = document.getElementById("gallery");
function updateDisplay(display) {
	gallery.innerHTML = "";
	fetch("./data.json")
		.then(response => {
   		return response.json();
		})
		.then(data => {
			for (let i = 0; i < data[display].length; i++) {
				if (display == "projects") {
					gallery.innerHTML += "<a href='"+data[display][i].path+"' target='_blank'><div class='project'><h1>"+data[display][i].name+"</h1><p>"+data[display][i].description+"</p></div></a";
				}
				if (display == "art") {
					gallery.innerHTML += "<a href='"+data[display][i].imgLink+"' target='_blank'><div class='piece'><h1>"+data[display][i].name+"</h1><img src='"+data[display][i].imgSrc+"'><p>"+data[display][i].description+"</p></div></a>";
				}
			}
		});
}

document.getElementById("projectsSelection").addEventListener("click", function() {
	updateDisplay("projects");
	this.style.backgroundColor = "black";
	this.style.color = "white";
	document.getElementById("artSelection").style.backgroundColor = "white";
	document.getElementById("artSelection").style.color = "black";
})
document.getElementById("artSelection").addEventListener("click", function() {
	updateDisplay("art")
	this.style.backgroundColor = "black";
	this.style.color = "white";
	document.getElementById("projectsSelection").style.backgroundColor = "white";
	document.getElementById("projectsSelection").style.color = "black";
})

updateDisplay("projects");