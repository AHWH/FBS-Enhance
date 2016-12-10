//Grabbing your details
var treasureNode = document.getElementById("cellInfo");
var name = treasureNode.childNodes[0].nodeValue
name = name.substring(0, name.length-2);

var quotaUsed = document.getElementById("MainQuotaUsed").innerHTML;
var quotaRemain = document.getElementById("MainQuotaRemaining").innerHTML;

//Removing Nodes
var titleNode = document.getElementsByTagName("title");
titleNode[0].innerHTML = "SMU Facilities Booking System";

var metaNodes = document.getElementsByTagName("meta");
for(var i = 0; i < metaNodes.length; i++) {
	metaNodes[i].parentNode.removeChild(metaNodes[i]);
}

var scriptNodes = document.getElementsByTagName("script");
scriptNodes[0].parentNode.removeChild(scriptNodes[0]);

var bodyNode = document.body;
bodyNode.removeAttribute("ms_positioning");
bodyNode.removeAttribute("leftmargin");
bodyNode.removeAttribute("topmargin");

var topNode = document.getElementsByClassName("MainMenu");
topNode[0].parentNode.removeChild(topNode[0]);

//Injecting Google Fonts
var headNode = document.getElementsByTagName("head");
var linkNode = document.createElement("link");
linkNode.setAttribute("href", "https://fonts.googleapis.com/css?family=Roboto:300,500");
linkNode.setAttribute("rel", "stylesheet");
headNode[0].appendChild(linkNode);

//New Top Bar (temporarily used firstChild to force it to top!)
var topNode = document.createElement("div");
topNode.setAttribute("id", "headerNode");

var mainHeaderDiv = document.createElement("div");
mainHeaderDiv.setAttribute("id", "mainHeaderDiv");

//SMU Logo
var smuLogoNode = document.createElement("img");
smuLogoNode.setAttribute("id", "SMULogo");
smuLogoNode.setAttribute("src", chrome.extension.getURL("graphics/smuLogo-land.png"));
smuLogoNode.setAttribute("alt", "SMU Logo");
mainHeaderDiv.appendChild(smuLogoNode);

//FBS Title
var systemTitleNode = document.createElement("h1");
systemTitleNode.setAttribute("id", "systemName");
var systemTitleTextNode = document.createTextNode("Facilities");
systemTitleNode.appendChild(systemTitleTextNode);
var lineBreak = document.createElement("br");
systemTitleNode.appendChild(lineBreak);
systemTitleNode.appendChild(lineBreak);
systemTitleTextNode = document.createTextNode("Booking System");
systemTitleNode.appendChild(systemTitleTextNode);
mainHeaderDiv.appendChild(systemTitleNode);


//Icons
//User
var userIconNode = document.createElement("object");
userIconNode.setAttribute("id", "userIcon");
userIconNode.setAttribute("type", "image/svg+xml");
userIconNode.setAttribute("data", chrome.extension.getURL("graphics/user.svg"));
var userIconTextNode = document.createTextNode("User");
userIconNode.appendChild(userIconTextNode);
mainHeaderDiv.appendChild(userIconNode);

//Notification
var notifIconNode = document.createElement("object");
notifIconNode.setAttribute("id", "notifIcon");
notifIconNode.setAttribute("type", "image/svg+xml");
notifIconNode.setAttribute("data", chrome.extension.getURL("graphics/notification.svg"));
var notifIconTextNode = document.createTextNode("Notification");
notifIconNode.appendChild(notifIconTextNode);
mainHeaderDiv.appendChild(notifIconNode);

//Help
var helpIconNode = document.createElement("object");
helpIconNode.setAttribute("id", "helpIcon");
helpIconNode.setAttribute("type", "image/svg+xml");
helpIconNode.setAttribute("data", chrome.extension.getURL("graphics/help.svg"));
var helpIconTextNode = document.createTextNode("Help");
helpIconNode.appendChild(helpIconTextNode);
mainHeaderDiv.appendChild(helpIconNode);

/*var nameNode = document.createElement("h2");
nameNode.setAttribute("id", "name");
var nameTextNode = document.createTextNode("Hello, " + name);
nameNode.appendChild(nameTextNode);
mainHeaderDiv.appendChild(nameNode);*/

topNode.appendChild(mainHeaderDiv);
var firstChild = bodyNode.firstChild;
bodyNode.insertBefore(topNode, firstChild);