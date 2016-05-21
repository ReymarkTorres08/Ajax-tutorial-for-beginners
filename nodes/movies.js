function gametime() {
	title = document.createTextNode("Here are some things!");
	list = document.createElement("ul");

	item1 = document.createElement("li");
	text1 = document.createTextNode("Test Node 1");
	// Put the text1("Test Node") into item1("<li></li> tags")
	item1.appendChild(text1);

	item2 = document.createElement("li");
	text2 = document.createTextNode("Test Node 2");
	// Put the text2("Test Node") into item2("<li></li> tags")
	item2.appendChild(text2);

	item3 = document.createElement("li");
	text3 = document.createTextNode("Test Node 3");
	// Put the text3("Test Node") into item3("<li></li> tags")
	item3.appendChild(text3);

	// Append the items(<li>'s) into the <ul>
	list.appendChild(item1);
	list.appendChild(item2);
	list.appendChild(item3);

	theD = document.getElementById('theD');
	theD.appendChild(title);
	theD.appendChild(list);

}