var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// this is the login function which, when provided with a valid username and password
// returns a JWT that can be used in all other API requests
function getJWT(username, pass){
	var xhr = new XMLHttpRequest();
	// async request to login. returns a jwt token
	xhr.open("POST", "https://iot.op-bit.nz/api/internal/login", true);
	//Send the proper header information along with the request
	xhr.setRequestHeader("Content-type", "application/json");
	// only global admins can login at the moment
	// create a new JSON object containing username and password
	var loginJSON = {
		"password" : pass,
		"username" : username
	}
	// turn it into a string. This will be used in the http body
	var loginString = JSON.stringify(loginJSON);
	xhr.onload = function (e) {
	  if (xhr.readyState === 4) {
		if (xhr.status === 200) {
		  onJWT(xhr.responseText);
		} else {
		  console.error(xhr.statusText);
		  console.log(xhr.responseText);
		}
	  }
	};
	xhr.onerror = function (e) {
	  console.error(xhr.statusText);
	};
	// add the login details to the body
	xhr.send(loginString);
} 
// secondary xml http request used after jwt token is received from server.
function onJWT(jwt){
  var xhr = new XMLHttpRequest();
// get all nodes from application 3
  xhr.open("GET", "https://iot.op-bit.nz/api/applications/4/nodes?limit=100", true);
	xhr.setRequestHeader("Grpc-Metadata-Authorization", JSON.parse(jwt).jwt);
  xhr.onload = function (e) {
    if (xhr.readyState === 4) {
	  // if everything is ok
      if (xhr.status === 200) {
        console.log(xhr.responseText);
	  // otherwise, print what went wrong
      } else {
        console.error(xhr.statusText);
	    	console.log(xhr.responseText);
      }
    }
  };
  xhr.onerror = function (e) {
    console.error(xhr.statusText);
  };
  xhr.send();
}
var username = process.argv[2];
var pass = process.argv[3];
var jwt = getJWT(username, pass);