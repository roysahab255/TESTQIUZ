function submitForm(e) {
e.preventDefault();
	
	let	name = document.forms["welcomes_form"]["name"].value;

 sessionStorage.setItem("name",name);
 location.href = "qui.html";
   //console.log(nam);
 }
