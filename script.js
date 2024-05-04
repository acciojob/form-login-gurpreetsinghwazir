function getFormvalue() {
    //Write your code here
	let input = document.querySelectorAll("input");
	let fname = input[0].value
	let lname = input[1].value
	let name  = fname + " " + lname
		alert(name);
}
