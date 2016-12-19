var bodyNode = document.body;

var contentFrame = document.createElement("div");
contentFrame.setAttribute("id", "contentFrame");

//Announcement Frame
var announcementFrame = document.createElement("div");
announcementFrame.setAttribute("id", "announcementFrame");
var announcementHeader = document.createElement("h1");
announcementHeader.setAttribute("id", "announcementHeader");
var announcementHeaderTextNode = document.createTextNode("Announcements");
announcementHeader.appendChild(announcementHeaderTextNode);
announcementFrame.appendChild(announcementHeader);
contentFrame.appendChild(announcementFrame);

//Form Frame
var formFrame = document.createElement("div");
formFrame.setAttribute("id", "formFrame");
contentFrame.appendChild(formFrame);

bodyNode.appendChild(contentFrame);

