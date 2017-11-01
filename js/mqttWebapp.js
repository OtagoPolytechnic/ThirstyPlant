// Set a new client variable with info on the MQTT server
// Change the host to correct MQTT server
// Also, set the clientID to anything (at the moment it is myclientID + random number)
var client = new Messaging.Client("iot.op-bit.nz", 1884, "myclientid_" + parseInt(Math.random() * 100, 10));

// Gets called if the websocket/MQTT connection gets disconnected for any reason
client.onConnectionLost = function (responseObject) {
    //Depending on your scenario you could implement a reconnect logic here
    alert("Connection lost: " + responseObject.errorMessage);
};

// Gets called whenever you receive a message for your subscriptions
client.onMessageArrived = function (message) {
    //Do something with the push message you received
    console.log("Got a message, it arrived!");
    $('#messages').append('<span>Topic: ' + message.destinationName + '  | ' + message.payloadString + '</span><br/>');
};

// Options for the initial connection
var options = {
    timeout: 45,
    // Gets Called if the connection has sucessfully been established
    onSuccess: function () {
        alert("Connected");
    },
    // Gets Called if the connection could not be established
    onFailure: function (message) {
        alert("Connection failed: " + message.errorMessage);
    }
};