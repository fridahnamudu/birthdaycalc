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


// function fn(){
	
	
	

	
// //console.log(date)


// 	if (day < 0 || day > 31 ) {
// 		document.getElementsByClassName("dateerror");
// 		return false;
// 	}else if (date == ""){
// 		document.getElementsByClassName("dateerror");
//         return false;
// 	}else{
// 		d.setDate(date);
// 	}

// 	if (month < 0 || day > 12){
// 		document.getElementsByClassName("montherror");
// 		return false;
// 	}else if (month == "") {
// 		document.getElementsByClassName("montherror");
// 		return false;
// 	}else{
// 		d.setMonth(month);
// 	}

// 	if (year < 0){
// 		document.getElementsByClassName("yearerror");
// 		return false;
// 	}else if (year == ""){
// 		document.getElementsByClassName("yearerror");
// 		return true;
// 	}
// }





// let dateInput = prompt("Please enter your date of birth:\n Syntax 1: YYYY-MM-DD\n Syntax 1: YYYY, MM, DD");
// let genderInput = prompt("Please indicate your gender:\nSpecify with M or F");

// let dob = new Date(dateInput);
// let gender;
// let akan_name;


// const checkDayMonth = (dob) =>
// {

// 	if(dob.getDate() < 0 || dob.getDate() > 31)
// 	{
// 		console.error("Invalid day input!");
// 		alert("Please re-enter the date details correctly.");
// 	}

// 	else if(dob.getMonth().toString() == "NaN")
// 	{
// 		console.error("Invalid month input in date!");
// 		alert("Please re-enter the date details correctly.");
// 	}

// 	else
// 		console.log("Details correctly entered!");

// }



// const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
// const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];



// const checkGender = (genderInput) =>
// {
// 	if(genderInput == 'M' || genderInput == 'm' || genderInput == "MALE" || genderInput == "Male")
// 		gender = "Male";
// 	else if(genderInput == 'F' || genderInput == 'f' || genderInput == "FEMALE" || genderInput == "Female")
// 		gender = "Female";
// 	else
// 		console.error("Incorrect input!");
// }



// checkDayMonth(dob);
// checkGender(genderInput);


// console.warn(dob.getDay() + " index of day of the week");
// for(let nameIndex = 0; nameIndex < 7; nameIndex++)
// {
// 	if(dob.getDay() == nameIndex && gender == "Male")
// 		akan_name = maleNames[nameIndex];
// 	else if(dob.getDay() == nameIndex && gender == "Female")
// 		akan_name = femaleNames[nameIndex];

// }

// console.log(`Your Akan name is ${akan_name}`);