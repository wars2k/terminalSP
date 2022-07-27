var input = document.getElementById("input");
var content = document.getElementById("terminalContent");
var path = "/";
var privatekey = "#"; //change this var to decide what must be included to denote a private directory

if (localStorage.getItem("password") == null) {
	localStorage.setItem("password", "admin");   
}
if (localStorage.getItem("/") == null) {
	localStorage.setItem("/", "<span class='directory'>default</span>");
}
if (localStorage.getItem("/default/") == null) {
	localStorage.setItem("/default/", "DEFAULT")
}
if (localStorage.getItem("theme") == null) {
	localStorage.setItem("theme", '<link rel="stylesheet" href="stylesheets/nord.css">');
}
//localStorage.clear();
//call this function to create a new entry + add it to the terminal
function createEntry() {
	var root = "root@terminal:$ ~ "
	var repeat = document.createElement("div");
	var inputValue = input.value;
	repeat.innerHTML = "<span  class='spandefault'>root@terminal" + path + ":$ ~</span> " + inputValue; 
	
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
			localStorage.setItem("theme", '<link rel="stylesheet" href="stylesheets/terminal.css">');
			break;
		case " light":
			localStorage.setItem("theme", '<link rel="stylesheet" href="stylesheets/light.css">');
			break;
		case " forest":
			localStorage.setItem("theme", '<link rel="stylesheet" href="stylesheets/forest.css">');
			break;
		case " ice":
			localStorage.setItem("theme", '<link rel="stylesheet" href="stylesheets/ice.css">');
			break;
		case " flower":
			localStorage.setItem("theme", '<link rel="stylesheet" href="stylesheets/flower.css">');
			break;
		case " gradient":
			localStorage.setItem("theme", '<link rel="stylesheet" href="stylesheets/gradient.css">');
			break;
		case " darkmodesoft":
			localStorage.setItem("theme", '<link rel="stylesheet" href="stylesheets/darkmodesoft.css">');
			break;
		case " nord":
			localStorage.setItem("theme", '<link rel="stylesheet" href="stylesheets/nord.css">');
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
		case " hello":
			line.innerText = args + ": returns a simple greeting.";
			break;
		case " clear":
			line.innerText = args + ": clears all content from the terminal.";
			break;
		case " date":
			line.innerText = args + ": returns the current date.";
			break; 
		case " help":
			line.innerText = args + ": returns a list of all available commands.";
			break;
		case " weather":
			line.innerText = args + ": returns the current weather for a given location.";
			break;
		case " google": 
			line.innerHTML = args + ": use 'google' + keywords to search something on google. <br> example: 'google how to use javascript'";
			break;
		case " reddit":
			line.innerText = args + ": use 'reddit' + keyword to search for a subreddit.";
			break;
		case " youtube":
			line.innerText = args + ": use 'youtube' + kekywords to search something on youtube.";
			break;
		case " googlemaps":
			line.innerText = args + ": use 'googlemaps' + keywords to search something on googlemaps.";
			break;
		case " spotify":
			line.innerText = args + ": use 'spotify' + keywords to search something on spotify.";
			break;
		case " twitch":
			line.innerText = args + ": use 'twitch' + keywords to search something on twitch."
			break;
		case " style":
			line.innerText = args + ": changes the style of a selected element.";
			break;
		case " theme":
			line.innerText = args + ": use 'theme' + 'themename' to change the terminal theme.";
			break;
		case " cd":
			line.innerText = args + ": changes the current directory.";
			break;
		case " ls":
			line.innerText = args + ": lists the contents of the current directory.";
			break;
		case " pwd":
			line.innerText = args + ": outputs the present working directory.";
			break;
		case " mkdir":
			line.innerText = args + ": makes a new directory.";
			break;
		case " rmdir":
			line.innerText = args + ": removes a directory.";
			break;
		case " mkpassword":
			line.innerText = args + ": makes a new password for private directories. can only be done when in a private directory.";
			break;
		case " make":
			line.innerText = args + ": use 'make <name> <link> to create a new bookmark.";
			break;
		case " go":
			line.innerText = args + ": use 'go <name>' to open a bookmark in a new tab.";
			break;
		case " rm":
			line.innerText = args + ": use 'rm <name>' to remove a bookmark.";
			break;
		case " inspect":
			line.innerText = args + ": use 'inspect <name>' to output the link associated with a bookmark.";
			break;
		default:
			line.innerHTML = "The following commands are available: <br> GENERAL <br> hello clear date help <br><br> SEARCHES <br> google reddit youtube googlemaps spotify twitch\
			<br><br> APPEARANCE <br> style theme <br><br> DIRECTORY <br> cd ls pwd mkdir rmdir mkpassword <br><br> BOOKMARKS/SHORTCUTS <br> make go rm inspect";
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
	document.getElementById("terminalContent").prepend(repeat);
	input.value = "";
	document.getElementById("terminalContent").prepend(line);
	if (args2.includes(privatekey)) { 											//password protected directories have the word defined by the privatekey variable in them. This can be changed. 
		if (localStorage.getItem(path).includes(args2)) {						//checks to make sure the directory actually exists.
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
        			path = path + args2 + "/";										       				//if so, move to the private directory.
             		passwordInputId.remove(); 								   //remove the password input
             		document.getElementById("input").style.display = "inline"; //replace it with the normal input
             		line.innerText = "correct password. entering " + path;
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

    }
	} else if (args2 =="" || args2 =="/") {
		path = "/";
	} else if (args2 =="../") { //this command is used to move back a directory. 
		var newPath = path.slice(0, -1); //removes first instance of "/"
		var newPath2 = newPath.substring(1); //removes last instance of "/"
		var newPath3 = newPath2.substring(0, newPath2.lastIndexOf("/") + 1); //splits at last instance of "/"
		path = "/" + newPath3;
	}else if (args2.includes("/") && path == "/" && localStorage.getItem(args2) != null ) {
		path = args2;	
	} else if (args2.includes("/") && localStorage.getItem(path).includes(args2)) {
		path = path + args2 + "/";
	} else if (localStorage.getItem(path).includes(args2)) {
		path = path + args2 + "/";
	} else {
		path = "/";
		line.innerHTML = "<span class='warning'>ERROR: directory not found. use mkdir to create new directory.</span>";
	}
	repeat.innerHTML = "<span  class='spandefault'>root@terminal" + path + ":$ ~</span> " + inputValue;
}




function pwd() {
	var line = document.createElement("div");
	createEntry();
	document.getElementById("terminalContent").prepend(line);
	line.innerText = path;

}
function ls() {
	var line = document.createElement("div");
	createEntry();
	document.getElementById("terminalContent").prepend(line);
	line.innerHTML = localStorage.getItem(path);
}

function make(args) {
	var line = document.createElement("div");
	var date = new Date();
	var hour = date.getHours();
	var min = date.getMinutes();
	var month = date.getMonth() + 1;
	var dateDay = date.getDate();
	var year = date.getFullYear();
	createEntry();
	document.getElementById("terminalContent").prepend(line);
	var name = args.split(" ")[1];  									//split the arguments into two pieces
	var link = args.split(" ")[2];
	localStorage.setItem(name, link); 
	localStorage.setItem(name + ".date", month + "/" + dateDay + "/" + year + " " + hour + ":" + min);									//set the local storage for the shortcut
	window.existing = localStorage.getItem(path) 						//declares a variable for the list of shortcuts in the current directory
	window.data = existing ? existing + "<br>" + name : name; 			//adds the newcly created shortcut to this directory's localstorage
	localStorage.setItem (path, data); 									//resets the local storage with the new content
	line.innerText = name + " added to list of bookmarks.";
}

function go(args) {
	var line = document.createElement("div");
	createEntry();
	document.getElementById("terminalContent").prepend(line);
	//window.open(localStorage.getItem(args), '_blank').focus();
	var name = args.split(" ")[1];
	name.replace(" ", "");
	if (localStorage.getItem(name) !== null && localStorage.getItem(path).includes(name)) {
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
	if(localStorage.getItem(path).includes("<br><span class='directory'>" + shortArgs + "</span>") || !localStorage.getItem(path).includes(shortArgs)) {
		line.innerHTML = "<span class='warning'>shortcut " + shortArgs + " not found.</span>";
	} else {
	localStorage.removeItem(shortArgs);
	line.innerText = "bookmark " + args + " removed.";
	existing = localStorage.getItem(path)
	substring1 = args.replace(" ","");
	substring = "<br>" + substring1;
	localStorage.setItem(path, existing.replace(substring,""));
}
}

function rmdir(args) {
	var line = document.createElement("div");
	createEntry();
	document.getElementById("terminalContent").prepend(line);
	shortArgs = args.replace(" ", "");
	if(shortArgs == "default") {
		line.innerHTML = "<span class='warning'>cannot delete default directory.</span>";
	}
	else if(localStorage.getItem(path).includes(shortArgs)) {
	localStorage.removeItem(path + shortArgs + "/");
	line.innerText = "directory " + args + " removed.";
	existing = localStorage.getItem(path);
	substring1 = args.replace(" ","");
	substring = "<br><span class='directory'>" + substring1 + "</span>";
	localStorage.setItem(path, existing.replace(substring,""));
	} else {
		line.innerHTML = "<span class='warning'>ERROR: directory " + shortArgs + " not found.";
	}
}


function mkdir(args) {
	var line = document.createElement("div");
	var date = new Date();
	var hour = date.getHours();
	var min = date.getMinutes();
	var month = date.getMonth() + 1;
	var dateDay = date.getDate();
	var year = date.getFullYear();
	createEntry();
	document.getElementById("terminalContent").prepend(line); 														
	args2 = args.replace(" ","");
	args3 = args2.toUpperCase();
	dirPath = path + args2 + "/";
	localStorage.setItem(dirPath, args3); 
	localStorage.setItem(dirPath + ".date", month + "/" + dateDay + "/" + year + " " + hour + ":" + min);					 
	window.existing = localStorage.getItem(path); 
	window.data = existing ? existing + "<br><span class='directory'>" + args2 + "</span>" : args2;
	localStorage.setItem (path, data); 										 
	line.innerText = args2 + " directory created.";	

}

function info() {
	var line = document.createElement("div");
	createEntry();
	document.getElementById("terminalContent").prepend(line);
	if (localStorage.getItem(path + ".date") == null)
	{
		line.innerHTML = "<span class='warning'>ERROR: no info found for " + path;
	} else {
		line.innerText = localStorage.getItem(path + ".date");
	}
}

function inspect(args) {
	var line = document.createElement("div");
	createEntry();
	document.getElementById("terminalContent").prepend(line);
	shortArgs = args.replace(" ","");
	line.innerHTML = "created at: " + localStorage.getItem(shortArgs + ".date") + "<br>" + shortArgs + " = " + localStorage.getItem(shortArgs);
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
function clearstorage() {
	localStorage.clear();
}


function weather(args) {
  	var key = config.MY_KEY;
  	createEntry();
  	shortArgs = args.replace(" ","");
  	shortArgs2 = args.replace(" ","");
  	fetch('https://api.openweathermap.org/data/2.5/weather?q=' + shortArgs2 + '&units=imperial' + '&appid=' + key)  
  	.then(function(resp) { return resp.json() }) // Convert data to json
  	.then(function(data) {
    drawWeather(data);
  })
  	.catch(function() {
    // catch any errors
  });
}

function drawWeather( d ) { 
	var description = document.createElement("div");
	var temperature = document.createElement("div");
	var location = document.createElement("div");
	var wind = document. createElement("div");
	//var icon = document.createElement("div");
	//document.getElementById("terminalContent").prepend(icon);
	document.getElementById("terminalContent").prepend(location);
	document.getElementById("terminalContent").prepend(description);
	document.getElementById("terminalContent").prepend(temperature);
	document.getElementById("terminalContent").prepend(wind);
	//icon.innerHTML = "<img src='http://openweathermap.org/img/wn/" + d.weather[0].icon + "@2x.png'>";
	description.innerHTML = d.weather[0].description;
	temperature.innerHTML = "feels like " + d.main.feels_like + '&deg;' ;
	location.innerHTML = d.name + " " + d.main.temp + '&deg;';
	wind.innerHTML = "wind: " + d.wind.speed + " mph";
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
