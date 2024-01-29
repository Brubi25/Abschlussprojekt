let content_children = document.getElementById("content").children;
let sub = document.getElementById("sub");

for(let n = 0; n < content_children.length; n++){
	let child = content_children[n];
	if (child.tagName == "H2"){
		const node = document.createElement("li");
		const textnode = document.createTextNode(child.innerText);
		node.appendChild(textnode);
		
		node.addEventListener("click", function(){child.scrollIntoView()});
		
		sub.appendChild(node);
	
	}
}

