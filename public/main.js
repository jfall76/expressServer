var response = prompt("What would you like to put in the body of this page?");
if (!response) {
	alert("You could at least put somuething.");
	$('body').append("<p>User was too lazy to type in anything</p>");

} else {
$('body').append( "<p>" + response + "</p>" );
}