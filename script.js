let gallery = document.getElementById("gallery");
function updateDisplay(display) {
	gallery.innerHTML = "";
    if (display == "about") {
        gallery.innerHTML = '<div id="about"><h1>About Me</h1><p>I have loved coding ever since I first tried it. I don\'t remember who, but I was inspired by a youtuber who made a game in a game jam. I though to myself, "I should try that, it looks really fun!" Of course, I didn\'t know anything about coding or computers in general, but I loved the problem solving that came with every project. I began by googling every problem I had, and I slowly began to learn. I decided to push myself and learn computer science by watching online college lectures and by practicing creating algorithms on Codewars. This year, I started learing backend web development, which includes servers and databases. I started slow, but now I understand a lot more about the web and computers as a whole. This long process has changed how I think. Instead of solving a big problem, I now split the problem into many small parts that I can solve easily. This makes me much better at solving problems that would usually overwhelm others. Coding has changed me for the better and I\'m proud of all of the progress I\'ve made so far.</p></div>'
        return
    }
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
    document.getElementById("aboutSelection").style.backgroundColor = "white";
	document.getElementById("aboutSelection").style.color = "black";
})
document.getElementById("artSelection").addEventListener("click", function() {
	updateDisplay("art")
	this.style.backgroundColor = "black";
	this.style.color = "white";
	document.getElementById("projectsSelection").style.backgroundColor = "white";
	document.getElementById("projectsSelection").style.color = "black";
    document.getElementById("aboutSelection").style.backgroundColor = "white";
	document.getElementById("aboutSelection").style.color = "black";
})
document.getElementById("aboutSelection").addEventListener("click", function() {
	updateDisplay("about")
	this.style.backgroundColor = "black";
	this.style.color = "white";
	document.getElementById("projectsSelection").style.backgroundColor = "white";
	document.getElementById("projectsSelection").style.color = "black";
    document.getElementById("artSelection").style.backgroundColor = "white";
	document.getElementById("artSelection").style.color = "black";
})
updateDisplay("projects");
