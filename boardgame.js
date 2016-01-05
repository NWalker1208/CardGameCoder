var table = document.getElementById("gametable");
var xmlLink = table.dataset.xmlsrc;

var card = function (id, classes) {
	this.id = id;
	this.classes = classes;
};

var cards = [];

var getCardWithID = function (id) {
	for (var i = 0;i < cards.length;i++) {
		if (cards[i].id = id) {
			return cards[i];
		}
	}
	return -1;
};

var getCardsWithClasses = function (classes) {
	var matches = [];
	for (var i = 0;i < cards.length;i++) {
		if (cards[i].classes.length >= classes.length) {
			var containsAll = true;
			for (var j = 0;j < classes.length;j++) {
				if (cards[i].classes.indexOf(classes[j]) == -1) {
					containsAll = false;
				}
			}
			if (containsAll) {
				matches.push(cards[i])
			}
		}
	}
	return matches;
};

var interpretXMLFile = function (xmlDoc) {};

var getXMLFile = function (file) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			interpretXMLFile(xhttp.responseXML);
		}
	};
	xhttp.open("GET", file, true);
	xhttp.send();
}

var title = "";
interpretXMLFile = function (xmlDoc) {
	title = xmlDoc.getElementsByTagName("info")[0].getElementsByTagName("title")[0].textContent;
	
	var titleText = document.createElement("p");titleText.textContent = title;
	table.appendChild(titleText);
};

getXMLFile(xmlLink);