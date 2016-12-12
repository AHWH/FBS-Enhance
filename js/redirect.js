//Changing Doctype
var doctype = document.implementation.createDocumentType(
    'html',
    '',
    ''
);

document.doctype.parentNode.replaceChild(doctype, document.doctype);

//Changing Head
var headNode = document.getElementsByTagName("head");
var titleNode = document.getElementsByTagName("title");
titleNode[0].innerHTML = "Redirecting";

var linkNode = document.createElement("link");
linkNode.setAttribute("href", "https://fonts.googleapis.com/css?family=Roboto:300,500");
linkNode.setAttribute("rel", "stylesheet");
headNode[0].appendChild(linkNode);


//Removal of existing document elements
var n0 = document.getElementsByTagName("style");
var n1 = document.getElementsByTagName("div");
var n2 = document.getElementsByTagName("table");
removeNode(n0);
removeNode(n1);
removeNode(n2);

function removeNode(node) {
	var length = node.length;
	for(var i = 0; i < length; i++) {
		var childNode = node[i];
		childNode.parentNode.removeChild(childNode);
	}
}

//Calling body node
var bodyNode = document.getElementsByTagName("body");

//Creating the div to hold the error details
var divNode1 = document.createElement("div");
divNode1.setAttribute("id", "msgContainer");

//Creating the relevant textNodes
//Creating & appending hero Msg
var heroMsgNode = document.createElement("h1");
heroMsgNode.setAttribute("id", "heroMsgNode");
var heroMsgTextNode = document.createTextNode("Hello");
heroMsgNode.appendChild(heroMsgTextNode);
divNode1.appendChild(heroMsgNode);

//Creating & appending sub-hero msg
var subHeroMsgNode1 = document.createElement("h2");
subHeroMsgNode1.setAttribute("id", "subHeroMsgNode1");
var subHeroMsgTextNode1 = document.createTextNode("You are here because reasons...");
subHeroMsgNode1.appendChild(subHeroMsgTextNode1);

var subHeroMsgNode2 = document.createElement("h2");
subHeroMsgNode2.setAttribute("id", "subHeroMsgNode2");
var subHeroMsgTextNode2 = document.createTextNode("bringing you out");
subHeroMsgNode2.appendChild(subHeroMsgTextNode2);

divNode1.appendChild(subHeroMsgNode1);
divNode1.appendChild(subHeroMsgNode2);

//Loading node
var divNode2 = document.createElement("div");
divNode2.setAttribute("class", "spinner");
divNode2.setAttribute("id", "loading")
var bounce1 = document.createElement("div");
bounce1.setAttribute("class", "double-bounce1");
var bounce2 = document.createElement("div");
bounce2.setAttribute("class", "double-bounce2");
divNode2.appendChild(bounce1);
divNode2.appendChild(bounce2);
divNode1.appendChild(divNode2);
bodyNode[0].appendChild(divNode1);

//location.assign("https://fbs.intranet.smu.edu.sg/MainMenu.aspx");

//Creating & appending button
var divNode3 = document.createElement("div");
divNode3.setAttribute("id", "buttonHolder");
var linkNode = document.createElement("a");
linkNode.setAttribute("href", "https://fbs.intranet.smu.edu.sg/MainMenu.aspx");
linkNode.setAttribute("class", "button");
linkNode.setAttribute("id", "redirect-button");
var linkTextNode = document.createTextNode("click here");

linkNode.appendChild(linkTextNode);
divNode3.appendChild(linkNode);

setTimeout(function() {
	document.getElementById("subHeroMsgNode2").innerHTML = "oops...you are still here. Try the button below: ";
	divNode1.replaceChild(divNode3, divNode2);}, 5000);