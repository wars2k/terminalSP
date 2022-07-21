var input = document.getElementById("input");
var content = document.getElementById("terminalContent");
var path = "";
const directories = [];
//call this function to create a new entry + add it to the terminal
function createEntry() {
	var root = "root@terminal:$ ~ "
	var repeat = document.createElement("div");
	var inputValue = input.value;
	repeat.innerHTML = "<span  class='spandefault'>root@terminal/" + path + ":$ ~</span> " + inputValue; 
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
	line.innerText = "theme changed to" + args;
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
	 
	document.getElementById("terminalContent").prepend(repeat);
	input.value = "";
	document.getElementById("terminalContent").prepend(line);
	switch(args) {
		case " school":
			path = "school";
			break;
		case " homelab":
			path = "homelab";
			break;
		case " work":
			path = "work";
			break;
		case " media":
			path = "media";
			break;
		case " bookmarks":
			path = "bookmarks";
			break;
		case " private":
			path = "password";
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
    			var confirmPassword = "admin"; 								   //this sets the password
        		var password = document.getElementById("passwordInput").value; //value of the password input after you hit enter
        		if (password == confirmPassword) { 							   //checks if password input is equal to the password
             		path = "private"; 										   //if so, move to the private directory.
             		passwordInputId.remove(); 								   //remove the password input
             		document.getElementById("input").style.display = "inline"; //replace it with the normal input
             		line.innerText = "correct password. entering /private";
             		document.getElementById("input").focus();
        		}
        		else{
            	path = "";
            	passwordInputId.remove();
             	document.getElementById("input").style.display = "inline";
            	line.innerText = "incorrect password. returning to /";
            	document.getElementById("input").focus();
        		}
        	}
        }
			break;
		default:
			path = "";
			break;
	}
	repeat.innerHTML = "<span  class='spandefault'>root@terminal/" + path + ":$ ~</span> " + inputValue;
}
function pwd() {
	var line = document.createElement("div");
	createEntry();
	document.getElementById("terminalContent").prepend(line);
	line.innerText = "/" + path;
}
function ls() {
	var line = document.createElement("div");
	createEntry();
	document.getElementById("terminalContent").prepend(line);
	switch(path) {
		case "":
			line.innerHTML = "DIRECTORIES <br> school <br> work <br> homelab <br> media <br> private <br> bookmarks";
			break;
		case "school":
			line.innerHTML = "SCHOOL BOOKMARKS <br> blackboard <br> student link <br> drive";
			break;
		case "work":
			line.innerHTML = "WORK BOOKMARKS <br> notion <br> wordcounter <br> uncovercolorado <br> invoice";
			break;
		case "homelab":
			line.innerHTML = "HOMELAB BOOKMARKS <br> proxmox <br> dokuwiki <br> openmediavaualt"
			break;
		case "media":
			line.innerHTML = "MEDIA BOOKMARKS <br> youtube <br> reddit"
			break;
		case "private":
			line.innerHTML = "PRIVATE BOOKMARKS <br>" + localStorage.getItem("private");;
			break;
		case "bookmarks":
			line.innerHTML = "GENERAL BOOKMARKS: <br>" + localStorage.getItem("bookmarks");

			break;
	}	
}

function make(args) {
	
	if(path === "") {
		var line = document.createElement("div");
		createEntry();
		document.getElementById("terminalContent").prepend(line);
		line.innerText = "cannot create bookmark in root directory.";
	} else {
	var line = document.createElement("div");
	createEntry();
	document.getElementById("terminalContent").prepend(line);
	var name = args.split(" ")[1];
	var link = args.split(" ")[2];
	localStorage.setItem(name, link);
	window.existing = localStorage.getItem(path)
	window.data = existing ? existing + "<br>" + name : name;
	localStorage.setItem (path, data);
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
	line.innerText = "redirecting to " + localStorage.getItem(name);
	window.open(localStorage.getItem(name), '_blank').focus();
}

function rm(args) {
	var line = document.createElement("div");
	createEntry();
	document.getElementById("terminalContent").prepend(line);
	shortArgs = args.replace(" ", "");
	localStorage.removeItem(shortArgs);
	line.innerText = "bookmark " + args + " removed.";
	existing = localStorage.getItem(path)
	substring1 = args.replace(" ","");
	substring = "<br>" + substring1;
	localStorage.setItem(path, existing.replace(substring,""));
}



function mkdir(args) {
	var line = document.createElement("div");
	createEntry();
	document.getElementById("terminalContent").prepend(line);
	var almostPath = args.replace(" ", "");
	localStorage.setItem(args, almostPath);
	directories.push(localStorage.getItem(args));
	line.innerText = "created " + args + " directory";
	alert(directories);
}

function inspect(args) {
	var line = document.createElement("div");
	createEntry();
	document.getElementById("terminalContent").prepend(line);
	shortArgs = args.replace(" ","");
	line.innerText = shortArgs + " = " + localStorage.getItem(shortArgs);
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
