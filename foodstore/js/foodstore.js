// if(window.addEventListener){
//   window.addEventListener('load', process());
// } else {
//   window.attachEvent('onload', process());
// }

// Stores the reference to the XMLHTTPRequest object
var xmlHttp = createXmlHttpRequestObject();

// Retrieves the XMLHttpRequest object
function createXmlHttpRequestObject() {
	// stores the reference to the XMLHTTPRequest OBJECT
	var xmlHttp;

	// If running internet Explorer 6 or older:
	if (window.ActiveXObject) {
		try {
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch(e) {
			xmlHttp = false;
		}
	} else {
		try {
			xmlHttp = new XMLHttpRequest();
		} catch(e) {
			xmlHttp = false;
		}
	}

	// Return the created object or display an error message:
	if (!xmlHttp) {
		alert("Can't create that object man!");
 	} else {
 		return xmlHttp;
 	}
 }

// Make asynchronous HTTP request  using the XMLHttpsRequest object:
function process() {
	// Proceed only if the xmlHTTP object isn't busy
	if(xmlHttp.readyState === 4 || xmlHttp.readyState === 0) {
		// Retrieve the food typed by the user on the form
		food = encodeURIComponent(document.getElementById("userInput").value);

		// Execute the foodstore.php page from the server:
		xmlHttp.open("GET", "foodstore.php?food=" + food, true);

		// Define method to handle server responses:
		xmlHttp.onreadystatechange = handleServerResponse;

		// It needs to be null because our request is a GET
		// method not a POST method
		xmlHttp.send(null);
	} else {
		// If the connection is busy, try again after one second:
		setTimeOut('process()', 1000);
	}
}

// Callback function executed when a message is received from the server:
function handleServerResponse() {
	// Move forward only if the transaction has completed
	if (xmlHttp.readyState == 4) {
		// If the communication was OK
		if (xmlHttp.status === 200) {
			// Extract the XML retrieved from the server
			xmlResponse = xmlHttp.responseXML;
			// Obtain the document element (the root element of the XML structure)
			xmlDocumentElement = xmlResponse.documentElement;
			// Get the text message, which is in the first child of the document element:
			message = xmlDocumentElement.firstChild.data;

			// Display the data received from the server:
			document.getElementById("underInput").innerHTML = '<span style="color:blue">' + message + '</span>';

			// Restart sequence by waiting a second:
			setTimeout('process()', 1000);
		} else {
			alert('Something wend wrong.');
		}
	}
}