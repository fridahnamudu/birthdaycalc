alert("how are you doing")
var male = ["kwasi", "kwadwo", "kwabena", "kwaku", "yaw", "kofi", "kwame"];
var female  = ["akosua", "Adwoa", "Abenaa", "akua", "yaa", "afua", "ama"]



//function to get the akan names
function getName(){
	//fn();
	var date = document.getElementById("date").value;
	var day = new Date(date).getDay();
	var ismale = document.getElementById("male").checked;
	
	var isfemale = document.getElementById("female").checked;
	if(ismale == true && isfemale == false) {
		if (day == 0) {
			alert("Your Akan Name is" + male[0]);
		}
		else if (day == 1) {
			alert("Your AKAN NAME is " + male[0])
		}
		else if (day == 2) {
			alert("Your AKAN NAME is " + male[2])
		}
		else if (day == 3) {
			alert("Your AKAN NAME is " + male[3])
		}
		else if (day == 4) {
			alert("Your AKAN NAME is " + male[4])
		}
		else if (day == 5) {
			alert("Your AKAN NAME is " + male[5])
		}
		else  {
			alert("Your AKAN NAME is " + male[6])
		}
	} else if (ismale == false && isfemale == true){
		if (day == 0){
			alert("Your AKAN NAME is " + female[0]);
		}
		else if (day == 1){
			alert("Your AKAN NAME is" + female[1]);
		}
		else if (day == 2){
			alert("Your AKAN NAME is" + female[2]);
		}
		else if (day == 3){
			alert("Your AKAN NAME is" + female[3]);
		}
		else if (day == 4){
			alert("Your AKAN NAME is" + female[4]);
		}
		else if (day == 5){
			alert("Your AKAN NAME is" + female[5]);
		}
		else {
		alert("Your AKAN NAME is" + female[6]);
		}
	}
}



