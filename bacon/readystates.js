var xmlHttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject() {
	var xmlHttp;

	if (window.XMLHttpRequest) {
		xmlHttp = new XMLHttpRequest();
	} else { // If running on IE 6 or older
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	return xmlHttp;
}

function process() {
	if (xmlHttp) {
		try {
			// Configures connection setting but not connecting to the server
			xmlHttp.open("GET", "bacon.txt", true);
			// Anytime the state change, call the onreadystatechange function
			xmlHttp.onreadystatechange = handleServerResponse;
			// Connects to the server, sends the request
			xmlHttp.send(null);
		} catch(e) {
			alert(e.toString());
		}
	}
}

function handleServerResponse() {
	theD = document.getElementById('theD');

	// If established the connetion on the server
	// Chrome ignores readyState == 1
	if (xmlHttp.readyState == 1) {
		theD.innerHTML += "Status 1: server connection established";
	// If the server receives the request
	} else if(xmlHttp.readyState == 2) {
		theD.innerHTML += "Status 2: request received <br>";
	// If the server is processing your request:
	} else if(xmlHttp.readyState == 3) {
		theD.innerHTML += "Status 3: processing request <br>";
	// The communication was okay but doesn't mean it was successful
	} else if(xmlHttp.readyState == 4) {
		theD.innerHTML += "Status 4: communication is okay checking if was successful <br>";
		// Everything was okay and successful
		if (xmlHttp.status === 200) {
			try {
				text = xmlHttp.responseText;
				theD.innerHTML += "Status 200: request is finished and response is ready to go!<br>";
				theD.innerHTML += text;
			} catch(e) {

			}
		} else {
			alert(xmlHttp.statusText);
		}
	}
}