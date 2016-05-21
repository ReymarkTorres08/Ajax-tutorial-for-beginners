var xmlHttp = createXmlHttpRequestObject();

// Create object
function createXmlHttpRequestObject() {
	var xmlHttp;
	if (window.XMLHttpRequest) {
		xmlHttp = new XMLHttpRequest();
	} else {
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	return xmlHttp;
}

// Call onload in the HTML
function process() {
	if(xmlHttp) {
		try {
			xmlHttp.open("GET", "xmlstructure.xml", true);
			xmlHttp.onreadystatechange = handleStateChange;

			xmlHttp.send(null);
		} catch(e) {
			alert(e.toString());
		}
	}
}

// When state changes
function handleStateChange() {
	if(xmlHttp.readyState === 4) {
		if (xmlHttp.status === 200) {
			try {
				handleResponse();
			} catch(e) {
				alert(e.toString());
			}
		} else {
			alert(xmlHttp.statusText);
		}
	}
}


// Handle the response from the server
function handleResponse() {
	var xmlResponse = xmlHttp.responseXML;

	// Gets the root element of the file
	// This is the <response> element on the xmlstructure.xml
	root = xmlResponse.documentElement;
	// Get the xml tag <name> and store it in an array called names
	names = root.getElementsByTagName("name");
	// Get the xml tag <address> and store it in an array called names
	address = root.getElementsByTagName("address");

	alert(names.length);
	var stuff = "";
	// Loop through the xml file
	for (var i = 0; i < names.length; i++) {
		alert(i);
		// firstChild gets the text in the <name> element
		stuff += names.item(i).firstChild.data + " - " + address.item(i).firstChild.data + "<br>";
	}

	theD = document.getElementById("theD");
	theD.innerHTML = stuff;
}