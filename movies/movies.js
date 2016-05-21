function createList() {
	var s;
	s = "<ul>" +
			"<li>Armagedon</li>" +
			"<li>Prison Break</li>" +
			"<li>Kungfu Panda</li>" +
		"</ul>";

	divMovies = document.getElementById("divMovies");
	divMovies.innerHTML =  s;
}