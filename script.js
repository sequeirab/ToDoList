let content = document.getElementById("todo").value;

document.getElementById("btn").addEventListener("click", function writeList() {
	node.appendChild(textNode);
	document.getElementById("myUl").appendChild(node);
});


let node = document.createElement("LI");
let textNode = document.createTextNode(document.getElementById("todo").value);
node.appendChild(textNode);
document.getElementById("myUl").appendChild(node);
