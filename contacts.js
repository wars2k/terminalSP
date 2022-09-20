if (localStorage.getItem("contactList") == null) {
	localStorage.setItem("contactList", "<br>CONTACTS");   
}

function contacts() {
	var contactsInput = document.createElement("input"); 				
		contactsInput.setAttribute("id", "contactsInput");
		contactsInput.type = "text";
		contactsInput.style.all = "unset";		
		input.value = "";
		document.getElementById("input").style.display = "none"; 			
		document.getElementById("terminal").append(contactsInput); 			
		contactsInput.focus();
	var intro = document.createElement("div")
	intro.innerHTML = "PERSONAL CRM <br> use quit to exit to terminal";
	document.getElementById("terminalContent").prepend(intro);
	var contactsInputId = document.getElementById("contactsInput");
	symbol = document.getElementById("dollar");
	symbolValue = symbol.innerHTML;
	var symbolValueNew = symbolValue.replace("$", "C:");
	symbol.innerHTML = symbolValueNew;
	contactsInput.onkeyup = function(e){
    	if(e.keyCode == 13){
    	
    	var crmValue = contactsInput.value;
    	var crmCommand = crmValue.split(" ")[0];
    	var crmCommandTwo = crmCommand + "C";

    	var crmArgs = crmValue.replace(crmCommand, "");
    	
    	window[crmCommandTwo](crmArgs);
    	//window[crmCommand]();
    }
   }

}
  function quitC() {
  	contactsInput.remove(); 								   
    document.getElementById("input").style.display = "inline"; 
    document.getElementById("input").focus();
    var line = document.createElement("div");
    line.innerHTML = "exiting contacts and returning to terminal <br><br>"
    document.getElementById("terminalContent").prepend(line);
    var symbolValueNew = symbolValue.replace("C:", "$");
    symbol.innerHTML = symbolValueNew;
  }

function newC() {
	var name = document.createElement("div");
	name.setAttribute("id", "nameDisplay");
    var line = document.createElement("div");
    line.innerHTML = "<br>NEW CONTACT";
  	name.innerHTML = "name:";
    document.getElementById("terminalContent").prepend(line);
    document.getElementById("terminalContent").prepend(name);
   	contactsInput.value = "";
   	nameBoxC();

}

function nameBoxC() {
	var nameInput = document.createElement("input");
	nameInput.setAttribute("id", "nameInput");
	nameInput.type = "text";
	nameInput.style.all = "unset";
	document.getElementById("contactsInput").style.display = "none"; 			
	document.getElementById("terminal").append(nameInput);
	nameInput.focus();
	nameInput.onkeyup = function(e){
    	if(e.keyCode == 13){
    		var name = document.getElementById("nameDisplay");
    		nameInputV = nameInput.value;
    		name.innerHTML = "name: " + nameInputV;
    		console.log(name.innerHTML);
    		nameInput.value = "";
    		categoryBoxC();
    	}
    }
}
function categoryBoxC() {
	var categoryDisplay = document.createElement("div");
	categoryDisplay.innerHTML = "category: ";
	categoryDisplay.setAttribute("id", "categoryDisplay");
	document.getElementById("terminalContent").prepend(categoryDisplay);
	var categoryInput = document.createElement("input");
	categoryInput.setAttribute("id", "categoryInput");
	categoryInput.type = "text";
	categoryInput.style.all = "unset";
	document.getElementById("nameInput").style.display = "none"; 			
	document.getElementById("terminal").append(categoryInput);
	categoryInput.focus();
	categoryInput.onkeyup = function(e){
    	if(e.keyCode == 13){
    		var category = document.getElementById("categoryDisplay");
    		categoryInputV = categoryInput.value;
    		category.innerHTML = "category: " + categoryInputV;
    		console.log(category.innerHTML);
    		categoryInput.value = "";
    		birthdayBoxC();
    	}
    }
}
function birthdayBoxC() {
	var birthdayDisplay = document.createElement("div");
	birthdayDisplay.innerHTML = "birthday: ";
	birthdayDisplay.setAttribute("id", "birthdayDisplay");
	document.getElementById("terminalContent").prepend(birthdayDisplay);
	var birthdayInput = document.createElement("input");
	birthdayInput.setAttribute("id", "birthdayInput");
	birthdayInput.type = "text";
	birthdayInput.style.all = "unset";
	document.getElementById("categoryInput").style.display = "none"; 			
	document.getElementById("terminal").append(birthdayInput);
	birthdayInput.focus();
	birthdayInput.onkeyup = function(e){
    	if(e.keyCode == 13){
    		var birthday = document.getElementById("birthdayDisplay");
    		birthdayInputV = birthdayInput.value;
    		birthday.innerHTML = "birthday: " + birthdayInputV;
    		console.log(birthday.innerHTML);
    		birthdayInput.value = "";
    		emailBoxC();
    	}
    }	
}
function emailBoxC() {
	var emailDisplay = document.createElement("div");
	emailDisplay.innerHTML = "email: ";
	emailDisplay.setAttribute("id", "emailDisplay");
	document.getElementById("terminalContent").prepend(emailDisplay);
	var emailInput = document.createElement("input");
	emailInput.setAttribute("id", "emailInput");
	emailInput.type = "text";
	emailInput.style.all = "unset";
	document.getElementById("birthdayInput").style.display = "none"; 			
	document.getElementById("terminal").append(emailInput);
	emailInput.focus();
	emailInput.onkeyup = function(e){
    	if(e.keyCode == 13){
    		var email = document.getElementById("emailDisplay");
    		emailInputV = emailInput.value;
    		email.innerHTML = "email: " + emailInputV;
    		console.log(email.innerHTML);
    		emailInput.value = "";
    		phoneBoxC();
    	}
    }	
}
function phoneBoxC() {
	var phoneDisplay = document.createElement("div");
	phoneDisplay.innerHTML = "phone: ";
	phoneDisplay.setAttribute("id", "phoneDisplay");
	document.getElementById("terminalContent").prepend(phoneDisplay);
	var phoneInput = document.createElement("input");
	phoneInput.setAttribute("id", "phoneInput");
	phoneInput.type = "text";
	phoneInput.style.all = "unset";
	document.getElementById("emailInput").style.display = "none"; 			
	document.getElementById("terminal").append(phoneInput);
	phoneInput.focus();
	phoneInput.onkeyup = function(e){
    	if(e.keyCode == 13){
    		var phone = document.getElementById("phoneDisplay");
    		phoneInputV = phoneInput.value;
    		phone.innerHTML = "phone: " + phoneInputV;
    		console.log(phone.innerHTML);
    		phoneInput.value = "";
    		addressBoxC();
    	}
    }	
}
function addressBoxC() {
	var addressDisplay = document.createElement("div");
	addressDisplay.innerHTML = "address: ";
	addressDisplay.setAttribute("id", "addressDisplay");
	document.getElementById("terminalContent").prepend(addressDisplay);
	var addressInput = document.createElement("input");
	addressInput.setAttribute("id", "addressInput");
	addressInput.type = "text";
	addressInput.style.all = "unset";
	document.getElementById("phoneInput").style.display = "none"; 			
	document.getElementById("terminal").append(addressInput);
	addressInput.focus();
	addressInput.onkeyup = function(e){
    	if(e.keyCode == 13){
    		var address = document.getElementById("addressDisplay");
    		addressInputV = addressInput.value;
    		address.innerHTML = "address: " + addressInputV;
    		console.log(address.innerHTML);
    		addressInput.value = "";
    		confirmNewContact();
    	}
    }	
}
function confirmNewContact() {
	var confirmDisplay = document.createElement("div");
	confirmDisplay.innerHTML = "is the above information correct? Y/N";
	confirmDisplay.setAttribute("id", "confirmDisplay");
	document.getElementById("terminalContent").prepend(confirmDisplay);
	var confirmInput = document.createElement("input");
	confirmInput.setAttribute("id", "confirmInput");
	confirmInput.type = "text";
	confirmInput.style.all = "unset";
	document.getElementById("addressInput").style.display = "none"; 			
	document.getElementById("terminal").append(confirmInput);
	confirmInput.focus();
	confirmInput.onkeyup = function(e){
    	if(e.keyCode == 13){
    		var confirm = document.getElementById("confirmDisplay");
    		confirmInputV = confirmInput.value;
    		if(confirmInputV == "Y") {
    			console.log("success");
    			confirmInput.value = "";
    			var nameSave = document.getElementById("nameDisplay").innerHTML;
    			nameSave = nameSave.replace("name: ","");
    			localStorage.setItem(nameSave + ".name", nameSave);
    			var categorySave = document.getElementById("categoryDisplay").innerHTML;
    			categorySave = categorySave.replace("category: ","");
    			localStorage.setItem(nameSave + ".category", categorySave);
    			var birthdaySave = document.getElementById("birthdayDisplay").innerHTML;
    			birthdaySave = birthdaySave.replace("birthday: ","");
    			localStorage.setItem(nameSave + ".birthday", birthdaySave);
    			var emailSave = document.getElementById("emailDisplay").innerHTML;
    			emailSave = emailSave.replace("email: ","");
    			localStorage.setItem(nameSave + ".email", emailSave);
    			var phoneSave = document.getElementById("phoneDisplay").innerHTML;
    			phoneSave = phoneSave.replace("phone: ","");
    			localStorage.setItem(nameSave + ".phone", phoneSave);
    			var addressSave = document.getElementById("addressDisplay").innerHTML;
    			addressSave = addressSave.replace("address: ","");
    			localStorage.setItem(nameSave + ".address", addressSave);
    			console.log(nameSave);
    			currentList = localStorage.getItem("contactList");
    			localStorage.setItem("contactList", currentList + "<br>+------------------------------------+<br>| " + nameSave + " " + phoneSave);
    			console.log(localStorage.getItem("contactList"));
    			confirmInput.value = "";
    			var exitNewContact = document.createElement("div");
    			exitNewContact.innerHTML = "contact saved. returning to PERSONAL CRM";
    			document.getElementById("terminalContent").prepend(exitNewContact)
    			confirmInput.remove(); 								   
    			document.getElementById("contactsInput").style.display = "inline"; 
    			document.getElementById("contactsInput").focus();

    		} else if(confirmInputV =="N") {
    			console.log("failure");
    			confirmInput.value = "";
    			var exitNewContact = document.createElement("div");
    			exitNewContact.innerHTML = "new contact aborted. returning to PERSONAL CRM";
    			document.getElementById("terminalContent").prepend(exitNewContact)
    			confirmInput.remove(); 								   
    			document.getElementById("contactsInput").style.display = "inline"; 
    			document.getElementById("contactsInput").focus();
    		} else {
    			var warning = document.createElement("div");
    			warning.innerHTML = "<span class='warning'>ERROR: enter Y for yes or N for no</span>";
    			document.getElementById("terminalContent").prepend(warning);
    			confirmInput.value = "";
    		}
    		//address.innerHTML = "address: " + addressInputV;
    		//console.log(address.innerHTML);
    		//confirmInput.value = "";
    	}
    }	
}

function lsC() {
	var listContacts = document.createElement("div")
	listContacts.innerHTML = localStorage.getItem("contactList");
	document.getElementById("terminalContent").prepend(listContacts);
	document.getElementById("contactsInput").value = "";
}

function infoC(crmArgs) {
	var shortArgs = crmArgs.replace(" ","");
	var listInfo = document.createElement("div");
	listInfo.innerHTML = "<br>" + crmArgs + "<br>+------------------------------------+<br>| NAME: " + localStorage.getItem(shortArgs + ".name") +   "<br>+---------\
		--------------------------+<br>| CATEGORY: " + localStorage.getItem(shortArgs + ".category") +  "<br>+------------------------------------+<br>| BIRTHDAY\
		: " + localStorage.getItem(shortArgs + ".birthday") +  "<br>+------------------------------------+<br>| EMAIL: " + localStorage.getItem(shortArgs + ".email") +  "<br>+-\
		----------------------------------+<br>| PHONE: " + localStorage.getItem(shortArgs + ".phone") +  "<br>+-------------------------\
		----------+<br>| ADDRESS: " + localStorage.getItem(shortArgs + ".address") + "<br>+------------------------------------+";
	document.getElementById("terminalContent").prepend(listInfo);
}