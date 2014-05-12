var myDiv = document.getElementById("myDiv");
var counter = 0;
var myFunc = setInterval(function(){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(request.readyState === 4 && request.status === 200){
			myDiv.innerHTML = request.response;
		}
		else{
			myDiv.innerHTML = "AJAX error";
		}
	};
	request.open("GET", "tracking_devices", true);
	request.send();
}, 1000);
