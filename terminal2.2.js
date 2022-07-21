var input = document.getElementById("input");
var content = document.getElementById("terminalContent");
var path = "/";
var privatekey = "#"; //change this var to decide what must be included to denote a private directory
var shortPath = path.split("/");      
var shortPathValue = shortPath.pop()

if (localStorage.getItem("password") == null) {
	localStorage.setItem("password", "admin");   
}
if (localStorage.getItem("/") == null) {
	localStorage.setItem("/", "<span class='directory'>default</span>");
}
if (localStorage.getItem("default") == null) {
	localStorage.setItem("default", "DEFAULT")
}
if (localStorage.getItem("theme") == null) {
	localStorage.setItem("theme", '<link rel="stylesheet" href="nord.css">');
}
//localStorage.clear();
//call this function to create a new entry + add it to the terminal
function createEntry() {
	var root = "root@terminal:$ ~ "
	var repeat = document.createElement("div");
	var inputValue = input.value;
	if (path == "/") {
	repeat.innerHTML = "<span  class='spandefault'>root@terminal" + path + ":$ ~</span> " + inputValue; 
	} else {
		repeat.innerHTML = "<span  class='spandefault'>root@terminal/" + path + ":$ ~</span> " + inputValue; 
	}
	document.getElementById("terminalContent").prepend(repeat);
	input.value = "";
}


//test function used to say hello to the terminal.
function hello() {
	var line = document.createElement("div");
	createEntry();
	document.getElementById("terminalContent").prepend(line);
	line.innerText = "hello friend";
}


//clears all content from the terminalContent div. 
function clear() {
	content.innerHTML = "";
	input.value = "";
}


//initiates a google search. Add arguments to the input to search for something specific
g = google
function google(args) {
	var line = document.createElement("div");
	createEntry();
	document.getElementById("terminalContent").prepend(line);
	var search = args.replace(" ", "+");
	line.innerText = "redirecting to https://google.com";
	window.open("https://google.com/search?q=" + search, '_blank').focus();
}


r = reddit
function reddit(args) {
	var line = document.createElement("div");
	createEntry();
	document.getElementById("terminalContent").prepend(line);
	var search = args.replace(" ", "");
	line.innerText = "redirecting to https://reddit.com/r/" + search;
	window.open("https://reddit.com/r/" + search, '_blank').focus();
}


yt = youtube
function youtube(args) {
	var line = document.createElement("div");
	createEntry();
	document.getElementById("terminalContent").prepend(line);
	var search = args.replace(" ", "+");
	line.innerText = "redirecting to youtube";
	window.open("https://www.youtube.com/results?search_query=" + search, '_blank').focus();
}

gm = googlemaps
function googlemaps(args) {
	var line = document.createElement("div");
	createEntry();
	document.getElementById("terminalContent").prepend(line);
	var search = args.replace(" ", "+");
	line.innerText = "redirecting to google maps";
	window.open("https://www.google.com/maps/place/" + search, '_blank').focus();
}


function spotify(args) {
	var line = document.createElement("div");
	createEntry();
	document.getElementById("terminalContent").prepend(line);
	var search = args.replace(" ", "%20");
	line.innerText = "opening spotify";
	window.open("https://open.spotify.com/search/" + search, '_blank').focus();
}

function twitch(args) {
	var line = document.createElement("div");
	createEntry();
	document.getElementById("terminalContent").prepend(line);
	var search = args.replace(" ", "");
	line.innerText = "opening twitch";
	window.open("https://www.twitch.tv/" + search, '_blank').focus();
}


//allows user to change any style tied to an ID from within the terminal
function style(args) {
	var line = document.createElement("div");
	createEntry();
	document.getElementById("terminalContent").prepend(line);
	var part = args.split(" ")[1];
	var feature = args.split(" ")[2];
	var change = args.split(" ")[3];
	line.innerText = "style: " + part + " " + feature + " changed to " + change;
	document.getElementById(part).style[feature] = change;
}

//allows user to change themes. This will last across sessions thanks to local storage.
function theme(args) {
	var line = document.createElement("div");
	createEntry();
	document.getElementById("terminalContent").prepend(line);
	if(args == " default" || args == " light" || args == " forest" || args ==" ice" || args == " flower" || args == " darkmodesoft" || args == " gradient" || args == " nord") {
	line.innerText = "theme changed to" + args;
} else {
	line.innerHTML = "<span class='warning'>ERROR: theme" + args + " not found.</span>"
}
	switch(args) {
		case " default":
			localStorage.setItem("theme", '<link rel="stylesheet" href="terminal.css">');
			break;
		case " light":
			localStorage.setItem("theme", '<link rel="stylesheet" href="light.css">');
			break;
		case " forest":
			localStorage.setItem("theme", '<link rel="stylesheet" href="forest.css">');
			break;
		case " ice":
			localStorage.setItem("theme", '<link rel="stylesheet" href="ice.css">');
			break;
		case " flower":
			localStorage.setItem("theme", '<link rel="stylesheet" href="flower.css">');
			break;
		case " gradient":
			localStorage.setItem("theme", '<link rel="stylesheet" href="gradient.css">');
			break;
		case " darkmodesoft":
			localStorage.setItem("theme", '<link rel="stylesheet" href="darkmodesoft.css">');
			break;
		case " nord":
			localStorage.setItem("theme", '<link rel="stylesheet" href="nord.css">');
	}
	document.getElementById("head").innerHTML = localStorage.getItem("theme");
}

document.getElementById("head").innerHTML = localStorage.getItem("theme");
	



//outputs the current date
function date() {
	var line = document.createElement("div");
	createEntry();
	document.getElementById("terminalContent").prepend(line);
	var currentdate = new Date();
	line.innerText = (currentdate.getMonth()+1) + "/" +  currentdate.getDate() + "/" + currentdate.getFullYear();
}


//outputs what each command does.
function help(args) {
	var line = document.createElement("div");
	var repeat = document.createElement("div");
	var inputValue = input.value;
	switch(args) {
		case " google": 
			line.innerHTML = args + ": use 'google' + keywords to search something on google. <br> example: 'google how to use javascript'";
			break;
		case " hello":
			line.innerText = args + ": returns a simple greeting.";
			break;
		case " clear":
			line.innerText = args + ": clears all content from the terminal.";
			break; 
		case " style":
			line.innerText = args + ": changes the style of a selected element.";
			break;
		default:
			line.innerHTML = "The following commands are available: <br> hello <br> clear <br> date <br> help <br> google <br> reddit <br> youtube <br> googlemaps <br> spotify <br> style <br> theme <br> cd <br> ls <br> pwd <br> make <br> go <br> rm <br> inspect";
			break;
	}
	repeat.innerHTML = "<span class='spandefault'>root@terminal:$ ~</span> " + inputValue;
	document.getElementById("terminalContent").prepend(repeat);
	document.getElementById("terminalContent").prepend(line);
	input.value = "";
}


//directory structure section
function cd(args) {
	var line = document.createElement("div");
	var root = "root@terminal:$ ~ "
	var repeat = document.createElement("div");
	var inputValue = input.value;
	var args2 = args.replace(" ","");
	var shortPath = path.split("/");      
	var shortPathValue = shortPath.pop();
	document.getElementById("terminalContent").prepend(repeat);
	input.value = "";
	document.getElementById("terminalContent").prepend(line);
	if (args2.includes(privatekey)) { 											//password protected directories have the word defined by the privatekey variable in them. This can be changed. 
		if (localStorage.getItem(shortPathValue || "/").includes(args2)) {						//checks to make sure the directory actually exists.
		//path = "password";
			line.innerText = "enter password";
			var passwordInput = document.createElement("input"); 				//create password input div
			passwordInput.setAttribute("id", "passwordInput");
			passwordInput.type = "password";
			passwordInput.style.all = "unset";		
			document.getElementById("input").style.display = "none"; 			//make the normal input disappear
			document.getElementById("terminal").append(passwordInput); 			//put the password input in its place
			passwordInput.focus();
			var passwordInputId = document.getElementById("passwordInput");
			passwordInputId.onkeyup = function(e){
    		if(e.keyCode == 13){
    				
    			var confirmPassword = localStorage.getItem("password");	       //this retrieves the password from local storage
        		var password = document.getElementById("passwordInput").value; //value of the password input after you hit enter
        		if (password == confirmPassword) {  						   //checks if password input is equal to the password
        			if(path == "/") {
        			path = args2;
        			} else {							   
             		path = path + "/" + args2;
             		} 										       				//if so, move to the private directory.
             		passwordInputId.remove(); 								   //remove the password input
             		document.getElementById("input").style.display = "inline"; //replace it with the normal input
             		line.innerText = "correct password. entering /" + path;
             		document.getElementById("input").focus();
        		}
        		else{
            	path = "/";
            	passwordInputId.remove();
             	document.getElementById("input").style.display = "inline";
            	line.innerText = "incorrect password. returning to /";
            	document.getElementById("input").focus();
        		}
        	}
        //repeat.innerHTML = "<span  class='spandefault'>root@terminal/" + path + ":$ ~</span> " + inputValue;
        }
        repeat.innerHTML = "<span  class='spandefault'>root@terminal/" + path + ":$ ~</span> " + inputValue;
    } else {
    	repeat.innerHTML = "<span  class='spandefault'>root@terminal/" + path + ":$ ~</span> " + inputValue;
    	line.innerHTML = "<span class='warning'>ERROR: directory not found. use mkdir to create new directory.</span>"; //if the private directory doesn't exist, say that.
    }
	} else if (args2 =="") {
		path = "/";
		repeat.innerHTML = "<span  class='spandefault'>root@terminal" + path + ":$ ~</span> " + inputValue;
	} else if (args2.includes("/") && path == "/" ) {
		path = args2
		alert(path);
		repeat.innerHTML = "<span  class='spandefault'>root@terminal/" + path + ":$ ~</span> " + inputValue;
		
	} else if (args2.includes("/") && localStorage.getItem(shortPathValue).includes(args2)) {
		path = path + "/" + args2
		repeat.innerHTML = "<span  class='spandefault'>root@terminal/" + path + ":$ ~</span> " + inputValue;
	}
	else if (localStorage.getItem("/").includes(args2)) {
		path = args2;
		repeat.innerHTML = "<span  class='spandefault'>root@terminal/" + path + ":$ ~</span> " + inputValue;
	} else if (localStorage.getItem(shortPathValue).includes(args2) && !localStorage.getItem(args2).includes("https")) {
		path = path + "/" + args2	
		repeat.innerHTML = "<span  class='spandefault'>root@terminal/" + path + ":$ ~</span> " + inputValue;
	} else {
		path = "/"
		repeat.innerHTML = "<span  class='spandefault'>root@terminal" + path + ":$ ~</span> " + inputValue;
		line.innerHTML = "<span class='warning'>ERROR: directory not found. use mkdir to create new directory.</span>";
	}
	
}




function pwd() {
	var line = document.createElement("div");
	createEntry();
	document.getElementById("terminalContent").prepend(line);
	if(path === "/") {
	line.innerText = path;
} else {
	line.innerText = "/" + path;
}
}
function ls() {
	var line = document.createElement("div");
	createEntry();
	document.getElementById("terminalContent").prepend(line);
	var shortPath = path.split("/");      
	var shortPathValue = shortPath.pop();
	if (path == "/") {
		line.innerHTML = localStorage.getItem(path);
	} else if (path.includes("/")) {
		shortPath = path.split("/")[1];
		line.innerHTML = localStorage.getItem(shortPathValue); 
	} else {
		line.innerHTML = localStorage.getItem(shortPathValue); 
	}
}

function make(args) {
	
	if(path === "/") { 													//we need this if statement to filter out requests that happen in the root directory
		var line = document.createElement("div");
		createEntry();
		document.getElementById("terminalContent").prepend(line);
		line.innerHTML = "<span class='warning'>ERROR: cannot create bookmark in root directory.</span>";
	} else {
	var line = document.createElement("div");
	createEntry();
	document.getElementById("terminalContent").prepend(line);
	var name = args.split(" ")[1];  									//split the arguments into two pieces
	var link = args.split(" ")[2];
	localStorage.setItem(name, link); 									//set the local storage for the shortcut
	var shortPath = path.split("/");      
	var shortPathValue = shortPath.pop();
	window.existing = localStorage.getItem(shortPathValue) 						//declares a variable for the list of shortcuts in the current directory
	window.data = existing ? existing + "<br>" + name : name; 			//adds the newcly created shortcut to this directory's localstorage
	localStorage.setItem (shortPathValue, data); 									//resets the local storage with the new content
	line.innerText = name + " added to list of bookmarks.";
}
}

function go(args) {
	var line = document.createElement("div");
	createEntry();
	document.getElementById("terminalContent").prepend(line);
	//window.open(localStorage.getItem(args), '_blank').focus();
	var name = args.split(" ")[1];
	name.replace(" ", "");
	var shortPath = path.split("/");      
	var shortPathValue = shortPath.pop();
	if (localStorage.getItem(name) !== null && localStorage.getItem(shortPathValue).includes(name)) {
	line.innerText = "redirecting to " + localStorage.getItem(name);
	window.open(localStorage.getItem(name), '_blank').focus();
		} else {
			line.innerHTML = "<span class='warning'>ERROR: shortcut " + name + " not found in " + path + "</span>";
		}
}

function rm(args) {
	var line = document.createElement("div");
	createEntry();
	document.getElementById("terminalContent").prepend(line);
	shortArgs = args.replace(" ", "");
	var shortPath = path.split("/");      
	var shortPathValue = shortPath.pop();
	if(localStorage.getItem("/").includes(shortArgs)) {
		line.innerHTML = "<span class='warning'>shortcut " + shortArgs + " not found.</span>";
	} else {
	localStorage.removeItem(shortArgs);
	line.innerText = "bookmark " + args + " removed.";
	existing = localStorage.getItem(shortPathValue)
	substring1 = args.replace(" ","");
	substring = "<br>" + substring1;
	localStorage.setItem(shortPathValue, existing.replace(substring,""));
}
}

function rmdir(args) {
	var line = document.createElement("div");
	createEntry();
	document.getElementById("terminalContent").prepend(line);
	shortArgs = args.replace(" ", "");
	var shortPath = path.split("/");      
	var shortPathValue = shortPath.pop();
	if(shortArgs == "default") {
		line.innerHTML = "<span class='warning'>cannot delete default directory.</span>";
	}
	else if(path == "/" && localStorage.getItem("/").includes(shortArgs)) {
	localStorage.removeItem(shortArgs);
	line.innerText = "directory " + args + " removed.";
	existing = localStorage.getItem("/");
	substring1 = args.replace(" ","");
	substring = "<br><span class='directory'>" + substring1 + "</span>";
	localStorage.setItem("/", existing.replace(substring,""));
	} else if (path != "/" && localStorage.getItem(shortPathValue).includes(shortArgs)) {
		localStorage.removeItem(shortArgs);
		line.innerText = "directory " + args + " removed.";
		existing = localStorage.getItem(shortPathValue);
		substring1 = args.replace(" ","");
		substring = "<br><span class='directory'>" + substring1 + "</span>";
		localStorage.setItem(shortPathValue, existing.replace(substring,""));
	
	} else {
		line.innerHTML = "<span class='warning'>ERROR: directory " + shortArgs + " not found.";
	}
}


function mkdir(args) {
	var line = document.createElement("div");
	createEntry();
	document.getElementById("terminalContent").prepend(line);
	if(path != "/") { 														 //first, we have to make sure that we are in / since that is the only place directories can be made
	args2 = args.replace(" ","");
	args3 = args2.toUpperCase();
	localStorage.setItem(args2, args3); 									 //sets the localstorage for the directory to the directory's name in upper case as a title. 
	//shortPath = path.split("/")[0];
	var shortPath = path.split("/");      
	var shortPathValue = shortPath.pop();
	
	window.existing = localStorage.getItem(shortPathValue); 
	window.data = existing ? existing + "<br><span class='directory'>" + args2 + "</span>" : args2;
	localStorage.setItem (shortPathValue, data); 										 //adds the new directory to the localstorage that holds all of the directories in /
	line.innerText = args2 + " directory created.";
	} else {
		args2 = args.replace(" ","");
		args3 = args2.toUpperCase();
		localStorage.setItem(args2, args3); 									 //sets the localstorage for the directory to the directory's name in upper case as a title. 
		//shortPath = path.split("/")[0];
		window.existing = localStorage.getItem(path); 
		window.data = existing ? existing + "<br><span class='directory'>" + args2 + "</span>" : args2;
		localStorage.setItem (path, data); 										 //adds the new directory to the localstorage that holds all of the directories in /
		line.innerText = args2 + " directory created.";
	}

	
}	

function inspect(args) {
	var line = document.createElement("div");
	createEntry();
	document.getElementById("terminalContent").prepend(line);
	shortArgs = args.replace(" ","");
	line.innerText = shortArgs + " = " + localStorage.getItem(shortArgs);
}

function mkpassword(args) {
	var line = document.createElement("div");
	createEntry();
	document.getElementById("terminalContent").prepend(line);
	if(path.includes(privatekey)) {
	shortArgs = args.replace(" ","");
	localStorage.setItem("password", shortArgs);
	line.innerHTML = "password successfully changeed."
} else {
	line.innerHTML = "<span class='warning'>password can only be changed from within a private directory.</span>"
}

}

function alertpath() {
	alert(path);
}
//runs a command/function when it is entered into the terminal
input.onkeyup = function(e){
    if(e.keyCode == 13){
    	var input = document.getElementById("input");
    	var inputValue = input.value;
    	var command = inputValue.split(" ")[0];
    	var args = inputValue.replace(command, "");
    	window[command](args);
    }
   }
