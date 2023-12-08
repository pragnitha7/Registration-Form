function validateForm(event) {
	let crp = document.getElementById('crpass');
	let cnp = document.getElementById('cnpass');

	let remark = document.getElementById('remark');
	let form = document.getElementById('regform');

	if (crp.value != cnp.value) {
		remark.textContent = "enter the same password..!";
		event.preventDefault();
	}
	else {
		remark.textContent = "";
		alert('you have been successfully registered')
	}

	console.log(crp.value)
	console.log(crp == cnp)
	console.log(remark)
}