//What happen when Service Down
(function() {
	if(document.getElementsByTagName("title")[0].innerHTML == "Service Unavailable") {
		location.assign("https://fbs.intranet.smu.edu.sg");
		throw new Error("FBS Service unavailable.");
	}
}) ();

//Global node
var clearNode = document.createElement("div");
clearNode.setAttribute("class", "clear");

//Changing Doctype
var doctype = document.implementation.createDocumentType(
    'html',
    '',
    ''
);

document.doctype.parentNode.replaceChild(doctype, document.doctype);

//Grabbing your details
var treasureNode = document.getElementById("cellInfo");
var name = treasureNode.childNodes[0].nodeValue
name = name.substring(0, name.length-2);

var quotaUsed = parseFloat(document.getElementById("MainQuotaUsed").innerHTML);
var quotaRemain = parseFloat(document.getElementById("MainQuotaRemaining").innerHTML);
var quotaTotal = quotaUsed + quotaRemain;

//Storing details in Chrome.storage (Not in use for now)
/*var storage = {};
storage["quotaUsed"] = quotaUsed;
storage["quotaTotal"] = quotaTotal;

chrome.storage.local.set(storage, function() {console.log("success");});*/

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

//Injecting Script because of content-scripts limitations
/*var scriptNode1 = document.createElement("script");
scriptNode1.setAttribute("type", "text/javascript");
scriptNode1.setAttribute("src", chrome.extension.getURL("js/portal.js"));
headNode[0].appendChild(scriptNode1);*/

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
var systemTitleNode = document.createElement("h2");
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
var helpLinkNode = document.createElement("A");
helpLinkNode.setAttribute("href", "https://intranet.smu.edu.sg/FM/eFM/efm_help.html");
var helpIconEnclosureNode = document.createElement("div");
helpIconEnclosureNode.setAttribute("class", "iconEnclosure");

var helpIconNode = document.createElement("object");
helpIconNode.setAttribute("id", "helpIcon");
helpIconNode.setAttribute("type", "image/svg+xml");
helpIconNode.setAttribute("data", chrome.extension.getURL("graphics/help.svg"));
var helpIconTextNode = document.createTextNode("Help");

helpIconNode.appendChild(helpIconTextNode);
helpIconEnclosureNode.appendChild(helpIconNode);
helpLinkNode.appendChild(helpIconEnclosureNode);
iconsNode.appendChild(helpLinkNode);
iconsNode.appendChild(clearNode);

mainHeaderDiv.appendChild(iconsNode);

//Clear Div
mainHeaderDiv.appendChild(clearNode.cloneNode(true));

//Main Popup Node
var userDetailsNode = document.createElement("div");
userDetailsNode.setAttribute("id", "userDetailsDiv");

//Greetings + Name node
var greetingsNode = document.createElement("h2");
greetingsNode.setAttribute("id", "greetings");
var greetingsTextNode = document.createTextNode("Hello");
greetingsNode.appendChild(greetingsTextNode);
var nameNode = document.createElement("h2");
nameNode.setAttribute("id", "name");
var _$NameTextNode = document.createTextNode(name);
nameNode.appendChild(_$NameTextNode);
userDetailsNode.appendChild(greetingsNode);
userDetailsNode.appendChild(nameNode);

//Divider Node
var dividerNode = document.createElement("div");
dividerNode.setAttribute("class", "horizontal-divide");
userDetailsNode.appendChild(dividerNode);

//Hours Node
var totalHoursText = document.createElement("h2");
totalHoursText.setAttribute("id", "totalHoursText");
var totalHoursTextNode = document.createTextNode("Total Hours:");
totalHoursText.appendChild(totalHoursTextNode);
userDetailsNode.appendChild(totalHoursText);

var totalHoursAmt = document.createElement("h2");
totalHoursAmt.setAttribute("id", "totalHoursAmt");
var totalHoursAmtTextNode = document.createTextNode(quotaTotal);
totalHoursAmt.appendChild(totalHoursAmtTextNode);
userDetailsNode.appendChild(totalHoursAmt);

var hoursRemain = document.createElement("h3");
hoursRemain.setAttribute("id", "hoursRemain");
var hoursRemainTextNode = document.createTextNode("Remain: " + quotaRemain + " hours");
hoursRemain.appendChild(hoursRemainTextNode);
userDetailsNode.appendChild(hoursRemain);

var hoursUsed = document.createElement("h3");
hoursUsed.setAttribute("id", "hoursUsed");
var hoursUsedTextNode = document.createTextNode("Used: " + quotaUsed + " hours");
hoursUsed.appendChild(hoursUsedTextNode);
userDetailsNode.appendChild(hoursUsed);

//Usage Box
var outerBox = document.createElement("div");
outerBox.setAttribute("id", "outerBox");
var innerBox = document.createElement("div");
innerBox.setAttribute("id", "innerBox");
outerBox.appendChild(innerBox);
userDetailsNode.appendChild(outerBox);

mainHeaderDiv.appendChild(userDetailsNode);
//Inserting the mother of all nodes
var firstChild = bodyNode.firstChild;
bodyNode.insertBefore(mainHeaderDiv, firstChild);

//Setting up Mouse event listener
userIconEnclosureNode.addEventListener("mouseover", userOnMouseIn);
userIconEnclosureNode.addEventListener("mouseout", userOnMouseOut);

function userOnMouseIn() {
	document.getElementById("userDetailsDiv").style.visibility = "visible";
	var progress = document.getElementById("innerBox");
	var usedPercent = parseInt((quotaUsed/quotaTotal)*100)+1;
	progress.animate([
		{width: "1%"},
		{width: usedPercent + "%"}
	], {
		duration: 500,
		delay: 100,
		iterations: 1,
		fill: "forwards"
	});
}

function userOnMouseOut() {
	document.getElementById("userDetailsDiv").style.visibility = "hidden";
	document.getElementById("innerBox").style.width = "1%";
}