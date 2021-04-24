function openNav() 
{
	console.log("openNav");
	document.getElementById("mySidenav").style.width = "30vh";
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0vh";
  document.body.style.backgroundColor = "white";
  
}