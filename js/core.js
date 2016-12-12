//Global node
var clearNode = document.createElement("div");
clearNode.setAttribute("class", "clear");

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
var iconsNode = document.createElement("div");
iconsNode.setAttribute("id", "iconsNode");
//User
var userIconEnclosureNode = document.createElement("div");
userIconEnclosureNode.setAttribute("class", "iconEnclosure");
userIconEnclosureNode.setAttribute("onMouseover", "document.getElementById(\"userDetailsDiv\").style.visibility = \"visible\";");
userIconEnclosureNode.setAttribute("onMouseout", "document.getElementById(\"userDetailsDiv\").style.visibility = \"hidden\";");

var userIconNode = document.createElement("object");
userIconNode.setAttribute("id", "userIcon");
userIconNode.setAttribute("type", "image/svg+xml");
userIconNode.setAttribute("data", chrome.extension.getURL("graphics/user.svg"));
var userIconTextNode = document.createTextNode("User");

userIconNode.appendChild(userIconTextNode);
userIconEnclosureNode.appendChild(userIconNode);
iconsNode.appendChild(userIconEnclosureNode);

//Notification
var notifIconEnclosureNode = document.createElement("div");
notifIconEnclosureNode.setAttribute("class", "iconEnclosure");

var notifIconNode = document.createElement("object");
notifIconNode.setAttribute("id", "notifIcon");
notifIconNode.setAttribute("type", "image/svg+xml");
notifIconNode.setAttribute("data", chrome.extension.getURL("graphics/notification.svg"));
var notifIconTextNode = document.createTextNode("Notification");

notifIconNode.appendChild(notifIconTextNode);
notifIconEnclosureNode.appendChild(notifIconNode);
iconsNode.appendChild(notifIconEnclosureNode);

//Help
var helpIconEnclosureNode = document.createElement("div");
helpIconEnclosureNode.setAttribute("class", "iconEnclosure");

var helpIconNode = document.createElement("object");
helpIconNode.setAttribute("id", "helpIcon");
helpIconNode.setAttribute("type", "image/svg+xml");
helpIconNode.setAttribute("data", chrome.extension.getURL("graphics/help.svg"));
var helpIconTextNode = document.createTextNode("Help");

helpIconNode.appendChild(helpIconTextNode);
helpIconEnclosureNode.appendChild(helpIconNode);
iconsNode.appendChild(helpIconEnclosureNode);
iconsNode.appendChild(clearNode);

mainHeaderDiv.appendChild(iconsNode);

//Clear Div
mainHeaderDiv.appendChild(clearNode.cloneNode(true));

//User Details Popup
function showUserDetails() {
	document.getElementById("userDetailsDiv").style.visibility = "visible";
}



var userDetailsNode = document.createElement("div");
userDetailsNode.setAttribute("id", "userDetailsDiv");

var greetings$NameNode = document.createElement("h3");
greetings$NameNode.setAttribute("id", "greetings$Name");
var greetingsTextNode = document.createTextNode("Hello");
greetings$NameNode.appendChild(greetingsTextNode);
greetings$NameNode.appendChild(document.createElement("br"));
greetings$NameNode.appendChild(document.createElement("br"));
var _$NameTextNode = document.createTextNode(name);
greetings$NameNode.appendChild(_$NameTextNode);
userDetailsNode.appendChild(greetings$NameNode);

mainHeaderDiv.appendChild(userDetailsNode);

//Inserting the mother of all nodes
var firstChild = bodyNode.firstChild;
bodyNode.insertBefore(mainHeaderDiv, firstChild);